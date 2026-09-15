import Link from 'next/link';

export default function Page() { return <main>
  <section className="pageHero"><div className="eyebrow">Study hub • Dharma • Action • Resilience</div><h1>Bhagavad Gītā Study Hub</h1><p>Text, interpretation, public lectures, essays, and questions about crisis, disciplined action, attention, and human resilience.</p></section>
  <section className="content">
    <div className="twoCol">
      <section className="panel"><p className="kicker">Textual starting point</p><h2>Arjuna’s crisis</h2><p>The Gītā opens with grief, moral conflict, bodily distress, uncertainty, and paralysis of action. Any modern psychological comparison should begin by respecting the larger dharmic, philosophical, and theological setting of the dialogue.</p></section>
      <section className="panel"><p className="kicker">Interpretive principle</p><h2>Do not reduce the Gītā to therapy</h2><p>Concepts such as cognitive reframing, values-based action, self-regulation, or resilience may illuminate parts of the dialogue, but they do not exhaust Krishna’s teaching. Modern psychology is one comparative lens, not the meaning of the text itself.</p></section>
    </div>

    <section className="featuredTalks" style={{marginTop:'30px',marginBottom:'34px'}}>
      <div className="sectionHeaderRow"><div><p className="kicker">Featured lecture</p><h2 className="sectionTitle">Puruṣa Sūkta, Vibhūti & Viśvarūpa</h2></div><a className="textLink" href="https://www.youtube.com/watch?v=leQ_SDvEE3g&t=273s" target="_blank" rel="noopener noreferrer">Watch on YouTube →</a></div>
      <div className="talkGrid"><div className="videoEmbed"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/leQ_SDvEE3g?start=273" title="Puruṣa Sūkta, Bhagavad Gītā Chapters 10 and 11, and the Vedic cosmos" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
      <div className="talkCopy"><span className="label">GĪTĀ CHAPTERS 10–11 • COSMIC VISION</span><h3>The divine as source, manifestation, and universal form</h3><p>A scriptural and philosophical exploration of the cosmic Puruṣa, Kṛṣṇa’s vibhūtis, and Arjuna’s vision of the Viśvarūpa—kept distinct from empirical cosmology.</p><Link className="textLink" href="/articles/purusha-sukta-gita-vedic-cosmos">Read the companion article →</Link></div></div>
    </section>

    <section className="resourceGrid" style={{marginTop:'28px'}}>
      <Link className="panel linkedCard" href="/articles/gita-cognitive-resilience"><span className="label">SHORT REFLECTION</span><h2>Gītā & Cognitive Resilience</h2><p>A concise reflection on Arjuna’s crisis and questions for modern psychology.</p><span>Read →</span></Link>
      <Link className="panel linkedCard" href="/speaking/bhagavad-gita-cognitive-reframing-resilience"><span className="label">LECTURE</span><h2>Cognitive Reframing & Human Resilience</h2><p>A fuller lecture framework for universities, temples, students, clinicians, and leadership audiences.</p><span>Explore lecture →</span></Link>
      <a className="panel linkedCard" href="https://www.youtube.com/@IvyPandit/search?query=Bhagavad%20Gita" target="_blank" rel="noopener noreferrer"><span className="label">VIDEO COLLECTION</span><h2>Gītā on IvyPandit</h2><p>Talks and reflections on dharma, cognition, action, attention, and resilience.</p><span>Browse videos →</span></a>
    </section>

    <section className="panel"><p className="kicker">Questions for inquiry</p><h2>Where can interdisciplinary work be useful?</h2><ul><li>What changes in Arjuna’s appraisal of the situation over the course of the dialogue?</li><li>How do identity, duty, perspective, and control over outcomes shape action under stress?</li><li>Which modern psychological constructs illuminate the dialogue, and where do they distort it?</li></ul></section>
  </section>
</main> }
