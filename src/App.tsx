
import { useState } from 'react'
import './App.css'


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
      'Your learning progress is stored in this page session for now. Account sync can be added later.',
    backHomeButton: 'Back to home',
    footerMessage: 'Made with care for a more mindful everyday.',
    footerTagline: 'Learn gently · Grow sincerely',
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
      'আপাতত আপনার শেখার অগ্রগতি এই পেজের সেশনেই সংরক্ষিত থাকে। পরে অ্যাকাউন্টের সঙ্গে সিঙ্ক করার ব্যবস্থা যোগ করা যাবে।',
    backHomeButton: 'হোমে ফিরে যান',
    footerMessage: 'প্রতিদিনকে আরও সচেতন করে তুলতে যত্নসহকারে তৈরি।',
    footerTagline: 'ধীরে শিখুন · আন্তরিকভাবে এগিয়ে চলুন',
  },
} as const

const lessons = [
  {
    number: '01',
    title: 'Morning & Evening',
    bn: 'সকাল ও সন্ধ্যার দোয়া',
    icon: '☀️',
    count: '8 lessons',
    color: 'peach',
  },
  {
    number: '02',
    title: 'Everyday Moments',
    bn: 'প্রতিদিনের জীবনের দোয়া',
    icon: '🌿',
    count: '12 lessons',
    color: 'sage',
  },
  {
    number: '03',
    title: 'Peaceful Sleep',
    bn: 'ঘুমানোর আগের দোয়া',
    icon: '🌙',
    count: '6 lessons',
    color: 'lavender',
  },
  {
    number: '04',
    title: 'Short Surahs',
    bn: 'ছোট সূরা শেখা',
    icon: '📖',
    count: '12 lessons',
    color: 'butter',
  },
]

const quickDuas = [
  {
    title: 'Seeking knowledge',
    titleBn: 'জ্ঞান অর্জনের দোয়া',
    text: 'Rabbi zidni ilma',
    meaning: 'My Lord, increase me in knowledge.',
    bn: 'হে আমার রব, আমার জ্ঞান বৃদ্ধি করুন।',
  },
  {
    title: 'For our parents',
    titleBn: 'মা-বাবার জন্য দোয়া',
    text: 'Rabbir hamhuma kama rabbayani saghira',
    meaning:
      'My Lord, have mercy on them as they raised me when I was small.',
    bn: 'হে আমার রব, তাঁদের প্রতি দয়া করুন, যেমন তাঁরা শৈশবে আমাকে লালন-পালন করেছেন।',
  },
]


