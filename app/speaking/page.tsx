import type { Metadata } from 'next';
import Link from 'next/link';
import { featuredLectures, lectureFamilies } from './catalog';

export const metadata: Metadata = {
  title: 'Lectures & Speaking',
  description: 'Invite Dr. Nishant K. Mishra for lectures in English, Hindi, or Sanskrit on neuroscience, Sanskrit, Indian Knowledge Systems, attention, memory, neuroplasticity, brain health, Gita, Mahabharata, Gayatri, and human development.',
  openGraph: {
    title: 'Lectures & Speaking | IvyPandit',
    description: 'Neuroscience, Sanskrit, Indian Knowledge Systems, Gita, Gayatri, Avadhana, brain health and more — lectures by Nishant K. Mishra, MD, PhD.',
    url: 'https://www.ivypandit.com/speaking',
    type: 'website',
  },
};

export default function Speaking() { return <>
  <section className="pageHero"><div className="eyebrow">Public scholarship • Neuroscience • Sanskrit • Indian Knowledge Systems</div><h1>Lectures & Speaking</h1><p>Ancient traditions. Contemporary questions. Serious conversation.</p><div className="buttons"><Link className="btn secondary" href="/hi/speaking">हिन्दी</Link><Link className="btn secondary" href="/sa/speaking">संस्कृतम्</Link></div></section>
  <main className="content">
    <div className="callout"><b>Nishant K. Mishra, MD, PhD</b> offers public lectures, invited talks, workshops, panels, podcasts, and conversations at the meeting point of neuroscience, medicine, Sanskrit, Indian Knowledge Systems, cognition, and human experience. Lectures can be delivered in <b>English, Hindi, or Sanskrit</b> and adapted for universities, temples, medical and scientific audiences, schools, conferences, and community organizations.</div>
    <div className="buttons" style={{justifyContent:'flex-start',marginTop:'-8px',marginBottom:'28px'}}><Link className="btn secondary" href="/speaking/speaker-sheet">View / Print One-Page Speaker Sheet</Link></div>

    <section className="featuredTalks" style={{marginTop:'34px'}}>
      <div className="sectionHeaderRow"><div><p className="kicker">Selected invited appearance</p><h2 className="sectionTitle">Mahābhārata & Neuroscience at a Sanskrit Forum</h2></div><a className="textLink" href="https://www.youtube.com/watch?v=dr-H6IToGx4&t=1104s" target="_blank" rel="noopener noreferrer">Watch the forum recording →</a></div>
      <div className="talkGrid">
        <div className="videoEmbed"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/dr-H6IToGx4?start=1104" title="Invited Sanskrit forum talk by Dr. Nishant K. Mishra on Mahabharata and neuroscience" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
        <div className="talkCopy"><span className="label">INVITED SANSKRIT FORUM</span><h3>Mahābhārata, Human Experience & Neuroscience</h3><p>This recording documents an invited speaking appearance in a Sanskrit scholarly forum. Dr. Mishra&apos;s segment begins at approximately 18:24 and explores how themes from the Mahābhārata can enter a disciplined conversation with neuroscience, cognition, and contemporary research.</p><p>The purpose is not to present the Mahābhārata as a modern neuroscience textbook. The talk illustrates the IvyPandit method: understand the source and its traditional context, identify a precise question, and then distinguish interpretation, hypothesis, and scientific evidence.</p><p><b>Related scholarship:</b> <i>संस्कृतवाङ्मये विज्ञानानुसन्धानस्य पद्धतिः</i> — a methodological manuscript developing a structured pathway from śāstric epistemology to testable interdisciplinary research questions, now being submitted for journal consideration.</p><a className="textLink" href="https://www.youtube.com/watch?v=dr-H6IToGx4&t=1104s" target="_blank" rel="noopener noreferrer">Watch from Dr. Mishra&apos;s segment →</a><br/><Link className="textLink" href="/research">Explore the research approach →</Link></div>
      </div>
    </section>

    <section><p className="kicker">Signature lectures</p><h2 className="sectionTitle">Six strong entry points into a much larger body of work.</h2>
      <div className="twoCol">{featuredLectures.map((lecture)=><article className="panel" key={lecture.title}><h2>{lecture.title}</h2><p>{lecture.body}</p><p><b>Especially suitable for:</b> {lecture.audience}</p><Link className="textLink" href={lecture.href}>Explore this lecture →</Link></article>)}</div>
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
      <h2 className="sectionTitle">English, Hindi, and Sanskrit — adapted to the audience.</h2>
      <div className="twoCol">
        <div className="panel"><h2>Full lecture languages</h2><p>Programs may be delivered fully in <b>English</b>, <b>Hindi</b>, or <b>Sanskrit</b>, including bilingual or mixed-language formats when useful for the audience and subject.</p><p>Sanskrit passages, mantras, ślokas, and technical terms can be presented and discussed directly from the original language.</p></div>
        <div className="panel"><h2>Additional languages</h2><p>Dr. Mishra also speaks <b>Bhojpuri, Marathi, and French</b>. These languages can be incorporated into introductions, selected portions of a program, conversation, and Q&A depending on the setting and audience.</p></div>
      </div>
    </section>

    <section style={{marginTop:'38px'}}><p className="kicker">Formats & audiences</p><h2 className="sectionTitle">Adapted to the institution and the people in the room.</h2><div className="twoCol"><div className="panel"><h2>Community & Educational Programs</h2><ul><li><b>Community lecture:</b> 30–45 minutes plus Q&A</li><li><b>Youth / family program:</b> adapted for Bāla Vihār, teenagers, parents, or educators</li><li><b>Workshop:</b> 60–120 minutes with source material, discussion, and participation</li></ul></div><div className="panel"><h2>Academic & Professional Programs</h2><ul><li><b>Invited seminar:</b> 45–60 minutes plus discussion</li><li><b>Conference / panel / podcast:</b> tailored to the program theme</li><li><b>Lecture series:</b> a multi-part program built around one of the thematic families above</li></ul></div></div></section>

    <section className="missionBox"><p className="kicker" style={{color:'#ffd36b'}}>Invite a lecture</p><h2>Bring an IvyPandit conversation to your community or institution.</h2><p>Invitations are welcome from temples, universities, medical schools, hospitals, Hindu organizations, Sanskrit institutions, schools, conferences, cultural organizations, podcasts, and community groups. A custom talk can also be developed around a theme not yet listed.</p><div className="buttons"><a className="btn secondary" href="mailto:nishant.mishra@ivypandit.com?subject=IvyPandit%20Lecture%20Invitation&body=Organization%3A%0ALocation%3A%0AProposed%20topic%3A%0APreferred%20language%3A%20English%20%2F%20Hindi%20%2F%20Sanskrit%20%2F%20Bilingual%0APreferred%20date%3A%0AExpected%20audience%3A%0AApproximate%20attendance%3A%0AIn-person%20or%20online%3A%0APreferred%20lecture%20length%3A%0A">Invite Dr. Mishra to Speak</a><Link className="btn secondary" href="/speaking/speaker-sheet">Speaker Sheet</Link></div><p><b>nishant.mishra@ivypandit.com</b><br/>Academic, educational, community, medical, and invited programs are welcome. Honorarium and travel arrangements may be discussed depending on the organization, location, and format.</p></section>

    <section className="panel" style={{marginTop:'28px'}}><h2>About the Speaker</h2><p><b>Nishant K. Mishra, MD, PhD</b> is a neurologist, physician-scientist, educator, and public scholar whose work spans stroke, neuroimaging, brain health, clinical neuroscience, human neuroplasticity, Sanskrit, and Indian Knowledge Systems.</p><p><a className="textLink" href="https://www.linkedin.com/in/ivypandit/" target="_blank" rel="noopener noreferrer">LinkedIn →</a><br/><a className="textLink" href="https://x.com/IvyPandit" target="_blank" rel="noopener noreferrer">X / Twitter →</a><br/><a className="textLink" href="https://www.youtube.com/@IvyPandit" target="_blank" rel="noopener noreferrer">YouTube @IvyPandit →</a></p></section>
  </main>
</>; }
