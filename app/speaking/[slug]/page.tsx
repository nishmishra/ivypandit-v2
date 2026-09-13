import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const lectures = {
  'gayatri-samskara-developing-brain': {
    title: 'Gāyatrī, Saṃskāra & the Developing Brain',
    seoTitle: 'Gāyatrī, Saṃskāra & the Developing Brain | Neuroscience Lecture',
    description: 'A lecture by neurologist and physician-scientist Nishant K. Mishra on Gāyatrī, saṃskāra, childhood neuroplasticity, attention, memory, mantra, breath, imagery, and human development.',
    eyebrow: 'Gāyatrī • Neuroplasticity • Human development',
    intro: 'Why have Hindu traditions placed such importance on mantra, disciplined daily practice, and saṃskāra during childhood? This lecture begins with the Gāyatrī mantra and uses it as a doorway into a broader conversation about attention, repetition, language, imagery, breath, habit formation, moral aspiration, and the developing brain.',
    body: [
      'Modern developmental neuroscience shows that childhood is a period of remarkable plasticity. Repeated experiences influence language, memory, executive function, attention, emotional regulation, and behavior. Traditional Hindu educational practices also place great emphasis on repetition, memorization, daily discipline, sound, meaning, and the shaping of character. The interesting scholarly question is not whether an ancient practice “proves” a modern neuroscientific theory, but which components of the practice can be described clearly enough to study.',
      'The lecture examines mantra as more than sound alone. Meaning, intention, rhythm, controlled breathing, visual imagery, posture, repetition, social context, and the learner’s relationship to the practice may all matter. It also considers the distinction between a religious claim, a traditional interpretation, a psychological mechanism, and a scientifically tested effect.',
      'For parents and educators, the larger question is practical: what kinds of repeated experiences help children build attention, memory, self-regulation, language, and positive mental habits? For scientists, the challenge is methodological: how can traditional practices be studied without stripping them of the very context that gives them meaning?'
    ],
    questions: ['How does repetition influence learning and memory?', 'What role might meaning and intention play in mantra practice?', 'How can breath, attention, and imagery be studied separately and together?', 'What does childhood neuroplasticity imply for saṃskāra and education?'],
    audiences: 'Temples, Bāla Vihār programs, Hindu schools, parents, educators, youth programs, Sanskrit institutions, neuroscience and psychology audiences.',
    youtube: 'https://www.youtube.com/@IvyPandit/search?query=Gayatri'
  },
  'avadhana-indian-science-attention': {
    title: 'Avadhāna and the Indian Science of Attention',
    seoTitle: 'Avadhāna and the Indian Science of Attention | Neuroscience Lecture',
    description: 'A lecture on Avadhāna, divided attention, working memory, interference control, creativity, metacognition, and what extraordinary Indian cognitive expertise can teach neuroscience.',
    eyebrow: 'Avadhāna • Attention • Memory • Cognitive science',
    intro: 'Avadhāna is one of India’s most striking living traditions of cognitive performance. An accomplished avadhānī may track multiple questions, poetic constraints, interruptions, numerical tasks, linguistic demands, and memory challenges, and later reconstruct them with extraordinary precision.',
    body: [
      'For cognitive science, Avadhāna immediately raises questions about sustained attention, divided attention, working memory, interference control, retrieval, task switching, creativity, language, and metacognition. Yet the tradition should not be reduced too quickly to a laboratory label such as “multitasking.” Its own terminology, pedagogy, performance structure, historical development, and practitioner experience need to be documented first.',
      'This lecture introduces Avadhāna on its own terms and then asks what a rigorous research program might look like. What should be measured? What would count as an appropriate control group? How much of an expert avadhānī’s ability reflects years of deliberate practice, linguistic expertise, memory strategy, creativity, motivation, or culturally structured performance?',
      'Avadhāna offers a rare opportunity for collaboration among Sanskrit scholars, literary experts, psychologists, neuroscientists, and practitioners. The scientific value lies not in exoticizing an extraordinary performance but in using a carefully described expertise to ask better questions about the limits and trainability of human attention.'
    ],
    questions: ['Can divided attention be trained to an exceptional level?', 'How do expert performers manage interference?', 'Which components depend on memory strategy versus attentional control?', 'How should Avadhāna be phenotyped before brain imaging or cognitive testing?'],
    audiences: 'Universities, neuroscience departments, cognitive-science programs, Sanskrit organizations, IKS centers, literary gatherings, and general audiences.',
    youtube: 'https://www.youtube.com/@IvyPandit/search?query=Avadhana'
  },
  'bhagavad-gita-cognitive-reframing-resilience': {
    title: 'The Bhagavad Gītā, Cognitive Reframing & Human Resilience',
    seoTitle: 'Bhagavad Gita, Cognitive Reframing & Human Resilience Lecture',
    description: 'A psychology and neuroscience lecture on Arjuna’s crisis, cognitive reframing, emotional regulation, moral conflict, purposeful action, and resilience in the Bhagavad Gītā.',
    eyebrow: 'Bhagavad Gītā • Psychology • Cognitive reframing',
    intro: 'The Bhagavad Gītā begins not with abstract philosophy but with a human crisis. Arjuna is overwhelmed by grief, moral conflict, anticipated loss, competing duties, and the collapse of his ability to act. Krishna’s response changes how Arjuna understands the situation, himself, his duties, and the meaning of action.',
    body: [
      'That transformation creates a natural conversation with modern ideas such as cognitive reframing, emotion regulation, values-based action, attentional control, psychological flexibility, and resilience. The comparison must be made carefully: the Gītā is not a modern psychotherapy manual, and modern cognitive science does not exhaust the philosophical or spiritual meaning of Krishna’s teaching.',
      'The lecture follows the structure of Arjuna’s confusion and asks what changes as the dialogue unfolds. How does interpretation alter emotion? How do values and identity affect decision-making? What allows purposeful action to resume when the external situation remains difficult? How does the distinction between control over action and control over outcome affect stress and agency?',
      'This topic works equally well as a textual, psychological, leadership, or public-facing lecture. It creates a space where a classical Sanskrit text can be taken seriously in its own intellectual tradition while also generating contemporary questions about decision-making under pressure.'
    ],
    questions: ['What exactly changes in Arjuna’s cognition during the dialogue?', 'How does reframing alter emotional response and action?', 'Can values-based action reduce paralysis under uncertainty?', 'What can the Gītā contribute to modern discussions of resilience without being reduced to psychology?'],
    audiences: 'Universities, temples, leadership programs, students, clinicians, psychology audiences, professional groups, and general communities.',
    youtube: 'https://www.youtube.com/watch?v=nTCykV_86Mo&t=153s'
  },
  'ancestors-memory-brain-pitrapaksha': {
    title: 'Ancestors, Memory & the Brain',
    seoTitle: 'Ancestors, Memory & the Brain | Pitṛpakṣa, Grief & Identity',
    description: 'A lecture on Pitṛpakṣa, śrāddha, tarpaṇa, grief, memory, continuing bonds, family narratives, gratitude, identity, and intergenerational remembrance.',
    eyebrow: 'Pitṛpakṣa • Memory • Grief • Identity',
    intro: 'Why do human beings remember their ancestors? Hindu traditions give remembrance a formal place through practices such as śrāddha, tarpaṇa, Pitṛpakṣa, and Mahālaya. These practices carry theological, ritual, ethical, and familial meanings that deserve to be understood on their own terms.',
    body: [
      'Psychology and neuroscience ask a different but complementary set of questions. How are autobiographical and family memories maintained? What happens to identity after the death of a parent or elder? Why do stories, places, photographs, names, rituals, and repeated acts of remembrance remain emotionally powerful across decades?',
      'Contemporary grief research has increasingly recognized that healthy adaptation does not always require severing the bond with the deceased. Continuing bonds may be reorganized through memory, narrative, responsibility, gratitude, and ritual. Family narratives can also shape a person’s sense of continuity: who we are, where we came from, and what obligations or values we carry forward.',
      'The lecture maintains a clear distinction between scriptural claims about the pitṛs and scientific claims about memory or grief. The value of bringing them into conversation is not to collapse one into the other, but to understand why ancestral remembrance has remained such a durable human practice.'
    ],
    questions: ['How do rituals structure memory and grief?', 'What are continuing bonds after bereavement?', 'How do family narratives shape identity?', 'Why does gratitude toward ancestors remain psychologically powerful?'],
    audiences: 'Temples, Pitṛpakṣa programs, Hindu organizations, intergenerational gatherings, universities, literary events, and community groups.',
    youtube: 'https://www.youtube.com/@IvyPandit/search?query=Pitru%20Shraddha'
  },
  'shastra-scientific-discovery-iks': {
    title: 'From Śāstra to Scientific Discovery',
    seoTitle: 'From Śāstra to Scientific Discovery | Indian Knowledge Systems Lecture',
    description: 'A lecture on how Sanskrit texts and Indian Knowledge Systems can generate rigorous modern research questions without confusing tradition, interpretation, hypothesis, and scientific evidence.',
    eyebrow: 'Indian Knowledge Systems • Research method • Śāstra',
    intro: 'How should a scientist approach a claim, observation, concept, or practice found in a Sanskrit text? The two easiest mistakes are opposite ones: declaring that the ancients already discovered modern science, or dismissing a traditional source because it does not speak in modern scientific language.',
    body: [
      'A more productive approach begins by understanding the source. What does the text actually say? Which edition, commentary, school, historical context, and technical vocabulary matter? Only then should we ask whether the source contains an observation, classification, conceptual model, or practice capable of generating a modern research question.',
      'The lecture presents a practical pipeline: source, philology and context, interpretation, observation, conceptual mapping, research question, study design, evidence, and scholarly output. Each stage has a different standard of proof. A textual statement may be historically important without being empirically verified; a traditional practice may inspire a hypothesis without establishing an effect.',
      'This framework is especially relevant to the rapidly growing field of Indian Knowledge Systems. Serious interdisciplinary work requires both domain expertise and methodological humility. Sanskrit scholars can prevent superficial translations; scientists can prevent weak causal claims; historians and philosophers can help clarify how concepts change across time and intellectual traditions.'
    ],
    questions: ['How do we distinguish textual authority from empirical evidence?', 'What makes a traditional observation scientifically tractable?', 'How should Sanskrit concepts be translated without false equivalence?', 'What would responsible IKS research infrastructure look like?'],
    audiences: 'IITs, universities, IKS centers, Sanskrit institutions, research organizations, scientists, physicians, humanities scholars, and academic conferences.',
    youtube: 'https://www.youtube.com/watch?v=CbtzXqFRGKI'
  },
  'brain-culture-human-neuroplasticity': {
    title: 'The Brain, Culture & Human Neuroplasticity',
    seoTitle: 'The Brain, Culture & Human Neuroplasticity | Neuroscience Lecture',
    description: 'A neuroscience lecture on bilingualism, Sanskrit, recitation, long-duration cultural expertise, cognitive reserve, learning, and how sustained experience may reshape the human brain.',
    eyebrow: 'Neuroplasticity • Culture • Language • Expertise',
    intro: 'Human brains do not develop in a cultural vacuum. Language, music, literacy, ritual, memorization, professional training, contemplative practice, and other forms of expertise repeatedly recruit specific cognitive systems over many years. Those experiences may offer natural experiments in human neuroplasticity.',
    body: [
      'This lecture examines what bilingualism, Sanskrit learning, Vedic recitation, long-duration cultural expertise, and other sustained practices can teach us about attention, memory, language, cognitive control, auditory-motor integration, and cognitive reserve. The central scientific challenge is to separate the effects of training from education, selection, socioeconomic factors, lifestyle, and other confounders.',
      'Cultural expertise is particularly interesting because it often combines capacities that laboratory studies examine separately. Traditional recitation, for example, may involve phonological precision, sequential memory, breath control, rhythm, error monitoring, auditory feedback, social learning, and years of deliberate practice.',
      'The broader argument is that neuroscience can learn from carefully characterized human expertise wherever it occurs. Culture should not be treated merely as background noise in brain research; in some cases it is the structured experience that makes the scientific question possible.'
    ],
    questions: ['How does long-duration expertise alter brain networks?', 'What can bilingualism teach us about cognitive reserve?', 'How should recitation expertise be measured?', 'Can culturally structured practices become rigorous models of human learning?'],
    audiences: 'Neuroscience departments, medical schools, universities, language programs, Sanskrit institutions, education audiences, and interdisciplinary conferences.',
    youtube: 'https://www.youtube.com/@IvyPandit/search?query=neuroplasticity'
  }
} as const;

