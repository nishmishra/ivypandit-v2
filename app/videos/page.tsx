const featuredAcademic = [
  {
    id: 'dr-H6IToGx4',
    start: 1104,
    label: 'RESEARCH / ACADEMIC',
    title: 'Mahābhārata & Neuroscience — Invited Sanskrit Forum Talk',
    summary: 'An invited scholarly appearance exploring how questions from the Mahābhārata can be placed in disciplined conversation with neuroscience, while keeping textual interpretation and scientific evidence distinct.'
  },
  {
    id: 'cNz4HNv5LdI',
    start: 0,
    label: 'RESEARCH / ACADEMIC',
    title: 'Attention, Memory & Cultural Expertise',
    summary: 'Attention, memory, recitation, learning, and long-duration cultural expertise considered through the lens of contemporary cognitive and neuroscience research.'
  },
  {
    id: 'FIZ5jzLfbxQ',
    start: 0,
    label: 'RESEARCH / ACADEMIC',
    title: 'IKS, Evidence & Research Method',
    summary: 'Philological and historical rigor alongside contemporary scientific methods, with emphasis on distinguishing interpretation, hypothesis, and evidence.'
  },
  {
    id: 'XkEqWuym3dc',
    start: 0,
    label: 'RESEARCH / ACADEMIC',
    title: 'Classical Knowledge as a Source of Research Questions',
    summary: 'How careful study of classical sources can generate testable contemporary questions without treating traditional claims as established scientific findings.'
  }
];

const featuredInquiry = [
  {
    id: 'CbtzXqFRGKI',
    start: 0,
    label: 'INTERDISCIPLINARY INQUIRY',
    title: 'Sanskrit, Indian Knowledge Systems & Scientific Inquiry',
    summary: 'Classical knowledge, scientific curiosity, interpretation, hypothesis, and evidence brought into a carefully bounded interdisciplinary conversation.'
  },
  {
    id: '_U0YB0YVWxI',
    start: 214,
    label: 'INTERDISCIPLINARY INQUIRY',
    title: 'Pitṛ-ṛṇa: The Science of Memory',
    summary: 'An interdisciplinary reflection on ancestry, remembrance, gratitude, ritual, and memory, while distinguishing traditional meanings from scientific explanation.'
  },
  {
    id: 'QsLBK1qPCPg',
    start: 517,
    label: 'INTERDISCIPLINARY INQUIRY',
    title: 'The Neurology of Fire',
    summary: 'An exploratory conversation about fire, embodied experience, attention, symbolism, and the limits of neuroscientific analogy.'
  },
  {
    id: 'nTCykV_86Mo',
    start: 153,
    label: 'INTERDISCIPLINARY INQUIRY',
    title: 'Reshape Your Brain? Arjuna, Cognition & Reframing',
    summary: 'A psychology- and cognition-oriented discussion of Arjuna’s crisis before the war, using the Bhagavad Gītā to examine confusion, perspective, duty, and cognitive reframing.'
  }
];

const traditionHighlights = [
  {
    id: 'AxObzgp-WBw',
    start: 19,
    title: 'What Is Hindu Sanātanī Saṃskṛti?',
    summary: 'A cultural and traditional reflection on the meaning and character of Hindu Sanātanī saṃskṛti.'
  }
];

const traditionLinks = [
  ['Purāṇa, Itihāsa & Sacred Narratives','Vishnu Purana','Purāṇic teaching, sacred narratives, cosmology, and traditional interpretation.'],
  ['Festivals, Vrata & Hindu Practice','Janmashtami','Festival talks, vrata, pūjā, observance, and lived Hindu practice.'],
  ['Pitṛpakṣa, Śrāddha & Ancestor Traditions','Pitru Shraddha','Ancestor remembrance, śrāddha, tarpaṇa, Mahālaya, and related scriptural traditions.'],
  ['Gāyatrī, Sandhyā & Mantra Practice','Gayatri Sandhya','Gāyatrī, Sandhyopāsanā, mantra, recitation, and contemplative practice.'],
  ['Sanskrit Recitation & Cultural Learning','Sanskrit','Sanskrit recitation, verses, traditional learning, and cultural education.']
];

