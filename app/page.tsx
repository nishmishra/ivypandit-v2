import Link from 'next/link';

export default function Home(){
  return <>
    <section className="hero">
      <div className="heroInner">
        <div className="eyebrow">Neuroscience • Sanskrit • Indian Knowledge Systems</div>
        <h1>IVY PANDIT</h1>
        <h2>Ancient Wisdom. Modern Neuroscience.</h2>
        <p>Exploring the human mind through neuroscience, Sanskrit literature, Indian Knowledge Systems, and timeless questions of human flourishing.</p>
        <div className="heroQuotes">
          <Link className="quotePill" href="/principles#vasudhaiva"><b>वसुधैव कुटुम्बकम्</b><span>The world is one family.</span></Link>
          <Link className="quotePill" href="/principles#ritam"><b>ऋतं च सत्यं च</b><span>Reality and Truth.</span></Link>
        </div>
        <div className="buttons"><Link className="btn primary" href="/videos">Watch Lectures</Link><Link className="btn secondary" href="/shastra-study">Explore the Shastras</Link></div>
      </div>
    </section>
    <section className="band"><div className="principles">
      <Link className="principle" href="/principles#vasudhaiva"><strong>वसुधैव कुटुम्बकम्</strong><span>The world is one family.</span></Link>
      <Link className="principle" href="/principles#ritam"><strong>ऋतं च सत्यं च</strong><span>Reality and Truth.</span></Link>
      <Link className="principle" href="/principles#gita321"><strong>यद्यदाचरति श्रेष्ठः</strong><span>Leadership through example.</span></Link>
      <Link className="principle" href="/principles#gita635"><strong>असंशयं महाबाहो</strong><span>Mastery through practice.</span></Link>
    </div></section>
    <main className="main">
      <section className="missionGrid">
        <div className="missionText"><h2 className="sectionTitle">A Mission for Understanding.<br/>A Legacy for Generations.</h2><p>IvyPandit is an independent educational initiative dedicated to exploring questions of mind, memory, learning, consciousness, ethics, and human flourishing.</p><p>Drawing from neuroscience, medicine, psychology, Sanskrit literature, and the Indian Knowledge Tradition, IvyPandit seeks to promote thoughtful inquiry and respectful dialogue for the good of the world.</p><p>Its purpose is neither advocacy nor dogma, but understanding.</p><Link className="textLink" href="/about">Read the IvyPandit mission →</Link></div>
        <div className="watermark">☀</div>
      </section>
      <section className="journeyCards">
        <div className="card"><div className="icon">▶</div><h3>Watch Lectures</h3><p>Explore talks on neuroscience, consciousness, Sanskrit, IKS, and ancient wisdom for modern life.</p><Link href="/videos">Explore →</Link></div>
        <div className="card"><div className="icon">📖</div><h3>Explore the Shastras</h3><p>A journey through the timeless teachings of the Vedas, Gita, Upanishads, and more.</p><Link href="/shastra-study">Start studying →</Link></div>
        <div className="card"><div className="icon">🔬</div><h3>Research</h3><p>Scientific research, publications, collaborations, and contributions to brain health.</p><Link href="/research">View research →</Link></div>
        <div className="card"><div className="icon">🎙</div><h3>Lectures & Conversations</h3><p>Keynotes, public talks, workshops, podcasts, and conversations that inspire dialogue.</p><Link href="/speaking">Invite / Collaborate →</Link></div>
      </section>
      <section className="featured"><h2 className="sectionTitle">Featured Series</h2><div className="seriesGrid">
        <Link className="series" href="https://youtube.com/playlist?list=PLwQYDVEShtUrQTTjvBffuXE8wWoEnKEXj&si=c76V84a4zyCdKdM_"><img src="/images/gayatri-havan.jpg" alt="Gayatri"/><b>Gayatri and Neuroplasticity</b></Link>
        <Link className="series" href="/videos#sanskrit-brain"><img src="/images/constitution-dharma.jpg" alt="Sanskrit"/><b>Sanskrit and Cognition</b></Link>
        <Link className="series" href="/videos#gurukul"><img src="/images/wisdom-guru.jpg" alt="Gurukul"/><b>Gurukul and Attention</b></Link>
        <Link className="series" href="/mahabharata"><img src="/images/cultural-page-banner.jpg" alt="Mahabharata"/><b>Mahabharata and the Brain</b></Link>
        <Link className="series" href="/research#stroke-program-india"><img src="/images/ivypandit-home-blue.jpg" alt="Brain health"/><b>Stroke Program for India</b></Link>
        <Link className="series" href="/articles"><img src="/images/ganga-sunset.jpg" alt="Hygiene"/><b>Hygiene Before Germ Theory</b></Link>
      </div></section>
      <div className="noteBar">IvyPandit is independent. The views expressed are personal, hypothesis-generating, and intended to stimulate thoughtful inquiry. They do not constitute medical advice and do not represent the views of any employer or institution.</div>
    </main>
  </>
}
