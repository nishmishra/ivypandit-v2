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
  }
];

const featuredInquiry = [
  {
    id: 'yylfBDXc5CY',
    start: 0,
    label: 'INTERDISCIPLINARY INQUIRY',
    title: 'Garbhādhāna, Preconception Health & Epigenetics',
    summary: 'Traditional responsibility before conception placed in careful conversation with preconception medicine, parental health, and epigenetics—without treating scientific analogy as proof of ritual or theological claims.'
  },
  {
    id: 'leQ_SDvEE3g',
    start: 273,
    label: 'ŚĀSTRA / PHILOSOPHY / COSMOS',
    title: 'Puruṣa Sūkta, Gītā Chapters 10–11 & the Vedic Cosmos',
    summary: 'The cosmic Puruṣa, Kṛṣṇa’s vibhūtis, the Viśvarūpa, creation, and divine immanence and transcendence—presented as theological and philosophical inquiry, not modern astrophysics.'
  },
  {
    id: 'vArP8eE0ROU',
    start: 0,
    label: 'INTERDISCIPLINARY INQUIRY • HINDI',
    title: 'Sandhyopāsanā: Saṃskāra, Brain Development & Modern Science',
    summary: 'A Hindi lecture asking how the multi-component discipline of Sandhyopāsanā — including prāṇāyāma, Gāyatrī-japa, attention, imagery, meaning, and daily routine — might be studied scientifically without presuming benefit in advance.'
  },
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
    title: 'Pitṛ-ṛṇa: Memory, Ancestry & Identity',
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
    summary: 'What is Hindu culture? Dharma, karma, rebirth, āśrama, and the Hindu way of life — presented in Hindi, Sanskrit, and English.',
    versions: [
      { label: 'हिन्दी — हिंदी में देखें', id: '1Slii7rgPSI', start: 0 },
      { label: 'संस्कृतम् — संस्कृते पश्यतु', id: 'AxObzgp-WBw', start: 19 },
      { label: 'English — Watch in English', id: 'hfvkAeV5whc', start: 0 }
    ]
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
      .videoCard, .panel, .callout, .talkGrid { break-inside: avoid; }
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

    <section className="featuredTalks" style={{marginTop:'0',marginBottom:'52px'}}>
      <div className="sectionHeaderRow"><div><p className="kicker">Start here • Platform launch</p><h2 className="sectionTitle">Introducing IvyPandit</h2></div><a className="textLink" href="https://www.youtube.com/watch?v=XkEqWuym3dc" target="_blank" rel="noopener noreferrer">Watch on YouTube →</a></div>
      <div className="talkGrid">
        <div className="videoEmbed"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/XkEqWuym3dc" title="Introducing IvyPandit — platform launch video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
        <div className="talkCopy"><span className="label">PLATFORM LAUNCH</span><h3>Why IvyPandit?</h3><p>This launch video introduces the purpose of the platform and the kind of conversation IvyPandit is trying to build across Sanskrit, Indian Knowledge Systems, neuroscience, medicine, and public scholarship.</p><p>Watch this first for the clearest overview of the platform&apos;s mission, method, and invitation to scholars, learners, scientists, and communities.</p><a className="textLink" href="/about">About the platform →</a><br/><a className="textLink" href="/editorial-policy">Editorial & Evidence Policy →</a></div>
      </div>
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
        {traditionHighlights.map((talk)=><div key={talk.id} className="videoCard"><a href={`https://www.youtube.com/watch?v=${talk.id}&t=${talk.start}s`} target="_blank" rel="noopener noreferrer"><img src={`https://i.ytimg.com/vi/${talk.id}/hqdefault.jpg`} alt={talk.title} loading="lazy"/></a><div><span className="label">TRADITION / ŚĀSTRA / CULTURE</span><h2>{talk.title}</h2><p>{talk.summary}</p><div className="buttons" style={{marginTop:'16px',flexWrap:'wrap'}}>{talk.versions.map((version)=><a key={version.id} className="btn secondary" href={`https://www.youtube.com/watch?v=${version.id}${version.start ? `&t=${version.start}s` : ''}`} target="_blank" rel="noopener noreferrer">{version.label}</a>)}</div></div></div>)}
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