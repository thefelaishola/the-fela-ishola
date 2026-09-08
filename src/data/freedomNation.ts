import type { FreedomNationValue } from "@/types/content";

export const FREEDOM_NATION = {
  description:
    "Freedom Nation is a ministry passionate about God, His Word, and the transformation of lives. We are a community where people can encounter God, grow in truth, discover purpose, and learn to live lives of freedom and influence.",
  ministryStatement:
    "We are called of God for the liberation of the world through the preaching of God's Word, the working of God's power, and the application of God's wisdom.",
  vision:
    "A world where people live lives of freedom and influence, fueled by the working power of God's Word.",
  mission:
    "To teach every person the true Word of God until it finds expression in them, empowering them to boldly live the life of the Word.",
  meeting: {
    day: "Every Friday",
    time: "5:00 PM",
    location: "Ede, Osun State",
  },
} as const;

export const FREEDOM_NATION_VALUES: FreedomNationValue[] = [
  {
    name: "Surrender",
    description:
      "We yield ourselves completely to God, His will, and His Word.",
    scriptures: [
      "Romans 12:1",
      "Luke 9:23",
      "Zechariah 4:6",
      "Proverbs 3:5-6",
      "Galatians 2:20",
    ],
  },
  {
    name: "Obedience",
    description:
      "We respond to God's Word with action, not merely knowledge.",
    scriptures: [
      "John 14:15",
      "James 1:22",
      "1 Samuel 15:22",
      "Luke 11:28",
      "Deuteronomy 10:12-13",
    ],
  },
  {
    name: "Honour",
    description:
      "We honour God, His Word, His people, and the responsibilities entrusted to us.",
    scriptures: ["1 Samuel 2:30", "Romans 12:10", "1 Peter 2:17", "1 Timothy 5:17"],
  },
  {
    name: "Evangelism",
    description:
      "We make Christ known and call people into the freedom found in Him.",
    scriptures: [
      "Matthew 28:19-20",
      "Acts 1:8",
      "Mark 16:15",
      "Romans 1:16",
      "1 Corinthians 2:4-5",
      "2 Corinthians 5:20",
    ],
  },
  {
    name: "Discipleship",
    description:
      "We help people grow in the knowledge of God and become mature followers of Christ.",
    scriptures: [
      "Matthew 28:19-20",
      "Ephesians 4:11-13",
      "Colossians 1:28",
      "2 Timothy 2:2",
      "Acts 2:42",
    ],
  },
  {
    name: "Community",
    description:
      "We build a people who walk together in love, fellowship, accountability, and purpose.",
    scriptures: [
      "Acts 2:42-47",
      "Hebrews 10:24-25",
      "1 Corinthians 12:12-27",
      "Galatians 6:2",
      "John 13:34-35",
      "Ecclesiastes 4:9-10",
    ],
  },
  {
    name: "Impact",
    description:
      "We live beyond ourselves, allowing God's Word to produce visible transformation in people, communities, and nations.",
    scriptures: [
      "Matthew 5:13-16",
      "Matthew 28:19",
      "2 Corinthians 5:20",
      "Ephesians 2:10",
      "Daniel 11:32",
      "Isaiah 60:1-3",
      "2 Timothy 2:2",
    ],
  },
];
