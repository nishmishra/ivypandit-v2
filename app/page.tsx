import Link from 'next/link';

const entryPoints = [
  {
    title: 'Watch Lectures',
    text: 'Flagship talks on neuroscience, Sanskrit, consciousness, education, and Indian Knowledge Systems.',
    href: '/videos'
  },
  {
    title: 'Explore the Shastras',
    text: 'A lifelong journey of reading and reflecting on Sanskrit texts with humility and curiosity.',
    href: '/shastra-study'
  },
  {
    title: 'Research',
    text: 'Scientific work, publications, brain-health work in India, collaborations, and Google Scholar profile.',
    href: '/research'
  },
  {
    title: 'Lectures & Conversations',
    text: 'Keynotes, workshops, public conversations, and consulting-style educational programs.',
    href: '/speaking'
  }
];

const featured = [
  {
    title: 'Why IvyPandit Exists',
    text: 'The launch video introducing the mission of IvyPandit: ancient wisdom, modern neuroscience, and thoughtful inquiry.',
    href: 'https://youtu.be/XkEqWuym3dc?si=-rj450GAkbZZYALF'
  },
  {
    title: 'Can Sanskrit Change the Brain?',
    text: 'A neuroscience-informed exploration of Sanskrit, memory, language, attention, and neuroplasticity.',
    href: 'https://youtu.be/egQBTnJCpAQ?si=m93SLXtxHJCTrnJH'
  },
  {
    title: 'Did Gurukuls Train Extraordinary Minds?',
    text: 'Focused attention, learning, forest environments, memory, and the science of education.',
    href: 'https://youtu.be/z8cUfCnHV10?si=1hHuUJD6dJO0dsx8'
  },
  {
    title: 'Did Ancient India Understand Hygiene Before Germ Theory?',
    text: 'Cleanliness, Ayurveda, public health, shastra, and modern science.',
    href: 'https://youtu.be/j-7VlYV8WVQ?si=Nn-T0RRNV9VaAtB8'
  }
];

export default function Home() {
  return (
    <>
      <section className="brandHero">
        <div className="heroTextBlock">
          <p className="kicker">Neuroscience • Sanskrit • Indian Knowledge Systems</p>
          <h1>IVY PANDIT</h1>
          <h2>Ancient Wisdom. Modern Neuroscience.</h2>
          <p className="lead">
            An independent public education initiative exploring the human mind through
            neuroscience, Sanskrit literature, consciousness, learning, ethics, and the Indian Knowledge Tradition.
          </p>
          <p className="founderLine">Founded by Nishant K. Mishra, MD, PhD</p>
          <div className="heroButtons">
            <Link className="cta red" href="/videos">Explore Lectures</Link>
            <Link className="cta light" href="/shastra-study">Explore the Shastras</Link>
          </div>
        </div>
        <div className="heroBannerFrame">
          <img src="/images/ivypandit-bridge-banner.png" alt="IvyPandit banner showing Varanasi, academic architecture, and Dr. Nishant Mishra" />
        </div>
      </section>

      <main className="homeMain calmHome">
        <section className="missionBox centerText">
          <p className="sanskritLarge">ऋतं च सत्यं च</p>
          <h2>What is IvyPandit?</h2>
          <p>
            IvyPandit is a sincere effort to promote the Indian Knowledge Tradition for the good of the world.
            It brings modern neuroscience into respectful conversation with Sanskrit literature, shastra,
            contemplative practice, and questions of human flourishing.
          </p>
          <p className="emphasis">वसुधैव कुटुम्बकम् — The world is one family.</p>
        </section>

        <section className="threeCards startCards">
          {entryPoints.map((item) => (
            <Link className="startCard" href={item.href} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span>Explore →</span>
            </Link>
          ))}
        </section>

        <section className="featurePanel">
          <div className="sectionHead">
            <p className="kicker">Selected entry points</p>
            <h2>Featured Lectures</h2>
          </div>
          <div className="videoCards">
            {featured.map((v) => (
              <a className="videoCard" href={v.href} key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
                <span>Watch →</span>
              </a>
            ))}
          </div>
        </section>

        <section className="quoteBlock">
          <p className="sanskritLarge">असंशयं महाबाहो मनो दुर्निग्रहं चलम् ।<br/>अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते ॥</p>
          <p>The mind is restless and difficult to master; through practice and discipline, it can be guided.</p>
        </section>

        <section className="disclaimerStrip">
          <strong>Independent educational initiative.</strong>
          <span>Content is hypothesis-generating, intended for thoughtful inquiry, not medical advice, and does not represent any employer or institution.</span>
        </section>
      </main>
    </>
  );
}
