import Link from 'next/link';

export type StudyStep = { title: string; description: string; href: string; action: string; format: string };
export default function GuidedStudyPath({ title, intro, steps }: { title: string; intro: string; steps: StudyStep[] }) {
  return <section id="guided-path" className="panel" style={{margin:'30px 0',padding:'28px',scrollMarginTop:'95px'}} aria-labelledby="guided-study-heading">
    <p className="kicker">Guided learning • Begin here</p>
    <h2 className="sectionTitle" id="guided-study-heading">{title}</h2>
    <p>{intro}</p>
    <ol style={{listStyle:'none',padding:0,margin:'22px 0 0',display:'grid',gap:'14px'}}>
      {steps.map((step,index)=><li key={step.title} style={{padding:'18px',border:'1px solid #e5d5bd',borderRadius:'12px',background:'#fffdfa',display:'flex',gap:'15px',alignItems:'flex-start'}}>
        <span aria-hidden="true" style={{flex:'0 0 32px',height:'32px',display:'grid',placeItems:'center',borderRadius:'50%',background:'#6a2618',color:'#fff',fontFamily:'Arial,sans-serif',fontWeight:700}}>{index+1}</span>
        <div style={{minWidth:0}}><small className="label">{step.format}</small><h3 style={{margin:'4px 0 6px'}}>{step.title}</h3><p style={{margin:'0 0 9px'}}>{step.description}</p><Link className="textLink" href={step.href}>{step.action} →</Link></div>
      </li>)}
    </ol>
    <p style={{marginTop:'18px'}}>Explore at your own pace. These curated steps use available IvyPandit materials; they do not imply completion of a formal course.</p>
    <Link className="textLink" href="/shastra-study">← Browse all Śāstra pathways</Link>
  </section>;
}