export default function Videos(){return <>
  <style>{`
    @media print {
      .topbar, .header { display: none !important; }
      .pageHero { break-after: avoid; }
      .videoCard, .panel, .callout { break-inside: avoid; }
    }
  `}</style>

  <section className="pageHero inquiryHero" style={{padding:'54px 22px'}}>
    <div className="eyebrow">IvyPandit Learning</div>
    <h1>Talks, Lectures & Traditional Learning</h1>
    <p>Three clearly marked pathways: research and academic scholarship, interdisciplinary inquiry, and explicitly traditional Hindu learning.</p>
  </section>

  <main className="content">
    <section className="panel" style={{marginBottom:'34px',padding:'22px 26px'}}>
      <p className="kicker">Scholar & speaker</p>
      <h2 style={{marginBottom:'8px'}}>Nishant K. Mishra, MD, PhD</h2>
      <p style={{margin:'0'}}>Physician-scientist • Neurologist • Neuroscience researcher • Sanskrit & Indian Knowledge Systems scholar</p>
    </section>

    <section id="academic">
      <p className="kicker">Collection I • Research / Academic</p>
      <h2 className="sectionTitle">Neuroscience, medicine, cognition, Sanskrit & Indian Knowledge Systems</h2>
      <p>This collection presents IvyPandit&apos;s academic and research-oriented work across neuroscience, medicine, cognition, Sanskrit, and Indian Knowledge Systems. Some talks present established evidence and scholarly work; others focus on research method and the disciplined generation of testable questions from classical sources.</p>

      <div className="sectionHeaderRow" style={{marginTop:'30px'}}>
        <div><p className="kicker">Selected talks</p><h2 className="sectionTitle">Research & academic scholarship</h2></div>
        <a className="textLink" href="https://www.youtube.com/@IvyPandit/videos" target="_blank" rel="noopener noreferrer">View all talks →</a>
      </div>
      <div className="curatedVideoGrid">
        {featuredAcademic.map((talk)=><a key={talk.id} className="videoCard" href={`https://www.youtube.com/watch?v=${talk.id}${talk.start ? `&t=${talk.start}s` : ''}`} target="_blank" rel="noopener noreferrer"><img src={`https://i.ytimg.com/vi/${talk.id}/hqdefault.jpg`} alt={talk.title} loading="lazy"/><div><span className="label">{talk.label}</span><h2>{talk.title}</h2><p>{talk.summary}</p><strong>Watch on YouTube →</strong></div></a>)}
      </div>
    </section>

    <section id="inquiry" style={{marginTop:'54px'}}>
      <p className="kicker">Collection II • Interdisciplinary Inquiry</p>
      <h2 className="sectionTitle">Classical sources as questions, not shortcuts to evidence</h2>
      <p>These talks are exploratory and hypothesis-generating. They place Sanskrit texts, Indian Knowledge Systems, cultural practices, psychology, and neuroscience in conversation while keeping textual interpretation, analogy, research questions, and established scientific evidence distinct.</p>

      <div className="sectionHeaderRow" style={{marginTop:'30px'}}>
        <div><p className="kicker">Selected talks</p><h2 className="sectionTitle">Interdisciplinary exploration</h2></div>
        <a className="textLink" href="https://www.youtube.com/@IvyPandit/videos" target="_blank" rel="noopener noreferrer">View all talks →</a>
      </div>
      <div className="curatedVideoGrid">
        {featuredInquiry.map((talk)=><a key={talk.id} className="videoCard" href={`https://www.youtube.com/watch?v=${talk.id}${talk.start ? `&t=${talk.start}s` : ''}`} target="_blank" rel="noopener noreferrer"><img src={`https://i.ytimg.com/vi/${talk.id}/hqdefault.jpg`} alt={talk.title} loading="lazy"/><div><span className="label">{talk.label}</span><h2>{talk.title}</h2><p>{talk.summary}</p><strong>Watch on YouTube →</strong></div></a>)}
      </div>
    </section>

    <section id="tradition" style={{marginTop:'58px'}}>
      <p className="kicker">Collection III • Tradition / Śāstra / Culture</p>
      <h2 className="sectionTitle">Hindu traditions, Purāṇa, ritual, festivals, recitation & lived practice</h2>
      <p>This collection is explicitly traditional and cultural. It includes discussions of Hindu identity and saṃskṛti, Purāṇic and scriptural themes, vrata and festivals, ancestral traditions, mantra, Sandhyā, Sanskrit recitation, and lived Hindu practice.</p>

      <div className="curatedVideoGrid" style={{marginBottom:'32px'}}>
        {traditionHighlights.map((talk)=><a key={talk.id} className="videoCard" href={`https://www.youtube.com/watch?v=${talk.id}&t=${talk.start}s`} target="_blank" rel="noopener noreferrer"><img src={`https://i.ytimg.com/vi/${talk.id}/hqdefault.jpg`} alt={talk.title} loading="lazy"/><div><span className="label">TRADITION / ŚĀSTRA / CULTURE</span><h2>{talk.title}</h2><p>{talk.summary}</p><strong>Watch on YouTube →</strong></div></a>)}
      </div>

      <div className="resourceGrid">
        {traditionLinks.map(([title,query,desc])=><a key={title} className="panel linkedCard" href={`https://www.youtube.com/@IvyPandit/search?query=${encodeURIComponent(query)}`} target="_blank" rel="noopener noreferrer"><h2>{title}</h2><p>{desc}</p><span>Browse related IvyPandit videos →</span></a>)}
      </div>
    </section>

    <section className="missionBox" style={{marginTop:'44px'}}>
      <h2>Explore the full IvyPandit channel</h2>
      <p>New lectures, shorter reflections, research discussions, Sanskrit and IKS material, and traditional Hindu cultural content continue to be added.</p>
      <div className="buttons"><a className="btn secondary" href="https://www.youtube.com/@IvyPandit" target="_blank" rel="noopener noreferrer">YouTube @IvyPandit</a><a className="btn secondary" href="https://www.youtube.com/@IvyPandit/videos" target="_blank" rel="noopener noreferrer">All Videos</a></div>
    </section>

    <section className="twoCol" style={{marginTop:'36px'}}>
      <div className="panel"><h2>Follow IvyPandit</h2><p><a className="textLink" href="https://www.linkedin.com/in/ivypandit/" target="_blank" rel="noopener noreferrer">LinkedIn →</a><br/><a className="textLink" href="https://x.com/IvyPandit" target="_blank" rel="noopener noreferrer">X / Twitter →</a><br/><a className="textLink" href="https://www.youtube.com/@IvyPandit" target="_blank" rel="noopener noreferrer">YouTube →</a></p></div>
      <div className="panel"><h2>Invite Dr. Nishant K. Mishra for a Lecture</h2><p>Selected IvyPandit themes can be developed into live or virtual lectures for universities, Sanskrit institutions, temples, professional organizations, conferences, and community audiences. Talks can be delivered in English, Hindi, or Sanskrit and adapted to the audience.</p><a className="textLink" href="/speaking">View speaking topics →</a></div>
    </section>

    <section className="contactInvitation"><div><p className="kicker">Invite • Collaborate • Discuss</p><h2>Scholar, scientist, practitioner, or organizer?</h2><p>Write if a lecture connects with your textual expertise, research, institution, or community program.</p></div><div className="contactActions"><a className="btn secondary" href="/speaking">Speaking topics</a><a className="btn secondary" href="/collaborate">Collaborate</a><a className="btn secondary" href="mailto:nishant.mishra@ivypandit.com">nishant.mishra@ivypandit.com</a></div></section>
  </main>
</>}
