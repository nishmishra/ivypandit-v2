const academicHighlights = [
  {
    id: '_U0YB0YVWxI',
    start: 214,
    title: 'Academic & Scientific Lecture — Selected Example I',
    summary: 'A selected example of Dr. Mishra’s academic and scientific public scholarship within the wider IvyPandit lecture archive.'
  },
  {
    id: 'QsLBK1qPCPg',
    start: 517,
    title: 'Academic & Scientific Lecture — Selected Example II',
    summary: 'A selected lecture illustrating the academic and interdisciplinary side of IvyPandit.'
  },
  {
    id: 'LjupamrT6Uw',
    start: 31,
    title: 'Academic & Scientific Lecture — Selected Example III',
    summary: 'A further example of scientific and scholarly public communication by Dr. Nishant K. Mishra.'
  },
  {
    id: 'nTCykV_86Mo',
    start: 153,
    title: 'Cognitive Reframing of Arjuna’s Confusion Before War',
    summary: 'A psychology- and cognition-oriented discussion of Arjuna’s crisis before the war, using the Bhagavad Gītā as a framework for examining confusion, perspective, duty, and cognitive reframing.'
  }
];

const talks = [
  ['CbtzXqFRGKI','Sanskrit, Indian Knowledge Systems & Scientific Inquiry','Classical knowledge, scientific curiosity, interpretation, hypothesis, and evidence.'],
  ['XkEqWuym3dc','Classical Knowledge as a Source of Research Questions','How careful study of classical sources can generate testable contemporary questions.'],
  ['0SsbaEEcWWc','Mind, Cognition & Human Experience','Cognition and human experience in conversation with Indian knowledge traditions.'],
  ['yylfBDXc5CY','Śāstra, Interpretation & Contemporary Inquiry','Understanding Sanskrit texts in context before translating them into modern scientific language.'],
  ['cNz4HNv5LdI','Attention, Memory & Cultural Expertise','Attention, memory, recitation, learning, and long-duration cultural expertise.'],
  ['0_SCLDfQdUk','Tradition, Medicine & Human Flourishing','Traditional concepts of practice, health, behavior, meaning, and biomedical evidence.'],
  ['FIZ5jzLfbxQ','IKS, Evidence & Research Method','Philological and historical rigor alongside contemporary scientific methods.'],
  ['knKSnPKvGWA','Building Conversations Across Sanskrit & Science','Interdisciplinary conversation among scholars, scientists, physicians, philosophers, and practitioners.']
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
  <section className="pageHero inquiryHero"><div className="eyebrow">IvyPandit Learning</div><h1>Talks, Lectures & Traditional Learning</h1><p>Two complementary collections: academic and interdisciplinary scholarship, and explicitly traditional, religious, Purāṇic, and cultural learning.</p></section>
  <main className="content">
    <section className="callout"><b>Two pathways, one platform.</b> University, research, and professional audiences can go directly to IvyPandit&apos;s academic material, while viewers interested in Hindu tradition, śāstra, ritual, festivals, and cultural learning have a clearly marked collection of their own. The distinction helps preserve the character of both.</section>

    <section id="academic">
      <p className="kicker">Collection I • Academic / Scientific / Interdisciplinary</p>
      <h2 className="sectionTitle">Neuroscience, medicine, cognition, Sanskrit & Indian Knowledge Systems</h2>
      <p>These lectures represent the scholarly side of IvyPandit: academic medicine and science, cognition and psychology, research method, Sanskrit and IKS, and hypothesis-generating dialogue between classical sources and contemporary inquiry.</p>

      <div className="sectionHeaderRow" style={{marginTop:'30px'}}><div><p className="kicker">Selected examples</p><h2 className="sectionTitle">A few academic & scientific lectures</h2></div></div>
      <div className="curatedVideoGrid">
        {academicHighlights.map((talk)=><a key={talk.id} className="videoCard" href={`https://www.youtube.com/watch?v=${talk.id}&t=${talk.start}s`} target="_blank" rel="noopener noreferrer"><img src={`https://i.ytimg.com/vi/${talk.id}/hqdefault.jpg`} alt={talk.title} loading="lazy"/><div><span className="label">ACADEMIC / SCIENTIFIC</span><h2>{talk.title}</h2><p>{talk.summary}</p><strong>Watch on YouTube →</strong></div></a>)}
      </div>

      <div className="sectionHeaderRow" style={{marginTop:'44px'}}><div><p className="kicker">Curated IvyPandit collection</p><h2 className="sectionTitle">Additional interdisciplinary talks</h2></div></div>
      <div className="curatedVideoGrid">
        {talks.map(([id,topic,summary],i)=><a key={id} className="videoCard" href={`https://youtu.be/${id}`} target="_blank" rel="noopener noreferrer"><img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt={topic} loading="lazy"/><div><span className="label">{i===0?'FEATURED ACADEMIC TALK':'ACADEMIC / INTERDISCIPLINARY'}</span><h2>{topic}</h2><p>{summary}</p><strong>Watch →</strong></div></a>)}
      </div>
    </section>

    <section id="tradition" style={{marginTop:'54px'}}>
      <p className="kicker">Collection II • Tradition / Dharma / Culture</p>
      <h2 className="sectionTitle">Hindu thought, Purāṇa, ritual, festivals, recitation & lived tradition</h2>
      <p>This collection is more explicitly traditional and cultural. It includes discussions of Hindu identity and saṃskṛti, Purāṇic and scriptural themes, vrata and festivals, ancestral traditions, mantra, Sandhyā, and Sanskrit cultural learning.</p>

      <div className="curatedVideoGrid" style={{marginBottom:'32px'}}>
        {traditionHighlights.map((talk)=><a key={talk.id} className="videoCard" href={`https://www.youtube.com/watch?v=${talk.id}&t=${talk.start}s`} target="_blank" rel="noopener noreferrer"><img src={`https://i.ytimg.com/vi/${talk.id}/hqdefault.jpg`} alt={talk.title} loading="lazy"/><div><span className="label">TRADITION / CULTURE</span><h2>{talk.title}</h2><p>{talk.summary}</p><strong>Watch on YouTube →</strong></div></a>)}
      </div>

      <div className="resourceGrid">
        {traditionLinks.map(([title,query,desc])=><a key={title} className="panel linkedCard" href={`https://www.youtube.com/@IvyPandit/search?query=${encodeURIComponent(query)}`} target="_blank" rel="noopener noreferrer"><h2>{title}</h2><p>{desc}</p><span>Browse related IvyPandit videos →</span></a>)}
      </div>
    </section>

    <section className="missionBox" style={{marginTop:'44px'}}><h2>Explore the full IvyPandit channel</h2><p>New lectures, shorter reflections, academic discussions, Sanskrit and IKS material, and traditional Hindu cultural content continue to be added.</p><div className="buttons"><a className="btn secondary" href="https://www.youtube.com/@IvyPandit" target="_blank" rel="noopener noreferrer">YouTube @IvyPandit</a><a className="btn secondary" href="https://www.youtube.com/@IvyPandit/videos" target="_blank" rel="noopener noreferrer">All Videos</a></div></section>

    <section className="twoCol" style={{marginTop:'36px'}}>
      <div className="panel"><h2>Follow IvyPandit</h2><p><a className="textLink" href="https://www.linkedin.com/in/ivypandit/" target="_blank" rel="noopener noreferrer">LinkedIn →</a><br/><a className="textLink" href="https://x.com/IvyPandit" target="_blank" rel="noopener noreferrer">X / Twitter →</a><br/><a className="textLink" href="https://www.youtube.com/@IvyPandit" target="_blank" rel="noopener noreferrer">YouTube →</a></p></div>
      <div className="panel"><h2>Invite a Lecture</h2><p>Many of these themes can be developed into live university, temple, community, or conference programs.</p><a className="textLink" href="/speaking">Explore speaking topics →</a></div>
    </section>

    <section className="contactInvitation"><div><p className="kicker">Continue the conversation</p><h2>Scholar, practitioner, scientist, or organizer?</h2><p>Write if a lecture connects with your textual expertise, research, institution, or community program.</p></div><div className="contactActions"><a className="btn secondary" href="mailto:nishant.mishra@ivypandit.com">nishant.mishra@ivypandit.com</a><a className="btn secondary" href="mailto:nishmishra@gmail.com">nishmishra@gmail.com</a></div></section>
  </main>
</>}
