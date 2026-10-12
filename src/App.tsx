
import { useState } from 'react'
import './App.css'

import morningEveningImg from './assets/cards/morning-evening.webp'
import everydayMomentsImg from './assets/cards/everyday-moments.webp'
import peacefulSleepImg from './assets/cards/peaceful-sleep.webp'
import shortSurahsImg from './assets/cards/short-surahs.webp'
import quickDuasImg from './assets/cards/quick-duas.webp'
import memoryMirrorImg from './assets/cards/memory-mirror.webp'
import learningJourneyImg from './assets/cards/learning-journey.webp'


const translations = {
  en: {
    tagline: 'a little light, every day',
    space: 'YOUR SPACE',
    home: 'Home',
    learn: 'Learn & Practise',
    garden: 'Noor Garden',
    memory: 'Memory Mirror',
    myDay: 'My Day, My Duas',
    journey: 'My learning journey',
    growing: 'Growing at my own pace',
    sidebarMessage: 'Small steps, sincere intentions.',
    sidebarSubtext: 'Every lesson is a little light.',
    breadcrumb: 'YOUR PERSONAL LEARNING SPACE',
    growth: 'days of growth',
    eyebrow: 'YOUR JOURNEY, YOUR PACE',
    heroLine1: 'A little light',
    heroLine2: 'for',
    heroLine3: 'every day.',
    todayReminder: "TODAY'S LITTLE REMINDER",
    reminderTitle: 'Knowledge is a beautiful journey.',
    reminderCopy:
      "You don't have to learn everything today. Just begin with one small, meaningful step.",
    exploreEyebrow: 'EXPLORE AT YOUR OWN PACE',
    exploreTitle: 'What would you like to learn?',
    viewLessons: 'View all lessons',
    findLesson: 'Find a lesson...',
    noLessons: 'No lessons found. Try another search.',
    rememberEyebrow: 'A MOMENT TO REMEMBER',
    rememberTitle: 'Little words, lasting meaning.',
    practiseRecall: 'Practise recall',
    duaTag: 'DUA',
    reflect: 'Reflect on meaning',
    gardenEyebrow: 'YOUR GARDEN IS WAITING',
    gardenTitle: 'Every little thing you learn helps you grow.',
    gardenDescription:
      'Revisit a lesson, practise what you remember, and watch your garden bloom.',
    welcomeCopy:
      'Learn beautiful duas, understand their meanings, and carry a little more peace into your everyday moments.',
    continue: 'Continue your journey',
    calm: 'a moment of calm',
    reminder: 'A gentle reminder',
    lessonsHeading: 'A path of learning',
    lessonsSubheading: 'Small lessons, meaningful moments.',
    explore: 'Explore all lessons',
    duasHeading: 'Little duas, lasting light',
    duasSubheading: 'Keep these beautiful words close to your heart.',
    reveal: 'Reveal meaning',
    hide: 'Hide meaning',
    gardenHeading: 'Your Noor Garden',
    gardenCopy: 'Every lesson you complete helps your garden grow.',
    visitGarden: 'Visit your garden',
    footerMessage: 'Made with care for a more mindful everyday.',
    footerTagline: 'Learn gently · Grow sincerely',
    searchPlaceholder: 'Search lessons...',
    lessonsCount: 'lessons',
    startLearning: 'Start learning',
    backHome: 'Back to Home',
    practice: 'Practise what you remember',
    personalSpace: 'Your personal learning space',
    learnEyebrow: 'DISCOVER SOMETHING MEANINGFUL',
    learnTitle: 'Learn &',
    learnTitleEm: 'practise.',
    learnDescription:
      'Start with a small lesson. Read the transliteration, understand its meaning, and practise at your own pace.',
    revision: 'Marked for revision ✓',
    lessonHint:
      'Choose a lesson card to mark it for revision. Learning content will be expanded in the next step.',
    gardenPageEyebrow: 'GROW WITH EVERY LESSON',
    gardenPageTitle: 'Your Noor',
    gardenPageTitleEm: 'Garden.',
    gardenPageDescription:
      "Every time you complete a lesson, you nurture your garden. There's no rush; every small step counts.",
    lessonsNurtured: 'lessons nurtured',
    gardenProgress: 'Keep learning to grow your garden.',
    learnSomething: 'Learn something new',
    memoryEyebrow: 'GENTLE RECALL PRACTICE',
    memoryTitle: 'Memory',
    memoryTitleEm: 'Mirror.',
    memoryDescription:
      'Take a breath, try to remember, and reveal the words when you are ready. This is practice, not a test.',
    dailyPractice: 'A LITTLE DAILY PRACTICE',
    seekingKnowledge: 'Seeking knowledge',
    recallPrompt: 'Can you recall the words?',
    recallHint: 'Take a moment to remember before revealing.',
    hideAndRetry: 'Hide and try again',
    revealWords: 'Reveal the words',
    myDayEyebrow: 'MEANINGFUL EVERYDAY MOMENTS',
    myDayTitle: 'My day,',
    myDayTitleEm: 'my duas.',
    myDayDescription: 'Find a learning category for the moment you are in.',
    exploreMoments: 'Explore moments',
    profileEyebrow: 'YOUR PERSONAL SPACE',
    profileTitle: 'Your journey,',
    profileTitleEm: 'your pace.',
    profileDescription:
      'Your learning progress is saved on this device. Explore lessons, practise recall, and grow your garden.',
    backHomeButton: 'Back to home',
    backToLessons: 'Back to all lessons',
    markCompleted: 'Mark lesson completed',
    completedBadge: 'Completed ✓',
    lessonDuasTitle: 'Duas in this lesson',
    lessonHintActive: 'Select any lesson card to explore its duas and reflections.',
    clearSearch: 'Clear search',
    nextPractice: 'Next practice',
    prevPractice: 'Previous practice',
    practiceInMirror: 'Practise in Memory Mirror',
    journeySummary: 'Your Learning Progress',
    resetProgress: 'Reset progress',
    lessonsCompletedCount: 'lessons completed',
    singularGrowth: 'day of growth',
    practiceItem: 'Practice item',
    review: 'Review',
    start: 'Start',
  },

  bn: {
    tagline: 'প্রতিদিন একটু আলো',
    space: 'আপনার জগৎ',
    home: 'হোম',
    learn: 'শিখুন ও অনুশীলন করুন',
    garden: 'নূরের বাগান',
    memory: 'স্মৃতির আয়না',
    myDay: 'আমার দিন, আমার দোয়া',
    journey: 'আমার শেখার যাত্রা',
    growing: 'নিজের গতিতে এগিয়ে চলুন',
    sidebarMessage: 'ছোট পদক্ষেপ, আন্তরিক নিয়ত।',
    sidebarSubtext: 'প্রতিটি শিক্ষা একটুখানি আলো।',
    breadcrumb: 'আপনার ব্যক্তিগত শেখার জগৎ',
    growth: 'দিনের অগ্রগতি',
    eyebrow: 'আপনার যাত্রা, আপনার গতি',
    heroLine1: 'একটু আলো',
    heroLine2: 'থাকুক',
    heroLine3: 'প্রতিটি দিনে।',
    todayReminder: 'আজকের ছোট্ট স্মরণিকা',
    reminderTitle: 'জ্ঞান অর্জন একটি সুন্দর যাত্রা।',
    reminderCopy:
      'আজই সবকিছু শিখতে হবে না। অর্থপূর্ণ একটি ছোট পদক্ষেপ দিয়ে শুরু করুন।',
    exploreEyebrow: 'নিজের গতিতে শিখুন',
    exploreTitle: 'আপনি কী শিখতে চান?',
    viewLessons: 'সব পাঠ দেখুন',
    findLesson: 'পাঠ খুঁজুন...',
    noLessons: 'কোনো পাঠ পাওয়া যায়নি। অন্য শব্দ দিয়ে খুঁজুন।',
    rememberEyebrow: 'মনে রাখার একটি মুহূর্ত',
    rememberTitle: 'ছোট্ট কথা, গভীর অর্থ।',
    practiseRecall: 'মনে করার অনুশীলন',
    duaTag: 'দোয়া',
    reflect: 'অর্থ নিয়ে ভাবুন',
    gardenEyebrow: 'আপনার বাগান অপেক্ষায় আছে',
    gardenTitle: 'আপনার শেখা প্রতিটি বিষয় আপনাকে এগিয়ে নেয়।',
    gardenDescription:
      'পাঠ আবার দেখুন, যা শিখেছেন অনুশীলন করুন, আর নিজের বাগানকে প্রস্ফুটিত হতে দেখুন।',
    welcomeCopy:
      'সুন্দর দোয়া শিখুন, সেগুলোর অর্থ বুঝুন, আর প্রতিদিনের জীবনে একটু বেশি প্রশান্তি খুঁজে নিন।',
    continue: 'শেখা চালিয়ে যান',
    calm: 'একটু প্রশান্তির মুহূর্ত',
    reminder: 'একটি কোমল স্মরণিকা',
    lessonsHeading: 'শেখার পথে',
    lessonsSubheading: 'ছোট ছোট শিক্ষা, অর্থপূর্ণ মুহূর্ত।',
    explore: 'সব পাঠ দেখুন',
    duasHeading: 'ছোট দোয়া, স্থায়ী আলো',
    duasSubheading: 'সুন্দর কথাগুলো হৃদয়ের কাছে রাখুন।',
    reveal: 'অর্থ দেখুন',
    hide: 'অর্থ লুকান',
    gardenHeading: 'আপনার নূরের বাগান',
    gardenCopy: 'প্রতিটি সম্পন্ন পাঠ আপনার বাগানকে আরও সমৃদ্ধ করে।',
    visitGarden: 'বাগানে যান',
    footerMessage: 'প্রতিদিনকে আরও সচেতন করে তুলতে যত্নসহকারে তৈরি।',
    footerTagline: 'ধীরে শিখুন · আন্তরিকভাবে এগিয়ে চলুন',
    searchPlaceholder: 'পাঠ খুঁজুন...',
    lessonsCount: 'টি পাঠ',
    startLearning: 'শেখা শুরু করুন',
    backHome: 'হোমে ফিরে যান',
    practice: 'মনে থাকা বিষয় অনুশীলন করুন',
    personalSpace: 'আপনার ব্যক্তিগত শেখার জগৎ',
    learnEyebrow: 'অর্থপূর্ণ কিছু শিখুন',
    learnTitle: 'শিখুন ও',
    learnTitleEm: 'অনুশীলন করুন।',
    learnDescription:
      'ছোট একটি পাঠ দিয়ে শুরু করুন। উচ্চারণ পড়ুন, অর্থ বুঝুন এবং নিজের গতিতে অনুশীলন করুন।',
    revision: 'পুনরাবৃত্তির জন্য চিহ্নিত ✓',
    lessonHint:
      'পুনরাবৃত্তির জন্য কোনো পাঠ নির্বাচন করুন। পরবর্তী ধাপে আরও শেখার বিষয় যোগ করা হবে।',
    gardenPageEyebrow: 'প্রতিটি পাঠে বেড়ে উঠুন',
    gardenPageTitle: 'আপনার নূরের',
    gardenPageTitleEm: 'বাগান।',
    gardenPageDescription:
      'প্রতিটি পাঠ সম্পন্ন করার মাধ্যমে আপনার বাগানের যত্ন নেন। তাড়াহুড়োর প্রয়োজন নেই; প্রতিটি ছোট পদক্ষেপই গুরুত্বপূর্ণ।',
    lessonsNurtured: 'টি পাঠের যত্ন নেওয়া হয়েছে',
    gardenProgress: 'বাগানকে সমৃদ্ধ করতে শিখতে থাকুন।',
    learnSomething: 'নতুন কিছু শিখুন',
    memoryEyebrow: 'মনে করার কোমল অনুশীলন',
    memoryTitle: 'স্মৃতির',
    memoryTitleEm: 'আয়না।',
    memoryDescription:
      'একটু থামুন, মনে করার চেষ্টা করুন এবং প্রস্তুত হলে শব্দগুলো দেখুন। এটি অনুশীলন, পরীক্ষা নয়।',
    dailyPractice: 'প্রতিদিনের ছোট্ট অনুশীলন',
    seekingKnowledge: 'জ্ঞান অর্জনের দোয়া',
    recallPrompt: 'কথাগুলো কি মনে করতে পারছেন?',
    recallHint: 'দেখার আগে একটু সময় নিয়ে মনে করার চেষ্টা করুন।',
    hideAndRetry: 'লুকিয়ে আবার চেষ্টা করুন',
    revealWords: 'শব্দগুলো দেখুন',
    myDayEyebrow: 'দৈনন্দিন জীবনের অর্থপূর্ণ মুহূর্ত',
    myDayTitle: 'আমার দিন,',
    myDayTitleEm: 'আমার দোয়া।',
    myDayDescription: 'আপনার বর্তমান মুহূর্তের জন্য একটি শেখার বিভাগ বেছে নিন।',
    exploreMoments: 'মুহূর্তগুলো দেখুন',
    profileEyebrow: 'আপনার ব্যক্তিগত জগৎ',
    profileTitle: 'আপনার যাত্রা,',
    profileTitleEm: 'আপনার গতি।',
    profileDescription:
      'আপনার শেখার অগ্রগতি আপনার ব্রাউজারে সংরক্ষিত থাকে। পাঠগুলো ঘুরে দেখুন, অনুশীলন করুন এবং আপনার বাগানকে বড় করে তুলুন।',
    backHomeButton: 'হোমে ফিরে যান',
    backToLessons: 'সব পাঠে ফিরে যান',
    markCompleted: 'পাঠ সম্পন্ন হিসেবে চিহ্নিত করুন',
    completedBadge: 'সম্পন্ন হয়েছে ✓',
    lessonDuasTitle: 'এই পাঠের দোয়াগুলো',
    lessonHintActive: 'দোয়া ও ভাবার্থ পড়তে যেকোনো পাঠ নির্বাচন করুন।',
    clearSearch: 'অনুসন্ধান মুছুন',
    nextPractice: 'পরবর্তী অনুশীলন',
    prevPractice: 'পূর্ববর্তী অনুশীলন',
    practiceInMirror: 'স্মৃতির আয়নায় অনুশীলন করুন',
    journeySummary: 'আপনার শেখার অগ্রগতি',
    resetProgress: 'অগ্রগতি রিসেট করুন',
    lessonsCompletedCount: 'টি পাঠ সম্পন্ন',
    singularGrowth: 'দিনের অগ্রগতি',
    practiceItem: 'অনুশীলন',
    review: 'পুনর্বিবেচনা',
    start: 'শুরু করুন',
  },
} as const

