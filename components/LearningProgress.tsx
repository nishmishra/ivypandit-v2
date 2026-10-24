 'use client';
import { useEffect, useState } from 'react';
export default function LearningProgress({id}:{id:string}) { const [done,setDone]=useState(false); useEffect(()=>{try{setDone(localStorage.getItem('ivypandit-lesson:'+id)==='done')}catch{}},[id]); function toggle(){const next=!done;setDone(next);try{localStorage.setItem('ivypandit-lesson:'+id,next?'done':'')}catch{}} return <div className="lessonProgress"><button className="btn secondary" onClick={toggle} aria-pressed={done}>{done?'✓ Marked as studied':'Mark as studied'}</button><small>Saved on this browser.</small></div>; }
