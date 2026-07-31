import Link from 'next/link';

export default function Repository(){return <>
  <section className="pageHero"><div className="eyebrow">Portable knowledge infrastructure</div><h1>IvyPandit Knowledge Repository</h1><p>A structured home for the indexed literature, sources, research questions, and scholarly resources that sit behind the public website.</p></section>
  <main className="content">
    <div className="callout"><b>Built for durability.</b> The repository is being organized in open, portable formats so the intellectual collection can survive changes in hosting platforms, databases, or website technology.</div>
    <div className="resourceGrid">
      <section className="panel"><h2>Indexed Literature</h2><p>Modern papers, books, reviews, translations, commentaries, and bibliographic records organized by theme, source tradition, scientific domain, and project.</p><span className="statusBadge">Catalogue being prepared</span></section>
      <section className="panel"><h2>Texts & Passages</h2><p>Structured references to Sanskrit texts and passages, with room for editions, translations, notes, traditional context, themes, and links to related research.</p><span className="statusBadge">Schema established</span></section>
      <section className="panel"><h2>Research Questions</h2><p>Questions generated from textual study and interdisciplinary scholarship, linked to evidence status, feasibility, related literature, projects, and future studies.</p><span className="statusBadge">Repository scaffolded</span></section>
      <section className="panel"><h2>IKS Resources</h2><p>Curated institutions, journals, archives, digital tools, educational pathways, conferences, fellowships, and other resources useful to the IKS community.</p><span className="statusBadge">Curation in progress</span></section>
      <section className="panel"><h2>SBKB Records</h2><p>Biomedical and scientifically investigable observations from Sanskrit literature, kept distinct from modern evidence and linked to testable research questions.</p><Link className="textLink" href="/sbkb">Explore SBKB →</Link></section>
      <section className="panel"><h2>Working Papers</h2><p>Versioned scholarly documents with stable metadata, downloadable PDFs, explicit review status, and links to later formal publications when available.</p><Link className="textLink" href="/perspectives">Working Papers →</Link></section>
    </div>
    <section className="panel"><h2>How a future record should connect</h2><div className="flowLine"><span>Source</span><b>→</b><span>Context</span><b>→</b><span>Theme</span><b>→</b><span>Literature</span><b>→</b><span>Question</span><b>→</b><span>Evidence</span><b>→</b><span>Output</span></div><p>The public interface will be released incrementally. The underlying data model comes first so that search, multilingual pages, bibliographies, working papers, and research projects can eventually draw from the same source of truth.</p></section>
    <div className="twoCol repositoryLinks"><section className="panel"><h2>For IKS learners</h2><p>The <Link className="textLink" href="/iks">IKS Hub</Link> will become the curated human-facing gateway into the collection.</p></section><section className="panel"><h2>For researchers</h2><p>The <Link className="textLink" href="/research">Research</Link> and <Link className="textLink" href="/sbkb">SBKB</Link> sections will connect repository records to hypotheses, methods, and scholarly outputs.</p></section></div>
  </main>
</>}
