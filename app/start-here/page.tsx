import Link from 'next/link';

const routes = [
  {title:'Śāstra & Sanskrit',href:'/shastra-study',desc:'Read texts in context, understand interpretations, and browse Vedas, Upaniṣads, Gītā, Itihāsa, Purāṇas, and Sanskrit.',first:'Begin with the Śāstra index or an existing study hub.'},
  {title:'Learn & Watch',href:'/videos',desc:'Choose videos and lectures on tradition, language, neuroscience, and interdisciplinary inquiry.',first:'Pick a lecture and follow its companion resources.'},
  {title:'Science & Research',href:'/research',desc:'Explore clinical neuroscience, stroke, epilepsy, cognition, publications, and evidence.',first:'Start with the research overview and selected publications.'},
  {title:'Tradition Meets Science',href:'/questions',desc:'Explore research questions about Avadhāna, Sandhyopāsanā, recitation, attention, and cognition.',first:'Distinguish the primary source, interpretation, hypothesis, and evidence.'},
];
export default function StartHerePage() {
  return <main className="pageShell">
    <section className="pageHero compact"><p className="eyebrow">Welcome • Orientation</p><h1>Start Here: Your Guide to IvyPandit</h1><p>Find the resources you need without knowing the site's structure in advance. Choose a pathway below, or search across the entire collection.</p></section>
    <div className="content">
      <section><h2 className="sectionTitle">Choose your pathway</h2><div className="resourceGrid">{routes.map(item=><Link className="panel linkedCard" href={item.href} key={item.title}><h2>{item.title}</h2><p>{item.desc}</p><p><strong>Suggested first step:</strong> {item.first}</p><span>Enter pathway →</span></Link>)}</div></section>
      <section className="panel" style={{marginTop:'30px'}}><h2>Browse by Śāstra</h2><p>Jump into a specific tradition or text. Existing hubs provide curated resources; wider topics lead to the searchable collection.</p><div className="buttons" style={{justifyContent:'flex-start',flexWrap:'wrap'}}>{[['Vedas','/shastra-study#vedas'],['Upaniṣads','/shastra-study#upanishads'],['Gītā','/gita'],['Mahābhārata','/mahabharata'],['Purāṇas','/shastra-study#puranas'],['Sanskrit & Sāhitya','/shastra-study#sanskrit'],['Mantra & Practice','/shastra-study#practice'],['Darśana','/shastra-study#darshana']].map(([name,href])=><Link className="btn secondary" href={href} key={name}>{name}</Link>)}</div></section>
      <section className="panel" style={{marginTop:'30px'}}><h2>Know what you want to find?</h2><p>Use the Knowledge Navigator to search by topic, text, scholar, language, or type of resource.</p><form action="/explore" method="get" style={{display:'flex',gap:'10px',flexWrap:'wrap'}}><input name="q" aria-label="Search IvyPandit" placeholder="Try Mahābhārata, Sanskrit, attention, stroke…" style={{flex:'1 1 300px',padding:'12px',borderRadius:'8px',border:'1px solid #d7c5a5'}}/><button className="btn primary" type="submit">Search</button></form></section>
      <section className="panel" style={{marginTop:'30px'}}><h2>How to read interdisciplinary claims</h2><p>IvyPandit distinguishes four layers: <strong>primary source</strong>, <strong>traditional interpretation</strong>, <strong>testable research question</strong>, and <strong>scientific evidence</strong>. Analogies are not established findings.</p><Link className="textLink" href="/editorial-policy">Read the editorial and evidence policy →</Link></section>
    </div>
  </main>;
}
