import Link from 'next/link';

export default function Home() {
  return <>
    <section className="hero">
      <div className="heroGrid">
        <div>
          <p className="kicker">Neuroscience • Sanskrit • Indian Knowledge Systems</p>
          <h1>Ancient Wisdom. Modern Neuroscience.</h1>
          <h2>Nishant K. Mishra, MD, PhD</h2>
          <p className="lead">Exploring questions of mind, memory, learning, consciousness, and human flourishing through neuroscience and the Indian knowledge tradition.</p>
          <div className="btns"><Link className="btn" href="/videos">Watch Lectures</Link><Link className="btn secondary" href="/shastra-study">Read Shastra Notes</Link><Link className="btn secondary" href="/speaking">Invite Me to Speak</Link></div>
        </div>
        <div className="heroImage"><img src="/images/ivypandit-channel-banner.png" alt="IvyPandit banner with science, Sanskrit, and Varanasi imagery" /></div>
      </div>
    </section>
    <main>
      <section className="section notice">
        <h2>What is IvyPandit?</h2>
        <p>IvyPandit is a scholarly public education platform created by Dr. Nishant K. Mishra to explore the intersection of neuroscience, Sanskrit literature, Indian Knowledge Systems, cognition, meditation, ethics, and human flourishing. The goal is neither blind acceptance nor dismissal, but careful, evidence-informed inquiry.</p>
      </section>
      <section className="section">
        <h2>Core Pillars</h2>
        <div className="grid">
          {[
            ['Videos & Transcripts','A growing lecture library connecting shastra, neuroscience, cognition, and contemporary life.','/videos'],
            ['My Journey Through the Shastras','Simple readings, notes, translations, and reflections from the Vedas, Gita, Mahabharata, Ramayana, and Puranas.','/shastra-study'],
            ['Research Background','Scientific publications, Google Scholar profile, and research interests in brain health, stroke, cognition, and neuroplasticity.','/research'],
            ['Speaking Engagements','Lectures for universities, medical schools, Sanskrit departments, temples, cultural organizations, and conferences.','/speaking'],
            ['Support IvyPandit','Support the educational mission through speaking invitations, collaborations, workshops, and donations.','/support'],
            ['English • हिन्दी • संस्कृतम्','Separate language pages to make this work accessible to a wider audience.','/hi']
          ].map(([t,d,u])=><div className="card" key={t}><h3>{t}</h3><p>{d}</p><Link href={u}>Explore →</Link></div>)}
        </div>
      </section>
      <section className="section">
        <h2>Featured Lecture Playlist</h2>
        <p className="lead">All shastra and neuroscience talks are collected in one YouTube playlist.</p>
        <div className="embed"><iframe src="https://www.youtube.com/embed/videoseries?list=PLwQYDVEShtUqlbNhL2Rc53GbmzziVtgwN" title="IvyPandit Lecture Playlist" allowFullScreen></iframe></div>
      </section>
    </main>
  </>;
}
