import Link from 'next/link';

const sampleRecords = [
  {
    type: 'PRIMARY SOURCE RECORD',
    title: 'Ṛgveda 10.190.1 — Ṛta, satya, and cosmic emergence',
    text: 'A source record connecting the Sanskrit verse, textual location, interpretive notes, and questions about how Vedic literature conceptualizes order, truth, causation, and emergence.',
    status: 'Source cited • interpretation separated from science',
    href: 'https://vedicheritage.gov.in/samhitas/rigveda/'
  },
  {
    type: 'SBKB PILOT RECORD',
    title: 'Caraka Saṃhitā Sūtrasthāna 21.36–38 — sleep and well-being',
    text: 'A classical medical passage describing sleep in relation to strength, nourishment, knowledge, well-being, and longevity. The modern research question is not whether Caraka “discovered sleep science,” but which observations can be mapped responsibly to contemporary sleep research.',
    status: 'Text located • modern mapping remains a hypothesis',
    href: 'https://carakasamhitaonline.com/index.php?title=Ashtauninditiya_Adhyaya'
  },
  {
    type: 'RESEARCH QUESTION RECORD',
    title: 'Avadhāna — attention, working memory, interference, and expertise',
    text: 'A research scaffold linking the living performance tradition to terminology, practitioner expertise, cognitive tasks, candidate controls, and questions for future behavioral or neuroimaging studies.',
    status: 'Open question • collaborators invited',
    href: '/questions'
  }
];

export default function Repository(){return <>
  <section className="pageHero"><div className="eyebrow">Public pilot • Interdisciplinary Inquiry</div><h1>Knowledge Repository Pilot</h1><p>Three representative records linking a textual source, its context and a question for investigation. This is a small pilot, not a complete searchable database.</p></section>
  <main className="content">
    <section aria-labelledby="pilot-records-title">
      <h2 id="pilot-records-title">Explore the pilot records</h2>
      <div className="resourceGrid">
        {sampleRecords.map(record=><article className="panel" key={record.title}><small className="label">{record.type}</small><h3>{record.title}</h3><p>{record.text}</p><p><b>Evidence status:</b> {record.status}</p>{record.href.startsWith('/') ? <Link className="textLink" href={record.href}>Explore the research question →</Link> : <a className="textLink" href={record.href} target="_blank" rel="noopener noreferrer">Read the source →</a>}</article>)}
      </div>
    </section>
    <section className="panel" style={{marginTop:28}}><h2>Continue with available resources</h2><div className="buttons" style={{justifyContent:'flex-start'}}><Link className="btn secondary" href="/evidence">Evidence Library →</Link><Link className="btn secondary" href="/questions">Research questions →</Link><Link className="btn secondary" href="/iks">IKS resources →</Link><Link className="btn secondary" href="/sbkb">Biomedical knowledge pilot →</Link></div></section>
    <details className="panel" style={{marginTop:28}}><summary><b>Development plan &amp; contribution</b></summary><p>Future work includes structured editions and translations, linked bibliographies, additional records and clearly labelled working papers. These features are in development. The pilot uses portable formats so records can be expanded without depending on one hosting platform.</p><p>Source → Context → Interpretation → Research question → Scientific evidence</p><Link className="textLink" href="/collaborate">Help refine a record or contribute expertise →</Link></details>
  </main>
</>}
