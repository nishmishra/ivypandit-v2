import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lectures & Speaking | IvyPandit',
  description: 'Invite Dr. Nishant K. Mishra for lectures and conversations on neuroscience, Sanskrit, Indian Knowledge Systems, attention, memory, neuroplasticity, ritual, and human development.',
};

const lectures = [
  {
    title: 'Gāyatrī, Saṃskāra & the Developing Brain',
    subtitle: 'How repetition, meaning and practice shape the mind',
    body: 'Why have Hindu traditions placed such importance on mantra, daily practice, and saṃskāra from childhood? Beginning with the Gāyatrī mantra, this lecture explores neuroplasticity, attention, memory, language, imagery, breath, habit formation, and childhood development while clearly distinguishing traditional meaning from what contemporary science can establish.',
    audience: 'Parents, Bāla Vihār programs, Hindu schools, temples, educators, and youth programs.',
  },
  {
    title: 'Ancestors, Memory & the Brain',
    subtitle: 'Understanding Pitṛpakṣa through Hindu tradition and neuroscience',
    body: 'Why do human beings remember their ancestors? This lecture begins with Pitṛpakṣa, śrāddha, tarpaṇa, gratitude, and ancestral responsibility, then places them in conversation with research on memory, grief, family narratives, ritual, identity, and intergenerational continuity. The religious tradition and the scientific questions remain carefully distinguished.',
    audience: 'Pitṛpakṣa programs, temples, intergenerational gatherings, and community organizations.',
  },
  {
    title: 'Avadhāna and the Indian Science of Attention',
    subtitle: 'Memory, divided attention and extraordinary cognitive expertise',
    body: 'An avadhānī may simultaneously track poetry, numbers, questions, interruptions, linguistic constraints, and memory tasks, then reconstruct them with remarkable precision. This lecture explores sustained and divided attention, working memory, cognitive control, task switching, creativity, language, expertise, and metacognition—and asks how this living tradition might be studied scientifically.',
    audience: 'Universities, Sanskrit organizations, IKS programs, neuroscience audiences, and literary gatherings.',
  },
  {
    title: 'Sandhyopāsanā: From Ritual to Mechanism',
    subtitle: 'Breath, mantra, attention, visualization and daily mental training',
    body: 'Sandhyopāsanā combines practices that modern science often studies separately: regulated breathing, mantra, attention, visualization, posture, repetition, contemplative reflection, and daily routine. This lecture examines the traditional practice on its own terms while asking how prāṇāyāma, Gāyatrī-japa, imagery, autonomic regulation, attention, and habit formation could be investigated with modern research methods.',
    audience: 'Temples, Sanskrit institutions, yoga communities, physicians, scientists, and traditional scholars.',
  },
  {
    title: 'Sanskrit, Bilingualism & the Neuroplastic Brain',
    subtitle: 'What language learning can teach us about cognition',
    body: 'Learning a language changes how the brain manages sound, meaning, memory, and attention. This lecture begins with research on bilingualism, multilingualism, and neuroplasticity, then asks why Sanskrit recitation, grammar, memorization, and traditional modes of learning present particularly interesting questions for cognitive science.',
    audience: 'Sanskrit schools, universities, educators, parents, students, and language programs.',
  },
];

