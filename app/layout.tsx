import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { headers } from 'next/headers';
import SiteHeader from '../components/SiteHeader';

const baseUrl = 'https://www.ivypandit.com';

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': { title: 'IvyPandit | Neuroscience, Sanskrit & Indian Knowledge Systems', description: 'Independent scholarly platform led by neurologist and physician-scientist Nishant K. Mishra, exploring neuroscience, Sanskrit, Indian Knowledge Systems, cognition, brain health, and public scholarship.' },
  '/iks': { title: 'Indian Knowledge Systems Hub | IvyPandit', description: 'Curated pathways into Indian Knowledge Systems: texts, scholarship, institutions, archives, journals, opportunities, and research resources.' },
  '/shastra-study': { title: 'Śāstra & Sanskrit Study | IvyPandit', description: 'Study pathways for Veda, Upaniṣad, Bhagavad Gītā, Mahābhārata, Purāṇa, mantra, Sanskrit, and traditional learning.' },
  '/research': { title: 'Scientific Work | Nishant K. Mishra, MD, PhD', description: 'Scientific work across stroke, reperfusion, neuroimaging, post-stroke epilepsy, biomarkers, clinical trials, cognition, language, neuroplasticity, and cultural neuroscience.' },
  '/sbkb': { title: 'Sanskrit Biomedical Knowledge Base | IvyPandit', description: 'A source-conscious framework for moving from Sanskrit biomedical observations to transparent, testable research questions.' },
  '/questions': { title: 'Research Questions & Invitations | IvyPandit', description: 'Open interdisciplinary questions inviting Sanskritists, scientists, physicians, philosophers, practitioners, and institutions into rigorous collaboration.' },
  '/videos': { title: 'Talks, Lectures & Traditional Learning | IvyPandit', description: 'Curated research, interdisciplinary, and traditional Hindu lecture collections from IvyPandit.' },
  '/speaking': { title: 'Lectures & Speaking | IvyPandit', description: 'Invite Nishant K. Mishra, MD, PhD for lectures on neuroscience, Sanskrit, Indian Knowledge Systems, Gītā, Gāyatrī, Avadhāna, brain health, and human development.' },
  '/collaborate': { title: 'Collaborate with IvyPandit', description: 'Build rigorous interdisciplinary questions and projects with Sanskrit scholars, scientists, physicians, institutions, and funders.' },
  '/about': { title: 'About IvyPandit & Nishant K. Mishra', description: 'The mission, editorial ethos, founder, and long-term scholarly vision behind IvyPandit.' },
  '/publications': { title: 'Selected Scientific Publications | Nishant K. Mishra', description: 'Selected scientific publications in stroke, neuroimaging, outcomes, post-stroke epilepsy, and brain health.' },
  '/articles': { title: 'Articles & Scholarly Essays | IvyPandit', description: 'Essays and reflections connecting Sanskrit, Indian Knowledge Systems, neuroscience, cognition, ethics, and human flourishing.' },
  '/articles/gayatri-neuroplasticity': { title: 'Gāyatrī, Intellect & Neuroplasticity | IvyPandit', description: 'A source-conscious scholarly essay on Gāyatrī, attention, repetition, meaning, development, and the limits of current scientific evidence.' },
  '/articles/gita-cognitive-resilience': { title: 'Bhagavad Gītā & Cognitive Resilience | IvyPandit', description: 'A short reflection on Arjuna’s crisis, disciplined action, and responsible comparison with modern psychology.' },
  '/articles/garbhadhana-epigenetics': { title: 'Garbhādhāna & Epigenetics | IvyPandit', description: 'A short reflection on parental preparation, preconception health, and the limits of epigenetic analogy.' },
  '/repository': { title: 'IvyPandit Knowledge Repository', description: 'Structured, portable scholarly infrastructure connecting sources, literature, research questions, evidence, and outputs.' },
  '/evidence': { title: 'Evidence Library | Neuroscience & Indian Knowledge Systems | IvyPandit', description: 'Critically annotated scientific literature relevant to attention, language, neuroplasticity, contemplative practice, ritual, grief, fasting, and Indian Knowledge Systems.' },
  '/support': { title: 'Support & Partnership | IvyPandit', description: 'Ways to support open scholarship, lectures, collaboration, and durable public knowledge resources.' },
  '/contact': { title: 'Contact IvyPandit', description: 'Contact IvyPandit for lectures, collaborations, scholarly discussion, educational programs, and institutional partnerships.' },
  '/disclaimer': { title: 'Disclaimer | IvyPandit', description: 'Medical, scientific, institutional, and interpretive disclaimers for IvyPandit content.' },
  '/editorial-policy': { title: 'Editorial & Evidence Policy | IvyPandit', description: 'How IvyPandit distinguishes primary sources, traditional interpretation, hypotheses, scientific evidence, and public commentary.' },
  '/privacy': { title: 'Privacy | IvyPandit', description: 'Privacy information for visitors and correspondents using IvyPandit.' },
  '/terms': { title: 'Terms of Use | IvyPandit', description: 'Terms governing use of IvyPandit educational and scholarly content.' },
  '/gayatri': { title: 'Gāyatrī Study Hub | IvyPandit', description: 'Primary source, traditional meaning, contemplative practice, lectures, essays, and responsible research questions about Gāyatrī.' },
  '/gita': { title: 'Bhagavad Gītā Study Hub | IvyPandit', description: 'Text, interpretation, lectures, essays, and questions about dharma, crisis, disciplined action, and resilience.' },
  '/garbhadhana': { title: 'Garbhādhāna Study Hub | IvyPandit', description: 'Traditional preparation before conception, modern preconception health, and careful limits on epigenetic analogy.' },
  '/mahabharata': { title: 'Mahābhārata Study Hub | IvyPandit', description: 'Leadership, conflict, dharma, memory, grief, moral complexity, and contemporary scholarly questions.' },
  '/bhagavatam': { title: 'Bhāgavata Study Hub | IvyPandit', description: 'Bhakti, sacred narrative, memory, meaning, surrender, and spiritual psychology in source-conscious study.' },
  '/principles': { title: 'Guiding Principles | IvyPandit', description: 'Sanskrit ideas that guide IvyPandit: truth, inquiry, practice, leadership, learning, and service.' },
  '/perspectives': { title: 'Perspectives & Working-Paper Framework | IvyPandit', description: 'The future framework for invited perspectives and versioned working papers, with explicit editorial and review status.' }
};

