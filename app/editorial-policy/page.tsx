import Link from 'next/link';

export default function EditorialPolicy(){return <>
  <section className="pageHero">
    <div className="eyebrow">Transparency • Evidence • Scholarship</div>
    <h1>Editorial & Evidence Policy</h1>
    <p>How IvyPandit distinguishes textual sources, traditional interpretation, research hypotheses, scientific evidence, and public commentary.</p>
  </section>
  <main className="content">
    <section className="callout"><b>Core ethos:</b> Respect tradition. Encourage curiosity. Demand rigor. Tradition deserves understanding before judgment; empirical claims deserve evidence before acceptance.</section>

    <section className="panel">
      <h2>Five categories that must not be collapsed into one another</h2>
      <div className="evidenceGrid">
        <div><b>Primary source</b><p>What a text, manuscript, inscription, commentary, or recorded practice actually says or documents.</p></div>
        <div><b>Traditional interpretation</b><p>How a source has been understood within a school, lineage, commentary tradition, community, or living practice.</p></div>
        <div><b>Research hypothesis</b><p>A question or proposed relationship that is plausible enough to investigate but has not yet been established.</p></div>
        <div><b>Scientific evidence</b><p>Findings that have been measured using explicit methods, with limitations, uncertainty, and replication status kept visible.</p></div>
      </div>
      <p style={{marginTop:'18px'}}><b>Public commentary</b> may connect these categories for educational purposes, but it should state clearly when it is interpreting, speculating, or extrapolating.</p>
    </section>

    <section className="twoCol" style={{marginTop:'26px'}}>
      <div className="panel"><h2>Ancient texts and modern science</h2><p>IvyPandit does not assume that an ancient textual statement is scientifically validated because it resembles modern terminology. Historical importance, philosophical depth, theological meaning, and empirical confirmation are different questions.</p><p>Likewise, modern science is not the only meaningful form of intellectual inquiry. Questions of metaphysics, theology, ethics, meaning, and lived tradition may require other scholarly methods.</p></div>
      <div className="panel"><h2>Uncertainty remains visible</h2><p>Where evidence is preliminary, mixed, indirect, absent, or disputed, the presentation should say so. A negative or unexpected result is not a failure of scholarship; it is information.</p><p>Where a traditional source can generate a scientifically tractable question, the question should be framed before the answer is assumed.</p></div>
    </section>

    <section className="panel" style={{marginTop:'26px'}}>
      <h2>Publication labels</h2>
      <p>Substantive contributions should be identified by their actual status. Appropriate labels include:</p>
      <div className="outcomeCloud"><span>Peer-reviewed publication</span><span>Scholarly essay</span><span>Perspective</span><span>Working paper</span><span>Research proposal</span><span>Lecture / transcript</span><span>Hypothesis</span><span>Research question</span><span>Traditional exposition</span></div>
      <p>A working paper or perspective will not be described as peer reviewed unless it has actually undergone that process.</p>
    </section>

    <section className="panel" style={{marginTop:'26px'}}>
      <h2>Sources, corrections & conflicts</h2>
      <p>Where practical, scholarly essays should identify primary textual sources and scientific references. Corrections should be made when errors are identified. Sponsorship, institutional support, or collaboration should not determine scholarly conclusions.</p>
      <p>Medical or scientific discussions are educational and do not constitute individual diagnosis or treatment advice.</p>
    </section>

    <section className="missionBox"><h2>Questions before claims.</h2><p>The purpose of IvyPandit is not to force agreement between tradition and science. It is to make better questions possible by taking both scholarship and evidence seriously.</p><div className="buttons"><Link className="btn secondary" href="/questions">Explore research questions</Link><Link className="btn secondary" href="/collaborate">Collaborate</Link></div></section>
  </main>
</>}
