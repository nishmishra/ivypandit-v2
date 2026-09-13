import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lectures & Speaking | IvyPandit',
  description: 'Invite Dr. Nishant K. Mishra for lectures in English or Hindi on neuroscience, Sanskrit, Indian Knowledge Systems, attention, memory, neuroplasticity, brain health, Gita, Mahabharata, Gayatri, and human development.',
};

const featuredLectures = [
  ['Gāyatrī, Saṃskāra & the Developing Brain','How repetition, meaning, mantra, imagery, breath, and early experience may shape attention, learning, memory, and the developing mind.','Temples, parents, Bāla Vihār, Hindu schools, educators, youth programs, and interdisciplinary audiences.'],
  ['Avadhāna and the Indian Science of Attention','A remarkable Indian tradition opens questions about divided attention, working memory, interference control, creativity, metacognition, and trainable cognitive expertise.','Universities, Sanskrit organizations, IKS programs, neuroscience audiences, and literary gatherings.'],
  ['The Bhagavad Gītā, Cognitive Reframing & Human Resilience','Arjuna’s crisis becomes a framework for examining confusion, moral conflict, emotional regulation, perspective, purposeful action, and resilience under stress.','Universities, temples, leadership groups, students, clinicians, and general audiences.'],
  ['Ancestors, Memory & the Brain','Pitṛpakṣa, śrāddha, grief, gratitude, family narratives, continuing bonds, and intergenerational identity in respectful conversation with psychology and neuroscience.','Temples, Pitṛpakṣa programs, community organizations, literary gatherings, and intergenerational audiences.'],
  ['From Śāstra to Scientific Discovery','How can traditional texts generate serious research questions without confusing textual authority with empirical evidence? A practical framework for responsible IKS research.','Universities, IITs, IKS centres, Sanskrit institutions, researchers, and academic conferences.'],
  ['The Brain, Culture & Human Neuroplasticity','What can bilingualism, recitation, long-duration expertise, contemplative practice, and cultural learning teach us about the brain’s capacity to change?','Neuroscience departments, medical schools, universities, language programs, and interdisciplinary audiences.']
];

