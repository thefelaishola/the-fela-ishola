export type StoryCategory = "about-me" | "ministry" | "fegitals-digitals";

export interface Story {
  slug: string;
  title: string;
  category: StoryCategory;
  body: string;
  /** Stories that should sit visually lighter than the rest of a category. */
  secondary?: boolean;
}

export const STORY_CATEGORIES: { id: StoryCategory; label: string }[] = [
  { id: "about-me", label: "About Me" },
  { id: "ministry", label: "Ministry" },
  { id: "fegitals-digitals", label: "Fegitals Digitals" },
];

export const STORIES: Story[] = [
  {
    slug: "a-man-only-god-understands",
    title: "A Man Only God Understands",
    category: "about-me",
    body: `If you ask me who Fela Ishola is, I might struggle to give you a simple answer. Perhaps the simplest answer is this: I am a man only God understands, only God can help, and only God can use. There have been seasons of my life when I was confused, ignorant, uncertain about what I was doing or where I was going. There were things I did not understand about myself, life, and even the direction I was supposed to take. But somewhere along the way, God began to illuminate my life. He gave me purpose, brought meaning to things I could not understand, and gradually began to show me who I could become. I am still becoming, and perhaps that is one of the most honest ways to describe me.

I was born in Ile-Ife, Osun State, and spent most of my childhood there, living in three different communities. They were modest communities filled with modest people, people who seemed happy to simply live life. Looking back, there was something beautiful about that simplicity. My childhood was ordinary in many ways, but it was full of memories that I still carry with me. A typical school day meant waking up early, even when getting out of bed felt like the hardest task in the world. My parents made sure I got up and got moving, and somewhere along the way I developed an early love for punctuality. I liked getting to places early, and that habit followed me through school and into adulthood.

After school, I usually went home, although secondary school introduced a little more adventure. Sometimes I would play football, sometimes I would go looking for fruits to pluck before heading home. Then came assignments, sneaking out to play ball, returning home late, getting scolded, washing plates, fetching water and eventually settling down for family time. Nothing about it sounds extraordinary, but to me, it was an amazing time. It was a simple life, and I think some of that simplicity has remained with me.

One of the experiences that significantly changed the direction of my life was gaining admission to Obafemi Awolowo University International School. I went there to study, but I discovered something much bigger than books. For the first time, I found myself surrounded by a diversity of people, personalities, ideas and possibilities that opened my mind to the question of what I could actually do with my life.

I became fascinated by people and by possibility. I would walk around the school premises and find myself thinking about the amazing things a person could become and accomplish. In some ways, I became more interested in the possibilities that education exposed me to than the education itself. I was not always as interested in the classroom as I was in the world around me, yet I still graduated with very good grades. Looking back, I realise that experience taught me something important: sometimes education does more than teach you what is in a book. Sometimes it introduces you to the size of the world and makes you realise that your life can be bigger than what you previously imagined.`,
  },
  {
    slug: "a-curious-mind",
    title: "A Curious Mind",
    category: "about-me",
    body: `I am a very inquisitive person. I want to know. If something catches my attention, I want to understand it. I read, watch movies, travel, ask questions, observe people and explore ideas. A lot of what I do is driven by one simple question: What can I learn from this?

That curiosity has followed me through different seasons of my life. I enjoy Sudoku, studying the Bible, watching movies based on true stories, volunteering, designing and simply experiencing new things. I do not necessarily need everything I do to fit into a particular category. If there is something valuable to learn, an experience to gain, a skill to develop or a perspective to discover, I am interested.

I am also aware that I am not always easy to understand. I have often noticed that people do not necessarily understand me when they first meet me, and I think that is partly because I am an unusual combination of thoughts, interests, convictions and experiences. I describe myself as unbelievable, not because I think I am extraordinary in the conventional sense, but because I know there are many things about me that people may not immediately understand.

I also believe I can be a biased person. I do not necessarily see that as something to hide. I think knowing that you can be biased is important because it forces you to examine yourself, question your assumptions and avoid the hypocrisy of pretending to be completely objective when you are not. I would rather acknowledge my biases, continue learning and allow God to keep shaping me than pretend to have everything figured out.

Perhaps one of the things that defines me most is that I am still curious. I still ask questions. I still encounter things I do not understand. I still change my mind when I discover that I was wrong. I still find myself fascinated by people, ideas, technology, faith, creativity and the possibilities of what a human life can become.`,
  },
  {
    slug: "the-accountant",
    title: "The Accountant",
    category: "about-me",
    body: `Accounting was not originally my first choice. I actually wanted to study Psychology; in fact, I wanted to become an industrial psychologist. My parents, however, were concerned about how lucrative a course like that would be and insisted that I study Accounting. So I did, and accounting became another important chapter of my story.

Today, accounting is one of the professional worlds I occupy alongside design and ministry. On the surface, these may appear to be very different parts of one person's life, but I have never been particularly interested in fitting neatly into one box.

My life has taken me through different interests, experiences and responsibilities, and I have allowed each of them to become part of the person I am. Accounting taught me to appreciate structure, detail, discipline and the importance of getting things right. Design gave me a space to explore creativity and communicate ideas. Ministry gave me a deeper sense of calling and responsibility.

Perhaps that is why I have never been very comfortable with being described by only one title. I can be an accountant and still be deeply creative. I can be a designer and still be fascinated by structure and numbers. I can be a minister and still be curious about people, ideas, business, technology and the world around me.

I do not think every part of a person's life has to look the same for the life to make sense. Sometimes the different things we become are simply different expressions of the same person.`,
    secondary: true,
  },
  {
    slug: "what-i-want-to-leave-behind",
    title: "What I Want to Leave Behind",
    category: "about-me",
    body: `More than anything, I want my life to have an effect. Not necessarily a loud one and not necessarily one that everyone notices. I love simplicity, simple words, simple living, simple composure and simple work, but I want that simplicity to carry weight.

When someone meets me, reads something I have written, encounters my work, listens to me speak, attends a service, sees a design I have created or even spends one minute with me, I want them to leave with something.

Maybe they learned one thing. Maybe they saw something differently. Maybe something connected with their consciousness or subconsciousness. Maybe it is something they remember for years and eventually use. Maybe they only use it once, but that one use changes something.

I want people to remember the simplicity of my life, my words, my composure and my work, but more importantly, I want them to remember that they encountered something that was useful to them.

I do not merely want to be remembered. I want to leave something useful behind.

That is perhaps one of the simplest ways I can describe the kind of life I want to live. I want my presence to add something. I want my work to mean something. I want the things I create, teach, say and build to have a life beyond the moment in which they were created.

I do not need my name to be everywhere. I would rather have my life quietly produce something that continues to help people long after I am no longer present to explain it.`,
  },
  {
    slug: "still-becoming",
    title: "Still Becoming",
    category: "about-me",
    body: `There is still so much I want to do.

I am building Freedom Nation in Ede, believing that what began as a blueprint years ago can become a community that genuinely helps people understand God, discover purpose and become better. I am also building Fegitals Digitals with a vision of establishing centres in Osogbo, Ibadan and Lagos and eventually creating something much bigger across Africa.

At the same time, I continue to learn, ask questions, design, study, pray, explore and discover. I am still becoming, and I do not think that process will ever really stop.

If there is one thing I want people to understand about me, it is this: I love God so much. Everything else, the questions, the dreams, the work, the ministry, the creativity, the search for knowledge and even the things I do not yet understand, is part of a life I am allowing Him to shape.

I do not have every answer, and I do not pretend to. I have been confused. I have been ignorant. I have taken wrong turns and had moments when I did not know what came next. But through it all, I have seen God's grace, and I have seen Him bring light into places where I could not see clearly.

I am still becoming.

And perhaps the best way to introduce myself is still the simplest one:

I am Fela Ishola, a man only God understands, only God can help, and only God can use.`,
  },
  {
    slug: "a-life-shaped-by-god",
    title: "A Life Shaped by God",
    category: "ministry",
    body: `My story with God began early. I grew up in a family where faith was not something I could simply take for granted. My father was Buddhist and my mother was Christian, and as I grew up, I found myself exposed to different perspectives about God, faith and spirituality.

There was a slight tussle around whether I would become a Buddhist or a Christian, and somewhere in the middle of that journey I also came to understand and explore what Islam was about. I was curious, and I wanted to know. I wanted to understand what people believed, why they believed it and what it meant for their lives.

But through all the searching, questioning and exposure, I kept coming back to one thing: nothing was like the love and grace of God.

I gave my life to Jesus in 2008, although at the time I did not fully understand what that meant. I only knew that something had changed. I became more involved in church, read books, studied the Bible, learned and served.

Then, in 2015, something became different.

My relationship with God became much more serious and personal. Christianity stopped being simply something I had grown up around and became something I was discovering and experiencing for myself. Faith became personal. My desire to know God became deeper, and I began to understand that following Christ was not simply about belonging to a religion or attending a church. It was about knowing God, walking with Him and allowing Him to shape my life.`,
  },
  {
    slug: "the-call",
    title: "The Call",
    category: "ministry",
    body: `In 2016, while praying, I believe God spoke clearly to me about ministry, that I would lead a church and do ministry.

Even before that moment, I had experienced visions of myself preaching to people, and there had been people, including strangers, who had said similar things to me. But 2016 was different because it was the first time I heard it for myself.

That moment became one of the defining points of my journey.

I did not necessarily have everything figured out. I did not have a complete understanding of what the future would look like or how the calling would eventually unfold. But I knew that something had been placed in my heart, and I could not simply ignore it.

The years that followed became a period of learning, preparation, questioning, growth and development. The calling was bigger than simply standing in front of people. It was about understanding what God wanted to accomplish through my life and discovering how I could become useful to Him.

I have come to understand that a calling is not simply a title. It is a responsibility. It is an invitation to serve, to learn, to grow and to become available for what God wants to do.`,
  },
  {
    slug: "freedom-nation",
    title: "Freedom Nation",
    category: "ministry",
    body: `In 2018, the direction for what would eventually become Freedom Nation began to take shape.

God began giving me what I describe as the blueprint, the name, the purpose, the direction and the instructions. It was not simply an idea for starting another church. There was a vision behind it.

The vision was clear: we are called of God for the liberation of the world through the preaching of God's Word, the working of God's power, and the application of God's wisdom.

From 2018 through 2025, the blueprint continued to develop. There were things to learn, things to understand, things to prepare for and things that needed time. What had begun as something I carried within me gradually became something that I could see more clearly.

Then came 2026.

It was time to begin.

That beginning was in Ede, the city I believe God sent me to.

Freedom Nation is therefore not simply the result of a sudden decision to start a church. It is the expression of something that had been developing for years. The name, the vision, the purpose and the direction had been carried for a long time before becoming a visible ministry.

What began as a blueprint is now becoming a community.`,
  },
  {
    slug: "my-ministry",
    title: "My Ministry",
    category: "ministry",
    body: `Today, I serve as the Lead Minister of Freedom Nation, with a desire to teach God's Word truthfully, help people understand God better, and help them discover and fulfil the purpose for which they were created.

For me, ministry is more than standing before people and preaching. It is bringing people together, walking with people as individuals, helping people see God more clearly and become better, expressing love, and helping people discover purpose.

It is also about doing God's will in such a way that His Kingdom is established in people's lives and in the nations.

I want my ministry to be an expression of the truth of God's Word, the power of God and the wisdom that comes from applying that Word to everyday life.

I believe people need more than information. They need transformation. They need to understand what they believe, why they believe it and how that belief should shape the way they live.

That is part of what I want Freedom Nation to become: a place where people can encounter God, learn His Word, grow in their faith, discover purpose and become better equipped to live out that purpose.

The ministry is still young, and there is still much to build. But I believe deeply in what God has placed in my heart, and I am committed to following the process one step at a time.`,
  },
  {
    slug: "the-vision-ministry",
    title: "The Vision",
    category: "ministry",
    body: `At the heart of Freedom Nation is a desire to see people liberated.

Liberation, to me, is not limited to one area of human life. It includes freedom from ignorance, freedom from destructive patterns, freedom from misconceptions about God, freedom from purposelessness and freedom from anything that prevents a person from becoming what God has created them to be.

That is why the vision rests on three expressions: the preaching of God's Word, the working of God's power, and the application of God's wisdom.

God's Word gives truth. God's power demonstrates that He is living and active. God's wisdom teaches us how to apply truth to everyday life.

I want Freedom Nation to grow into a community that does not simply gather people but genuinely helps people.

A community where people can ask questions. A community where people can learn. A community where people can serve. A community where people can grow. A community where people can encounter the love of God and discover that their lives have purpose.

The journey has only begun.`,
  },
  {
    slug: "the-work-ministry",
    title: "The Work",
    category: "ministry",
    body: `Ministry, for me, is ultimately about people.

Every sermon, prayer, gathering, conversation, teaching, outreach and act of service should point back to people becoming better and knowing God more deeply.

I want to be available to people in different seasons of their lives, to teach, encourage, challenge, listen, pray and walk alongside them where possible.

I also want Freedom Nation to be a ministry that looks beyond the walls of a meeting place. The purpose is not simply to gather every Friday or conduct services. The purpose is to take what we learn and allow it to influence how we live, work, lead, serve and relate with others.

There is still much ahead.

But this is the beginning of the work God placed in my heart years ago, and I am grateful to finally be living it.`,
  },
  {
    slug: "the-boy-who-discovered-design",
    title: "The Boy Who Discovered Design",
    category: "fegitals-digitals",
    body: `Interestingly, another important part of my story began with something that had nothing to do with ministry.

In 2007, I followed my father to a cafe while he went to check his email. It was still the early days of desktop computers and the Internet becoming part of everyday life in Nigeria, and when I walked into that cafe and saw rows of computers, I was fascinated.

I went home and asked my dad to get us a computer.

He did.

From that moment, the computer had my attention.

Day and night, I was there, experimenting with whatever I could find. I started designing with Instant Artist, Microsoft Paint and Microsoft Publisher. I was not taking a design course, and I was not following some grand career plan. I was simply curious.

I wanted to know what I could make.

One of the earliest things I remember designing was a class door tag for my secondary school. It was simple, but there was something exciting about taking an idea in my head and turning it into something I could actually see.

That feeling never really left me.

What began as curiosity gradually became a skill. The tools changed. My understanding improved. My taste developed. I began to understand that design was not simply about making something look good. It was about communicating something clearly.

And over time, that curiosity became something much more serious.`,
  },
  {
    slug: "fegitals-digitals",
    title: "Fegitals Digitals",
    category: "fegitals-digitals",
    body: `Fegitals Digitals started in 2020, and it was my third attempt at commercialising my design skills.

But this time, my motivation was different.

It was not simply about making money. I wanted to help brands.

I wanted to help businesses communicate better through design, improve the way they present themselves, and access quality creative work without having to compromise their budgets.

What I love about design is the process of taking an idea from a client, understanding what they are trying to communicate, turning that idea into something that works, and then simplifying it until it becomes something the client loves and something that speaks their purpose.

There is something deeply satisfying about watching an idea become something people can actually see and interact with.

Then comes one of my favourite parts, seeing that idea leave the computer screen and become real, whether it is being used on social media, printed on a handbill, placed in a programme or displayed on a billboard.

That process reminds me why I started designing in the first place.

I like taking something that exists only as an idea and giving it form.`,
  },
  {
    slug: "why-i-design",
    title: "Why I Design",
    category: "fegitals-digitals",
    body: `For me, design is communication.

A logo communicates. A colour communicates. Typography communicates. A social media design communicates. A flyer communicates. Even the absence of certain elements can communicate something.

That is why I do not see design simply as decoration.

When a client comes to me, I want to understand what they are trying to say before I begin deciding how it should look. What is the purpose? Who needs to understand it? What should people feel? What should they remember? What action should the design encourage?

Those questions matter because good design should do more than occupy space.

It should serve a purpose.

I enjoy the process of simplifying ideas and finding the visual language that best communicates them. Sometimes the best design is the one that says exactly what needs to be said without trying too hard to say everything at once.

That is the kind of creative work I want to continue developing through Fegitals Digitals.`,
  },
  {
    slug: "the-vision-design",
    title: "The Vision",
    category: "fegitals-digitals",
    body: `My dream for Fegitals Digitals is much bigger than simply being a design business.

I want it to become Africa's biggest place for brands to come for design without compromise on value, quality, delivery or money.

I want businesses, churches, organizations and individuals to know that they can come to Fegitals Digitals with an idea and receive creative work that respects both their vision and their resources.

I want to build something that is accessible without becoming careless, affordable without becoming cheap, and professional without becoming disconnected from the realities of the people and businesses we serve.

The long-term vision is to establish centres in Osogbo, Ibadan and Lagos and eventually build something much bigger across Africa.

I know that vision will take time.

But I have learned that most meaningful things begin as ideas before they become visible realities.

That is how it happened with design for me.

And that is how I believe it can happen with Fegitals Digitals.`,
  },
  {
    slug: "the-work-design",
    title: "The Work",
    category: "fegitals-digitals",
    body: `Today, my work spans different forms of visual communication, from branding and identity design to social media graphics and other creative projects.

Every project is an opportunity to solve a communication problem.

I want people to look at the work and not only see something beautiful but understand something.

That is ultimately what I am trying to create: design with meaning.

Fegitals Digitals is still growing, and the vision is still unfolding. But every project, every client, every idea and every design is another part of the journey.

The boy who once sat in front of a computer experimenting with Microsoft Paint could not have known where that curiosity would eventually lead.

I am still finding out.

And I am still designing.`,
  },
];
