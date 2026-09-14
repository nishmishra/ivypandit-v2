import Link from 'next/link';

const questions = [
  {
    slug: 'avadhana-attention-neuroscience',
    tag: 'Attention • Performance • Cognitive Science',
    title: 'Avadhāna: what can a classical culture of attention ask modern neuroscience?',
    text: 'Avadhāna traditions bring together sustained attention, divided attention, working memory, retrieval, interference control, creativity, and performance under cognitive load. Before these capacities are translated into experiments, the tradition itself needs careful documentation: terminology, training, task structure, practitioner experience, and historical context.',
    ask: 'Could Sanskrit scholars, Avadhānis, psychologists, and neuroscientists jointly define a rigorous research framework before attempting measurement?',
    experts: 'Avadhānis, Sanskrit/literary scholars, cognitive psychologists, neuroscientists'
  },
  {
    slug: 'smriti-lexicon-memory',
    tag: 'Smṛti • Memory • Philosophy of Mind',
    title: 'What does smṛti mean across Sanskrit intellectual traditions?',
    text: 'Modern neuroscience uses multiple categories of memory. Sanskrit traditions also discuss remembering, recognition, recollection, impressions, attention, knowledge, and continuity of experience — but their terms cannot simply be mapped onto modern categories.',
    ask: 'Could philologists and cognitive scientists build a source-based map of smṛti and related terms before asking where genuine conceptual correspondences exist?',
    experts: 'Philologists, Sanskrit philosophers, historians of ideas, cognitive scientists'
  },
  {
    slug: 'sanskrit-recitation-neuroplasticity',
    tag: 'Recitation • Language • Neuroplasticity',
    title: 'What does long-duration Sanskrit recitation train?',
    text: 'Recitation can involve phonological precision, breath regulation, rhythm, sequential memory, error monitoring, auditory-motor integration, and years of deliberate practice. These features make traditional recitation a rich human model, but strong claims require better phenotyping and careful controls.',
    ask: 'What textual, pedagogical, and practitioner knowledge is needed to design credible studies of recitation, language, memory, and neuroplasticity?',
    experts: 'Recitation teachers, linguists, cognitive neuroscientists, auditory-motor researchers'
  },
  {
    slug: 'bhishma-end-of-life-cognition',
    tag: 'Mahābhārata • End of Life • Human Experience',
    title: 'Can Bhīṣma help generate better questions about cognition near the end of life?',
    text: 'Bhīṣma’s final episodes contain narrative material concerning attention, memory, pain, meaning, devotion, agency, and conscious orientation toward death. These are not modern clinical observations, but they may preserve a sophisticated phenomenology worth studying on its own terms.',
    ask: 'Can Sanskrit scholarship, medical humanities, palliative care, and neuroscience together identify what is textually present and what questions it raises for modern research?',
    experts: 'Mahābhārata scholars, medical humanities, palliative care, cognition researchers'
  },
  {
    slug: 'nityakarma-sandhya-daily-practice',
    tag: 'Daily Practice • Behavior • Systems',
    title: 'Nityakarma and Sandhyopāsanā: how should repeated daily practice be studied?',
    text: 'Daily practices may combine timing, ritual sequence, posture, recitation, attentional cues, social identity, hygiene, reflection, and behavioral regularity. Studying such systems requires more than isolating one mantra or one physiological variable.',
    ask: 'Could scholars of ritual, behavioral scientists, and health researchers develop a faithful description of the practice before testing which components — if any — influence measurable outcomes?',
    experts: 'Ritual scholars, practitioners, behavioral scientists, physiology and health researchers'
  },
  {
    slug: 'ekadashi-self-regulation-health',
    tag: 'Ekādaśī • Self-regulation • Behavioral Health',
    title: 'What is the right scientific question to ask about Ekādaśī?',
    text: 'Ekādaśī practices vary widely across regions, communities, and individuals. They may involve fasting, dietary restriction, devotional practice, altered routines, intention, and social meaning. Treating all of this as a single intervention would be scientifically weak.',
    ask: 'Can textual scholars, practitioners, nutrition researchers, and behavioral scientists first define the practice space and then identify tractable questions about adherence, self-regulation, and physiology?',
    experts: 'Dharma/text scholars, practitioners, nutrition researchers, behavioral scientists'
  },
  {
    slug: 'sanskrit-cognition-lexicon',
    tag: 'Terminology • Translation • Research Infrastructure',
    title: 'Can we build a Sanskrit–Hindi–English lexicon for mind, cognition, and human experience?',
    text: 'Terms such as manas, buddhi, citta, smṛti, dhyāna, saṃskāra, prajñā, and vijñāna carry histories and context-dependent meanings. Casual one-word translations can create false scientific equivalences.',
    ask: 'Would Sanskrit scholars across traditions help build a citation-rich, context-sensitive lexicon that scientists can use without flattening the source traditions?',
    experts: 'Sanskrit scholars, philosophers, lexicographers, cognitive scientists, translators'
  },
  {
    slug: 'sbkb-biomedical-observations',
    tag: 'SBKB • Medicine • Knowledge Infrastructure',
    title: 'Which biomedical observations in Sanskrit literature deserve systematic study?',
    text: 'Sanskrit literature contains observations about the body, illness, behavior, cognition, aging, diet, environment, suffering, and human flourishing. The first task is not to declare them scientifically validated; it is to locate, classify, contextualize, and evaluate them responsibly.',
    ask: 'Which corpora should be examined first, and what minimum philological and scientific standards should govern a Sanskrit Biomedical Knowledge Base?',
    experts: 'Sanskritists, historians of medicine, clinicians, scientists, data and ontology specialists'
  }
];

