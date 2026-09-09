-- Link the two message audio files and cover images, and correct the
-- title to "Be Still".

update public.messages
set title = 'Be Still',
    audio_url = '/audio/messages/be-still-part-1.mp3',
    image_url = '/images/messages/peace-be-still-1.png'
where slug = 'peace-be-still-part-1';

update public.messages
set title = 'Be Still',
    audio_url = '/audio/messages/be-still-part-2.mp3',
    image_url = '/images/messages/peace-be-still-2.png'
where slug = 'peace-be-still-part-2';