interface LessonDua {
  title: string
  titleBn: string
  text: string
  meaning: string
  bn: string
}

interface Lesson {
  number: string
  title: string
  bn: string
  icon: string
  count: string
  color: string
  image: string
  duas: LessonDua[]
}

const lessons: Lesson[] = [
  {
    number: '01',
    title: 'Morning & Evening',
    bn: 'সকাল ও সন্ধ্যার দোয়া',
    icon: '☀️',
    count: '8 lessons',
    color: 'peach',
    image: morningEveningImg,
    duas: [
      {
        title: 'Waking up with gratitude',
        titleBn: 'ঘুম থেকে ওঠার দোয়া',
        text: "Alhamdu lillahil-ladhi ahyana ba'da ma amatana wa ilayhin-nushur",
        meaning:
          'All praise is for Allah who gave us life after having taken it from us, and unto Him is the resurrection.',
        bn: 'সমস্ত প্রশংসা আল্লাহর, যিনি আমাদের মৃত্যুর পর জীবন দান করেছেন এবং তাঁর কাছেই প্রত্যাবর্তন।',
      },
      {
        title: 'Morning protection',
        titleBn: 'সকালের সুরক্ষার দোয়া',
        text: "Bismillahil-ladhi la yadurru ma'as-mihi shay'un fil-ardi wa la fis-sama'i wa Huwas-Sami'ul-'Alim",
        meaning:
          'In the Name of Allah with Whose Name nothing can cause harm in the earth nor in the heavens, and He is the All-Hearing, the All-Knowing.',
        bn: 'আল্লাহর নামে, যাঁর নামের সাথে আসমান ও জমিনের কোনো কিছুই ক্ষতি করতে পারে না, এবং তিনি সর্বশ্রোতা, সর্বজ্ঞানী।',
      },
    ],
  },
  {
    number: '02',
    title: 'Everyday Moments',
    bn: 'প্রতিদিনের জীবনের দোয়া',
    icon: '🌿',
    count: '12 lessons',
    color: 'sage',
    image: everydayMomentsImg,
    duas: [
      {
        title: 'Before eating',
        titleBn: 'খাবারের শুরুতে দোয়া',
        text: "Bismillahi wa 'ala barakatillah",
        meaning: 'In the name of Allah and with the blessings of Allah.',
        bn: 'আল্লাহর নামে এবং আল্লাহর বরকতের উপর শুরু করছি।',
      },
      {
        title: 'After eating',
        titleBn: 'খাবার শেষের দোয়া',
        text: "Alhamdulillahil-ladhi at'amana wa saqana wa ja'alana minal-muslimin",
        meaning:
          'Praise be to Allah who has fed us and given us drink and made us Muslims.',
        bn: 'সমস্ত প্রশংসা আল্লাহর, যিনি আমাদের আহার করিয়েছেন, পান করিয়েছেন এবং মুসলিম বানিয়েছেন।',
      },
    ],
  },
  {
    number: '03',
    title: 'Peaceful Sleep',
    bn: 'ঘুমানোর আগের দোয়া',
    icon: '🌙',
    count: '6 lessons',
    color: 'lavender',
    image: peacefulSleepImg,
    duas: [
      {
        title: 'Before going to sleep',
        titleBn: 'ঘুমানোর সময় দোয়া',
        text: 'Bismika Allahumma amutu wa ahya',
        meaning: 'In Your Name, O Allah, I die and I live.',
        bn: 'হে আল্লাহ, আপনারই নামে আমি মারা যাই এবং জীবিত হই।',
      },
      {
        title: 'Resting in peace',
        titleBn: 'শান্তিময় ঘুমের স্মরণিকা',
        text: "Allahumma qini 'adhabaka yawma tab'athu 'ibadak",
        meaning:
          'O Allah, protect me from Your punishment on the day You resurrect Your servants.',
        bn: 'হে আল্লাহ, আমাকে আপনার শাস্তি থেকে রক্ষা করুন যেদিন আপনি আপনার বান্দাদের পুনরুত্থিত করবেন।',
      },
    ],
  },
  {
    number: '04',
    title: 'Short Surahs',
    bn: 'ছোট সূরা শেখা',
    icon: '📖',
    count: '12 lessons',
    color: 'butter',
    image: shortSurahsImg,
    duas: [
      {
        title: 'Surah Al-Ikhlas (Purity of Faith)',
        titleBn: 'সূরা আল-ইখলাস',
        text: 'Qul huwa Allahu ahad. Allahus-samad. Lam yalid wa lam yulad. Wa lam yakun lahu kufuwan ahad.',
        meaning:
          'Say: He is Allah, the One. Allah the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent.',
        bn: 'বলুন, তিনিই আল্লাহ, একক। আল্লাহ অমুখাপেক্ষী। তিনি কাউকে জন্ম দেননি এবং কারো থেকে জন্ম নেননি। এবং তাঁর সমকক্ষ কেউ নেই।',
      },
      {
        title: 'Surah Al-Kawthar (Abundance)',
        titleBn: 'সূরা আল-কাউসার',
        text: 'Inna a’taynakal-kawthar. Fa salli li rabbika wanhar. Inna shani’aka huwal-abtar.',
        meaning:
          'Indeed, We have granted you abundance. So pray to your Lord and sacrifice. Indeed, your enemy is the one cut off.',
        bn: 'নিশ্চয়ই আমরা আপনাকে কাওসার দান করেছি। অতএব আপনার রবের উদ্দেশ্যে নামাজ পড়ুন এবং কুরবানি করুন।',
      },
    ],
  },
]