export default function Questions(){
  return <>
    <section className="pageHero inquiryHero">
      <div className="eyebrow">Questions before claims • Collaboration before conclusions</div>
      <h1>Research Questions & Invitations</h1>
      <p>Short scholarly invitations for Sanskritists, scientists, physicians, philosophers, practitioners, and institutions interested in developing rigorous interdisciplinary work in India and internationally.</p>
      <div className="buttons"><Link className="btn primary" href="/collaborate">Discuss a project</Link><Link className="btn secondary" href="/hi">हिन्दी</Link><Link className="btn secondary" href="/sa">संस्कृतम्</Link></div>
    </section>
    <main className="content">
      <section className="manifesto compactManifesto">
        <p className="kicker">Why publish questions?</p>
        <h2 className="sectionTitle">The purpose is to find the right collaborators, not to announce unfinished conclusions.</h2>
        <p>IvyPandit will not post private manuscripts, unpublished results, grant drafts, or incomplete analyses merely to fill a website. Instead, selected themes will be shared as concise, source-conscious invitations to inquiry. A good public question should reveal why a topic matters while leaving the scholarly work to be done collaboratively.</p>
      </section>

      <section className="questionGrid">
        {questions.map((q, i) => <article className="questionCard" key={q.title} id={q.slug}>
          <div className="questionNumber">{String(i+1).padStart(2,'0')}</div>
          <div className="questionTag">{q.tag}</div>
          <h2>{q.title}</h2>
          <p>{q.text}</p>
          <p><b>Status:</b> Open for collaboration</p>
          <p><b>Expertise sought:</b> {q.experts}</p>
          <div className="questionAsk"><b>Question for collaboration</b><span>{q.ask}</span></div>
          <p style={{marginTop:'14px'}}><a className="textLink" href={`/questions#${q.slug}`}>Permalink to this question →</a></p>
        </article>)}
      </section>

      <section className="collabBanner">
        <div><p className="kicker">From conversation to project</p><h2>Have textual expertise, a corpus, a practice, or a scientific method that belongs in one of these conversations?</h2><p>Promising questions may develop into textual scholarship, pilot studies, datasets, workshops, interdisciplinary networks, institutional partnerships, grant proposals, and larger research programmes.</p></div>
        <Link className="btn primary" href="/collaborate">Start a conversation →</Link>
      </section>
    </main>
  </>;
}
