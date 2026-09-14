import Link from 'next/link';

export default function Page() { return <main>
  <section className="pageHero"><div className="eyebrow">Study hub • Dharma • Action • Resilience</div><h1>Bhagavad Gītā Study Hub</h1><p>Text, interpretation, public lectures, essays, and questions about crisis, disciplined action, attention, and human resilience.</p></section>
  <section className="content">
    <div className="twoCol">
      <section className="panel"><p className="kicker">Textual starting point</p><h2>Arjuna’s crisis</h2><p>The Gītā opens with grief, moral conflict, bodily distress, uncertainty, and paralysis of action. Any modern psychological comparison should begin by respecting the larger dharmic, philosophical, and theological setting of the dialogue.</p></section>
      <section className="panel"><p className="kicker">Interpretive principle</p><h2>Do not reduce the Gītā to therapy</h2><p>Concepts such as cognitive reframing, values-based action, self-regulation, or resilience may illuminate parts of the dialogue, but they do not exhaust Krishna’s teaching. Modern psychology is one comparative lens, not the meaning of the text itself.</p></section>
    </div>

    <section className="resourceGrid" style={{marginTop:'28px'}}>
      <Link className="panel linkedCard" href="/articles/gita-cognitive-resilience"><span className="label">SHORT REFLECTION</span><h2>Gītā & Cognitive Resilience</h2><p>A concise reflection on Arjuna’s crisis and questions for modern psychology.</p><span>Read →</span></Link>
      <Link className="panel linkedCard" href="/speaking/bhagavad-gita-cognitive-reframing-resilience"><span className="label">LECTURE</span><h2>Cognitive Reframing & Human Resilience</h2><p>A fuller lecture framework for universities, temples, students, clinicians, and leadership audiences.</p><span>Explore lecture →</span></Link>
      <a className="panel linkedCard" href="https://www.youtube.com/@IvyPandit/search?query=Bhagavad%20Gita" target="_blank" rel="noopener noreferrer"><span className="label">VIDEO COLLECTION</span><h2>Gītā on IvyPandit</h2><p>Talks and reflections on dharma, cognition, action, attention, and resilience.</p><span>Browse videos →</span></a>
    </section>

    <section className="panel"><p className="kicker">Questions for inquiry</p><h2>Where can interdisciplinary work be useful?</h2><ul><li>What changes in Arjuna’s appraisal of the situation over the course of the dialogue?</li><li>How do identity, duty, perspective, and control over outcomes shape action under stress?</li><li>Which modern psychological constructs illuminate the dialogue, and where do they distort it?</li></ul></section>
  </section>
</main> }