const quickDuas = [
  {
    title: 'Seeking knowledge',
    titleBn: 'জ্ঞান অর্জনের দোয়া',
    text: 'Rabbi zidni ilma',
    meaning: 'My Lord, increase me in knowledge.',
    bn: 'হে আমার রব, আমার জ্ঞান বৃদ্ধি করুন।',
    image: quickDuasImg,
  },
  {
    title: 'For our parents',
    titleBn: 'মা-বাবার জন্য দোয়া',
    text: 'Rabbir hamhuma kama rabbayani saghira',
    meaning:
      'My Lord, have mercy on them as they raised me when I was small.',
    bn: 'হে আমার রব, তাঁদের প্রতি দয়া করুন, যেমন তাঁরা শৈশবে আমাকে লালন-পালন করেছেন।',
    image: quickDuasImg,
  },
]

const memoryPracticeItems = [
  {
    title: 'Seeking knowledge',
    titleBn: 'জ্ঞান অর্জনের দোয়া',
    text: 'Rabbi zidni ilma',
    meaning: 'My Lord, increase me in knowledge.',
    bn: 'হে আমার রব, আমার জ্ঞান বৃদ্ধি করুন।',
    hint: 'Can you recall the words for seeking knowledge?',
    hintBn: 'জ্ঞান অর্জনের দোয়াটি কি মনে করতে পারছেন?',
    category: 'Daily Remembrance',
    categoryBn: 'প্রতিদিনের স্মরণিকা',
  },
  {
    title: 'For our parents',
    titleBn: 'মা-বাবার জন্য দোয়া',
    text: 'Rabbir hamhuma kama rabbayani saghira',
    meaning:
      'My Lord, have mercy on them as they raised me when I was small.',
    bn: 'হে আমার রব, তাঁদের প্রতি দয়া করুন, যেমন তাঁরা শৈশবে আমাকে লালন-পালন করেছেন।',
    hint: 'What words do we pray for our loving parents?',
    hintBn: 'মা-বাবার জন্য আমরা কোন দোয়াটি করি?',
    category: 'Kindness & Family',
    categoryBn: 'সদয় আচরণ ও পরিবার',
  },
  {
    title: 'Waking up with gratitude',
    titleBn: 'ঘুম থেকে ওঠার দোয়া',
    text: "Alhamdu lillahil-ladhi ahyana ba'da ma amatana wa ilayhin-nushur",
    meaning:
      'All praise is for Allah who gave us life after having taken it from us, and unto Him is the resurrection.',
    bn: 'সমস্ত প্রশংসা আল্লাহর, যিনি আমাদের মৃত্যুর পর জীবন দান করেছেন এবং তাঁর কাছেই প্রত্যাবর্তন।',
    hint: 'How do we begin the morning with praise?',
    hintBn: 'সকালে ঘুম থেকে উঠে কীভাবে শোকরিয়া জানাই?',
    category: 'Morning & Evening',
    categoryBn: 'সকাল ও সন্ধ্যা',
  },
  {
    title: 'Before eating',
    titleBn: 'খাবারের শুরুতে দোয়া',
    text: "Bismillahi wa 'ala barakatillah",
    meaning: 'In the name of Allah and with the blessings of Allah.',
    bn: 'আল্লাহর নামে এবং আল্লাহর বরকতের উপর শুরু করছি।',
    hint: 'What words bring blessings before eating?',
    hintBn: 'খাবার শুরুর আগে কোন বরকতময় বাক্য বলি?',
    category: 'Everyday Moments',
    categoryBn: 'প্রতিদিনের মুহূর্ত',
  },
  {
    title: 'Before sleeping',
    titleBn: 'ঘুমানোর সময় দোয়া',
    text: 'Bismika Allahumma amutu wa ahya',
    meaning: 'In Your Name, O Allah, I die and I live.',
    bn: 'হে আল্লাহ, আপনারই নামে আমি মারা যাই এবং জীবিত হই।',
    hint: 'What peaceful words do we recite before sleep?',
    hintBn: 'ঘুমানোর আগে শান্তিময় কোন বাক্যটি বলি?',
    category: 'Peaceful Sleep',
    categoryBn: 'শান্তিময় ঘুম',
  },
  {
    title: 'Surah Al-Ikhlas',
    titleBn: 'সূরা আল-ইখলাস',
    text: 'Qul huwa Allahu ahad. Allahus-samad. Lam yalid wa lam yulad. Wa lam yakun lahu kufuwan ahad.',
    meaning:
      'Say: He is Allah, the One. Allah the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent.',
    bn: 'বলুন, তিনিই আল্লাহ, একক। আল্লাহ অমুখাপেক্ষী। তিনি কাউকে জন্ম দেননি এবং কারো থেকে জন্ম নেননি। এবং তাঁর সমকক্ষ কেউ নেই।',
    hint: 'Can you recall Surah Al-Ikhlas from memory?',
    hintBn: 'স্মৃতি থেকে সূরা আল-ইখলাস আবৃত্তি করতে পারেন?',
    category: 'Short Surahs',
    categoryBn: 'ছোট সূরা',
  },
]

