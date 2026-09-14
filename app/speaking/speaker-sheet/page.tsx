import Link from 'next/link';

const topics = [
  'Gāyatrī, Saṃskāra & the Developing Brain',
  'Avadhāna and the Indian Science of Attention',
  'The Bhagavad Gītā, Cognitive Reframing & Human Resilience',
  'Ancestors, Memory & the Brain',
  'From Śāstra to Scientific Discovery',
  'The Brain, Culture & Human Neuroplasticity'
];

export default function SpeakerSheet(){return <>
  <style>{`@media print{.topbar,.footer,.speakerSheetNav{display:none!important}.speakerSheet{padding:18px!important;max-width:900px!important}.speakerSheet .panel{box-shadow:none!important}.speakerSheet h1{font-size:34px!important}.speakerSheet p,.speakerSheet li{font-size:13px!important}.speakerSheet section{break-inside:avoid}}`}</style>
  <main className="content speakerSheet">
    <div className="speakerSheetNav" style={{marginBottom:'20px'}}><Link className="textLink" href="/speaking">← Back to Lectures & Speaking</Link></div>
    <section className="panel" style={{textAlign:'center'}}>
      <p className="kicker">IvyPandit Speaker Sheet</p>
      <h1 style={{margin:'4px 0 8px',color:'#5a140e'}}>Nishant K. Mishra, MD, PhD</h1>
      <p style={{fontSize:'18px'}}>Neurologist • Physician-scientist • Educator • Public scholar</p>
      <p>Public scholarship at the meeting point of neuroscience, medicine, Sanskrit, Indian Knowledge Systems, cognition, and human experience.</p>
    </section>

    <section className="twoCol" style={{marginTop:'20px'}}>
      <div className="panel"><h2>Signature lecture topics</h2><ul>{topics.map(t=><li key={t}>{t}</li>)}</ul></div>
      <div className="panel"><h2>Programs & audiences</h2><p>Universities • medical schools • Sanskrit institutions • temples • conferences • schools • youth/family programs • podcasts • community organizations</p><p><b>Formats:</b> invited seminar, community lecture, workshop, panel, podcast, lecture series, virtual program.</p><p><b>Languages:</b> English • Hindi • Sanskrit<br/><b>Additional conversational languages:</b> Bhojpuri • Marathi • French</p></div>
    </section>

    <section className="panel" style={{marginTop:'20px'}}><h2>Approach</h2><p><b>Respect tradition. Encourage curiosity. Demand rigor.</b> Talks distinguish classical source, traditional interpretation, research question, and scientific evidence. Classical material is not presented as a modern science textbook, and scientific analogies are identified as analogies rather than proof.</p></section>

    <section className="twoCol" style={{marginTop:'20px'}}>
      <div className="panel"><h2>Selected scholarly themes</h2><p>Stroke and brain health • human neuroplasticity • bilingualism • attention and memory • cultural expertise • Avadhāna • Gāyatrī and Sandhyā • Bhagavad Gītā • Mahābhārata • Pitṛpakṣa and ancestral memory • IKS research method.</p></div>
      <div className="panel"><h2>Contact</h2><p><b>Email:</b> <a className="textLink" href="mailto:nishant.mishra@ivypandit.com">nishant.mishra@ivypandit.com</a></p><p><b>Website:</b> ivypandit.com/speaking<br/><b>YouTube:</b> @IvyPandit<br/><b>LinkedIn:</b> IvyPandit</p><p>Honorarium and travel arrangements may be discussed depending on the organization, location, and format.</p></div>
    </section>
  </main>
</>}
