import Link from 'next/link';

export default function Page() { return <main>
  <section className="pageHero"><div className="eyebrow">Study hub • Mantra • Sandhyā • Inquiry</div><h1>Gāyatrī Study Hub</h1><p>Primary source, traditional meaning, contemplative practice, lectures, essays, and responsible research questions.</p></section>
  <section className="content">
    <div className="twoCol">
      <section className="panel"><p className="kicker">Primary source</p><h2>Ṛgveda 3.62.10</h2><p className="quoteBlock">तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।<br/>धियो यो नः प्रचोदयात् ॥</p><p>The mantra invokes Savitṛ and culminates in a prayer concerning the illumination or guidance of <i>dhī</i> — intellect, insight, or discerning thought.</p><a className="textLink" href="https://vedicheritage.gov.in/samhitas/rigveda/" target="_blank" rel="noopener noreferrer">Vedic Heritage Portal →</a></section>
      <section className="panel"><p className="kicker">Traditional practice</p><h2>Gāyatrī in lived tradition</h2><p>Gāyatrī is embedded in lineages of recitation, Sandhyāvandana, initiation, daily discipline, breath, attention, contemplation, and theological meaning. Those dimensions should be understood before isolating any one component for scientific study.</p><p><b>Method:</b> source → commentary → lived practice → research question → evidence.</p></section>
    </div>

    <section className="featuredTalks" style={{marginTop:'30px',marginBottom:'34px'}}>
      <div className="sectionHeaderRow"><div><p className="kicker">Featured lecture • Hindi</p><h2 className="sectionTitle">Sandhyopāsanā, Saṃskāra & the Developing Brain</h2></div><a className="textLink" href="https://youtu.be/vArP8eE0ROU" target="_blank" rel="noopener noreferrer">Watch on YouTube →</a></div>
      <div className="talkGrid">
        <div className="videoEmbed"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/vArP8eE0ROU" title="Sandhyopasana, Samskara, brain development and modern science" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
        <div className="talkCopy"><span className="label">SANDHYĀ • GĀYATRĪ • NEUROSCIENCE</span><h3>How should a traditional daily practice be studied?</h3><p>This Hindi lecture examines Sandhyopāsanā as a multi-component discipline involving prāṇāyāma, Gāyatrī-japa, attention, meaning, imagery, self-regulation, and daily routine.</p><p>The scientific question is not whether tradition should be declared proven in advance, but how these components might be characterized faithfully and tested with appropriate behavioral, physiological, EEG, or future neuroimaging methods.</p><Link className="textLink" href="/questions#nityakarma-sandhya-daily-practice">Related research question →</Link><br/><Link className="textLink" href="/articles/gayatri-neuroplasticity">Read the related scholarly essay →</Link></div>
      </div>
    </section>

    <section className="resourceGrid" style={{marginTop:'28px'}}>
      <Link className="panel linkedCard" href="/articles/gayatri-neuroplasticity"><span className="label">SCHOLARLY ESSAY</span><h2>Gāyatrī & Neuroplasticity</h2><p>What attention, repetition, meaning, breath, and developmental neuroscience can — and cannot yet — tell us.</p><span>Read essay →</span></Link>
      <Link className="panel linkedCard" href="/speaking/gayatri-samskara-developing-brain"><span className="label">LECTURE</span><h2>Gāyatrī, Saṃskāra & the Developing Brain</h2><p>A public lecture framework for parents, educators, Sanskrit institutions, temples, and interdisciplinary audiences.</p><span>Explore lecture →</span></Link>
      <a className="panel linkedCard" href="https://www.youtube.com/@IvyPandit/search?query=Gayatri" target="_blank" rel="noopener noreferrer"><span className="label">VIDEO COLLECTION</span><h2>Gāyatrī on IvyPandit</h2><p>Talks and reflections on mantra, Sandhyā, meaning, cognition, and tradition.</p><span>Browse videos →</span></a>
    </section>

    <section className="panel"><p className="kicker">Research questions</p><h2>What could be studied responsibly?</h2><ul><li>How do meaning and intention alter the effects of repeated recitation?</li><li>What are the separable contributions of breath, rhythm, sound, attention, imagery, and social context?</li><li>How should childhood practice be studied without confusing cultural participation with a single intervention?</li><li>Which outcomes are plausible to measure, and which claims remain theological or philosophical rather than empirical?</li></ul><Link className="textLink" href="/questions#nityakarma-sandhya-daily-practice">Related open research question →</Link></section>
  </section>
</main> }