function App() {
  const [active, setActive] = useState('Home')
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null)

  const [completed, setCompleted] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('noor-completed')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const [revealedDuas, setRevealedDuas] = useState<Record<string, boolean>>({})
  const [memoryRevealed, setMemoryRevealed] = useState(false)
  const [memoryIndex, setMemoryIndex] = useState(0)

  const [search, setSearch] = useState('')

  const [language, setLanguage] = useState<'en' | 'bn'>(() => {
    const savedLanguage = localStorage.getItem('noor-language')
    return savedLanguage === 'bn' ? 'bn' : 'en'
  })

  const t = translations[language]

  function toggleLanguage() {
    const nextLanguage = language === 'en' ? 'bn' : 'en'
    setLanguage(nextLanguage)
    localStorage.setItem('noor-language', nextLanguage)
  }

  function toggleCompleted(lessonNumber: string) {
    setCompleted((prev) => {
      const next = prev.includes(lessonNumber)
        ? prev.filter((id) => id !== lessonNumber)
        : [...prev, lessonNumber]
      try {
        localStorage.setItem('noor-completed', JSON.stringify(next))
      } catch {
        // storage fallback
      }
      return next
    })
  }

  function toggleDua(id: string) {
    setRevealedDuas((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }


  const navItems = [
    { label: t.home, page: 'Home', icon: '⌂' },
    { label: t.learn, page: 'Learn & Practise', icon: '▤' },
    { label: t.garden, page: 'Noor Garden', icon: '❀' },
    { label: t.memory, page: 'Memory Mirror', icon: '◉' },
    { label: t.myDay, page: 'My Day, My Duas', icon: '☼' },
  ]

  const visibleLessons = lessons.filter((lesson) =>
    `${lesson.title} ${lesson.bn}`.toLowerCase().includes(search.toLowerCase()),
  )

  const currentLesson = lessons.find((l) => l.number === selectedLesson)
  const currentMemoryItem = memoryPracticeItems[memoryIndex]

  return (
    <div className={`app-shell ${language === 'bn' ? 'lang-bn' : 'lang-en'}`}>
      <aside className="sidebar">
        <a
          className="brand"
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            setActive('Home')
            setSelectedLesson(null)
          }}
        >
          <span className="brand-mark">n.</span>
          <span className="brand-name">
            Noor-E-Verse
            <small>{t.tagline}</small>
          </span>
        </a>

        <div className="side-label">{t.space}</div>
        <nav className="nav-list" aria-label="Main Navigation">
          {navItems.map((item) => (
            <button
              key={item.page}
              className={`nav-item ${active === item.page && !selectedLesson ? 'selected' : ''}`}
              onClick={() => {
                setActive(item.page)
                setSelectedLesson(null)
              }}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
              {item.page === 'Noor Garden' && <span className="nav-dot" />}
            </button>
          ))}
        </nav>

        <div className="sidebar-note">
          <span className="note-flower">✳</span>
          <p>{t.sidebarMessage}</p>
          <span>{t.sidebarSubtext}</span>
        </div>

        <button
          type="button"
          className={`sidebar-bottom ${active === 'My learning journey' ? 'selected' : ''}`}
          onClick={() => {
            setActive('My learning journey')
            setSelectedLesson(null)
          }}
          aria-label={t.journey}
        >
          <span className="avatar">✿</span>
          <span className="sidebar-bottom-text">
            {t.journey}
            <small>{t.growing}</small>
          </span>
        </button>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <nav className="breadcrumb" aria-label="Breadcrumbs">
            <button
              type="button"
              className="breadcrumb-btn"
              onClick={() => {
                setActive('Home')
                setSelectedLesson(null)
              }}
            >
              {t.home}
            </button>
            {active !== 'Home' && (
              <>
                <span className="breadcrumb-divider" aria-hidden="true"> / </span>
                <button
                  type="button"
                  className={`breadcrumb-btn ${!selectedLesson ? 'active' : ''}`}
                  onClick={() => setSelectedLesson(null)}
                >
                  {navItems.find((item) => item.page === active)?.label ?? (active === 'My learning journey' ? t.journey : active)}
                </button>
              </>
            )}
            {selectedLesson && currentLesson && (
              <>
                <span className="breadcrumb-divider" aria-hidden="true"> / </span>
                <span className="breadcrumb-current">
                  {language === 'bn' ? currentLesson.bn : currentLesson.title}
                </span>
              </>
            )}
          </nav>

          <div className="top-actions">
            <button
              type="button"
              className="language-button"
              onClick={toggleLanguage}
              aria-label={language === 'en' ? 'Switch to Bengali' : 'Switch to English'}
            >
              {language === 'en' ? 'বাংলা' : 'English'}
            </button>

            <span className="streak" title={`${completed.length} ${completed.length === 1 ? t.singularGrowth : t.growth}`}>
              ✳ <b>{completed.length} {completed.length === 1 ? t.singularGrowth : t.growth}</b>
            </span>

            <button
              type="button"
              className={`profile-button ${active === 'My learning journey' ? 'active' : ''}`}
              onClick={() => {
                setActive('My learning journey')
                setSelectedLesson(null)
              }}
              aria-label={t.journey}
              title={t.journey}
            >
              ♡
            </button>
          </div>
        </header>

        {active === 'Home' && (
          <>
            <section className="welcome-row">
              <div>

                <div className="eyebrow">
                  <span /> {t.eyebrow}
                </div>
                <h1>
                  {t.heroLine1}
                  <br />
                  {t.heroLine2} <em>{t.heroLine3}</em>
                </h1>
                <p className="welcome-copy">{t.welcomeCopy}</p>
                <button
                  type="button"
                  className="primary-button"
                  onClick={() => {
                    setActive('Learn & Practise')
                    setSelectedLesson(null)
                  }}
                >
                  {t.continue} <span>↗</span>
                </button>

              </div>
              <div className="hero-art" aria-label="Illustration of a peaceful garden">
                <div className="sun-disc" />
                <div className="hero-arch">
                  <div className="arch-inner" />
                  <div className="plant plant-left"><i /><i /><i /><b /></div>
                  <div className="plant plant-right"><i /><i /><i /><b /></div>
                  <div className="hero-moon">☾</div>
                  <div className="hero-star star-one">✦</div><div className="hero-star star-two">✧</div>
                </div>
                <span className="art-caption">{t.calm}</span>
              </div>
            </section>


            <section className="daily-card">
              <div className="daily-icon">☼</div>
              <div className="daily-body">
                <div className="eyebrow">{t.todayReminder}</div>
                <h2>{t.reminderTitle}</h2>
                <p>{t.reminderCopy}</p>
              </div>
              <span className="daily-sprig">❧</span>
            </section>


            <section className="section-block">
              <div className="section-heading">
                <div>
                  <div className="eyebrow">{t.exploreEyebrow}</div>
                  <h2>{t.exploreTitle}</h2>
                </div>
                <button
                  type="button"
                  className="text-link"
                  onClick={() => {
                    setActive('Learn & Practise')
                    setSelectedLesson(null)
                  }}
                >
                  {t.viewLessons} ↗
                </button>
              </div>

              <div className="search-wrap">
                <span>⌕</span>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t.findLesson}
                  aria-label={t.findLesson}
                />
                {search && (
                  <button
                    type="button"
                    className="search-clear-btn"
                    onClick={() => setSearch('')}
                    aria-label={t.clearSearch}
                  >
                    ✕
                  </button>
                )}
              </div>

              <div className="lesson-grid">
                {visibleLessons.map((lesson) => (
                  <button
                    key={lesson.number}
                    className={`lesson-card ${lesson.color}`}
                    onClick={() => {
                      setSelectedLesson(lesson.number)
                      setActive('Learn & Practise')
                    }}
                  >
                    <div className="card-image-wrap">
                      <img
                        src={lesson.image}
                        alt=""
                        aria-hidden="true"
                        className="card-image"
                        loading="lazy"
                      />
                    </div>
                    <div className="lesson-card-top">
                      <span className="lesson-number">{lesson.number}</span>
                      <span className="lesson-illustration">{lesson.icon}</span>
                    </div>
                    <h3>{language === 'bn' ? lesson.bn : lesson.title}</h3>
                    <p>{language === 'bn' ? lesson.title : lesson.bn}</p>
                    <div className="lesson-footer">
                      <span>
                        {completed.includes(lesson.number)
                          ? t.completedBadge
                          : `${lesson.count.split(' ')[0]} ${t.lessonsCount}`}
                      </span>
                      <span className="round-arrow">↗</span>
                    </div>
                  </button>
                ))}
                {visibleLessons.length === 0 && (
                  <div className="empty-state-wrap">
                    <p className="empty-state">{t.noLessons}</p>
                    <button
                      type="button"
                      className="text-link"
                      onClick={() => setSearch('')}
                    >
                      {t.clearSearch} ↺
                    </button>
                  </div>
                )}
              </div>
            </section>

            <section className="section-block quick-section">
              <div className="section-heading">
                <div>
                  <div className="eyebrow">{t.rememberEyebrow}</div>
                  <h2>{t.rememberTitle}</h2>
                </div>

                <button
                  type="button"
                  className="text-link"
                  onClick={() => {
                    setActive('Memory Mirror')
                    setMemoryRevealed(false)
                  }}
                >
                  {t.practiseRecall} ↗
                </button>
              </div>

              <div className="dua-grid">
                {quickDuas.map((dua, index) => {
                  const duaKey = `quick-${index}`
                  const isRevealed = !!revealedDuas[duaKey]
                  return (
                    <article className="dua-card" key={dua.title}>
                      <div className="card-image-wrap dua-image-wrap">
                        <img
                          src={dua.image}
                          alt=""
                          aria-hidden="true"
                          className="card-image"
                          loading="lazy"
                        />
                      </div>
                      <div className="dua-card-top">
                        <span className="dua-symbol">
                          {index === 0 ? '✧' : '♡'}
                        </span>
                        <span className="tiny-tag">
                          {t.duaTag} {index + 1}
                        </span>
                      </div>

                      <h3>{language === 'bn' ? dua.titleBn : dua.title}</h3>

                      <p className="transliteration">{dua.text}</p>

                      {isRevealed && (
                        <p className="dua-meaning">
                          {language === 'bn' ? dua.bn : dua.meaning}
                        </p>
                      )}

                      <button
                        type="button"
                        className="reveal-button"
                        onClick={() => toggleDua(duaKey)}
                      >
                        {isRevealed ? t.hide : t.reflect} <span>↗</span>
                      </button>
                    </article>
                  )
                })}
              </div>
            </section>

            <section className="garden-banner">
              <div className="garden-symbol">❀</div>

              <div>
                <div className="eyebrow">{t.gardenEyebrow}</div>
                <h2>{t.gardenTitle}</h2>
                <p>{t.gardenDescription}</p>
              </div>

              <button
                type="button"
                className="garden-button"
                onClick={() => {
                  setActive('Noor Garden')
                  setSelectedLesson(null)
                }}
              >
                {t.visitGarden} ↗
              </button>
            </section>

          </>
        )}

        {active === 'Learn & Practise' && selectedLesson && currentLesson && (
          <section className="subpage lesson-detail-view">
            <button
              type="button"
              className="back-nav-button"
              onClick={() => setSelectedLesson(null)}
            >
              ← {t.backToLessons}
            </button>

            <div className="eyebrow">
              {currentLesson.icon} {t.space} · {language === 'bn' ? currentLesson.bn : currentLesson.title}
            </div>

            <div className="lesson-detail-header">
              <div>
                <span className="lesson-detail-badge">
                  {t.duaTag} · {currentLesson.number}
                </span>
                <h1 className="lesson-detail-title">
                  {language === 'bn' ? currentLesson.bn : currentLesson.title}
                </h1>
                <p className="welcome-copy">
                  {language === 'bn' ? currentLesson.title : currentLesson.bn} · {currentLesson.duas.length} {t.lessonsCount}
                </p>
              </div>
              <img
                src={currentLesson.image}
                alt=""
                aria-hidden="true"
                className="lesson-detail-img"
              />
            </div>

            <div className="lesson-duas-section">
              <h2 className="section-title">{t.lessonDuasTitle}</h2>
              <div className="lesson-duas-grid">
                {currentLesson.duas.map((dua, idx) => {
                  const duaKey = `lesson-${currentLesson.number}-${idx}`
                  const isRevealed = !!revealedDuas[duaKey]
                  return (
                    <article className="lesson-dua-card" key={dua.title}>
                      <div className="lesson-dua-header">
                        <span className="tiny-tag">
                          {t.duaTag} {idx + 1}
                        </span>
                        <span className="dua-symbol">{idx === 0 ? '✦' : '✧'}</span>
                      </div>
                      <h4>{language === 'bn' ? dua.titleBn : dua.title}</h4>
                      <p className="transliteration">{dua.text}</p>
                      {isRevealed && (
                        <p className="dua-meaning">
                          {language === 'bn' ? dua.bn : dua.meaning}
                        </p>
                      )}
                      <button
                        type="button"
                        className="reveal-button"
                        onClick={() => toggleDua(duaKey)}
                      >
                        {isRevealed ? t.hide : t.reveal} <span>↗</span>
                      </button>
                    </article>
                  )
                })}
              </div>
            </div>

            <div className="lesson-actions-bar">
              <button
                type="button"
                className={`primary-button completion-toggle ${completed.includes(currentLesson.number) ? 'completed' : ''}`}
                onClick={() => toggleCompleted(currentLesson.number)}
              >
                {completed.includes(currentLesson.number)
                  ? t.completedBadge
                  : t.markCompleted}
              </button>

              <button
                type="button"
                className="text-link"
                onClick={() => {
                  const idx = memoryPracticeItems.findIndex(
                    (m) =>
                      m.category === currentLesson.title ||
                      m.title.toLowerCase().includes(currentLesson.title.split(' ')[0].toLowerCase()),
                  )
                  if (idx !== -1) setMemoryIndex(idx)
                  setMemoryRevealed(false)
                  setActive('Memory Mirror')
                  setSelectedLesson(null)
                }}
              >
                {t.practiceInMirror} ↗
              </button>
            </div>

            {completed.includes(currentLesson.number) && (
              <div className="completion-feedback">
                <span>❀</span>
                <span>
                  {language === 'bn'
                    ? 'মাশাআল্লাহ! আপনি এই পাঠটি সম্পন্ন করেছেন এবং আপনার নূরের বাগান বৃদ্ধি পেয়েছে।'
                    : 'Māshā’Allāh! You completed this lesson and nurtured your Noor Garden.'}
                </span>
              </div>
            )}
          </section>
        )}

        {active === 'Learn & Practise' && !selectedLesson && (
          <section className="subpage">
            <button
              type="button"
              className="back-nav-button"
              onClick={() => setActive('Home')}
            >
              ← {t.backHome}
            </button>

            <div className="eyebrow">{t.learnEyebrow}</div>

            <h1>
              {t.learnTitle} <em>{t.learnTitleEm}</em>
            </h1>

            <p className="welcome-copy">{t.learnDescription}</p>

            <div className="lesson-grid">
              {lessons.map((lesson) => (
                <button
                  className={`lesson-card ${lesson.color}`}
                  key={lesson.number}
                  onClick={() => setSelectedLesson(lesson.number)}
                >
                  <div className="card-image-wrap">
                    <img
                      src={lesson.image}
                      alt=""
                      aria-hidden="true"
                      className="card-image"
                      loading="lazy"
                    />
                  </div>
                  <div className="lesson-card-top">
                    <span className="lesson-number">{lesson.number}</span>
                    <span className="lesson-illustration">{lesson.icon}</span>
                  </div>

                  <h3>{language === 'bn' ? lesson.bn : lesson.title}</h3>
                  <p>{language === 'bn' ? lesson.title : lesson.bn}</p>

                  <div className="lesson-footer">
                    <span>
                      {completed.includes(lesson.number)
                        ? t.completedBadge
                        : `${lesson.count.split(' ')[0]} ${t.lessonsCount}`}
                    </span>
                    <span className="round-arrow">↗</span>
                  </div>
                </button>
              ))}
            </div>

            <p className="hint-text">{t.lessonHintActive}</p>
          </section>
        )}

        {active === 'Noor Garden' && (
          <section className="subpage">
            <button
              type="button"
              className="back-nav-button"
              onClick={() => setActive('Home')}
            >
              ← {t.backHome}
            </button>

            <div className="eyebrow">{t.gardenPageEyebrow}</div>

            <h1>
              {t.gardenPageTitle} <em>{t.gardenPageTitleEm}</em>
            </h1>

            <p className="welcome-copy">{t.gardenPageDescription}</p>

            <div className="garden-scene">
              <div className="garden-sun">☼</div>
              <div className="garden-hill hill-back" />
              <div className="garden-hill hill-front" />

              <div className="garden-flowers">
                {Array.from(
                  { length: Math.max(3, completed.length + 3) },
                  (_, i) => (
                    <span
                      key={i}
                      style={{
                        left: `${8 + i * (80 / Math.max(3, completed.length + 2))}%`,
                        bottom: `${20 + (i % 3) * 7}%`,
                      }}
                    >
                      {['✿', '❀', '✾'][i % 3]}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="garden-progress">
              <strong>
                {completed.length} {t.lessonsNurtured}
              </strong>
              <span>{t.gardenProgress}</span>

              <div className="progress-track">
                <div
                  style={{
                    width: `${Math.min(100, completed.length * 25)}%`,
                  }}
                />
              </div>
            </div>

            <button
              type="button"
              className="primary-button"
              onClick={() => {
                setActive('Learn & Practise')
                setSelectedLesson(null)
              }}
            >
              {t.learnSomething} ↗
            </button>
          </section>
        )}

        {active === 'Memory Mirror' && (
          <section className="subpage">
            <button
              type="button"
              className="back-nav-button"
              onClick={() => setActive('Home')}
            >
              ← {t.backHome}
            </button>

            <div className="eyebrow">{t.memoryEyebrow}</div>

            <h1>
              {t.memoryTitle} <em>{t.memoryTitleEm}</em>
            </h1>

            <p className="welcome-copy">{t.memoryDescription}</p>

            {currentMemoryItem && (
              <article className="memory-card">
                <div className="card-image-wrap memory-image-wrap">
                  <img
                    src={memoryMirrorImg}
                    alt=""
                    aria-hidden="true"
                    className="card-image"
                    loading="lazy"
                  />
                </div>
                <div className="memory-card-top-row">
                  <span className="tiny-tag">
                    {language === 'bn' ? currentMemoryItem.categoryBn : currentMemoryItem.category}
                  </span>
                  <span className="memory-counter">
                    {memoryIndex + 1} / {memoryPracticeItems.length}
                  </span>
                </div>

                <h2>
                  {language === 'bn' ? currentMemoryItem.titleBn : currentMemoryItem.title}
                </h2>

                <p className="transliteration">
                  {memoryRevealed
                    ? currentMemoryItem.text
                    : (language === 'bn' ? currentMemoryItem.hintBn : currentMemoryItem.hint)}
                </p>

                <p className="dua-meaning">
                  {memoryRevealed
                    ? (language === 'bn' ? currentMemoryItem.bn : currentMemoryItem.meaning)
                    : (language === 'bn' ? 'দেখার আগে একটু সময় নিয়ে মনে করার চেষ্টা করুন।' : 'Take a moment to remember before revealing.')}
                </p>

                <button
                  type="button"
                  className="primary-button"
                  onClick={() => setMemoryRevealed((old) => !old)}
                >
                  {memoryRevealed ? t.hideAndRetry : t.revealWords} ↗
                </button>

                <div className="memory-nav-controls">
                  <button
                    type="button"
                    className="text-link"
                    onClick={() => {
                      setMemoryIndex((prev) => (prev - 1 + memoryPracticeItems.length) % memoryPracticeItems.length)
                      setMemoryRevealed(false)
                    }}
                  >
                    ← {t.prevPractice}
                  </button>
                  <button
                    type="button"
                    className="text-link"
                    onClick={() => {
                      setMemoryIndex((prev) => (prev + 1) % memoryPracticeItems.length)
                      setMemoryRevealed(false)
                    }}
                  >
                    {t.nextPractice} →
                  </button>
                </div>
              </article>
            )}
          </section>
        )}

        {active === 'My Day, My Duas' && (
          <section className="subpage">
            <button
              type="button"
              className="back-nav-button"
              onClick={() => setActive('Home')}
            >
              ← {t.backHome}
            </button>

            <div className="eyebrow">{t.myDayEyebrow}</div>

            <h1>
              {t.myDayTitle} <em>{t.myDayTitleEm}</em>
            </h1>

            <p className="welcome-copy">{t.myDayDescription}</p>

            <div className="lesson-grid">
              {lessons.map((lesson) => (
                <button
                  className={`lesson-card ${lesson.color}`}
                  key={lesson.number}
                  onClick={() => {
                    setSelectedLesson(lesson.number)
                    setActive('Learn & Practise')
                  }}
                >
                  <div className="card-image-wrap">
                    <img
                      src={lesson.image}
                      alt=""
                      aria-hidden="true"
                      className="card-image"
                      loading="lazy"
                    />
                  </div>
                  <div className="lesson-card-top">
                    <span className="lesson-number">{lesson.number}</span>
                    <span className="lesson-illustration">{lesson.icon}</span>
                  </div>

                  <h3>{language === 'bn' ? lesson.bn : lesson.title}</h3>
                  <p>{language === 'bn' ? lesson.title : lesson.bn}</p>

                  <div className="lesson-footer">
                    <span>
                      {completed.includes(lesson.number)
                        ? t.completedBadge
                        : t.exploreMoments}
                    </span>
                    <span className="round-arrow">↗</span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {![
          'Home',
          'Learn & Practise',
          'Noor Garden',
          'Memory Mirror',
          'My Day, My Duas',
        ].includes(active) && (
            <section className="subpage">
              <button
                type="button"
                className="back-nav-button"
                onClick={() => {
                  setActive('Home')
                  setSelectedLesson(null)
                }}
              >
                ← {t.backHome}
              </button>

              <div className="eyebrow">{t.profileEyebrow}</div>

              <h1>
                {t.profileTitle} <em>{t.profileTitleEm}</em>
              </h1>

              <p className="welcome-copy">{t.profileDescription}</p>

              <div className="journey-summary-card">
                <div className="card-image-wrap journey-image-wrap">
                  <img
                    src={learningJourneyImg}
                    alt=""
                    aria-hidden="true"
                    className="card-image"
                    loading="lazy"
                  />
                </div>
                <div className="journey-summary-header">
                  <span className="summary-icon">✿</span>
                  <div>
                    <h3>{t.journeySummary}</h3>
                    <p>
                      {completed.length} / {lessons.length} {t.lessonsCompletedCount} · {completed.length} {completed.length === 1 ? t.singularGrowth : t.growth}
                    </p>
                  </div>
                </div>

                <div className="progress-track">
                  <div style={{ width: `${Math.min(100, (completed.length / lessons.length) * 100)}%` }} />
                </div>

                <div className="journey-lesson-list">
                  {lessons.map((lesson) => {
                    const isDone = completed.includes(lesson.number)
                    return (
                      <div key={lesson.number} className={`journey-lesson-item ${isDone ? 'done' : ''}`}>
                        <span className="journey-status">{isDone ? '✓' : '○'}</span>
                        <span className="journey-lesson-name">
                          {lesson.number}. {language === 'bn' ? lesson.bn : lesson.title}
                        </span>
                        <button
                          type="button"
                          className="text-link journey-view-btn"
                          onClick={() => {
                            setSelectedLesson(lesson.number)
                            setActive('Learn & Practise')
                          }}
                        >
                          {isDone ? t.review : t.start} ↗
                        </button>
                      </div>
                    )
                  })}
                </div>

                <div className="journey-actions">
                  <button
                    type="button"
                    className="primary-button"
                    onClick={() => {
                      setActive('Learn & Practise')
                      setSelectedLesson(null)
                    }}
                  >
                    {t.continue} ↗
                  </button>

                  {completed.length > 0 && (
                    <button
                      type="button"
                      className="text-link reset-btn"
                      onClick={() => {
                        setCompleted([])
                        localStorage.removeItem('noor-completed')
                      }}
                    >
                      {t.resetProgress}
                    </button>
                  )}
                </div>
              </div>
            </section>
          )}

        <footer className="footer">
          <span className="footer-brand">Noor-E-Verse</span>
          <span>{t.footerMessage}</span>
          <span>{t.footerTagline}</span>
        </footer>
      </main>
    </div>
  )
}

export default App