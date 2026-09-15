import Link from 'next/link';

const collections = [
  { title: 'Attention, Memory & Expertise', description: 'Working memory, sustained and divided attention, deliberate practice, cognitive control, and expert performance.', count: 2 },
  { title: 'Language, Sanskrit & Neuroplasticity', description: 'Bilingualism, multilingual experience, language learning, recitation, auditory–motor integration, and cognitive reserve.', count: 3 },
  { title: 'Mantra, Meditation, Breath & Attention', description: 'Repetition, contemplative attention, slow breathing, autonomic regulation, and emotional self-regulation.', count: 3 },
  { title: 'Ritual, Habit & Human Behavior', description: 'Meaning, expectancy, repeated routines, social identity, adherence, and behavioral regulation.', count: 1 },
  { title: 'Memory, Grief & Ancestral Practices', description: 'Continuing bonds, autobiographical memory, family narratives, bereavement, ritual, and identity.', count: 1 },
  { title: 'Fasting, Circadian Practice & Health', description: 'Religious fasting, time-restricted eating, metabolic health, circadian biology, and self-regulation.', count: 2 }
];

const records = [
  {
    theme:'Language, Sanskrit & Neuroplasticity', type:'Review', relation:'Component evidence', strength:'Moderate',
    title:'Bilingualism: Pathway to Cognitive Reserve', citation:'Bialystok E. Trends in Cognitive Sciences. 2021;25(5):355–364.',
    summary:'This review evaluates evidence linking bilingual experience with cognitive reserve across healthy aging, dementia onset, neuropathology, and cognitive decline. It supports studying multilingual experience as a potentially meaningful form of sustained cognitive training.',
    limits:'Bilingual experience is heterogeneous, and observational associations do not prove that learning Sanskrit produces the same effects.',
    href:'https://pubmed.ncbi.nlm.nih.gov/33771449/'
  },
  {
    theme:'Language, Sanskrit & Neuroplasticity', type:'Review', relation:'Component evidence', strength:'Moderate',
    title:'Does bilingualism contribute to cognitive reserve?', citation:'Guzmán-Vélez E, Tranel D. Neuropsychology. 2015;29(1):139–150.',
    summary:'A critical review of bilingualism and cognitive reserve, including possible neural mechanisms and the influence of education, immigration, proficiency, and language use.',
    limits:'The literature is vulnerable to confounding and inconsistent definitions of bilingualism.',
    href:'https://pubmed.ncbi.nlm.nih.gov/24933492/'
  },
  {
    theme:'Language, Sanskrit & Neuroplasticity', type:'Observational study', relation:'Component evidence', strength:'Moderate',
    title:'Bilingualism delays age at onset of dementia, independent of education and immigration status', citation:'Alladi S, et al. Neurology. 2013;81(22):1938–1944.',
    summary:'A clinical cohort from India reported later dementia presentation among bilingual participants after adjustment for several measured factors. The study is especially relevant to multilingual Indian populations.',
    limits:'Retrospective observational design cannot establish causation, and the result should not be generalized to a particular language or recitation practice.',
    href:'https://pubmed.ncbi.nlm.nih.gov/24198291/'
  },
  {
    theme:'Mantra, Meditation, Breath & Attention', type:'Systematic review', relation:'Component evidence', strength:'Moderate',
    title:'What is the current evidence on meditation and the brain?', citation:'Fox KCR, et al. Neuroscience & Biobehavioral Reviews. 2014;43:48–73.',
    summary:'A meta-analysis examined structural neuroimaging findings associated with meditation practice and identified recurring regional patterns while emphasizing substantial methodological variation.',
    limits:'Meditation traditions, expertise, comparison groups, and imaging methods vary; findings do not directly validate mantra or Sandhyopāsanā.',
    href:'https://pubmed.ncbi.nlm.nih.gov/24705269/'
  },
  {
    theme:'Mantra, Meditation, Breath & Attention', type:'Narrative systematic review', relation:'Component evidence', strength:'Preliminary–moderate',
    title:'How breath-control can change your life', citation:'Zaccaro A, et al. Frontiers in Human Neuroscience. 2018;12:353.',
    summary:'This review synthesizes psychophysiological findings on slow breathing, including autonomic, cardiovascular, respiratory, and central nervous system correlates.',
    limits:'Protocols and populations differ substantially. Slow-breathing evidence is not equivalent to evidence for a complete traditional practice.',
    href:'https://pubmed.ncbi.nlm.nih.gov/30245619/'
  },
  {
    theme:'Mantra, Meditation, Breath & Attention', type:'Physiology study', relation:'Component evidence', strength:'Preliminary',
    title:'Effect of rosary prayer and yoga mantras on autonomic cardiovascular rhythms', citation:'Bernardi L, et al. BMJ. 2001;323:1446–1449.',
    summary:'The study reported that repetitive prayer and mantra recitation at approximately six cycles per minute synchronized respiratory and cardiovascular rhythms and increased baroreflex sensitivity.',
    limits:'Small physiological study; it evaluated short-term component effects rather than health outcomes or the distinctive meaning of any tradition.',
    href:'https://pubmed.ncbi.nlm.nih.gov/11751348/'
  },
  {
    theme:'Attention, Memory & Expertise', type:'Review', relation:'Analogical evidence', strength:'Moderate',
    title:'The Cambridge handbook perspective on expertise and expert performance', citation:'Ericsson KA, Krampe RT, Tesch-Römer C. Psychological Review. 1993;100(3):363–406.',
    summary:'Foundational work on deliberate practice provides a framework for examining how prolonged, structured training may produce exceptional performance.',
    limits:'General expertise research cannot substitute for direct phenotyping and study of Avadhāna practitioners.',
    href:'https://pubmed.ncbi.nlm.nih.gov/8341564/'
  },
  {
    theme:'Attention, Memory & Expertise', type:'Cognitive science review', relation:'Analogical evidence', strength:'Moderate',
    title:'Working memory: theories, models, and controversies', citation:'Baddeley A. Annual Review of Psychology. 2012;63:1–29.',
    summary:'A major review of working-memory theory relevant to the design of tasks examining storage, manipulation, interference, and executive control in complex performance.',
    limits:'It supplies constructs and methods, not evidence about Avadhāna itself.',
    href:'https://pubmed.ncbi.nlm.nih.gov/21961947/'
  },
  {
    theme:'Ritual, Habit & Human Behavior', type:'Experimental social science', relation:'Analogical evidence', strength:'Preliminary',
    title:'Rituals alleviate grieving for loved ones, lovers, and lotteries', citation:'Norton MI, Gino F. Journal of Experimental Psychology: General. 2014;143(1):266–272.',
    summary:'A series of studies found associations between ritualized action, perceived control, and reduced grief following different forms of loss.',
    limits:'The experiments do not study Hindu ancestral rites and cannot establish the theological meaning or clinical benefit of śrāddha.',
    href:'https://pubmed.ncbi.nlm.nih.gov/23398180/'
  },
  {
    theme:'Memory, Grief & Ancestral Practices', type:'Bereavement scholarship', relation:'Conceptual evidence', strength:'Contextual',
    title:'Continuing bonds in bereavement: an attachment theory based perspective', citation:'Field NP. Death Studies. 2006;30(8):739–756.',
    summary:'This work examines how an ongoing inner relationship with the deceased may function adaptively or maladaptively depending on context.',
    limits:'Continuing-bonds theory is not direct evidence about Pitṛpakṣa or ancestral ritual.',
    href:'https://pubmed.ncbi.nlm.nih.gov/16972369/'
  },
  {
    theme:'Fasting, Circadian Practice & Health', type:'Review', relation:'Component evidence', strength:'Moderate',
    title:'Effects of intermittent fasting on health, aging, and disease', citation:'de Cabo R, Mattson MP. New England Journal of Medicine. 2019;381:2541–2551.',
    summary:'A broad review describes metabolic switching and clinical evidence concerning intermittent fasting in health and disease.',
    limits:'Intermittent-fasting protocols differ from Ekādaśī observance in timing, foods, intention, and devotional context.',
    href:'https://pubmed.ncbi.nlm.nih.gov/31881139/'
  },
  {
    theme:'Fasting, Circadian Practice & Health', type:'Randomized crossover trial', relation:'Component evidence', strength:'Preliminary–moderate',
    title:'Early time-restricted feeding improves metabolic health independent of weight loss', citation:'Sutton EF, et al. Cell Metabolism. 2018;27(6):1212–1221.e3.',
    summary:'In men with prediabetes, early time-restricted feeding improved several metabolic and cardiovascular measures without requiring weight loss.',
    limits:'Small, short-duration trial in a selected population; it does not test religious fasting or Ekādaśī.',
    href:'https://pubmed.ncbi.nlm.nih.gov/29754952/'
  }
];