function App() {
  const [active, setActive] = useState('Home')

  const [completed, setCompleted] = useState<string[]>([])

  const [showMeaning, setShowMeaning] = useState(false)

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

  return (
    <div className={`app-shell ${language === 'bn' ? 'lang-bn' : 'lang-en'}`}>
      <aside className="sidebar">
        <a className="brand" href="#home" onClick={() => setActive('Home')}>
          <span className="brand-mark">n.</span>
          <span className="brand-name">
            Noor-E-Verse
            <small>{t.tagline}</small>
          </span>
        </a>

        <div className="side-label">{t.space}</div>
        <nav className="nav-list">

          {navItems.map((item) => (
            <button
              key={item.page}
              className={`nav-item ${active === item.page ? 'selected' : ''}`}
              onClick={() => setActive(item.page)}
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
        <div className="sidebar-bottom">
          <span className="avatar">✿</span>
          <span>
            {t.journey}
            <small>{t.growing}</small>
          </span>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="breadcrumb">
            {t.breadcrumb}
            <span> / </span>
            {navItems.find((item) => item.page === active)?.label ?? active}
          </div>

          <div className="top-actions">
            <button
              className="language-button"
              onClick={toggleLanguage}
              aria-label={language === 'en' ? 'Switch to Bengali' : 'Switch to English'}
            >
              {language === 'en' ? 'বাংলা' : 'English'}
            </button>

            <span className="streak">
              ✳ <b>{completed.length} {t.growth}</b>
            </span>

            <button
              className="profile-button"
              onClick={() => setActive('My learning journey')}
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
                  className="primary-button"
                  onClick={() => setActive('Learn & Practise')}
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
              <div className="section-heading"><div><div className="eyebrow">{t.exploreEyebrow}</div>
                <h2>{t.exploreTitle}</h2></div><button
                  className="text-link"
                  onClick={() => setActive('Learn & Practise')}
                >
                  {t.viewLessons} ↗
                </button></div>
              <div className="search-wrap">
                <span>⌕</span>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t.findLesson}
                  aria-label={t.findLesson}
                />
              </div>
              <div className="lesson-grid">
                {visibleLessons.map((lesson) => <button key={lesson.number} className={`lesson-card ${lesson.color}`} onClick={() => setActive('Learn & Practise')}>
                  <div className="lesson-card-top"><span className="lesson-number">{lesson.number}</span><span className="lesson-illustration">{lesson.icon}</span></div>
                  <h3>{language === 'bn' ? lesson.bn : lesson.title}</h3>
                  <p>{language === 'bn' ? lesson.title : lesson.bn}</p><div className="lesson-footer"><span>
                    {lesson.count.split(' ')[0]} {t.lessonsCount}
                  </span><span className="round-arrow">↗</span></div>
                </button>)}
                {visibleLessons.length === 0 && (
                  <p className="empty-state">{t.noLessons}</p>
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
                  className="text-link"
                  onClick={() => setActive('Memory Mirror')}
                >
                  {t.practiseRecall} ↗
                </button>
              </div>

              <div className="dua-grid">
                {quickDuas.map((dua, index) => (
                  <article className="dua-card" key={dua.title}>
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

                    {showMeaning && (
                      <p className="dua-meaning">
                        {language === 'bn' ? dua.bn : dua.meaning}
                      </p>
                    )}

                    <button
                      className="reveal-button"
                      onClick={() => setShowMeaning((old) => !old)}
                    >
                      {showMeaning ? t.hide : t.reflect} <span>↗</span>
                    </button>
                  </article>
                ))}
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
                className="garden-button"
                onClick={() => setActive('Noor Garden')}
              >
                {t.visitGarden} ↗
              </button>
            </section>

          </>
        )}

        {active === 'Learn & Practise' && (
          <section className="subpage">
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
                  onClick={() =>
                    setCompleted((old) =>
                      old.includes(lesson.number)
                        ? old
                        : [...old, lesson.number],
                    )
                  }
                >
                  <div className="lesson-card-top">
                    <span className="lesson-number">{lesson.number}</span>
                    <span className="lesson-illustration">{lesson.icon}</span>
                  </div>

                  <h3>{language === 'bn' ? lesson.bn : lesson.title}</h3>
                  <p>{language === 'bn' ? lesson.title : lesson.bn}</p>

                  <div className="lesson-footer">
                    <span>
                      {completed.includes(lesson.number)
                        ? t.revision
                        : `${lesson.count.split(' ')[0]} ${t.lessonsCount}`}
                    </span>
                    <span className="round-arrow">↗</span>
                  </div>
                </button>
              ))}
            </div>

            <p className="hint-text">{t.lessonHint}</p>
          </section>
        )}

        {active === 'Noor Garden' && (
          <section className="subpage">
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
              className="primary-button"
              onClick={() => setActive('Learn & Practise')}
            >
              {t.learnSomething} ↗
            </button>
          </section>
        )}

        {active === 'Memory Mirror' && (
          <section className="subpage">
            <div className="eyebrow">{t.memoryEyebrow}</div>

            <h1>
              {t.memoryTitle} <em>{t.memoryTitleEm}</em>
            </h1>

            <p className="welcome-copy">{t.memoryDescription}</p>

            <article className="memory-card">
              <span className="tiny-tag">{t.dailyPractice}</span>

              <h2>{t.seekingKnowledge}</h2>

              <p className="transliteration">
                {showMeaning ? 'Rabbi zidni ilma' : t.recallPrompt}
              </p>

              <p className="dua-meaning">
                {showMeaning
                  ? language === 'bn'
                    ? 'হে আমার রব, আমার জ্ঞান বৃদ্ধি করুন।'
                    : 'My Lord, increase me in knowledge.'
                  : t.recallHint}
              </p>

              <button
                className="primary-button"
                onClick={() => setShowMeaning((old) => !old)}
              >
                {showMeaning ? t.hideAndRetry : t.revealWords} ↗
              </button>
            </article>
          </section>
        )}

        {active === 'My Day, My Duas' && (
          <section className="subpage">
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
                  onClick={() => setActive('Learn & Practise')}
                >
                  <div className="lesson-card-top">
                    <span className="lesson-number">{lesson.number}</span>
                    <span className="lesson-illustration">{lesson.icon}</span>
                  </div>

                  <h3>{language === 'bn' ? lesson.bn : lesson.title}</h3>
                  <p>{language === 'bn' ? lesson.title : lesson.bn}</p>

                  <div className="lesson-footer">
                    <span>{t.exploreMoments}</span>
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
              <div className="eyebrow">{t.profileEyebrow}</div>

              <h1>
                {t.profileTitle} <em>{t.profileTitleEm}</em>
              </h1>

              <p className="welcome-copy">{t.profileDescription}</p>

              <button className="primary-button" onClick={() => setActive('Home')}>
                {t.backHomeButton} ↗
              </button>
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