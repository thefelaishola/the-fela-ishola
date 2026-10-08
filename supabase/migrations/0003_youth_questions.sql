-- Youth questions: an anonymous-or-named inbox for questions and concerns
-- from young people. Insert-only from the public site, same pattern as
-- contact_submissions: nobody can read, change, or delete through the
-- public API. Fela reviews entries directly in the Supabase Table Editor.

create table if not exists public.youth_questions (
  id uuid primary key default gen_random_uuid(),
  is_anonymous boolean not null default false,
  name text,
  age integer check (age is null or (age >= 5 and age <= 100)),
  school_type text check (
    school_type is null or school_type in ('Secondary School', 'University', 'Other')
  ),
  state text,
  question text not null,
  created_at timestamptz not null default now()
);

create index if not exists youth_questions_created_at_idx
  on public.youth_questions (created_at desc);

alter table public.youth_questions enable row level security;

-- Public users may submit a question (insert only). No public select,
-- update, or delete: submissions are private once sent, same as the
-- contact form.
create policy "Public can submit youth questions"
  on public.youth_questions for insert
  with check (true);