export default function EvidenceLibrary(){
  return <>
    <section className="pageHero inquiryHero">
      <div className="eyebrow">Evidence before claims • Curated for inquiry</div>
      <h1>Evidence Library</h1>
      <p>Critically annotated scientific and scholarly literature relevant to neuroscience, cognition, Sanskrit, cultural practices, Indian Knowledge Systems, and human flourishing.</p>
      <div className="buttons"><a className="btn primary" href="mailto:nishant.mishra@ivypandit.com?subject=Evidence%20Library%20paper%20recommendation">Recommend a paper</a><Link className="btn secondary" href="/editorial-policy">Evidence policy</Link></div>
    </section>
    <main className="content">
      <div className="callout"><b>A bridge, not a proof catalogue.</b> Inclusion means that a work helps define a construct, method, mechanism, or research context. It does not imply that a modern study validates a traditional practice.</div>

      <section className="manifesto compactManifesto">
        <p className="kicker">How to read the library</p>
        <h2 className="sectionTitle">Direct evidence, component evidence, and analogy are not the same.</h2>
        <div className="evidenceGrid">
          <div><b>Direct evidence</b><p>The named traditional practice or population was studied.</p></div>
          <div><b>Component evidence</b><p>A constituent such as breathing, repetition, fasting, or bilingualism was studied.</p></div>
          <div><b>Analogical evidence</b><p>A related but non-equivalent phenomenon informs the question.</p></div>
          <div><b>Research hypothesis</b><p>The proposed relationship remains to be tested adequately.</p></div>
        </div>
      </section>

      <section>
        <p className="kicker">Browse by theme</p>
        <h2 className="sectionTitle">Six starting collections</h2>
        <div className="resourceGrid">
          {collections.map(c=><article className="panel" key={c.title}><span className="statusBadge">{c.count} initial records</span><h3>{c.title}</h3><p>{c.description}</p></article>)}
        </div>
      </section>

      <section style={{marginTop:'36px'}}>
        <p className="kicker">Public pilot • reviewed September 2026</p>
        <h2 className="sectionTitle">Annotated evidence records</h2>
        <p className="lead">These original summaries emphasize what a paper can support, what it cannot support, and why it belongs in an IvyPandit inquiry.</p>
        <div className="questionGrid">
          {records.map((r,i)=><article className="questionCard" key={r.title}>
            <div className="questionNumber">{String(i+1).padStart(2,'0')}</div>
            <div className="questionTag">{r.theme}</div>
            <h2>{r.title}</h2>
            <p><b>Citation:</b> {r.citation}</p>
            <p>{r.summary}</p>
            <p><b>Study type:</b> {r.type}</p>
            <p><b>Relationship to IKS topic:</b> {r.relation}</p>
            <p><b>Evidence assessment:</b> {r.strength}</p>
            <div className="questionAsk"><b>Important limitation</b><span>{r.limits}</span></div>
            <p style={{marginTop:'14px'}}><a className="textLink" href={r.href} target="_blank" rel="noopener noreferrer">PubMed record →</a></p>
          </article>)}
        </div>
      </section>

      <section className="collabBanner">
        <div><p className="kicker">Help improve the evidence map</p><h2>Know an important study, critical review, negative finding, or scholarly correction?</h2><p>Please send the complete citation and a short explanation of why it belongs. Inclusion does not imply endorsement or affiliation.</p></div>
        <a className="btn primary" href="mailto:nishant.mishra@ivypandit.com?subject=Evidence%20Library%20contribution">Email IvyPandit →</a>
      </section>
    </main>
  </>;
}