export default function Speaking() {
  return <>
    <section className="pageHero">
      <div className="eyebrow">Public scholarship • Neuroscience • Sanskrit • Indian Knowledge Systems</div>
      <h1>Lectures & Speaking</h1>
      <p>Ancient traditions. Contemporary questions. Serious conversation.</p>
    </section>

    <main className="content">
      <div className="callout">
        <b>Nishant K. Mishra, MD, PhD</b> offers public lectures, invited talks, workshops, and conversations exploring the meeting point of neuroscience, medicine, Sanskrit, Indian Knowledge Systems, cognition, and human experience. The purpose is not to use modern science to “prove” ancient traditions, but to understand traditional ideas carefully, ask what they may teach us about human experience, and examine where contemporary science can contribute meaningful evidence.
      </div>

      <section>
        <p className="kicker">Featured lecture topics</p>
        <h2 className="sectionTitle">Five conversations for communities, classrooms, and scholarly audiences.</h2>
        <div className="twoCol">
          {lectures.slice(0, 4).map((lecture) => (
            <article className="panel" key={lecture.title}>
              <h2>{lecture.title}</h2>
              <p><b>{lecture.subtitle}</b></p>
              <p>{lecture.body}</p>
              <p><b>Especially suitable for:</b> {lecture.audience}</p>
            </article>
          ))}
        </div>
        <article className="panel" style={{marginTop:'24px'}}>
          <h2>{lectures[4].title}</h2>
          <p><b>{lectures[4].subtitle}</b></p>
          <p>{lectures[4].body}</p>
          <p><b>Especially suitable for:</b> {lectures[4].audience}</p>
        </article>
      </section>

      <section style={{marginTop:'38px'}}>
        <p className="kicker">Formats</p>
        <h2 className="sectionTitle">Adapted to the audience and setting.</h2>
        <div className="twoCol">
          <div className="panel">
            <h2>Community & Educational Programs</h2>
            <ul>
              <li><b>Community lecture:</b> 30–45 minutes plus Q&A</li>
              <li><b>Youth / family program:</b> adapted for Bāla Vihār, teenagers, parents, or educators</li>
              <li><b>Workshop:</b> 60–120 minutes with source material, discussion, and participation</li>
            </ul>
          </div>
          <div className="panel">
            <h2>Academic & Professional Programs</h2>
            <ul>
              <li><b>Invited seminar:</b> 45–60 minutes plus discussion</li>
              <li><b>Conference / panel:</b> tailored to the meeting theme</li>
              <li><b>Lecture series:</b> multi-part programs on attention, memory, Sanskrit, ritual, neuroplasticity, and IKS</li>
            </ul>
          </div>
        </div>
        <div className="panel" style={{marginTop:'24px'}}>
          <p>Programs may be offered <b>in person or online</b>. Lectures can be delivered primarily in <b>English or Hindi</b>, with Sanskrit sources incorporated where appropriate.</p>
        </div>
      </section>

      <section className="missionBox">
        <p className="kicker" style={{color:'#ffd36b'}}>Invite a lecture</p>
        <h2>Bring an IvyPandit conversation to your community or institution.</h2>
        <p>Invitations are welcome from temples, universities, Hindu organizations, Sanskrit institutions, schools, conferences, cultural organizations, and community groups. Please include your organization, location, preferred topic, proposed date, expected audience, approximate attendance, format, and preferred lecture length.</p>
        <div className="buttons">
          <a className="btn secondary" href="mailto:nishant.mishra@ivypandit.com?subject=IvyPandit%20Lecture%20Invitation&body=Organization%3A%0ALocation%3A%0AProposed%20topic%3A%0APreferred%20date%3A%0AExpected%20audience%3A%0AApproximate%20attendance%3A%0AIn-person%20or%20online%3A%0APreferred%20lecture%20length%3A%0A">Invite Dr. Mishra to Speak</a>
        </div>
        <p><b>nishant.mishra@ivypandit.com</b><br/>Academic, educational, community, and invited programs are welcome. Honorarium and travel arrangements may be discussed depending on the organization, location, and format.</p>
      </section>

      <section className="panel" style={{marginTop:'28px'}}>
        <h2>About the Speaker</h2>
        <p><b>Nishant K. Mishra, MD, PhD</b> is a neurologist, physician-scientist, and educator whose academic work spans stroke, neuroimaging, brain health, and clinical neuroscience. Through IvyPandit, his public scholarship explores how Sanskrit texts, Indian Knowledge Systems, and traditional practices can enter serious conversation with neuroscience, medicine, and cognitive science.</p>
        <p className="quoteBlock">Understand the source. Respect the tradition. Ask the question. Examine the evidence.</p>
      </section>
    </main>
  </>;
}
