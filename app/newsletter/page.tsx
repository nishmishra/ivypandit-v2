import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The IvyPandit Letter | Newsletter Archive',
  description: 'Archive of The IvyPandit Letter: periodic reflections, study updates, science and neuroscience videos, research questions, and selected reading.',
};

export default function NewsletterArchive(){
  return <>
    <section className="pageHero">
      <div className="eyebrow">The IvyPandit Letter</div>
      <h1>Newsletter Archive</h1>
      <p>Periodic reflections across Sanskrit, Śāstra, Indian Knowledge Systems, neuroscience, medicine, public scholarship, and the questions connecting them.</p>
    </section>
    <main className="content">
      <section className="callout" style={{marginBottom:'32px'}}>
        <b>Editorial rhythm:</b> IvyPandit often studies texts sequentially, but it is not a rigid curriculum. The newsletter follows the work as it actually develops—through sustained reading, current lectures, research questions, and intellectual curiosity.
      </section>

      <div className="resourceGrid">
        <Link className="panel linkedCard" href="/articles/yogvani-research-supplement-november-2026">
          <span className="label">PUBLICATION SUPPLEMENT • NOVEMBER 2026</span>
          <h2>From Śāstra to the Laboratory</h2>
          <p>A note on the October 2026 <i>Yogvani</i> essay: how close reading of Sanskrit sources can lead to sound research questions and scholarly collaboration.</p>
          <span>Read the supplement →</span>
        </Link>
        <Link className="panel linkedCard" href="/articles/ivypandit-letter-november-2026">
          <span className="label">ISSUE 2 • NOVEMBER 2026</span>
          <h2>Study by Sequence, Curiosity & Question</h2>
          <p>Science and neuroscience videos with papers to read next, flexible Śāstra study, attention and expertise, and the boundary between interpretation and evidence.</p>
          <span>Read Issue 2 →</span>
        </Link>

        <Link className="panel linkedCard" href="/articles/ivypandit-letter-october-2026">
          <span className="label">ISSUE 1 • OCTOBER 2026</span>
          <h2>From Śāstra to Science: Attention, Memory & New Conversations</h2>
          <p>Avadhāna, Sanskrit research methods, Pitṛpakṣa and memory, public scholarship, and open interdisciplinary questions.</p>
          <span>Read Issue 1 →</span>
        </Link>
      </div>

      <section className="panel" style={{marginTop:'36px'}}>
        <p className="kicker">Follow future issues</p>
        <h2>Join The IvyPandit Letter</h2>
        <p>Receive periodic updates on new lectures, study resources, research questions, papers, and collaborations.</p>
        <div className="buttons" style={{justifyContent:'flex-start',flexWrap:'wrap'}}>
          <a className="btn primary" href="https://ivypandit.beehiiv.com/" target="_blank" rel="noopener noreferrer">Subscribe</a>
          <a className="btn secondary" href="https://www.youtube.com/@IvyPandit/videos" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
        </div>
      </section>
    </main>
  </>;
}