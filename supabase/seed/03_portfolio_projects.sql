-- Seed data: Portfolio projects
-- Metadata exactly as supplied (name, industry, category, image count,
-- aspect ratio). Year Completed is intentionally not tracked, per
-- instructions. cover_image and portfolio_images are left empty until
-- the actual project images are uploaded into public/portfolio/[folder]/
-- and referenced here or in Supabase Storage; the UI shows a graceful
-- "images on the way" state until then.

insert into public.portfolio_projects
  (name, slug, industry, category, aspect_ratio, image_count, cover_image, folder, featured, published, sort_order)
values
  ('Jwiss by Mijesty', 'jwiss-by-mijesty', 'Drinks', 'Social Media Design', '4:5', 12, null, 'jwiss-by-mijesty', true, true, 1),
  ('Best Promotions', 'best-promotions', 'Communications', 'Social Media Design', 'Square', 20, null, 'best-promotions', true, true, 2),
  ('Universal Climate Initiative', 'universal-climate-initiative', 'NGO', 'Social Media Design', 'Square', 20, null, 'universal-climate-initiative', false, true, 3),
  ('Trays n Dishes', 'trays-n-dishes', 'Food', 'Visual Branding', '4:5', 15, null, 'trays-n-dishes', true, true, 4),
  ('Various Clients', 'various-clients-logos', null, 'Logos', '4:5', 40, null, 'logos', false, true, 5),
  ('Zinny Aesthetics', 'zinny-aesthetics', 'Fashion', 'Eflyer', '4:5', 5, null, 'zinny-aesthetics', false, true, 6),
  ('Various Clients', 'various-clients-wedding-iv', 'Wedding', 'Wedding IV', 'A5', 4, null, 'wedding-invitations', false, true, 7),
  ('Oma''s Hairs Essentials', 'omas-hairs-essentials', 'Fashion / Hair', 'Packaging', '4:5', 20, null, 'omas-hairs-essentials', true, true, 8),
  ('Various Clients', 'various-clients-book-cover', null, 'Book Cover', 'A5', 12, null, 'book-covers', false, true, 9),
  ('Mummy Alaba', 'mummy-alaba', null, 'X Banner', '4:5', 5, null, 'mummy-alaba', false, true, 10)
on conflict (slug) do update set
  industry = excluded.industry,
  category = excluded.category,
  aspect_ratio = excluded.aspect_ratio,
  image_count = excluded.image_count;
