-- Blog posts: public-facing writing from Fela, managed the same way as
-- Daily Guide and Messages (insert/edit directly in the Supabase Table
-- Editor, no admin UI needed on the site itself).

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null,
  content text not null,
  cover_image text,
  post_date date not null default current_date,
  featured boolean not null default false,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists blog_posts_post_date_idx
  on public.blog_posts (post_date);

create index if not exists blog_posts_published_idx
  on public.blog_posts (published);

alter table public.blog_posts enable row level security;

-- Same visibility rule as daily_guides: published and future-dated posts
-- stay hidden until their post_date arrives, so Fela can write ahead and
-- schedule a post without it going live early.
create policy "Public can read published blog posts"
  on public.blog_posts for select
  using (published = true);

create trigger blog_posts_set_updated_at
  before update on public.blog_posts
  for each row execute function public.set_updated_at();