type LectureSlug = keyof typeof lectures;

export function generateStaticParams() {
  return Object.keys(lectures).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const lecture = lectures[params.slug as LectureSlug];
  if (!lecture) return {};
  const canonical = `https://www.ivypandit.com/speaking/${params.slug}`;
  return {
    title: lecture.seoTitle,
    description: lecture.description,
    alternates: { canonical },
    openGraph: {
      title: lecture.seoTitle,
      description: lecture.description,
      url: canonical,
      type: 'website',
      siteName: 'IvyPandit',
    },
    twitter: {
      card: 'summary_large_image',
      title: lecture.seoTitle,
      description: lecture.description,
    },
  };
}

export default function LecturePage({ params }: { params: { slug: string } }) {
  const lecture = lectures[params.slug as LectureSlug];
  if (!lecture) notFound();
  const canonical = `https://www.ivypandit.com/speaking/${params.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: lecture.title,
    description: lecture.description,
    url: canonical,
    about: ['Neuroscience', 'Sanskrit', 'Indian Knowledge Systems', lecture.title],
    author: {
      '@type': 'Person',
      name: 'Nishant K. Mishra',
      jobTitle: 'Neurologist, physician-scientist, educator and public scholar',
      url: 'https://www.ivypandit.com/about',
      sameAs: [
        'https://www.linkedin.com/in/ivypandit/',
        'https://x.com/IvyPandit',
        'https://www.youtube.com/@IvyPandit',
        'https://scholar.google.com/citations?user=1n2JUc8AAAAJ&hl=en'
      ]
    }
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <section className="pageHero inquiryHero">
      <div className="eyebrow">{lecture.eyebrow}</div>
      <h1>{lecture.title}</h1>
      <p>{lecture.description}</p>
      <div className="buttons"><Link className="btn secondary" href="/speaking">All lecture topics</Link><a className="btn primary" href="mailto:nishant.mishra@ivypandit.com?cc=nishmishra@gmail.com&subject=IvyPandit%20Lecture%20Invitation">Invite this lecture</a></div>
    </section>
    <main className="content">
      <section className="manifesto compactManifesto"><p className="kicker">About the lecture</p><h2 className="sectionTitle">A serious conversation between source, human experience, and contemporary inquiry.</h2><p>{lecture.intro}</p></section>

      <section className="panel">
        {lecture.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </section>

      <section className="twoCol" style={{marginTop:'28px'}}>
        <div className="panel"><h2>Questions explored</h2><ul>{lecture.questions.map((q) => <li key={q}>{q}</li>)}</ul></div>
        <div className="panel"><h2>Suitable audiences</h2><p>{lecture.audiences}</p><p><b>Languages:</b> Full lectures in English or Hindi. Sanskrit, Bhojpuri, Marathi, and French may be incorporated for textual engagement, selected portions, conversation, or Q&A.</p></div>
      </section>

      <section className="panel" style={{marginTop:'28px'}}><h2>Watch related IvyPandit material</h2><p>Explore related lectures and shorter discussions on the IvyPandit YouTube channel.</p><a className="textLink" href={lecture.youtube} target="_blank" rel="noopener noreferrer">Watch related videos →</a></section>

      <section className="missionBox"><p className="kicker" style={{color:'#ffd36b'}}>Invite this lecture</p><h2>Bring this conversation to your university, temple, conference, school, medical program, or community.</h2><p>Talks can be adapted for academic, professional, youth, family, Sanskrit, Hindu community, and general audiences.</p><div className="buttons"><a className="btn secondary" href="mailto:nishant.mishra@ivypandit.com?cc=nishmishra@gmail.com&subject=IvyPandit%20Lecture%20Invitation">Invite Dr. Mishra to Speak</a></div></section>
    </main>
  </>;
}
