import Link from 'next/link';
import SectionPathways from '../components/SectionPathways';
import styles from './home.module.css';

export default function Home() {
  return <>
    <section className={`hero ${styles.compactHero}`}>
      <div className="heroInner">
        <div className="eyebrow">Sanskrit • Indian Knowledge Systems • Neuroscience</div>
        <h1>IVY PANDIT</h1>
        <h2>Religious Study &amp; Scientific Research</h2>
        <p>Study Hindu texts and traditions, explore neuroscience and medicine, or follow clearly labelled interdisciplinary questions.</p>
      </div>
    </section>
    <main className="main">
      <SectionPathways />
      <section className={`panel ${styles.welcome}`} aria-labelledby="welcome-title">
        <div>
          <p className="kicker">Start here</p>
          <h2 id="welcome-title">Welcome to IvyPandit</h2>
          <p>Religious Study begins with texts, commentary and practice. Science &amp; Research presents scientific work, publications and evidence. Interdisciplinary Inquiry explores connections as interpretations and questions for investigation.</p>
          <p>Choose a subject above, or begin with our five-video introduction. Each lecture links to notes, sources and a next step.</p>
        </div>
        <div className={styles.welcomeLinks}>
          <Link className="btn primary" href="/start-here">Start Here: five videos →</Link>
          <Link className="textLink" href="/learn/introducing-ivypandit">Original introduction • Sanskrit →</Link>
          <Link className="textLink" href="/editorial-policy">Our editorial &amp; evidence policy →</Link>
        </div>
      </section>
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
