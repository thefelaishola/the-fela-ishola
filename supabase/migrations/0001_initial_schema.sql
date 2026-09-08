-- The Fela ishola: initial schema
-- Tables for daily_guides, messages, portfolio_projects, portfolio_images,
-- contact_submissions, with Row Level Security enabled on every table.

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------
-- daily_guides
-- ---------------------------------------------------------------------
create table if not exists public.daily_guides (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  guide_date date not null,
  bible_reading text not null,
  introduction text not null,
  daily_reflection text not null,
  daily_action text not null,
  prayer text not null,
  verse_to_remember text not null,
  verse_reference text not null,
  featured boolean not null default false,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists daily_guides_guide_date_idx
  on public.daily_guides (guide_date);

create index if not exists daily_guides_published_idx
  on public.daily_guides (published);

alter table public.daily_guides enable row level security;

create policy "Public can read published daily guides"
  on public.daily_guides for select
  using (published = true);

-- ---------------------------------------------------------------------
-- messages
-- ---------------------------------------------------------------------
create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  part integer,
  slug text not null unique,
  description text not null,
  transcript text,
  audio_url text,
  message_date date,
  featured boolean not null default false,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists messages_message_date_idx
  on public.messages (message_date);

create index if not exists messages_published_idx
  on public.messages (published);

alter table public.messages enable row level security;

create policy "Public can read published messages"
  on public.messages for select
  using (published = true);

-- ---------------------------------------------------------------------
-- portfolio_projects
-- ---------------------------------------------------------------------
create table if not exists public.portfolio_projects (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  industry text,
  category text not null,
  aspect_ratio text,
  image_count integer,
  cover_image text,
  folder text not null,
  featured boolean not null default false,
  published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists portfolio_projects_category_idx
  on public.portfolio_projects (category);

create index if not exists portfolio_projects_published_idx
  on public.portfolio_projects (published);

alter table public.portfolio_projects enable row level security;

create policy "Public can read published portfolio projects"
  on public.portfolio_projects for select
  using (published = true);

-- ---------------------------------------------------------------------
-- portfolio_images
-- ---------------------------------------------------------------------
create table if not exists public.portfolio_images (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.portfolio_projects (id) on delete cascade,
  image_url text not null,
  alt_text text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists portfolio_images_project_id_idx
  on public.portfolio_images (project_id);

alter table public.portfolio_images enable row level security;

create policy "Public can read portfolio images of published projects"
  on public.portfolio_images for select
  using (
    exists (
      select 1 from public.portfolio_projects p
      where p.id = portfolio_images.project_id
      and p.published = true
    )
  );

-- ---------------------------------------------------------------------
-- contact_submissions
-- ---------------------------------------------------------------------
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  inquiry_type text not null check (
    inquiry_type in (
      'Ministry Invitation',
      'Speaking Engagement',
      'Design Project',
      'General Inquiry'
    )
  ),
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;

-- Public users may submit the contact form (insert only). No public
-- select, update, or delete: submissions are private once sent.
create policy "Public can submit contact form"
  on public.contact_submissions for insert
  with check (true);

-- ---------------------------------------------------------------------
-- updated_at triggers
-- ---------------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger daily_guides_set_updated_at
  before update on public.daily_guides
  for each row execute function public.set_updated_at();

create trigger messages_set_updated_at
  before update on public.messages
  for each row execute function public.set_updated_at();

create trigger portfolio_projects_set_updated_at
  before update on public.portfolio_projects
  for each row execute function public.set_updated_at();
