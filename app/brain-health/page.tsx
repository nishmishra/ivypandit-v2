import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Brain Health & Indian Traditions | IvyPandit',
  description: 'Community lectures with neurologist Nishant K. Mishra on memory, attention, sleep, and the aging brain, in dialogue with Indian knowledge traditions.',
  alternates: { canonical: 'https://www.ivypandit.com/brain-health' },
};

export default function BrainHealth() {
  return <>
    <section className="pageHero">
      <p className="kicker">Community education</p>
      <h1>Brain Health &amp; Indian Traditions</h1>
      <p>Understand the mind through clinical neuroscience and thoughtful engagement with Indian intellectual traditions.</p>
    </section>
    <main className="content">
      <section className="panel">
        <h2>Neurology in conversation with tradition</h2>
        <p>This developing IvyPandit lecture series brings Dr. Nishant K. Mishra&apos;s experience as a neurologist and physician-scientist into accessible conversations about memory, attention, emotional life, and healthy aging.</p>
        <p>Each lecture begins with questions from everyday life. Relevant Indian texts and practices enrich the discussion, with scientific findings, traditional interpretations, and research questions identified separately.</p>
      </section>
      <section className="panel" id="memory" style={{marginTop:'28px'}}>
        <p className="kicker">First planned lecture</p>
        <h2>Understanding Memory: How We Remember, Why We Forget, and When to Seek Help</h2>
        <p>A community lecture for adults, families, and caregivers, with approximately 45 minutes of presentation followed by questions.</p>
        <ul>
          <li>Attention, learning, and remembering.</li>
          <li>Everyday forgetfulness and reasons to seek medical evaluation.</li>
          <li>Sleep, stress, mood, hearing, and medications as topics in memory assessment.</li>
          <li>Practical approaches to learning and remembering information.</li>
          <li>Recitation and Avadhāna as examples of cultivated skills, and questions about their relevance to everyday cognition.</li>
        </ul>
        <p><b>Status:</b> In preparation. A follow-up memory lecture is being developed in response to interest from the HCC Stratford community. The date and arrangements remain to be confirmed.</p>
        <p>Recordings, slides, and reading resources will be added as they become available.</p>
      </section>
      <section style={{marginTop:'32px'}}>
        <p className="kicker">Possible future topics</p>
        <div className="twoCol">
          <article className="panel"><h2>Attention &amp; Learning</h2><p>Distraction, sustained attention, language, recitation, and the study of skilled performance.</p></article>
          <article className="panel"><h2>Sleep &amp; the Aging Brain</h2><p>Community conversations about sleep, changes across the lifespan, and questions to bring to a clinician.</p></article>
          <article className="panel"><h2>Emotional Balance &amp; Meaning</h2><p>Stress, grief, reflection, daily routines, and Indian traditions in dialogue with neuroscience and psychology.</p></article>
          <article className="panel"><h2>Stroke &amp; Brain Health</h2><p>Public education drawing on Dr. Mishra&apos;s clinical and research work in vascular neurology.</p></article>
        </div>
        <p>These topics are under development. This page does not announce scheduled courses or clinical services.</p>
      </section>
      <section className="panel" style={{marginTop:'28px'}}>
        <h2>Explore the questions behind the series</h2>
        <p><Link className="textLink" href="/research/consciousness/avadhana">Avadhāna and the study of attention</Link></p>
        <p><Link className="textLink" href="/articles/pitrapaksha-memory-grief">Memory, grief, and ancestral remembrance</Link></p>
        <p><Link className="textLink" href="/evidence">IvyPandit&apos;s evidence library</Link></p>
        <p><Link className="textLink" href="/research">Dr. Mishra&apos;s scientific work</Link></p>
      </section>
      <section className="missionBox">
        <h2>Invite a community lecture</h2>
        <p>Temples, community organizations, universities, and professional groups are welcome to discuss a lecture adapted to their audience.</p>
        <div className="buttons"><a className="btn secondary" href="mailto:nishant.mishra@ivypandit.com?subject=Brain%20Health%20Lecture%20Inquiry">Enquire about the series</a><Link className="btn secondary" href="/speaking">Explore all lecture topics</Link></div>
      </section>
      <p style={{marginTop:'24px'}}>Educational lectures do not provide an individual diagnosis or treatment plan. Benefits of particular traditional practices will be discussed only to the extent supported by relevant evidence.</p>
    </main>
  </>;
}
