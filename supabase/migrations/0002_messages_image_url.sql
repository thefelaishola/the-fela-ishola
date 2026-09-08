-- Add an image_url column to messages. Each message now supports a cover
-- image alongside its introduction and optional audio, since messages
-- carry no transcript text.

alter table public.messages
  add column if not exists image_url text;
