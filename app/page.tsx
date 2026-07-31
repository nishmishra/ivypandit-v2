import Link from 'next/link';

export default function Home() {
  return <>
    <section className="hero">
      <div className="heroInner">
        <div className="eyebrow">Sanskrit • Indian Knowledge Systems • Science • Public Scholarship</div>
        <h1>IVY PANDIT</h1>
        <h2>Ancient Wisdom. Modern Neuroscience.</h2>
        <p>A scholarly and educational platform for respectful engagement with tradition, scientific curiosity, and rigorous interdisciplinary inquiry.</p>
        <div className="heroQuotes">
          <span className="quotePill"><b>परम्परा</b><span>Respect tradition.</span></span>
          <span className="quotePill"><b>जिज्ञासा</b><span>Encourage curiosity.</span></span>
          <span className="quotePill"><b>अनुसन्धानम्</b><span>Demand rigor.</span></span>
        </div>
        <div className="buttons">
          <Link className="btn primary" href="/iks">Explore IKS</Link>
          <Link className="btn secondary" href="/research">Explore Research</Link>
        </div>
      </div>
    </section>

    <main className="main">
      <section className="manifesto">
        <p className="kicker">The IvyPandit approach</p>
        <h2 className="sectionTitle">Tradition deserves understanding before judgment.<br/>Scientific claims deserve evidence before acceptance.</h2>
        <p>IvyPandit studies Sanskrit and Indian Knowledge Systems with respect for their historical and intellectual contexts while asking new questions through neuroscience, medicine, cognitive science, behavioral science, and other modern disciplines.</p>
        <p>Its purpose is not to prove that ancient texts anticipated modern science, nor to dismiss traditional knowledge because it is old. The goal is to understand carefully, ask better questions, distinguish evidence from interpretation, and make useful knowledge accessible.</p>
      </section>

      <section className="gatewayGrid" aria-label="Explore IvyPandit">
        <Link className="gatewayCard" href="/iks"><span>01</span><h3>IKS Hub</h3><p>A curated gateway to literature, institutions, journals, archives, educational opportunities, scholars, and the growing IvyPandit Knowledge Repository.</p><strong>Explore the hub →</strong></Link>
        <Link className="gatewayCard" href="/shastra-study"><span>02</span><h3>Śāstra & Sanskrit</h3><p>Texts, recitations, traditions, commentaries, study pathways, and direct engagement with India&apos;s classical knowledge traditions.</p><strong>Enter the library →</strong></Link>
        <Link className="gatewayCard" href="/research"><span>03</span><h3>Science & Research</h3><p>Brain health, neuroscience, cognition, cultural expertise, scientific methods, publications, and interdisciplinary research questions.</p><strong>View research →</strong></Link>
        <Link className="gatewayCard" href="/videos"><span>04</span><h3>Learn & Watch</h3><p>Curated lectures, conversations, recitations, and educational series — with the full IvyPandit YouTube archive connected to the website.</p><strong>Explore talks →</strong></Link>
      </section>

      <section className="initiativeSection">
        <div>
          <p className="kicker">Research infrastructure</p>
          <h2 className="sectionTitle">From source to question to evidence.</h2>
          <p>IvyPandit is being built as more than a collection of webpages. Structured repositories will connect classical sources, modern scholarship, research questions, working papers, lectures, and future datasets.</p>
          <div className="flowLine"><span>Source</span><b>→</b><span>Interpretation</span><b>→</b><span>Question</span><b>→</b><span>Evidence</span><b>→</b><span>Scholarship</span><b>→</b><span>Public learning</span></div>
        </div>
        <div className="initiativeCards">
          <Link className="initiativeCard" href="/sbkb"><small>FLAGSHIP INITIATIVE</small><h3>Sanskrit Biomedical Knowledge Base</h3><p>A structured program to identify medically and scientifically relevant observations in Sanskrit literature and translate them into transparent, testable research questions.</p><strong>Discover SBKB →</strong></Link>
          <Link className="initiativeCard" href="/questions"><small>INVITATION TO INQUIRY</small><h3>Research Questions & Collaborations</h3><p>Short, carefully framed questions at the meeting point of Sanskrit scholarship and contemporary science — shared to invite discussion, textual expertise, interdisciplinary projects, and future collaborative funding proposals.</p><strong>Explore the questions →</strong></Link>
        </div>
      </section>

      <section className="featuredTalks">
        <div className="sectionHeaderRow"><div><p className="kicker">Featured talks</p><h2 className="sectionTitle">Ideas are easier to explore when you can hear the argument.</h2></div><Link className="textLink" href="/videos">All talks →</Link></div>
        <div className="talkGrid">
          <div className="videoEmbed"><iframe src="https://www.youtube-nocookie.com/embed/CbtzXqFRGKI" title="Featured IvyPandit talk" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
          <div className="talkCopy"><span className="label">FEATURED LONG-FORM TALK</span><h3>Sanskrit, Indian Knowledge Systems & Scientific Inquiry</h3><p>A selected lecture representing the IvyPandit approach: engage classical knowledge with respect, remain curious about the questions it raises, and distinguish textual interpretation from hypotheses and scientific evidence. Scholars whose expertise intersects with these themes are warmly invited to continue the conversation.</p><a className="textLink" href="https://youtu.be/CbtzXqFRGKI" target="_blank" rel="noopener noreferrer">Watch on YouTube →</a><br/><a className="textLink" href="mailto:nishant.mishra@ivypandit.com?subject=IvyPandit%20featured%20talk">Discuss this talk →</a></div>
        </div>
      </section>

      <section className="evidenceSection">
        <p className="kicker">A simple rule</p>
        <h2 className="sectionTitle">Do not blur the layers.</h2>
        <div className="evidenceGrid">
          <div><b>Classical source</b><p>What does the text actually say?</p></div>
          <div><b>Traditional interpretation</b><p>How has the idea been understood within its own tradition?</p></div>
          <div><b>Research question</b><p>What new hypothesis or inquiry might the source inspire?</p></div>
          <div><b>Scientific evidence</b><p>What has actually been tested, measured, replicated, or remains uncertain?</p></div>
        </div>
      </section>

      <section className="missionBox">
        <h2>वसुधैव कुटुम्बकम्</h2>
        <p>The world is one family. IvyPandit treats knowledge as humanity&apos;s shared inheritance and seeks dialogue across traditions, disciplines, cultures, and generations for the good of the wider world.</p>
      </section>
    </main>
  </>;
}
