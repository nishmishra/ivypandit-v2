import Link from 'next/link';

export default function Collaborate(){
  return <>
    <style>{`
      @media print {
        .collabIntro, .audienceGrid article, .panel, .contactInvitation { break-inside: avoid; page-break-inside: avoid; }
      }
    `}</style>

    <section className="pageHero collabHero">
      <div className="eyebrow">Textual depth • Scientific method • Shared questions</div>
      <h1>Collaborate with IvyPandit</h1>
      <p>IvyPandit seeks serious conversations that bring Sanskrit and śāstra expertise into direct dialogue with contemporary science, medicine, humanities, and research infrastructure.</p>
    </section>

    <main className="content">
      <section className="panel" style={{marginBottom:'26px',textAlign:'center'}}>
        <p className="kicker">Why collaborate with IvyPandit?</p>
        <h2>Nishant K. Mishra, MD, PhD</h2>
        <p>Led by a physician-scientist, neurologist, neuroscience researcher, and Sanskrit/Indian Knowledge Systems scholar, IvyPandit brings clinical science, research methodology, and classical scholarship into one collaborative space.</p>
      </section>

      <section className="collabIntro panel">
        <h2>You bring expertise. We build the question together.</h2>
        <p>Are you a Sanskrit scholar with a passage, concept, practice, commentary tradition, or understudied corpus that may illuminate questions about mind, language, health, behavior, consciousness, human flourishing, or the history of ideas? Or are you a scientist looking for scholars who can prevent superficial readings of classical material?</p>
        <p className="quoteBlock">The collaboration begins with understanding the source — not with proving a predetermined scientific claim.</p>
      </section>

      <section className="panel" style={{marginTop:'26px',marginBottom:'26px'}}>
        <p className="kicker">How collaboration works</p>
        <h2>From source to responsible output</h2>
        <div className="flowLine"><span>Source</span><b>→</b><span>Context</span><b>→</b><span>Question</span><b>→</b><span>Method</span><b>→</b><span>Output</span></div>
        <p>We begin with the text or problem, clarify its context, frame a responsible question, choose an appropriate scholarly or scientific method, and decide what kind of output is justified by the evidence.</p>
      </section>

      <section className="audienceGrid">
        <article><span>संस्कृत-शास्त्रविद्वांसः</span><h3>For Sanskrit & Śāstra scholars</h3><p>Help identify primary sources, establish textual context, distinguish schools and commentarial traditions, refine terminology, and assess whether a proposed scientific translation is responsible.</p></article>
        <article><span>वैज्ञानिकाः चिकित्सकाश्च</span><h3>For scientists & physicians</h3><p>Help determine which questions are measurable, what controls and methods are needed, how evidence should be graded, and where modern terminology risks distorting the source material.</p></article>
        <article><span>संस्थाः अनुदानदातारश्च</span><h3>For institutions & funders</h3><p>Help create interdisciplinary teams, workshops, pilot infrastructure, fellowships, datasets, and competitive proposals capable of supporting rigorous work in India and internationally.</p></article>
      </section>

      <section className="panel">
        <p className="kicker">Possible outcomes</p>
        <h2>Collaboration need not begin with a grant.</h2>
        <p>A collaboration may begin as a textual consultation, reading group, short commentary, pilot question, workshop, or informal scholarly exchange.</p>
        <div className="outcomeCloud"><span>Textual studies</span><span>Critical bibliographies</span><span>Lexicons</span><span>Pilot experiments</span><span>Digital corpora</span><span>Research questions</span><span>Workshops</span><span>Datasets</span><span>Multicentre networks</span><span>Grant proposals</span><span>Public lectures</span><span>Scholarly publications</span></div>
      </section>

      <section className="contactInvitation">
        <div>
          <p className="kicker">Begin with a note</p>
          <h2>Tell us what you know, what you are curious about, and what you think deserves study.</h2>
          <p>A few thoughtful paragraphs are enough. Where possible, include the passage or source, relevant tradition or commentary, the question or scientific problem, and the kind of collaboration you are seeking.</p>
          <p><b>Email:</b> nishant.mishra@ivypandit.com</p>
        </div>
        <div className="contactActions"><a className="btn primary" href="mailto:nishant.mishra@ivypandit.com?subject=IvyPandit%20Collaboration">Email IvyPandit</a><Link className="btn secondary" href="/questions">Browse open questions</Link></div>
      </section>
    </main>
  </>;
}