const lectureFamilies = [
  {
    title: 'Neuroscience, Culture & Human Potential',
    intro: 'Neuroplasticity, language, expertise, cognitive reserve, cultural learning, and the ways sustained experience may reshape the human brain.',
    talks: [
      'The Brain, Culture & Human Neuroplasticity',
      'Long-Duration Cultural Expertise: What Can It Teach Neuroscience?',
      'Sanskrit, Bilingualism & the Neuroplastic Brain',
      'Vedic Recitation and the Brain',
      'Can Traditional Learning Build Cognitive Reserve?',
      'Language, Memory & the Multilingual Brain',
      'Cultural Expertise as a Natural Experiment in Neuroscience',
      'How Experience Reshapes the Human Brain'
    ]
  },
  {
    title: 'Attention, Memory & Avadhāna',
    intro: 'Extraordinary attention and memory as a bridge between a living Indian intellectual tradition and modern cognitive science.',
    talks: [
      'Avadhāna and the Indian Science of Attention',
      'Can the Human Brain Truly Multitask? Lessons from Avadhāna',
      'Extraordinary Memory: What Avadhānis Can Teach Cognitive Science',
      'Attention Under Cognitive Load',
      'Training Attention: Ancient Expertise and Modern Neuroscience',
      'Working Memory, Creativity & the Avadhāna Tradition',
      'Can Extraordinary Cognitive Expertise Be Trained?'
    ]
  },
  {
    title: 'Gāyatrī, Sandhyā & Saṃskāra',
    intro: 'Mantra, breath, attention, imagery, repetition, childhood learning, daily practice, and the neuroscience questions they can generate.',
    talks: [
      'Gāyatrī, Saṃskāra & the Developing Brain',
      'The Neuroscience of Gāyatrī Mantra',
      'Sandhyopāsanā: From Ritual to Mechanism',
      'Breath, Mantra, Attention & Visualization',
      'Can Daily Practice Shape the Brain?',
      'Nityakarma as a Behavioral Ecosystem',
      'Childhood Saṃskāra and Neuroplasticity',
      'Mantra, Repetition & Memory',
      'Why Morning and Evening Rituals May Matter',
      'Prāṇāyāma, Attention & Autonomic Regulation',
      'धियो यो नः प्रचोदयात् — What Does It Mean to Cultivate the Intellect?'
    ]
  },
  {
    title: 'Bhagavad Gītā, Mahābhārata & the Psychology of Action',
    intro: 'Moral conflict, cognitive reframing, resilience, duty, leadership, decision-making, self-regulation, memory, and human action under pressure.',
    talks: [
      'Arjuna’s Crisis and Cognitive Reframing',
      'The Bhagavad Gītā and Cognitive Resilience',
      'From Confusion to Action: The Psychology of Arjuna',
      'Dharma, Decision-Making & the Human Brain',
      'The Neuroscience of Action Under Stress',
      'Can the Bhagavad Gītā Teach Emotional Regulation?',
      'Bhīṣma, Memory & Consciousness at the End of Life',
      'The Mahābhārata as a Laboratory of Human Psychology',
      'Leadership, Moral Conflict & Decision-Making in the Mahābhārata',
      'Dharma as System Maintenance',
      'What Can Neuroscience Ask of the Mahābhārata?',
      'Karma-Yoga and Self-Regulated Action'
    ]
  },
  {
    title: 'Ancestors, Memory & Identity',
    intro: 'Pitṛpakṣa, grief, remembrance, ritual, gratitude, family narratives, and the ways ancestral memory contributes to identity and meaning.',
    talks: [
      'Ancestors, Memory & the Brain',
      'Why Do Human Beings Remember Their Ancestors?',
      'Pitṛpakṣa Through Hindu Tradition and Neuroscience',
      'Grief, Memory & Continuing Bonds',
      'Family Narratives and the Construction of Identity',
      'Can Ritual Help Organize Grief?',
      'Intergenerational Memory: What Do We Inherit Beyond Genes?',
      'Śrāddha, Gratitude & the Psychology of Remembrance',
      'A Son Remembers: Medicine, Memory & the Ancestors'
    ]
  },
  {
    title: 'Indian Knowledge Systems & Scientific Method',
    intro: 'How to move from source, interpretation, and traditional knowledge to clear hypotheses, responsible translation, evidence, and collaborative research.',
    talks: [
      'From Śāstra to Scientific Discovery',
      'How Should Indian Knowledge Systems Be Studied Scientifically?',
      'Can Ancient Texts Generate Modern Research Questions?',
      'Tradition Is Not Evidence — But It Can Generate Hypotheses',
      'What Counts as Evidence? Indian and Modern Approaches to Knowledge',
      'Scientific Method Before Modern Science',
      'How Not to Study Indian Knowledge Systems',
      'Sanskrit Scholars and Scientists: Why We Need Both',
      'Translation, Interpretation & False Scientific Equivalence',
      'Building a Sanskrit Biomedical Knowledge Base',
      'From Text to Experiment',
      'Indian Epistemology and Contemporary Science',
      'Anusandhāna: Inquiry in the Indian Knowledge Tradition'
    ]
  },
  {
    title: 'Dharma, Health & Human Flourishing',
    intro: 'Daily practice, fasting, saṃskāra, behavioral regulation, preventive health, family life, and scientifically tractable questions from lived Hindu traditions.',
    talks: [
      'Ekādaśī, Fasting & Self-Regulation',
      'Can Traditional Daily Practices Influence Health?',
      'Nityakarma, Habit & Human Flourishing',
      'Ritual, Routine & Behavioral Health',
      'Garbhādhāna, Parental Preparation & Epigenetics',
      'Tradition and Preventive Health',
      'Hindu Saṃskāra and Human Development',
      'What Does Hindu Sanātanī Saṃskṛti Mean?',
      'Hindu Practice Through the Lens of Behavior and Neuroscience'
    ]
  },
  {
    title: 'Brain Health & Clinical Neuroscience',
    intro: 'Stroke, epilepsy after stroke, neuroimaging, precision neurology, clinical trials, prediction, biomarkers, and the future of brain-health systems.',
    talks: [
      'Stroke: What We Have Learned in the Last Twenty Years',
      'The Future of Stroke Treatment',
      'Brain Health for India',
      'Building a Learning Health System for Neurological Disease',
      'Precision Neuroscience: From Imaging to Prediction',
      'Post-Stroke Epilepsy: The Hidden Complication of Stroke',
      'Can We Predict Who Develops Epilepsy After Stroke?',
      'Neuroimaging and the Future of Precision Stroke Care',
      'Artificial Intelligence, Biomarkers & Neurological Prediction',
      'How Clinical Trials Change Medicine',
      'Building Brain-Health Research Infrastructure in India'
    ]
  }
];

