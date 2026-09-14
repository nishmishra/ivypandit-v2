import Link from 'next/link';

export default function Page() { return <main>
  <section className="pageHero"><div className="eyebrow">Study hub • Saṃskāra • Preconception health</div><h1>Garbhādhāna Study Hub</h1><p>Traditional responsibility before conception, modern preconception health, and careful limits on epigenetic analogy.</p></section>
  <section className="content">
    <div className="twoCol">
      <section className="panel"><p className="kicker">Traditional frame</p><h2>Preparation and responsibility</h2><p>Garbhādhāna belongs to a wider saṃskāra framework in which family formation is treated as morally and ritually significant. Textual traditions, regional practice, and later interpretation are not uniform and should be studied carefully.</p></section>
      <section className="panel"><p className="kicker">Modern scientific frame</p><h2>Preconception health</h2><p>Modern medicine can ask evidence-based questions about parental health, nutrition, toxins, medications, stress, sleep, metabolic disease, reproductive biology, and other exposures before conception. These findings do not establish the scientific validity of every ritual or theological claim.</p></section>
    </div>

    <section className="resourceGrid" style={{marginTop:'28px'}}>
      <Link className="panel linkedCard" href="/articles/garbhadhana-epigenetics"><span className="label">SHORT REFLECTION</span><h2>Garbhādhāna & Epigenetics</h2><p>A cautious introduction to where traditional ideas of preparation and modern biology can enter conversation.</p><span>Read →</span></Link>
      <a className="panel linkedCard" href="https://www.youtube.com/@IvyPandit/search?query=Garbhadhana" target="_blank" rel="noopener noreferrer"><span className="label">VIDEO COLLECTION</span><h2>Related IvyPandit talks</h2><p>Public-facing discussion of saṃskāra, family preparation, health, and intergenerational questions.</p><span>Browse videos →</span></a>
      <Link className="panel linkedCard" href="/editorial-policy"><span className="label">METHOD</span><h2>Evidence before analogy</h2><p>How IvyPandit separates traditional meaning, biological plausibility, research hypotheses, and empirical evidence.</p><span>Read policy →</span></Link>
    </section>

    <section className="panel"><p className="kicker">Research questions</p><h2>What is scientifically tractable?</h2><ul><li>Which preconception exposures have credible evidence for effects on reproductive or offspring health?</li><li>How should ritual, intention, health behavior, family support, and biological exposure be separated analytically?</li><li>Where is “epigenetics” being used appropriately, and where has it become an overly broad metaphor?</li></ul></section>
  </section>
</main> }
