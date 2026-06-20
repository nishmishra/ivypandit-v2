import Link from 'next/link';

const credentials = [
  ['🎓','MD, Neurology','AIIMS, New Delhi Gold Medalist'],
  ['🧠','PhD, Neuroscience','University of Helsinki, Finland'],
  ['⚕️','Stroke Neurologist','Clinical expertise in stroke and brain health'],
  ['📚','Researcher & Author','Publications in peer-reviewed journals'],
  ['🎤','Speaker','Lectures on neuroscience and Indian Knowledge Systems'],
  ['🌍','Global Perspective','Experience across India, Europe, and the USA']
];

const themeCards = [
  ['🧠','Neuroscience','Understanding the brain, mind, memory, behavior, and modern science.'],
  ['🪷','Consciousness','Exploring consciousness through scientific and philosophical perspectives.'],
  ['📖','Shastra Study','Reading, reflecting, and sharing the wisdom of Sanskrit texts.'],
  ['🕉️','Sanatana Dharma','Learning from timeless principles that guide meaningful life.'],
  ['☀️','Timeless Inquiry','Bridging ancient wisdom and modern evidence for humanity.']
];

export default function Home() {
  return <>
    <section className="heroHero">
      <div className="heroOverlay">
        <div className="heroCopy">
          <p className="kicker">Neuroscience • Sanskrit • Indian Knowledge Systems</p>
          <h1>Dr. Nishant K. Mishra, <span>MD, PhD</span></h1>
          <h2>Exploring Ancient Wisdom Through Modern Neuroscience</h2>
          <p className="lead">A public education platform at the intersection of neuroscience, Sanskrit literature, Indian Knowledge Systems, cognition, consciousness, and human flourishing.</p>
          <div className="heroButtons">
            <a className="cta red" href="https://www.youtube.com/@IvyPandit">▶ Subscribe on YouTube<br/><small>@IvyPandit</small></a>
            <Link className="cta light" href="/speaking">Invite Me to Speak</Link>
          </div>
        </div>
      </div>
    </section>

    <main className="homeMain">
      <section className="featureGrid">
        <article className="featurePanel learningPanel">
          <h2><span/>Featured Learning Series<span/></h2>
          <div className="mediaRow">
            <img src="/images/gayatri-havan.jpg" alt="Gayatri Mantra learning series" />
            <div><h3>Gayatri Mantra: Text, Meaning, and Neuroscience</h3><p>A comprehensive exploration of the Gayatri Mantra including Sanskrit recitation, traditional interpretations, philosophical foundations, and modern neuroscientific perspectives.</p><a className="smallBtn" href="https://youtube.com/playlist?list=PLwQYDVEShtUrQTTjvBffuXE8wWoEnKEXj&si=c76V84a4zyCdKdM_">Watch Playlist →</a></div>
          </div>
        </article>

        <article className="featurePanel shastraPanel">
          <h2><span/>My Journey Through the Shastras<span/></h2>
          <div className="mediaRow">
            <img src="/images/wisdom-guru.jpg" alt="Readings and reflections from the Shastras" />
            <div><h3>IvyPandit Channel Archive</h3><p>All past recordings of my simple readings of the Shastras, shared as the reflections of a lifelong student.</p><a className="smallBtn" href="https://www.youtube.com/@IvyPandit">Visit Channel →</a></div>
          </div>
        </article>

        <article className="featurePanel aboutPanel">
          <h2><span/>About Me<span/></h2>
          <div className="aboutGrid">
            <div><p>I am a neurologist, scientist, and lifelong student of Sanskrit literature.</p><p>I study the brain through modern neuroscience while also reading the timeless wisdom of the Shastras.</p><p>IvyPandit is my attempt to bring these two worlds into conversation with humility, evidence, and thoughtful inquiry.</p><p className="signature">Nishant K. Mishra</p></div>
            <img className="aboutMainImage" src="/images/nishant-varanasi-ghat.jpeg" alt="Dr. Nishant Mishra in Varanasi" />
          </div>
          <div className="thumbStrip"><img src="/images/dr-nishant-mishra.jpeg" alt="Dr Nishant Mishra"/><img src="/images/ivypandit-home-blue.png" alt="IvyPandit blue banner"/><img src="/images/ivypandit-home-gold.png" alt="IvyPandit gold banner"/></div>
        </article>
      </section>

      <section className="themeStrip">
        {themeCards.map(([icon,title,desc]) => <div className="themeCard" key={title}><div>{icon}</div><h3>{title}</h3><p>{desc}</p></div>)}
      </section>

      <section className="credentialStrip">
        {credentials.map(([icon,title,desc]) => <div className="credential" key={title}><div>{icon}</div><h3>{title}</h3><p>{desc}</p></div>)}
      </section>

      <section className="twoColBottom">
        <div className="missionBox"><h2>Our Mission</h2><p>IvyPandit is dedicated to exploring the profound insights of Indian Knowledge Systems through the lens of neuroscience, medicine, psychology, and rigorous scholarship. The mission is to bridge ancient wisdom and modern science for the betterment of humanity.</p></div>
        <div className="connectBox"><h2>Connect with Me</h2><p><a href="mailto:nishant.mishra@ivypandit.com">nishant.mishra@ivypandit.com</a></p><p><a href="https://www.youtube.com/@IvyPandit">YouTube @IvyPandit</a></p><p><a href="https://scholar.google.com/citations?user=1n2JUc8AAAAJ&hl=en">Google Scholar Profile</a></p></div>
      </section>
    </main>
  </>;
}