export default function Speaking() { return <>
  <section className="pageHero"><div className="eyebrow">Public scholarship • Neuroscience • Sanskrit • Indian Knowledge Systems</div><h1>Lectures & Speaking</h1><p>Ancient traditions. Contemporary questions. Serious conversation.</p><div className="buttons"><Link className="btn secondary" href="/hi/speaking">हिन्दी</Link><Link className="btn secondary" href="/sa/speaking">संस्कृतम्</Link></div></section>
  <main className="content">
    <div className="callout"><b>Nishant K. Mishra, MD, PhD</b> offers public lectures, invited talks, workshops, panels, podcasts, and conversations at the meeting point of neuroscience, medicine, Sanskrit, Indian Knowledge Systems, cognition, and human experience. Lectures are available in <b>English and Hindi</b> and can be adapted for universities, temples, medical and scientific audiences, schools, conferences, and community organizations.</div>

    <section><p className="kicker">Signature lectures</p><h2 className="sectionTitle">Six strong entry points into a much larger body of work.</h2>
      <div className="twoCol">{featuredLectures.map(([title,body,audience])=><article className="panel" key={title}><h2>{title}</h2><p>{body}</p><p><b>Especially suitable for:</b> {audience}</p></article>)}</div>
    </section>

    <section style={{marginTop:'44px'}}>
      <p className="kicker">Explore all lecture topics</p>
      <h2 className="sectionTitle">A growing lecture catalogue organized by intellectual theme.</h2>
      <p>Many of these talks grow from ongoing scholarship, research questions, essays, books, and teaching projects. Open a theme to see the individual lecture possibilities.</p>
      <div className="resourceGrid">
        {lectureFamilies.map((family)=><details className="panel" key={family.title}>
          <summary><b>{family.title}</b></summary>
          <p>{family.intro}</p>
          <ul>{family.talks.map((talk)=><li key={talk}>{talk}</li>)}</ul>
        </details>)}
      </div>
    </section>

    <section style={{marginTop:'42px'}}>
      <p className="kicker">Languages</p>
      <h2 className="sectionTitle">English and Hindi lectures, with multilingual engagement.</h2>
      <div className="twoCol">
        <div className="panel"><h2>Full lecture languages</h2><p>Programs may be delivered fully in <b>English</b> or <b>Hindi</b>, including bilingual formats when useful for the audience.</p><p>Sanskrit passages, mantras, ślokas, and technical terms can be presented and discussed directly from the original language where appropriate.</p></div>
        <div className="panel"><h2>Additional languages</h2><p>Dr. Mishra also speaks <b>Sanskrit, Bhojpuri, Marathi, and French</b>. These languages can be incorporated into introductions, selected portions of a program, textual discussion, conversation, and Q&A depending on the setting and audience.</p></div>
      </div>
    </section>

    <section style={{marginTop:'38px'}}><p className="kicker">Formats & audiences</p><h2 className="sectionTitle">Adapted to the institution and the people in the room.</h2><div className="twoCol"><div className="panel"><h2>Community & Educational Programs</h2><ul><li><b>Community lecture:</b> 30–45 minutes plus Q&A</li><li><b>Youth / family program:</b> adapted for Bāla Vihār, teenagers, parents, or educators</li><li><b>Workshop:</b> 60–120 minutes with source material, discussion, and participation</li></ul></div><div className="panel"><h2>Academic & Professional Programs</h2><ul><li><b>Invited seminar:</b> 45–60 minutes plus discussion</li><li><b>Conference / panel / podcast:</b> tailored to the program theme</li><li><b>Lecture series:</b> a multi-part program built around one of the thematic families above</li></ul></div></div></section>

    <section className="missionBox"><p className="kicker" style={{color:'#ffd36b'}}>Invite a lecture</p><h2>Bring an IvyPandit conversation to your community or institution.</h2><p>Invitations are welcome from temples, universities, medical schools, hospitals, Hindu organizations, Sanskrit institutions, schools, conferences, cultural organizations, podcasts, and community groups. A custom talk can also be developed around a theme not yet listed.</p><div className="buttons"><a className="btn secondary" href="mailto:nishant.mishra@ivypandit.com?cc=nishmishra@gmail.com&subject=IvyPandit%20Lecture%20Invitation&body=Organization%3A%0ALocation%3A%0AProposed%20topic%3A%0APreferred%20language%3A%20English%20%2F%20Hindi%20%2F%20Bilingual%20%2F%20Other%0APreferred%20date%3A%0AExpected%20audience%3A%0AApproximate%20attendance%3A%0AIn-person%20or%20online%3A%0APreferred%20lecture%20length%3A%0A">Invite Dr. Mishra to Speak</a></div><p><b>nishant.mishra@ivypandit.com</b><br/><b>nishmishra@gmail.com</b><br/>Academic, educational, community, medical, and invited programs are welcome. Honorarium and travel arrangements may be discussed depending on the organization, location, and format.</p></section>

    <section className="panel" style={{marginTop:'28px'}}><h2>About the Speaker</h2><p><b>Nishant K. Mishra, MD, PhD</b> is a neurologist, physician-scientist, educator, and public scholar whose work spans stroke, neuroimaging, brain health, clinical neuroscience, human neuroplasticity, Sanskrit, and Indian Knowledge Systems.</p><p><a className="textLink" href="https://www.linkedin.com/in/ivypandit/" target="_blank" rel="noopener noreferrer">LinkedIn →</a><br/><a className="textLink" href="https://x.com/IvyPandit" target="_blank" rel="noopener noreferrer">X / Twitter →</a><br/><a className="textLink" href="https://www.youtube.com/@IvyPandit" target="_blank" rel="noopener noreferrer">YouTube @IvyPandit →</a></p></section>
  </main>
</>; }
