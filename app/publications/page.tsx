import Link from 'next/link';

const publications = [
  {
    group: 'Post-stroke epilepsy & brain networks',
    items: [
      { journal: 'JAMA Neurology', year: '2023', title: 'Outcomes in patients with post-stroke seizures', role: 'Senior & corresponding author', href: 'https://doi.org/10.1001/jamaneurol.2023.3240' },
      { journal: 'Neurology', year: '2024', title: 'Pathophysiology, diagnosis, prognosis, and prevention of post-stroke epilepsy', href: 'https://doi.org/10.1212/WNL.0000000000209450' },
    ]
  },
  {
    group: 'Stroke, reperfusion & imaging',
    items: [
      { journal: 'Stroke', year: '2010', title: 'Mismatch-based delayed thrombolysis', href: 'https://doi.org/10.1161/STROKEAHA.109.566869' },
      { journal: 'The BMJ', year: '2010', title: 'Thrombolysis in very elderly people', href: 'https://doi.org/10.1136/bmj.c6046' },
      { journal: 'Diabetes Care', year: '2010', title: 'Prior stroke, diabetes, and thrombolysis', href: 'https://doi.org/10.2337/dc10-1125' },
      { journal: 'Neurology', year: '2011', title: 'Thrombolysis after prior stroke and diabetes', href: 'https://doi.org/10.1212/WNL.0b013e318238ee42' },
      { journal: 'Stroke', year: '2014', title: 'MRI mismatch and endovascular patient selection', href: 'https://doi.org/10.1161/STROKEAHA.114.004772' },
    ]
  },
  {
    group: 'Outcomes & methods',
    items: [
      { journal: 'Stroke', year: '2011', title: 'Home time as a meaningful stroke outcome', href: 'https://doi.org/10.1161/STROKEAHA.110.601302' },
      { journal: 'Stroke', year: '2013', title: 'Modified Graeb Score for intraventricular hemorrhage', href: 'https://doi.org/10.1161/STROKEAHA.112.670653' },
    ]
  },
  {
    group: 'Brain health & India',
    items: [
      { journal: 'Annals of Indian Academy of Neurology', year: '2010', title: 'Stroke Program for India', href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2859584/' },
    ]
  }
];

export default function Publications(){return <>
  <section className="pageHero">
    <div className="eyebrow">Selected scientific record</div>
    <h1>Publications</h1>
    <p>A curated view of scientific work across stroke, neuroimaging, outcomes, post-stroke epilepsy, and brain health.</p>
  </section>
  <main className="content">
    <section className="callout"><b>Selected, not exhaustive.</b> This page highlights representative contributions and scientific themes. For the complete publication list and current citation record, use Google Scholar.</section>

    {publications.map((section)=><section className="panel" key={section.group} style={{marginBottom:'24px'}}>
      <p className="kicker">{section.group}</p>
      <div>
        {section.items.map((paper)=><article key={paper.href} style={{padding:'16px 0',borderBottom:'1px solid #ead7b5'}}>
          <p style={{margin:'0 0 5px',fontFamily:'Arial, sans-serif',fontWeight:700,color:'#8b3718'}}>{paper.journal} · {paper.year}{paper.role ? ` · ${paper.role}` : ''}</p>
          <h2 style={{fontSize:'24px',margin:'0 0 8px'}}>{paper.title}</h2>
          <a className="textLink" href={paper.href} target="_blank" rel="noopener noreferrer">DOI / full text →</a>
        </article>)}
      </div>
    </section>)}

    <section className="twoCol">
      <div className="panel"><h2>Complete scientific record</h2><p>For the full publication list, citation counts, and current research output:</p><a className="btn primary" href="https://scholar.google.com/citations?user=1n2JUc8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a></div>
      <div className="panel"><h2>Scientific narrative</h2><p>For the trajectory connecting reperfusion, imaging, outcomes, post-stroke epilepsy, biomarkers, cognition, and cultural neuroscience:</p><Link className="btn secondary" href="/research">Explore Scientific Work</Link></div>
    </section>
  </main>
</>}
