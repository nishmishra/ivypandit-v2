import Link from 'next/link';
import ContinueExploring from '../../components/ContinueExploring';

const videos = [
  { id:'IPl7XFf90rU', title:'Why Study the Mahābhārata?', text:'A starting lecture on why the epic still matters for dharma, human behavior, leadership, family, conflict, and self-reflection.' },
  { id:'hrGdR4I5L20', title:'Mahābhārata & Neuroscience: Study Methodology', text:'How to move from source text to interpretation to research question without treating the epic as a modern neuroscience textbook.' },
  { id:'xhqdP_hUIF0', title:'Arjuna and Mental Resilience', text:'Arjuna as a case for studying crisis, appraisal, identity, duty, emotional regulation, and resilience.' },
  { id:'rfYPMjWGNyM', title:'Kṛṣṇa, Cognitive Reframing & Emotional Regulation', text:'A longer exploration of the Gītā dialogue using modern psychological concepts as comparative lenses.' },
  { id:'bBwbsdTPVpU', title:'Karna: Identity, Social Acceptance & Self-Value', text:'A character-centered reflection on identity, belonging, recognition, status, and self-worth.' },
  { id:'ygGIhIvoFsA', title:'Mahābhārata, Experience & Neuroplasticity', text:'A short exploration of how experience changes the brain—and where modern neuroplasticity should remain distinct from textual interpretation.' },
  { id:'qWxgAFCjgxg', title:'Mahābhārata Characters as Case Studies', text:'A set of character-based questions for disciplined interdisciplinary inquiry.' },
  { id:'jmCF-HmWcCo', title:'Long-Duration Cultural Expertise & Mahābhārata', text:'How sustained study and cultural expertise can generate testable neuroscience questions.' }
];

const themes = [
  ['Dharma & competing obligations','The epic repeatedly places characters in situations where duties conflict. The value is not a single slogan but learning to see what each obligation demands and what every choice costs.'],
  ['Leadership & counsel','Kings, elders, teachers, friends, and advisers show how power depends on judgment, listening, timing, loyalty, and the courage to oppose destructive choices.'],
  ['Family, rivalry & resentment','Kinship does not eliminate competition. Jealousy, comparison, humiliation, inheritance, favoritism, and grievance become forces that can shape generations.'],
  ['Identity & belonging','Birth, status, recognition, vows, social roles, and chosen loyalties shape how characters understand themselves and what they believe they owe others.'],
  ['Grief, loss & resilience','The Mahābhārata does not avoid suffering. It asks how people continue to act, remember, learn, worship, govern, and seek meaning after profound loss.'],
  ['Agency, consequence & uncertainty','Characters act without complete knowledge. The epic is therefore rich material for thinking about decision-making under uncertainty, responsibility, and unintended consequences.']
];

