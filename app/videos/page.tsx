const talks = [
  {
    id: 'CbtzXqFRGKI',
    label: 'FEATURED TALK',
    topic: 'Sanskrit, Indian Knowledge Systems & Scientific Inquiry',
    summary: 'A selected long-form lecture from the IvyPandit collection exploring how classical knowledge traditions can be approached with intellectual respect, scientific curiosity, and clear distinctions between textual interpretation, hypothesis, and evidence.'
  },
  {
    id: 'XkEqWuym3dc',
    label: 'SELECTED TALK 2',
    topic: 'Classical Knowledge as a Source of Research Questions',
    summary: 'This talk invites viewers to move beyond simple claims of agreement or disagreement between tradition and modern science, and instead ask what careful study of classical sources can contribute to new, testable questions.'
  },
  {
    id: '0SsbaEEcWWc',
    label: 'SELECTED TALK 3',
    topic: 'Mind, Cognition & Human Experience',
    summary: 'A discussion situated at the meeting point of human experience, cognition, and the conceptual resources of Indian knowledge traditions, with an emphasis on questions that may benefit from collaboration across disciplines.'
  },
  {
    id: 'yylfBDXc5CY',
    label: 'SELECTED TALK 4',
    topic: 'Śāstra, Interpretation & Contemporary Inquiry',
    summary: 'This lecture highlights the importance of understanding Sanskrit texts in their own intellectual context before translating traditional ideas into modern scientific language or research frameworks.'
  },
  {
    id: 'cNz4HNv5LdI',
    label: 'SELECTED TALK 5',
    topic: 'Attention, Memory & Cultural Expertise',
    summary: 'A selected lecture relevant to IvyPandit\'s interest in attention, memory, learning, recitation, and long-duration cultural expertise as areas where Sanskrit scholarship and cognitive science may generate fruitful dialogue.'
  },
  {
    id: '0_SCLDfQdUk',
    label: 'SELECTED TALK 6',
    topic: 'Tradition, Medicine & Human Flourishing',
    summary: 'This talk belongs to the broader IvyPandit inquiry into how traditional concepts concerning practice, behavior, health, meaning, and human flourishing can be studied carefully without confusing classical observations with established biomedical evidence.'
  },
  {
    id: 'FIZ5jzLfbxQ',
    label: 'SELECTED TALK 7',
    topic: 'IKS, Evidence & Research Method',
    summary: 'A lecture connected to the methodological challenge at the heart of IvyPandit: how to preserve philological and historical rigor while formulating questions that can be examined using contemporary scientific methods.'
  },
  {
    id: 'knKSnPKvGWA',
    label: 'SELECTED TALK 8',
    topic: 'Building Conversations Across Sanskrit & Science',
    summary: 'A selected talk representing the collaborative spirit of IvyPandit — bringing Sanskrit scholars, scientists, physicians, philosophers, practitioners, and students into serious conversation around questions no single discipline can answer alone.'
  }
];

