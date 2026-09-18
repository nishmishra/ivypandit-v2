'use client';

import { useMemo, useState } from 'react';
import { contentItems } from '../data/contentIndex';

const allTypes = ['All', ...Array.from(new Set(contentItems.map(x => x.type))).sort()];
const allTracks = ['All', ...Array.from(new Set(contentItems.map(x => x.track))).sort()];
const allLanguages = ['All', ...Array.from(new Set(contentItems.map(x => x.language))).sort()];

export default function KnowledgeNavigator({initialQuery=''}:{initialQuery?:string}){
  const [query,setQuery]=useState(initialQuery);
  const [type,setType]=useState('All');
  const [track,setTrack]=useState('All');
  const [language,setLanguage]=useState('All');

  const results=useMemo(()=>{
    const q=query.trim().toLowerCase();
    return contentItems.filter(item=>{
      const hay=[item.title,item.summary,item.type,item.track,item.language,item.level,...item.topics].join(' ').toLowerCase();
      return (!q || hay.includes(q)) && (type==='All' || item.type===type) && (track==='All' || item.track===track) && (language==='All' || item.language===language);
    });
  },[query,type,track,language]);

  return <div>
    <section className="panel" style={{marginBottom:'24px'}}>
      <label htmlFor="knowledge-search" style={{fontWeight:700,display:'block',marginBottom:'8px'}}>Search IvyPandit</label>
      <input id="knowledge-search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Try Mahābhārata, Gāyatrī, stroke, memory, Sanskrit, epilepsy…" style={{width:'100%',padding:'14px 16px',border:'1px solid #d7c5a5',borderRadius:'10px',fontSize:'17px',background:'#fffdf8'}} />
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:'12px',marginTop:'16px'}}>
        <label>Format<select value={type} onChange={e=>setType(e.target.value)} style={{display:'block',width:'100%',marginTop:'6px',padding:'10px'}}>{allTypes.map(x=><option key={x}>{x}</option>)}</select></label>
        <label>Pathway<select value={track} onChange={e=>setTrack(e.target.value)} style={{display:'block',width:'100%',marginTop:'6px',padding:'10px'}}>{allTracks.map(x=><option key={x}>{x}</option>)}</select></label>
        <label>Language<select value={language} onChange={e=>setLanguage(e.target.value)} style={{display:'block',width:'100%',marginTop:'6px',padding:'10px'}}>{allLanguages.map(x=><option key={x}>{x}</option>)}</select></label>
      </div>
      <p style={{marginBottom:0,marginTop:'14px'}}><b>{results.length}</b> resources shown. Search looks across titles, summaries, topics, format, language, and pathway.</p>
    </section>

    <div className="resourceGrid">
      {results.map(item=>{
        const external=item.external || item.href.startsWith('http');
        const props=external?{target:'_blank',rel:'noopener noreferrer'}:{};
        return <a key={item.id} className="panel linkedCard" href={item.href} {...props}>
          <span className="label">{item.type} • {item.language}</span>
          <h2>{item.title}</h2>
          <p>{item.summary}</p>
          <p style={{fontSize:'14px',marginBottom:'8px'}}><b>{item.track}</b> · {item.level}</p>
          <div className="outcomeCloud" style={{marginTop:'8px'}}>{item.topics.slice(0,5).map(topic=><span key={topic}>{topic}</span>)}</div>
          <span>{external?'Open resource ↗':'Explore →'}</span>
        </a>;
      })}
    </div>
    {results.length===0 && <section className="panel"><h2>No exact match yet</h2><p>Try a broader term, reset a filter, or browse one of the major pathways above.</p></section>}
  </div>;
}
