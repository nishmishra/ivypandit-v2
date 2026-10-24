export type SectionKind = 'religious' | 'scientific' | 'inquiry' | 'overview';
export function sectionForPath(path:string):SectionKind {
 const p=path.replace(/^\/(hi|sa)(?=\/|$)/,'') || '/';
 if(['/shastra-study','/shastra','/gita','/gayatri','/mahabharata','/bhagavatam','/devi-bhagavata','/principles','/articles/purusha-sukta-gita-vedic-cosmos'].some(v=>p===v||p.startsWith(v+'/')))return 'religious';
 if(['/research/consciousness','/questions','/prashna','/garbhadhana','/sbkb','/articles/sandhyopasana-neuroscience','/articles/vedic-recitation-developing-brain','/articles/shastra-to-scientific-discovery','/articles/yogvani-october-2026','/articles/pitrapaksha-memory-grief','/articles/ekadashi-fasting-brain-health','/articles/gayatri-neuroplasticity','/articles/gita-cognitive-resilience','/articles/garbhadhana-epigenetics'].some(v=>p===v||p.startsWith(v+'/')))return 'inquiry';
 if(['/research','/publications','/evidence','/brain-health','/articles/sanskrit-hindi-bilingualism-neuroplasticity'].some(v=>p===v||p.startsWith(v+'/')))return 'scientific';
 return 'overview';
}
export const sectionLabels={religious:'Religious Study',scientific:'Science & Research',inquiry:'Interdisciplinary Inquiry',overview:'Explore IvyPandit'};