export default function Videos(){return <>
  <section className="pageHero inquiryHero">
    <div className="eyebrow">IvyPandit Learning</div>
    <h1>Selected Talks & Conversations</h1>
    <p>Lectures at the intersection of Sanskrit, Indian Knowledge Systems, neuroscience, medicine, cognition, and human experience — curated to encourage questions rather than premature conclusions.</p>
  </section>
  <main className="content">
    <section className="manifesto compactManifesto">
      <p className="kicker">Why these talks are here</p>
      <h2 className="sectionTitle">A lecture becomes more valuable when it starts a conversation.</h2>
      <p>These talks are presented as invitations to inquiry. They do not claim that classical texts already contain the conclusions of modern science. Instead, they ask whether careful engagement with Sanskrit texts, practices, and intellectual traditions can help scholars and scientists formulate better questions for contemporary research.</p>
    </section>

    <section className="talkGrid featureTalkPage">
      <div className="videoEmbed"><iframe src="https://www.youtube-nocookie.com/embed/CbtzXqFRGKI" title="Featured IvyPandit lecture" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
      <div className="talkCopy"><span className="label">{talks[0].label}</span><h2>{talks[0].topic}</h2><p>{talks[0].summary}</p><a className="textLink" href="https://youtu.be/CbtzXqFRGKI" target="_blank" rel="noopener noreferrer">Watch on YouTube →</a></div>
    </section>

    <section>
      <div className="sectionHeaderRow"><div><p className="kicker">Selected collection</p><h2 className="sectionTitle">More talks featuring Dr. Nishant K. Mishra</h2></div></div>
      <div className="curatedVideoGrid">
        {talks.slice(1).map((talk) => <a key={talk.id} className="videoCard" href={`https://youtu.be/${talk.id}`} target="_blank" rel="noopener noreferrer"><img src={`https://i.ytimg.com/vi/${talk.id}/hqdefault.jpg`} alt={talk.topic} loading="lazy"/><div><span className="label">{talk.label}</span><h2>{talk.topic}</h2><p>{talk.summary}</p><strong>Watch →</strong></div></a>)}
      </div>
    </section>

    <section className="contactInvitation">
      <div>
        <p className="kicker">Continue the conversation</p>
        <h2>Did one of these talks raise a question?</h2>
        <p>If you are a Sanskrit scholar, traditional scholar, scientist, physician, psychologist, philosopher, student, or practitioner — and a theme in these talks connects with your expertise — please write. You may know a passage that deserves closer study, see a conceptual problem that needs correction, or identify a question that could become an interdisciplinary project in India.</p>
        <p><strong>The aim is not to prove that tradition and science agree. It is to discover what questions become possible when they speak seriously to one another.</strong></p>
      </div>
      <div className="contactActions"><a className="btn secondary" href="mailto:nishant.mishra@ivypandit.com?subject=IvyPandit%20scholarly%20conversation">Email Dr. Mishra</a><a className="btn secondary" href="/questions">Explore research questions</a><a className="btn secondary" href="/collaborate">Collaborate</a></div>
    </section>

    <section className="panel devanagariPage"><h2>हिन्दी में आमंत्रण</h2><p>यदि इन व्याख्यानों में कोई प्रश्न आपके शास्त्रीय अध्ययन, ग्रन्थ, परम्परा, चिकित्सा, विज्ञान या अनुसंधान से जुड़ता है, तो संवाद के लिए अवश्य लिखें। आपका पाठ-ज्ञान या वैज्ञानिक अनुभव किसी नए प्रश्न को अधिक स्पष्ट, अधिक प्रामाणिक और अधिक अनुसंधानयोग्य बना सकता है।</p></section>
    <section className="panel devanagariPage sanskritPage"><h2>संस्कृतविदुषां कृते आमन्त्रणम्</h2><p>यदि एतेषु व्याख्यानेषु कश्चन विषयः भवतः अथवा भवत्याः शास्त्रीयज्ञानस्य, ग्रन्थाध्ययनस्य वा अनुसन्धानस्य क्षेत्रे आगच्छति, तर्हि संवादाय सम्पर्कं करोतु। शास्त्रस्य सूक्ष्मबोधः आधुनिकविज्ञानस्य अनुसन्धानपद्धतिः च परस्परं सहयोगं कर्तुं शक्नुतः।</p></section>

    <section className="externalTalkBox"><p className="kicker">External lecture archive</p><h2>Related lecture hosted elsewhere</h2><p>This lecture is relevant to the themes of IvyPandit, but because it is hosted and visually presented by an external organization, it is linked as an external resource rather than showcased as IvyPandit featured media.</p><a className="textLink" href="https://www.youtube.com/watch?v=dr-H6IToGx4&t=5853s" target="_blank" rel="noopener noreferrer">View external lecture on YouTube →</a></section>
    <section className="panel"><h2>Complete IvyPandit Archive</h2><p>Browse the full collection of lectures, conversations, recitations, and educational series on the IvyPandit YouTube channel.</p><a className="textLink" href="https://www.youtube.com/@IvyPandit" target="_blank" rel="noopener noreferrer">Visit channel →</a></section>
  </main>
</>}
