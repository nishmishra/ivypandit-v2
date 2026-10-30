import Link from 'next/link';
import SectionPathways from '../components/SectionPathways';
import styles from './home.module.css';
import { introductions, deviLessons } from '../data/learning';

export default function Home() {
  return <>
    <section className={`hero ${styles.compactHero}`}>
      <div className="heroInner">
        <div className="eyebrow">Sanskrit • Indian Knowledge Systems • Neuroscience</div>
        <h1>Explore Sanskrit, Indian Wisdom<br className={styles.desktopBreak} /> &amp; the Science of Mind</h1>
        <p>Read foundational texts, follow guided lectures, and explore questions about language, attention, and the mind.</p>
        <div className="buttons">
          <Link className="btn primary" href="/start-here">Start Learning →</Link>
          <Link className="btn secondary" href="/learn/introducing-ivypandit">Watch an Introduction ▷</Link>
        </div>
        <p className={styles.heroNote}>Respect tradition. Encourage curiosity. Demand rigor.</p>
      </div>
    </section>
    <div className={styles.bannerImage} role="img" aria-label="University architecture, Nishant Mishra on the Ganga, and the ghats of Varanasi" />
    <main className="main">
      <section className={styles.founderIntro} aria-labelledby="founder-intro-title">
        <img src="/images/dr-nishant-mishra.jpeg" width="96" height="96" alt="Nishant K. Mishra" />
        <div>
          <p className="kicker">Your guide to IvyPandit</p>
          <h2 id="founder-intro-title">Nishant K. Mishra, MD, PhD</h2>
          <p>A neurologist, physician-scientist, and student of Sanskrit. Join me in studying classical texts, exploring neuroscience, and asking thoughtful questions across disciplines.</p>
          <Link className="textLink" href="/about">Meet the founder →</Link>
        </div>
      </section>
      <section className={styles.lessonSection} aria-labelledby="lessons-title">
        <div className={styles.lessonHeading}>
          <div><p className="kicker">Watch · Read · Reflect</p><h2 className="sectionTitle" id="lessons-title">Begin with a lesson</h2></div>
          <Link className="textLink" href="/videos">All lectures &amp; readings →</Link>
        </div>
        <div className={styles.lessonCards}>
          {[
            { href: '/learn/introducing-ivypandit', videoId: introductions[0].videoId, title: 'Welcome to IvyPandit', meta: 'Sanskrit • Platform introduction', summary: 'Discover the idea behind IvyPandit and choose where to begin.' },
            { href: '/devi-bhagavata/mahatmya', videoId: deviLessons[0].videoId, title: 'Begin the Devī Bhāgavata', meta: `Hindi • Guided reading • ${deviLessons[0].duration}`, summary: 'Read and listen to the Māhātmya with notes and essential vocabulary.' },
            { href: '/learn/hindu-culture', videoId: introductions[3].videoId, title: 'The Essence of Hindu Culture', meta: 'English • Introductory lecture', summary: 'Explore dharma, karma, and Hindu ways of life in their traditional settings.' },
          ].map(lesson => <Link key={lesson.href} href={lesson.href} className={styles.lessonCard}>
            <div className={styles.thumbnail}><img src={`https://i.ytimg.com/vi/${lesson.videoId}/hqdefault.jpg`} alt="" width="480" height="360" loading="lazy" /><span aria-hidden="true" className={styles.playIcon}>▷</span></div>
            <div className={styles.lessonCopy}><p className={styles.lessonMeta}>{lesson.meta}</p><h3>{lesson.title}</h3><p>{lesson.summary}</p><span className="textLink">Watch &amp; explore →</span></div>
          </Link>)}
        </div>
      </section>
      <SectionPathways />
      <section className={styles.currentStudy} aria-labelledby="current-study-title">
        <div>
          <p className="kicker">Current study • Religious Study • Hindi</p>
          <h2 className="sectionTitle" id="current-study-title">Devī Bhāgavata: read, listen and reflect</h2>
          <p>Begin with the Māhātmya, then follow the First Skandha in order. Full readings and shorter summaries have separate playlists, with chapter guides and vocabulary on IvyPandit.</p>
          <div className="buttons" style={{justifyContent:'flex-start'}}>
            <Link className="btn primary" href="/devi-bhagavata">Begin the study →</Link>
            <Link className="btn secondary" href="/videos#tradition">More religious learning →</Link>
          </div>
        </div>
        <aside className="panel">
          <h3>Continue from your last lesson</h3>
          <ol>
            <li><Link href="/devi-bhagavata/mahatmya">Māhātmya</Link></li>
            <li><Link href="/devi-bhagavata/skandha-1-chapters-1-3">First Skandha, chapters 1–3</Link></li>
            <li><Link href="/devi-bhagavata/skandha-1-chapters-4-5">First Skandha, chapters 4–5</Link></li>
          </ol>
        </aside>
      </section>
      <section className={`panel ${styles.featuredArticle}`} aria-labelledby="featured-article-title">
        <p className="kicker">Featured review • Interdisciplinary Inquiry</p>
        <h2 className="sectionTitle" id="featured-article-title">Avadhāna: attention, memory &amp; expertise</h2>
        <p>What does this living Indian performance tradition demand of attention, working memory, language and improvisation? Explore its traditional context, current literature and questions for future research.</p>
        <p><strong>Research status:</strong> a scholarly review and proposed research agenda; proposed studies are not completed findings.</p>
        <Link className="btn primary" href="/research/consciousness/avadhana">Read the review →</Link>
        <p><Link className="textLink" href="/articles">Browse articles &amp; essays →</Link></p>
      </section>
      <section className={styles.identityCard} aria-labelledby="founder-title">
        <p className="kicker">Founder</p>
        <h2 id="founder-title">Nishant K. Mishra, MD, PhD</h2>
        <p>Neurologist, physician-scientist and student of Sanskrit and Indian Knowledge Systems.</p>
        <p className={styles.identityLine}>Respect tradition. Encourage curiosity. Demand rigor.</p>
        <div className="buttons">
          <Link className="btn secondary" href="/about">About the founder →</Link>
          <Link className="btn secondary" href="/publications">Scientific publications →</Link>
          <Link className="btn secondary" href="/speaking">Invite a lecture →</Link>
          <Link className="btn secondary" href="/collaborate">Collaborate →</Link>
        </div>
        <p><Link className="textLink" href="/articles/ivypandit-letter-october-2026">Read the October IvyPandit Letter →</Link></p>
      </section>
    </main>
  </>;
}