export default function Page() { return <main>
  <section className="pageHero inquiryHero">
    <div className="eyebrow">Study hub • Itihāsa • Dharma • Human experience</div>
    <h1>Mahābhārata Study Hub</h1>
    <p>Read the epic as a text first; then explore its characters, moral conflicts, lectures, research questions, and carefully bounded conversations with psychology and neuroscience.</p>
    <div className="buttons">
      <a className="btn primary" href="#start">Start here</a>
      <a className="btn secondary" href="#videos">Watch the series</a>
      <a className="btn secondary" href="#reading-map">Current reading map</a>
    </div>
  </section>

  <section className="content">
    <section id="start" className="manifesto compactManifesto">
      <p className="kicker">Start with the epic, not with a modern theory</p>
      <h2 className="sectionTitle">Why study the Mahābhārata?</h2>
      <p>The Mahābhārata is simultaneously narrative, dharma discourse, political reflection, theology, family history, philosophical inquiry, and a record of human beings confronting difficult choices. Its enduring value comes partly from refusing to make those choices artificially simple.</p>
      <p>For IvyPandit, the sequence is deliberate: <b>source → context → traditional interpretation → human question → modern comparison, where appropriate.</b> Neuroscience or psychology may sharpen a question, but they do not replace the text.</p>
    </section>

    <div className="twoCol">
      <section className="panel">
        <p className="kicker">Text first</p>
        <h2>A vast narrative world</h2>
        <p>The Mahābhārata should not be reduced to a collection of moral quotations or treated as a modern psychology manual. It is an Itihāsa whose narrative layers contain dharma, political thought, ritual, theology, kinship, conflict, philosophy, and reflection on the human condition.</p>
      </section>
      <section className="panel">
        <p className="kicker">Why it remains useful</p>
        <h2>A laboratory of difficult human situations</h2>
        <p>Its characters face rivalry, divided loyalty, grief, humiliation, ambition, uncertainty, duty, love, resentment, sacrifice, and consequences they cannot fully predict. Those situations can help readers ask better questions about themselves and society without pretending that ancient categories and modern scientific constructs are identical.</p>
      </section>
    </div>

    <section style={{marginTop:'34px'}}>
      <p className="kicker">Six pathways</p>
      <h2 className="sectionTitle">What can a reader gain from sustained study?</h2>
      <div className="resourceGrid">
        {themes.map(([title,text])=><div className="panel" key={title}><h2>{title}</h2><p>{text}</p></div>)}
      </div>
    </section>

    <section className="panel" style={{marginTop:'34px'}} id="fifth-veda">
      <p className="kicker">Traditional designation • textual context</p>
      <h2>Why is the Mahābhārata called the “Fifth Veda”?</h2>
      <p>The careful answer begins with the broader category <i>itihāsa-purāṇa</i>. Chāndogya Upaniṣad 7.1.2 refers to <i>itihāsa-purāṇa</i> as “the fifth” alongside the four Vedas. Later textual and scholarly traditions apply this Veda-like status specifically to the Mahābhārata as an Itihāsa and as a vast vehicle for dharma, narrative, philosophy, and cultural memory.</p>
      <p>This does <b>not</b> require saying that every Hindu school treats the Mahābhārata as identical in canonical status to Vedic <i>śruti</i>. “Fifth Veda” is best presented as a traditional designation expressing breadth, authority, accessibility, and the epic&apos;s role in extending Vedic learning into narrative and lived human situations.</p>
      <p><a className="textLink" href="https://www.wisdomlib.org/hinduism/book/chandogya-upanishad-english/d/doc239337.html" target="_blank" rel="noopener noreferrer">Chāndogya Upaniṣad 7.1.2 →</a><br/>
      <a className="textLink" href="https://ignca.gov.in/Asi_data/4821.pdf" target="_blank" rel="noopener noreferrer">IGNCA discussion of Itihāsa, Purāṇa and the “Fifth Veda” tradition →</a></p>
    </section>

    <section id="reading-map" style={{marginTop:'38px'}}>
      <p className="kicker">Active IvyPandit reading sequence</p>
      <h2 className="sectionTitle">Where the study currently stands</h2>
      <section className="callout">
        <b>Current reading point:</b> the early Kuru-prince narrative in the Ādi Parva, through the rivalry among the cousins and Duryodhana&apos;s plot to poison Bhīma, after which Bhīma survives and returns. Chapter and section numbering varies by edition, so this hub tracks the narrative sequence rather than pretending that all editions paginate identically.
      </section>
      <div className="resourceGrid">
        <div className="panel"><span className="label">FOUNDATIONS</span><h2>Origins, lineages & the narrative frame</h2><p>Who is telling the story? How does memory travel across generations? Why does genealogy matter before the central conflict develops?</p></div>
        <div className="panel"><span className="label">KURU HOUSE</span><h2>Bhīṣma, vows & dynastic responsibility</h2><p>Duty, sacrifice, succession, loyalty, and the long consequences of decisions made for a family or kingdom.</p></div>
        <div className="panel"><span className="label">CHILDHOOD RIVALRY</span><h2>Pāṇḍavas, Kauravas & escalating resentment</h2><p>Comparison, status, skill, attention, humiliation, fear, and how rivalry can become increasingly dangerous when grievance is reinforced rather than corrected.</p></div>
        <div className="panel"><span className="label">CURRENT EPISODE</span><h2>Duryodhana&apos;s poisoning of Bhīma</h2><p>An early turning point for examining envy, aggression, secrecy, vulnerability, survival, and the difference between ordinary rivalry and destructive intent.</p></div>
      </div>
    </section>

    <section style={{marginTop:'38px'}}>
      <p className="kicker">Character pathways</p>
      <h2 className="sectionTitle">Follow a person across the epic</h2>
      <div className="resourceGrid">
        <Link className="panel linkedCard" href="/questions#bhishma-end-of-life-cognition"><span className="label">BHĪṢMA</span><h2>Vow, memory, duty & the end of life</h2><p>Study dynastic responsibility now and return later to Bhīṣma&apos;s final teachings, memory, agency, and conscious orientation toward death.</p><span>Research pathway →</span></Link>
        <a className="panel linkedCard" href="https://www.youtube.com/watch?v=xhqdP_hUIF0" target="_blank" rel="noopener noreferrer"><span className="label">ARJUNA</span><h2>Crisis, identity & resilience</h2><p>From warrior identity and moral paralysis to the transformative dialogue of the Bhagavad Gītā.</p><span>Watch →</span></a>
        <a className="panel linkedCard" href="https://www.youtube.com/watch?v=bBwbsdTPVpU" target="_blank" rel="noopener noreferrer"><span className="label">KARṆA</span><h2>Identity, belonging & recognition</h2><p>A pathway for studying social acceptance, loyalty, status, self-worth, generosity, grievance, and difficult allegiance.</p><span>Watch →</span></a>
        <div className="panel"><span className="label">BHĪMA & DURYODHANA</span><h2>Rivalry, power & resentment</h2><p>The current reading point offers an early opportunity to follow how strength, comparison, fear, envy, and retaliation shape both men over time.</p></div>
        <div className="panel"><span className="label">YUDHIṢṬHIRA</span><h2>Dharma, judgment & consequence</h2><p>A future pathway for examining truth, kingship, duty, risk, moral complexity, and the burden of decision.</p></div>
        <div className="panel"><span className="label">DRAUPADĪ</span><h2>Dignity, injury, memory & justice</h2><p>A future pathway centered on voice, humiliation, legal-moral argument, memory of wrong, and demands for justice.</p></div>
      </div>
    </section>

    <section id="videos" style={{marginTop:'42px'}}>
      <div className="sectionHeaderRow">
        <div><p className="kicker">IvyPandit video pathway</p><h2 className="sectionTitle">Mahābhārata: text, characters & neuroscience questions</h2></div>
        <a className="textLink" href="https://www.youtube.com/@IvyPandit/search?query=Mahabharata" target="_blank" rel="noopener noreferrer">Browse all Mahābhārata videos →</a>
      </div>
      <div className="curatedVideoGrid">
        {videos.map(video=><a key={video.id} className="videoCard" href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer"><img src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt={video.title} loading="lazy"/><div><span className="label">MAHĀBHĀRATA SERIES</span><h2>{video.title}</h2><p>{video.text}</p><strong>Watch on YouTube →</strong></div></a>)}
      </div>
    </section>

    <section className="panel" style={{marginTop:'38px'}}>
      <p className="kicker">Research discipline</p>
      <h2>How IvyPandit uses neuroscience around the Mahābhārata</h2>
      <div className="flowLine"><span>Textual episode</span><b>→</b><span>Traditional / literary interpretation</span><b>→</b><span>Human phenomenon</span><b>→</b><span>Modern construct</span><b>→</b><span>Testable question</span></div>
      <p>For example, a narrative about rivalry can motivate questions about social comparison or emotion regulation, but the presence of rivalry in the epic is not scientific evidence for a modern neural mechanism. The purpose of interdisciplinary work is to generate better questions while protecting the integrity of both the classical text and modern science.</p>
      <p><Link className="textLink" href="/articles/shastra-to-scientific-discovery">Read the IvyPandit method: From Śāstra to Scientific Discovery →</Link></p>
    </section>

    <ContinueExploring
      items={[
        {title:'Bhagavad Gītā Study Hub',href:'/gita',label:'TEXT WITHIN THE EPIC',text:'Continue from the wider Mahābhārata into Arjuna’s crisis, Kṛṣṇa’s teaching, dharma, action, and resilience.'},
        {title:'Bhīṣma, Memory & End-of-Life Cognition',href:'/questions#bhishma-end-of-life-cognition',label:'RESEARCH QUESTION',text:'A source-conscious collaboration pathway linking Mahābhārata scholarship, medical humanities, palliative care, and cognition.'},
        {title:'From Śāstra to Scientific Discovery',href:'/articles/shastra-to-scientific-discovery',label:'METHOD',text:'The framework IvyPandit uses to move from classical source to modern research question without collapsing categories.'},
        {title:'Explore all Mahābhārata resources',href:'/explore?q=Mah%C4%81bh%C4%81rata',label:'KNOWLEDGE NAVIGATOR',text:'Search the growing IvyPandit index for Mahābhārata articles, videos, questions, lectures, and related themes.'}
      ]}
    />
  </section>
</main> }