-- Seed data: Messages
-- Descriptions are copied exactly as supplied. Transcript and audio_url are
-- left null until the transcript DOCX files and audio files are provided;
-- the site never invents transcript content and never shows an audio
-- player when no audio file exists.

insert into public.messages
  (title, part, slug, description, transcript, audio_url, message_date, featured, published)
values
  (
    'Peace Be Still',
    1,
    'peace-be-still-part-1',
    'Many times, when we face problems in our lives, our first response is to ask God to take them away. We cry, ‘Lord, give me peace. Lord, calm this storm.’ But what if, sometimes, the solution to the problem is not simply for God to remove the storm, but for us to examine our own lives?

Before we shout, ‘Peace, be still,’ we must first pause and ask, ‘Am I contributing to this storm?’ Not every storm is caused by our actions, but some problems may require us to look inward, take responsibility, make changes, and align ourselves with God’s will.

In this message, Fela Ishola draws a powerful comparison between the stories of Jonah and Jesus, two men connected to storms, yet in very different ways. Through these accounts, he brings valuable lessons from God’s Word about responsibility, obedience, disobedience, purpose, and the place of God in the storms of our lives.

Sometimes, the prayer is not simply, ‘God, calm the storm.’ Sometimes, the prayer must also be, ‘God, show me what I need to change.’',
    null,
    null,
    null,
    true,
    true
  ),
  (
    'Peace Be Still',
    2,
    'peace-be-still-part-2',
    'In the second part of this message, Fela Ishola takes us a step further by looking at another kind of storm, the storms that come at us even when we are not the cause of the problem. Sometimes, we have examined our lives, we have done nothing wrong, and yet we still find ourselves in situations we desperately want God to take away.

Through the story of Jesus and His disciples in the storm, this message brings valuable lessons from God’s Word on how to respond when the problem is beyond our control. What do we do when we have prayed, obeyed, and trusted God, yet the storm still comes? How do we maintain our faith when it seems like God is silent?

This part reminds us that not every storm is a consequence of our actions. Some storms are simply part of the journey. And even when the storm is raging, God remains present, faithful, and greater than whatever we may be facing.',
    null,
    null,
    null,
    true,
    true
  )
on conflict (slug) do update set
  description = excluded.description;