const localizedRoutes: Record<string, { hi?: string; sa?: string }> = {
  '/': { hi: '/hi', sa: '/sa' }, '/iks': { sa: '/sa/iks' }, '/shastra-study': { sa: '/sa/shastra' }, '/research': { hi: '/hi/research', sa: '/sa/research' }, '/sbkb': { sa: '/sa/sbkb' }, '/questions': { hi: '/hi/prashna', sa: '/sa/prashna' }, '/videos': { sa: '/sa/videos' }, '/speaking': { hi: '/hi/speaking', sa: '/sa/speaking' }, '/collaborate': { hi: '/hi/sahyog', sa: '/sa/sahayoga' }, '/about': { sa: '/sa/about' }, '/publications': { sa: '/sa/publications' }, '/articles': { sa: '/sa/articles' }, '/articles/gayatri-neuroplasticity': { sa: '/sa/articles/gayatri-neuroplasticity' }, '/articles/gita-cognitive-resilience': { sa: '/sa/articles/gita-cognitive-resilience' }, '/articles/garbhadhana-epigenetics': { sa: '/sa/articles/garbhadhana-epigenetics' }, '/repository': { sa: '/sa/repository' }, '/support': { sa: '/sa/support' }, '/contact': { sa: '/sa/contact' }, '/disclaimer': { sa: '/sa/disclaimer' }
};

function cleanPath(pathname: string) { if (!pathname || pathname === '/') return '/'; return pathname.replace(/\/$/, ''); }
function routeLanguage(pathname: string) { if (pathname === '/hi' || pathname.startsWith('/hi/')) return 'hi'; if (pathname === '/sa' || pathname.startsWith('/sa/')) return 'sa'; return 'en'; }
function alternatePaths(pathname: string) { const path = cleanPath(pathname); if (localizedRoutes[path]) return { en: path, ...localizedRoutes[path] }; for (const [en, translations] of Object.entries(localizedRoutes)) if (translations.hi === path || translations.sa === path) return { en, ...translations }; return { en: path }; }

