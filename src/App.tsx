
import { useState } from 'react'
import './App.css'

const lessons = [
  { number: '01', title: 'Morning & Evening', bn: 'সকাল ও সন্ধ্যার দোয়া', icon: '☀️', count: '8 lessons', color: 'peach' },
  { number: '02', title: 'Everyday Moments', bn: 'প্রতিদিনের জীবনের দোয়া', icon: '🌿', count: '12 lessons', color: 'sage' },
  { number: '03', title: 'Peaceful Sleep', bn: 'ঘুমানোর আগের দোয়া', icon: '🌙', count: '6 lessons', color: 'lavender' },
  { number: '04', title: 'Short Surahs', bn: 'ছোট সূরা শেখা', icon: '📖', count: '12 lessons', color: 'butter' },
]

const quickDuas = [
  { title: 'Seeking knowledge', text: 'Rabbi zidni ilma', meaning: 'My Lord, increase me in knowledge.', bn: 'হে আমার রব, আমার জ্ঞান বৃদ্ধি করুন।' },
  { title: 'For our parents', text: 'Rabbir hamhuma kama rabbayani saghira', meaning: 'My Lord, have mercy on them as they raised me when I was small.', bn: 'হে আমার রব, তাঁদের প্রতি দয়া করুন, যেমন তাঁরা শৈশবে আমাকে লালন-পালন করেছেন।' },
]

