import Link from 'next/link';

export default function About(){return <>
  <section className="pageHero"><div className="eyebrow">About the platform</div><h1>About IvyPandit</h1><p>An independent scholarly and educational platform built around respect for tradition, curiosity, scientific rigor, and public access to knowledge.</p></section>
  <main className="content">
    <div className="twoCol">
      <section className="panel"><h2>Why IvyPandit exists</h2><p>IvyPandit seeks to create serious dialogue between Sanskrit scholarship, Indian Knowledge Systems, contemporary science, medicine, humanities, and public education.</p><p>It is not designed to prove predetermined claims. It is designed to make sources visible, questions sharper, evidence clearer, and interdisciplinary conversations easier.</p><p className="quoteBlock">परम्परा • जिज्ञासा • अनुसन्धानम्<br/><small>Tradition • Curiosity • Inquiry</small></p></section>
      <section className="panel"><h2>Built to grow beyond one person</h2><p>IvyPandit begins with the scholarship, teaching, and curation of its founder, but its long-term purpose is broader: a useful platform where colleagues can contribute perspectives, resources, criticism, scholarship, and dialogue.</p><p>Public material is intended to remain transparent about authorship, evidence status, uncertainty, and editorial responsibility.</p><Link className="textLink" href="/editorial-policy">Read the Editorial & Evidence Policy →</Link></section>
    </div>

    <section id="founder" className="twoCol" style={{marginTop:'28px',alignItems:'center'}}>
      <div><img className="photo" src="/images/nishant-varanasi-boat.jpeg" alt="Nishant K. Mishra in Varanasi" loading="lazy"/></div>
      <div className="panel">
        <p className="kicker">Founder</p>
        <h2>Nishant K. Mishra, MD, PhD</h2>
        <p>Dr. Nishant K. Mishra is a neurologist, physician-scientist, educator, and public scholar. His scientific work spans stroke, neuroimaging, post-stroke epilepsy, brain health, clinical research, cognition, language, and neuroplasticity.</p>
        <p>His work through IvyPandit reflects a longstanding interest in Sanskrit literature, Indian Knowledge Systems, multilingualism, and the question of how classical traditions and modern scientific inquiry can enter a disciplined conversation without collapsing one into the other.</p>
        <p><b>Founder’s note:</b> I am not presenting myself as a traditional Ācārya or Guru. I am a physician-scientist and a lifelong student of Sanskrit literature. IvyPandit is an attempt to learn publicly, ask serious questions, invite correction, and build useful bridges with humility.</p>
        <div className="buttons" style={{justifyContent:'flex-start'}}><Link className="btn primary" href="/research">Scientific Work</Link><Link className="btn secondary" href="/speaking">Lectures & Speaking</Link><a className="btn secondary" href="https://scholar.google.com/citations?user=1n2JUc8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a></div>
      </div>
    </section>

    <section className="panel" style={{marginTop:'28px'}}><h2>Editorial ethos</h2><p><b>Respect tradition. Encourage curiosity. Demand rigor.</b></p><p>Traditional sources deserve understanding in their own intellectual and historical contexts. Scientific claims deserve evidence. Hypotheses should be identified as hypotheses, interpretations as interpretations, and uncertainty should remain visible.</p><div className="buttons" style={{justifyContent:'flex-start'}}><Link className="btn secondary" href="/editorial-policy">Editorial Policy</Link><Link className="btn secondary" href="/collaborate">Collaborate</Link></div></section>

    <section className="missionBox"><h2>वसुधैव कुटुम्बकम्</h2><p>The world is one family. IvyPandit aims to make scholarship and inquiry useful across disciplines, communities, cultures, and generations.</p></section>
  </main>
</>}