export async function generateMetadata(): Promise<Metadata> {
  const pathname = cleanPath(headers().get('x-current-path') || '/'); const lang = routeLanguage(pathname); const alternates = alternatePaths(pathname);
  const meta = pageMeta[pathname] || (lang === 'hi' ? { title: 'आइवी पण्डित', description: 'भारतीय ज्ञान-परम्परा, संस्कृत, विज्ञान, चिकित्सा और सार्वजनिक शिक्षा के लिए स्वतंत्र विद्वत् मंच।' } : lang === 'sa' ? { title: 'आइवीपण्डितः', description: 'संस्कृतवाङ्मयस्य भारतीयज्ञानपरम्पराणां आधुनिकविज्ञानस्य च गम्भीराध्ययनाय स्वतन्त्रं विद्वत्-मञ्चम्।' } : pageMeta['/']);
  const languages: Record<string, string> = { en: alternates.en, 'x-default': alternates.en }; if (alternates.hi) languages.hi = alternates.hi; if (alternates.sa) languages.sa = alternates.sa;
  return { metadataBase: new URL(baseUrl), title: meta.title, description: meta.description, alternates: { canonical: pathname, languages }, openGraph: { type: 'website', url: `${baseUrl}${pathname === '/' ? '' : pathname}`, siteName: 'IvyPandit', title: meta.title, description: meta.description, images: [{ url: '/images/ivy-pandit-feature-banner.jpg', width: 1200, height: 630, alt: 'IvyPandit — Tradition, Curiosity, Science' }] }, twitter: { card: 'summary_large_image', title: meta.title, description: meta.description, images: ['/images/ivy-pandit-feature-banner.jpg'] } };
}