function App() {
  const [active, setActive] = useState('Home')
  const [completed, setCompleted] = useState<string[]>([])
  const [showMeaning, setShowMeaning] = useState(false)
  const [search, setSearch] = useState('')

  const navItems = [
    { label: 'Home', icon: '⌂' },
    { label: 'Learn & Practise', icon: '▤' },
    { label: 'Noor Garden', icon: '❀' },
    { label: 'Memory Mirror', icon: '◉' },
    { label: 'My Day, My Duas', icon: '☼' },
  ]

  const visibleLessons = lessons.filter((lesson) =>
    `${lesson.title} ${lesson.bn}`.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#home" onClick={() => setActive('Home')}>
          <span className="brand-mark">n.</span>
          <span className="brand-name">noor-e-verse<small>a little light, every day</small></span>
        </a>

        <div className="side-label">YOUR SPACE</div>
        <nav className="nav-list">
          {navItems.map((item) => (
            <button key={item.label} className={`nav-item ${active === item.label ? 'selected' : ''}`} onClick={() => setActive(item.label)}>
              <span className="nav-icon">{item.icon}</span>{item.label}
              {item.label === 'Noor Garden' && <span className="nav-dot" />}
            </button>
          ))}
        </nav>

        <div className="sidebar-note">
          <span className="note-flower">✳</span>
          <p>Small steps, sincere intentions.</p>
          <span>Every lesson is a little light.</span>
        </div>
        <div className="sidebar-bottom"><span className="avatar">✿</span><span>My learning journey<small>Growing at my own pace</small></span></div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="breadcrumb">YOUR PERSONAL LEARNING SPACE <span> / </span> {active.toUpperCase()}</div>
          <div className="top-actions"><span className="streak">✳ <b>{completed.length} days of growth</b></span><button className="profile-button" onClick={() => setActive('My learning journey')}>♡</button></div>
        </header>

        {active === 'Home' && (
          <>
            <section className="welcome-row">
              <div>
                <div className="eyebrow"><span /> YOUR JOURNEY, YOUR PACE</div>
                <h1>A little light<br />for <em>every day.</em></h1>
                <p className="welcome-copy">Learn beautiful duas, understand their meanings, and carry a little more peace into your everyday moments.</p>
                <button className="primary-button" onClick={() => setActive('Learn & Practise')}>Continue your journey <span>↗</span></button>
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
                <span className="art-caption">a moment of calm</span>
              </div>
            </section>

            <section className="daily-card">
              <div className="daily-icon">☼</div>
              <div className="daily-body"><div className="eyebrow">TODAY'S LITTLE REMINDER</div><h2>Knowledge is a beautiful journey.</h2><p>You don't have to learn everything today. Just begin with one small, meaningful step.</p></div>
              <span className="daily-sprig">❧</span>
            </section>

            <section className="section-block">
              <div className="section-heading"><div><div className="eyebrow">EXPLORE AT YOUR OWN PACE</div><h2>What would you like to learn?</h2></div><button className="text-link" onClick={() => setActive('Learn & Practise')}>View all lessons ↗</button></div>
              <div className="search-wrap"><span>⌕</span><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Find a lesson..." aria-label="Find a lesson" /></div>
              <div className="lesson-grid">
                {visibleLessons.map((lesson) => <button key={lesson.number} className={`lesson-card ${lesson.color}`} onClick={() => setActive('Learn & Practise')}>
                  <div className="lesson-card-top"><span className="lesson-number">{lesson.number}</span><span className="lesson-illustration">{lesson.icon}</span></div>
                  <h3>{lesson.title}</h3><p>{lesson.bn}</p><div className="lesson-footer"><span>{lesson.count}</span><span className="round-arrow">↗</span></div>
                </button>)}
                {visibleLessons.length === 0 && <p className="empty-state">No lessons found. Try another search.</p>}
              </div>
            </section>

            <section className="section-block quick-section">
              <div className="section-heading"><div><div className="eyebrow">A MOMENT TO REMEMBER</div><h2>Little words, lasting meaning.</h2></div><button className="text-link" onClick={() => setActive('Memory Mirror')}>Practise recall ↗</button></div>
              <div className="dua-grid">
                {quickDuas.map((dua, index) => <article className="dua-card" key={dua.title}><div className="dua-card-top"><span className="dua-symbol">{index === 0 ? '✧' : '♡'}</span><span className="tiny-tag">DUA {index + 1}</span></div><h3>{dua.title}</h3><p className="transliteration">{dua.text}</p><p className="dua-meaning">{dua.meaning}</p><p className="bangla-meaning">{dua.bn}</p><button className="reveal-button" onClick={() => setShowMeaning(!showMeaning)}>{showMeaning ? 'Hide meaning' : 'Reflect on meaning'} <span>↗</span></button></article>)}
              </div>
            </section>

            <section className="garden-banner"><div className="garden-symbol">❀</div><div><div className="eyebrow">YOUR GARDEN IS WAITING</div><h2>Every little thing you learn helps you grow.</h2><p>Revisit a lesson, practise what you remember, and watch your garden bloom.</p></div><button className="garden-button" onClick={() => setActive('Noor Garden')}>Visit Noor Garden ↗</button></section>
          </>
        )}

        {active === 'Learn & Practise' && <section className="subpage"><div className="eyebrow">DISCOVER SOMETHING MEANINGFUL</div><h1>Learn & <em>practise.</em></h1><p className="welcome-copy">Start with a small lesson. Read the transliteration, understand its meaning, and practise at your own pace.</p><div className="lesson-grid">{lessons.map((lesson) => <button className={`lesson-card ${lesson.color}`} key={lesson.number} onClick={() => setCompleted((old) => old.includes(lesson.number) ? old : [...old, lesson.number])}><div className="lesson-card-top"><span className="lesson-number">{lesson.number}</span><span className="lesson-illustration">{lesson.icon}</span></div><h3>{lesson.title}</h3><p>{lesson.bn}</p><div className="lesson-footer"><span>{completed.includes(lesson.number) ? 'Marked for revision ✓' : lesson.count}</span><span className="round-arrow">↗</span></div></button>)}</div><p className="hint-text">Choose a lesson card to mark it for revision. Learning content will be expanded in the next step.</p></section>}

        {active === 'Noor Garden' && <section className="subpage"><div className="eyebrow">GROW WITH EVERY LESSON</div><h1>Your Noor <em>Garden.</em></h1><p className="welcome-copy">Every time you complete a lesson, you nurture your garden. There's no rush; every small step counts.</p><div className="garden-scene"><div className="garden-sun">☼</div><div className="garden-hill hill-back" /><div className="garden-hill hill-front" /><div className="garden-flowers">{Array.from({ length: Math.max(3, completed.length + 3) }, (_, i) => <span key={i} style={{ left: `${8 + i * (80 / Math.max(3, completed.length + 2))}%`, bottom: `${20 + (i % 3) * 7}%` }}>{['✿', '❀', '✾'][i % 3]}</span>)}</div></div><div className="garden-progress"><strong>{completed.length} lessons nurtured</strong><span>Keep learning to grow your garden.</span><div className="progress-track"><div style={{ width: `${Math.min(100, completed.length * 25)}%` }} /></div></div><button className="primary-button" onClick={() => setActive('Learn & Practise')}>Learn something new ↗</button></section>}

        {active === 'Memory Mirror' && <section className="subpage"><div className="eyebrow">GENTLE RECALL PRACTICE</div><h1>Memory <em>Mirror.</em></h1><p className="welcome-copy">Take a breath, try to remember, and reveal the words when you're ready. This is practice, not a test.</p><article className="memory-card"><span className="tiny-tag">A LITTLE DAILY PRACTICE</span><h2>Seeking knowledge</h2><p className="transliteration">{showMeaning ? 'Rabbi zidni ilma' : 'Can you recall the words?'}</p><p className="dua-meaning">{showMeaning ? 'My Lord, increase me in knowledge.' : 'Take a moment to remember before revealing.'}</p><button className="primary-button" onClick={() => setShowMeaning(!showMeaning)}>{showMeaning ? 'Hide and try again' : 'Reveal the words'} ↗</button></article></section>}

        {active === 'My Day, My Duas' && <section className="subpage"><div className="eyebrow">MEANINGFUL EVERYDAY MOMENTS</div><h1>My day, <em>my duas.</em></h1><p className="welcome-copy">Find a learning category for the moment you're in.</p><div className="lesson-grid">{lessons.map((lesson) => <button className={`lesson-card ${lesson.color}`} key={lesson.number} onClick={() => setActive('Learn & Practise')}><div className="lesson-card-top"><span className="lesson-number">{lesson.number}</span><span className="lesson-illustration">{lesson.icon}</span></div><h3>{lesson.title}</h3><p>{lesson.bn}</p><div className="lesson-footer"><span>Explore moments</span><span className="round-arrow">↗</span></div></button>)}</div></section>}

        {!['Home', 'Learn & Practise', 'Noor Garden', 'Memory Mirror', 'My Day, My Duas'].includes(active) && <section className="subpage"><div className="eyebrow">YOUR PERSONAL SPACE</div><h1>Your journey, <em>your pace.</em></h1><p className="welcome-copy">Your learning progress is stored in this page session for now. Account sync can be added later.</p><button className="primary-button" onClick={() => setActive('Home')}>Back to home ↗</button></section>}

        <footer className="footer"><span className="footer-brand">noor-e-verse</span><span>Made with care for a more mindful everyday.</span><span>Learn gently · Grow sincerely</span></footer>
      </main>
    </div>
  )
}

export default App