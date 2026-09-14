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
  <section className="pageHero"><div className="eyebrow">Portable knowledge infrastructure</div><h1>IvyPandit Knowledge Repository</h1><p>A structured home for the indexed literature, sources, research questions, and scholarly resources that sit behind the public website.</p></section>
  <main className="content">
    <div className="callout"><b>Built for durability.</b> The repository is being organized in open, portable formats so the intellectual collection can survive changes in hosting platforms, databases, or website technology.</div>

    <section className="panel" style={{marginBottom:'28px'}}>
      <p className="kicker">Public pilot</p>
      <h2>Representative records</h2>
      <p>These examples show the direction of the repository: a source, its context, evidence status, and the next scholarly or scientific question should remain connected.</p>
      <div className="resourceGrid" style={{marginTop:'18px'}}>
        {sampleRecords.map((record)=><article className="panel" key={record.title}><small className="label">{record.type}</small><h3>{record.title}</h3><p>{record.text}</p><p><b>Evidence status:</b> {record.status}</p>{record.href.startsWith('/') ? <Link className="textLink" href={record.href}>Open related record →</Link> : <a className="textLink" href={record.href} target="_blank" rel="noopener noreferrer">Open source →</a>}</article>)}
      </div>
    </section>

    <div className="resourceGrid">
      <section className="panel"><h2>Indexed Literature</h2><p>Modern papers, books, reviews, translations, commentaries, and bibliographic records organized by theme, source tradition, scientific domain, and project.</p><span className="statusBadge">Catalogue being prepared</span></section>
      <section className="panel"><h2>Texts & Passages</h2><p>Structured references to Sanskrit texts and passages, with room for editions, translations, notes, traditional context, themes, and links to related research.</p><span className="statusBadge">Schema established</span></section>
      <section className="panel"><h2>Research Questions</h2><p>Questions generated from textual study and interdisciplinary scholarship, linked to evidence status, feasibility, related literature, projects, and future studies.</p><span className="statusBadge">Repository scaffolded</span></section>
      <section className="panel"><h2>IKS Resources</h2><p>Curated institutions, journals, archives, digital tools, educational pathways, conferences, fellowships, and other resources useful to the IKS community.</p><span className="statusBadge">Curation in progress</span></section>
      <section className="panel"><h2>SBKB Records</h2><p>Biomedical and scientifically investigable observations from Sanskrit literature, kept distinct from modern evidence and linked to testable research questions.</p><Link className="textLink" href="/sbkb">Explore SBKB →</Link></section>
      <section className="panel"><h2>Working Papers</h2><p>Versioned scholarly documents with stable metadata, downloadable PDFs, explicit review status, and links to later formal publications when available.</p><Link className="textLink" href="/perspectives">Working-paper framework →</Link></section>
    </div>

    <section className="panel"><h2>How a future record should connect</h2><div className="flowLine"><span>Source</span><b>→</b><span>Context</span><b>→</b><span>Theme</span><b>→</b><span>Literature</span><b>→</b><span>Question</span><b>→</b><span>Evidence</span><b>→</b><span>Output</span></div><p>The public interface will be released incrementally. The underlying data model comes first so that search, multilingual pages, bibliographies, working papers, and research projects can eventually draw from the same source of truth.</p></section>
    <div className="twoCol repositoryLinks"><section className="panel"><h2>For IKS learners</h2><p>The <Link className="textLink" href="/iks">IKS Hub</Link> is the curated human-facing gateway into the collection.</p></section><section className="panel"><h2>For researchers</h2><p>The <Link className="textLink" href="/research">Research</Link> and <Link className="textLink" href="/sbkb">SBKB</Link> sections connect repository records to hypotheses, methods, and scholarly outputs.</p></section></div>
  </main>
</>}