const navEn: Array<[string,string]> = [['IKS Hub','/iks'],['Śāstra','/shastra-study'],['Research','/research'],['Learn','/videos'],['Speaking','/speaking'],['Collaborate','/collaborate'],['About','/about']];
const navHi: Array<[string,string]> = [['अनुसन्धान','/hi/research'],['प्रश्न','/hi/prashna'],['व्याख्यान','/hi/speaking'],['सहयोग','/hi/sahyog'],['English','/']];
const navSa: Array<[string,string]> = [['ज्ञानप्रणाली','/sa/iks'],['शास्त्रम्','/sa/shastra'],['अनुसन्धानम्','/sa/research'],['व्याख्यानानि','/sa/videos'],['वक्तृत्वम्','/sa/speaking'],['सहकारः','/sa/sahayoga'],['परिचयः','/sa/about']];

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = cleanPath(headers().get('x-current-path') || '/'); const lang = routeLanguage(pathname); const alternatives = alternatePaths(pathname); const nav = lang === 'hi' ? navHi : lang === 'sa' ? navSa : navEn; const brandHome = lang === 'hi' ? '/hi' : lang === 'sa' ? '/sa' : '/'; const hiHref = alternatives.hi || '/hi'; const saHref = alternatives.sa || '/sa'; const enHref = alternatives.en || '/';
  const jsonLd = {'@context':'https://schema.org','@graph':[{'@type':'WebSite','@id':`${baseUrl}/#website`,url:baseUrl,name:'IvyPandit',description:'Independent scholarly and educational platform connecting Sanskrit, Indian Knowledge Systems, neuroscience, medicine, and public scholarship.'},{'@type':'Person','@id':`${baseUrl}/about#nishant-mishra`,name:'Nishant K. Mishra',honorificSuffix:'MD, PhD',url:`${baseUrl}/about`,jobTitle:'Neurologist and physician-scientist',sameAs:['https://scholar.google.com/citations?user=1n2JUc8AAAAJ&hl=en','https://www.linkedin.com/in/ivypandit/','https://www.youtube.com/@IvyPandit','https://x.com/IvyPandit']} ]};

  return <html lang={lang}><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}} />
    <div className="topbar"><div className="topInner"><div><Link href={enHref}>English</Link><span>|</span><Link href={hiHref}>हिन्दी</Link><span>|</span><Link href={saHref}>संस्कृतम्</Link></div><div className="social"><a href="https://www.youtube.com/@IvyPandit" target="_blank" rel="noopener noreferrer">YouTube</a><a href="https://x.com/IvyPandit" target="_blank" rel="noopener noreferrer">X</a><a href="https://www.linkedin.com/in/ivypandit/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div></div></div>
    <SiteHeader brandHome={brandHome} lang={lang} nav={nav} />
    {children}
    <footer className="footer"><div className="footerGrid">
      <div><div className="footBrand">☀ IVY PANDIT</div><p>{lang==='sa'?<>परम्परां सम्मानयतु।<br/>जिज्ञासां पोषयतु।<br/>अनुसन्धानं कठोरं भवतु।</>:lang==='hi'?<>परम्परा का सम्मान।<br/>जिज्ञासा को प्रोत्साहन।<br/>अनुसन्धान में कठोरता।</>:<>Respect tradition.<br/>Encourage curiosity.<br/>Demand rigor.</>}</p></div>
      {lang==='sa'?<><div><h4>अन्वेषणम्</h4><Link href="/sa/iks">भारतीयज्ञानप्रणाली</Link><Link href="/sa/shastra">शास्त्रम्</Link><Link href="/sa/research">अनुसन्धानम्</Link><Link href="/sa/repository">ज्ञानसंग्रहः</Link></div><div><h4>विद्वत्कार्यम्</h4><Link href="/sa/prashna">अनुसन्धानप्रश्नाः</Link><Link href="/sa/videos">व्याख्यानानि</Link><Link href="/sa/speaking">वक्तृत्वम्</Link><Link href="/sa/sahayoga">सहकारः</Link></div></>:lang==='hi'?<><div><h4>अन्वेषण</h4><Link href="/hi/research">अनुसन्धान</Link><Link href="/hi/prashna">अनुसन्धान-प्रश्न</Link><Link href="/hi/speaking">व्याख्यान</Link><Link href="/hi/sahyog">सहयोग</Link></div><div><h4>अधिक</h4><Link href="/iks">IKS Hub (English)</Link><Link href="/shastra-study">शास्त्र (English)</Link><Link href="/articles">लेख (English)</Link><Link href="/about">परिचय (English)</Link></div></>:<><div><h4>Explore</h4><Link href="/iks">IKS Hub</Link><Link href="/shastra-study">Śāstra</Link><Link href="/research">Science & Research</Link><Link href="/evidence">Evidence Library</Link><Link href="/repository">Knowledge Repository</Link></div><div><h4>Scholarship</h4><Link href="/questions">Research Questions</Link><Link href="/publications">Publications</Link><Link href="/videos">Talks & Learning</Link><Link href="/speaking">Lectures & Speaking</Link><Link href="/articles">Articles</Link><Link href="/collaborate">Collaborate</Link></div></>}
      <div><h4>{lang==='sa'?'सम्पर्कः':lang==='hi'?'सम्पर्क':'Connect'}</h4><a href="mailto:nishant.mishra@ivypandit.com">nishant.mishra@ivypandit.com</a><a href="https://www.youtube.com/@IvyPandit" target="_blank" rel="noopener noreferrer">YouTube @IvyPandit</a><a href="https://www.linkedin.com/in/ivypandit/" target="_blank" rel="noopener noreferrer">LinkedIn / IvyPandit</a><a href="https://x.com/IvyPandit" target="_blank" rel="noopener noreferrer">X / Twitter @IvyPandit</a>{lang==='en'&&<><Link href="/editorial-policy">Editorial & Evidence Policy</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/disclaimer">Disclaimer</Link></>}</div>
    </div><div className="footerBottom">{lang==='sa'?'आइवीपण्डितः स्वतन्त्रः विद्वत्-शैक्षिकमञ्चः।':lang==='hi'?'आइवी पण्डित एक स्वतंत्र विद्वत् एवं शैक्षिक मंच है।':'IvyPandit is independent. Traditional sources, interpretations, research questions, scientific evidence, and public commentary are distinguished wherever possible. Nothing on this site constitutes medical advice.'}<span>© 2026 IvyPandit.</span></div></footer>
  </body></html>;
}
