import Link from 'next/link';

const starterResources = [
  {title:'Vedic Heritage Portal',type:'Primary-source gateway',href:'https://vedicheritage.gov.in/',text:'Government of India portal with Vedic Saṃhitā material, recitation resources, translations, and reference information.'},
  {title:'GRETIL',type:'Digital text archive',href:'https://gretil.sub.uni-goettingen.de/gretil.html',text:'A long-running academic repository of electronic Sanskrit and related Indic texts maintained in Göttingen.'},
  {title:'Muktabodha Digital Library',type:'Manuscripts & texts',href:'https://muktabodha.org/',text:'Digital resources for Sanskrit texts and manuscripts, especially useful for Śaiva and related traditions.'},
  {title:'Digital Corpus of Sanskrit',type:'Research tool',href:'https://www.sanskrit-linguistics.org/dcs/',text:'A searchable corpus useful for philological, lexical, grammatical, and textual research.'},
  {title:'Indian Knowledge Systems Division',type:'Institutional ecosystem',href:'https://iksindia.org/',text:'National IKS initiatives, programmes, calls, events, and institutional activity in India.'},
  {title:'IvyPandit Research Questions',type:'Interdisciplinary questions',href:'/questions',text:'Source-conscious questions designed to connect textual expertise with scientific and humanities methods.',internal:true}
];

export default function IKSHub(){return <>
  <section className="pageHero"><div className="eyebrow">Curated knowledge gateway</div><h1>Indian Knowledge Systems Hub</h1><p>A growing gateway for serious learners, scholars, educators, scientists, and anyone looking for reliable pathways into the IKS ecosystem.</p></section>
  <main className="content">
    <div className="callout"><b>Curation, not accumulation.</b> IvyPandit prioritizes resources that are useful, credible, discoverable, and worth preserving — and distinguishes primary sources, modern scholarship, interpretation, and scientific evidence.</div>

    <section className="panel" style={{marginBottom:'28px'}}>
      <p className="kicker">Starter collection</p>
      <h2>A small set of useful resources you can use now</h2>
      <p>The public IKS catalogue is being built in stages. These resources are included as a first working set rather than a claim to completeness.</p>
      <div className="resourceGrid" style={{marginTop:'20px'}}>
        {starterResources.map((r)=>r.internal
          ? <Link key={r.title} className="panel linkedCard" href={r.href}><small className="label">{r.type}</small><h3>{r.title}</h3><p>{r.text}</p><span>Open resource →</span></Link>
          : <a key={r.title} className="panel linkedCard" href={r.href} target="_blank" rel="noopener noreferrer"><small className="label">{r.type}</small><h3>{r.title}</h3><p>{r.text}</p><span>Open resource →</span></a>)}
      </div>
      <p style={{fontFamily:'Arial, sans-serif',fontSize:'14px',color:'#6d5a4d'}}><b>Curation standard:</b> inclusion means the resource is useful enough to recommend as a starting point; it does not imply endorsement of every claim or translation it contains. Last reviewed: September 2026.</p>
    </section>

    <div className="resourceGrid">
      <div className="panel"><h2>Literature & Bibliographies</h2><p>Indexed modern scholarship, foundational texts, reviews, translations, commentaries, and thematic bibliographies.</p></div>
      <div className="panel"><h2>Institutions & Scholars</h2><p>Universities, research centres, Sanskrit institutions, IKS programmes, research groups, and scholars whose work helps define the field.</p></div>
      <div className="panel"><h2>Journals & Publication Venues</h2><p>Curated scholarly outlets relevant to Sanskrit, IKS, philosophy, history of science, medicine, humanities, and interdisciplinary research.</p></div>
      <div className="panel"><h2>Digital Resources & Archives</h2><p>Manuscript libraries, digitized texts, corpora, dictionaries, catalogues, open databases, and tools for scholarship.</p></div>
      <div className="panel"><h2>Study & Opportunity</h2><p>Courses, degree programmes, fellowships, grants, conferences, lectures, and other opportunities for students and researchers.</p></div>
      <div className="panel"><h2>Research Questions</h2><p>A structured collection of questions arising from texts, practices, concepts, and contemporary scholarship — with evidence status and related projects.</p></div>
    </div>

    <section className="panel repositoryFeature"><p className="kicker">The engine behind the hub</p><h2>IvyPandit Knowledge Repository</h2><p>The indexed body of literature and research material is being organized into a portable knowledge repository. The public catalogue will be released in stages, beginning with transparent sample records and curated pathways.</p><Link className="btn primary" href="/repository">Explore the repository framework</Link></section>
    <section className="twoCol"><div className="panel"><h2>For learners</h2><p>Start with curated pathways: what to read, where to study, which archives to use, and how different IKS domains relate to one another.</p></div><div className="panel"><h2>For researchers</h2><p>Move from source and bibliography to a documented research question, evidence map, working paper, dataset, or formal publication.</p></div></section>
  </main>
</>}
