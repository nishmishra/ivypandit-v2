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

const traditionLinks = [
  ['Purāṇa, Itihāsa & Sacred Narratives','Vishnu Purana','Purāṇic teaching, sacred narratives, cosmology, and traditional interpretation.'],
  ['Festivals, Vrata & Hindu Practice','Janmashtami','Festival talks, vrata, pūjā, observance, and lived Hindu practice.'],
  ['Pitṛpakṣa, Śrāddha & Ancestor Traditions','Pitru Shraddha','Ancestor remembrance, śrāddha, tarpaṇa, Mahālaya, and related scriptural traditions.'],
  ['Gāyatrī, Sandhyā & Mantra Practice','Gayatri Sandhya','Gāyatrī, Sandhyopāsanā, mantra, recitation, and contemplative practice.'],
  ['Sanskrit Recitation & Cultural Learning','Sanskrit','Sanskrit recitation, verses, traditional learning, and cultural education.']
];

export default function Videos(){return <>
  <section className="pageHero inquiryHero"><div className="eyebrow">IvyPandit Learning</div><h1>Talks, Lectures & Traditional Learning</h1><p>Two complementary collections: academic and interdisciplinary scholarship, and explicitly traditional, devotional, ritual, Purāṇic, and cultural learning.</p></section>
  <main className="content">
    <section className="callout"><b>Why separate the collections?</b> University, research, and professional audiences should be able to find IvyPandit&apos;s academic material immediately. At the same time, the platform does not hide its Hindu and Sanskrit roots. Traditional and religious material therefore has its own clearly marked pathway.</section>

    <section id="academic">
      <p className="kicker">Collection I • Academic / Interdisciplinary</p>
      <h2 className="sectionTitle">Sanskrit, IKS, neuroscience, cognition & research method</h2>
      <p>These selected talks best represent IvyPandit&apos;s scholarly and hypothesis-generating work. They distinguish classical sources, traditional interpretation, research questions, and scientific evidence.</p>
      <div className="curatedVideoGrid">
        {talks.map(([id,topic,summary],i)=><a key={id} className="videoCard" href={`https://youtu.be/${id}`} target="_blank" rel="noopener noreferrer"><img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt={topic} loading="lazy"/><div><span className="label">{i===0?'FEATURED ACADEMIC TALK':'ACADEMIC / INTERDISCIPLINARY'}</span><h2>{topic}</h2><p>{summary}</p><strong>Watch →</strong></div></a>)}
      </div>
    </section>

    <section id="tradition" style={{marginTop:'50px'}}>
      <p className="kicker">Collection II • Tradition / Dharma / Culture</p>
      <h2 className="sectionTitle">Purāṇa, ritual, festivals, recitation & lived tradition</h2>
      <p>These pathways lead into the more explicitly religious and cultural side of the IvyPandit YouTube archive. They are presented separately from the academic collection so the character of each kind of content remains clear.</p>
      <div className="resourceGrid">
        {traditionLinks.map(([title,query,desc])=><a key={title} className="panel linkedCard" href={`https://www.youtube.com/@IvyPandit/search?query=${encodeURIComponent(query)}`} target="_blank" rel="noopener noreferrer"><h2>{title}</h2><p>{desc}</p><span>Browse related IvyPandit videos →</span></a>)}
      </div>
    </section>

    <section className="twoCol" style={{marginTop:'36px'}}>
      <div className="panel"><h2>Complete YouTube Archive</h2><p>Browse every IvyPandit upload, including new lectures, shorter reflections, cultural material, and devotional or scriptural content.</p><a className="textLink" href="https://www.youtube.com/@IvyPandit/videos" target="_blank" rel="noopener noreferrer">View all videos →</a></div>
      <div className="panel"><h2>Invite a Lecture</h2><p>Many of these themes can be developed into live university, temple, community, or conference programs.</p><a className="textLink" href="/speaking">Explore speaking topics →</a></div>
    </section>

    <section className="contactInvitation"><div><p className="kicker">Continue the conversation</p><h2>Scholar, practitioner, scientist, or organizer?</h2><p>Write if a lecture connects with your textual expertise, research, institution, or community program.</p></div><div className="contactActions"><a className="btn secondary" href="mailto:nishant.mishra@ivypandit.com">nishant.mishra@ivypandit.com</a><a className="btn secondary" href="mailto:nishmishra@gmail.com">nishmishra@gmail.com</a></div></section>
  </main>
</>}
