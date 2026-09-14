import Link from 'next/link';

export default function SBKB(){return <>
  <section className="pageHero"><div className="eyebrow">Sanskrit Biomedical Knowledge Base</div><h1>SBKB</h1><p>From carefully documented textual observations to transparent, testable research questions.</p></section>
  <main className="content">
    <div className="twoCol">
      <section className="panel"><h2>What SBKB is</h2><p>The Sanskrit Biomedical Knowledge Base is an independent scholarly initiative for the systematic study of medically and scientifically relevant observations preserved in Sanskrit literature.</p><p>Its purpose is to make sources traceable, concepts interpretable, claims explicit, and research questions testable.</p></section>
      <section className="panel"><h2>What SBKB is not</h2><p>SBKB does not treat ancient texts as modern medical textbooks and does not assume that textual similarity establishes scientific validation.</p><p>Philology, historical context, conceptual analysis, and empirical testing are separate steps.</p></section>
    </div>

    <section className="panel"><h2>Core workflow</h2><div className="flowLine"><span>Sanskrit source</span><b>→</b><span>Philology</span><b>→</b><span>Observation</span><b>→</b><span>Conceptual mapping</span><b>→</b><span>Research question</span><b>→</b><span>Scientific study</span></div></section>

    <section className="panel" style={{marginTop:'26px'}}>
      <p className="kicker">Representative pilot record</p>
      <h2>Caraka Saṃhitā, Sūtrasthāna 21.36–38 — Sleep and well-being</h2>
      <p className="quoteBlock">निद्रायत्तं सुखं दुःखं पुष्टिः कार्श्यं बलाबलम् ।<br/>वृषता क्लीबता ज्ञानमज्ञानं जीवितं न च ॥</p>
      <p><b>Source:</b> Caraka Saṃhitā, Sūtrasthāna 21.36–38. The passage links appropriate and inappropriate sleep with nourishment, strength, knowledge, well-being, and longevity.</p>
      <p><b>Traditional observation:</b> sleep is treated as a major determinant of bodily and mental well-being, and both excessive/untimely sleep and deprivation are described as harmful.</p>
      <p><b>Modern conceptual mapping:</b> sleep duration, timing, regularity, cognition, metabolic health, mood, and functional outcomes are contemporary domains that can be compared carefully with the classical observation.</p>
      <p><b>Evidence status:</b> the Sanskrit passage is a historical medical source. Similarity to modern sleep science does not validate every classical explanatory model or prescription.</p>
      <p><b>Research question:</b> Which observations in classical Ayurvedic sleep descriptions are specific enough to map to measurable modern sleep-health variables without forcing false equivalence?</p>
      <p><a className="textLink" href="https://carakasamhitaonline.com/index.php?title=Ashtauninditiya_Adhyaya" target="_blank" rel="noopener noreferrer">View a searchable edition and translation →</a></p>
    </section>

    <div className="principleGrid" style={{marginTop:'26px'}}><div><b>Philological rigor</b><p>Read the source carefully and preserve context.</p></div><div><b>Scientific integrity</b><p>Separate observation, interpretation, hypothesis, and evidence.</p></div><div><b>Interdisciplinary collaboration</b><p>Bring Sanskrit scholars and scientists into the same research process.</p></div><div><b>Empirical openness</b><p>Let good questions survive even when the answer challenges expectations.</p></div></div>

    <section className="missionBox"><h2>Help build the knowledge base.</h2><p>Sanskritists, historians of medicine, clinicians, scientists, and data scholars are invited to help refine the record structure, source standards, and research questions.</p><div className="buttons"><Link className="btn secondary" href="/collaborate">Collaborate</Link><Link className="btn secondary" href="/repository">Repository framework</Link></div></section>
  </main>
</>}
