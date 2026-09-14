import Link from 'next/link';

export default function Page() { return <main>
  <section className="pageHero"><div className="eyebrow">Study hub • Itihāsa • Human experience</div><h1>Mahābhārata Study Hub</h1><p>Leadership, conflict, dharma, memory, grief, moral complexity, and questions for contemporary scholarship.</p></section>
  <section className="content">
    <div className="twoCol">
      <section className="panel"><p className="kicker">Text first</p><h2>A vast narrative world</h2><p>The Mahābhārata is not a modern psychology manual. It is an Itihāsa with layered narrative, dharma discourse, political thought, theology, family conflict, ritual, and philosophical reflection. Interdisciplinary study should begin with the text and its commentarial traditions.</p></section>
      <section className="panel"><p className="kicker">Contemporary questions</p><h2>Why it still matters</h2><p>The epic offers unusually rich material for thinking about decision-making, loyalty, leadership, grief, moral injury, identity, memory, death, and competing obligations. These themes can generate questions for humanities and behavioral science without reducing the text to modern categories.</p></section>
    </div>

    <section className="resourceGrid" style={{marginTop:'28px'}}>
      <Link className="panel linkedCard" href="/speaking/bhagavad-gita-cognitive-reframing-resilience"><span className="label">LECTURE</span><h2>Arjuna, Crisis & Cognitive Reframing</h2><p>A lecture on the Gītā’s opening crisis and disciplined comparison with modern psychology.</p><span>Explore →</span></Link>
      <Link className="panel linkedCard" href="/questions#bhishma-end-of-life-cognition"><span className="label">RESEARCH QUESTION</span><h2>Bhīṣma, memory & end-of-life cognition</h2><p>A source-conscious invitation involving Sanskrit scholarship, medical humanities, palliative care, and neuroscience.</p><span>Open question →</span></Link>
      <a className="panel linkedCard" href="https://www.youtube.com/@IvyPandit/search?query=Mahabharata" target="_blank" rel="noopener noreferrer"><span className="label">VIDEO COLLECTION</span><h2>Mahābhārata on IvyPandit</h2><p>Talks on dharma, character, leadership, human behavior, and interdisciplinary inquiry.</p><span>Browse videos →</span></a>
    </section>

    <section className="panel"><p className="kicker">Study themes</p><h2>Possible pathways</h2><div className="outcomeCloud"><span>Dharma & moral conflict</span><span>Leadership & counsel</span><span>Grief & loss</span><span>Memory & identity</span><span>Family systems</span><span>Power & resentment</span><span>End-of-life narratives</span><span>Human agency</span></div></section>
  </section>
</main> }
