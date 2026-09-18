import Link from 'next/link';
import ContinueExploring from '../../components/ContinueExploring';

export default function ShastraStudyPage() {
  const internalHubs = [
    { title: 'Gāyatrī & Sandhyā', href: '/gayatri', text: 'Mantra, meaning, recitation, daily practice, attention, breath, and questions for modern research.' },
    { title: 'Bhagavad Gītā', href: '/gita', text: 'Dharma, crisis, action, self-knowledge, resilience, and careful interdisciplinary interpretation.' },
    { title: 'Mahābhārata', href: '/mahabharata', text: 'Leadership, conflict, memory, moral complexity, narrative, and human experience.' },
    { title: 'Bhāgavata', href: '/bhagavatam', text: 'Bhakti, sacred narrative, meaning, memory, surrender, and spiritual psychology.' },
  ];

  const collections = [
    {
      title: 'Vedas',
      href: 'https://youtube.com/playlist?list=PLwQYDVEShtUoo8AoWn-6jYqbu0bk425h5&si=tJFxbnC9VvDjbGCW',
      text: 'Readings and reflections on foundational Vedic texts and their traditional interpretation.'
    },
    {
      title: 'Upaniṣads',
      href: 'https://youtube.com/playlist?list=PLwQYDVEShtUpeuJKGxSnFepXer-BY0GVy&si=MRZe8jWsRq67Lnrw',
      text: 'Explorations of self-knowledge, reality, consciousness, liberation, and philosophical inquiry.'
    },
    {
      title: 'Gāyatrī Series',
      href: 'https://youtube.com/playlist?list=PLwQYDVEShtUrQTTjvBffuXE8wWoEnKEXj&si=c76V84a4zyCdKdM_',
      text: 'Gāyatrī through Sanskrit tradition, contemplative practice, cognition, attention, and neuroscience questions.'
    },
    {
      title: 'Complete Video Library',
      href: 'https://www.youtube.com/@IvyPandit/playlists',
      text: 'IvyPandit playlists across Veda, Upaniṣad, Gītā, Itihāsa, Purāṇa, Vedānta, ritual, and more.'
    }
  ];

  return (
    <main className="pageShell">
      <section className="pageHero compact">
        <p className="eyebrow">Śāstra Study</p>
        <h1>Explore the Tradition</h1>
        <p>IvyPandit approaches Sanskrit literature first as a living intellectual and spiritual tradition — with attention to source, commentary, context, language, and only then to modern interdisciplinary questions.</p>
      </section>

      <section className="content">
        <section className="manifesto">
          <h2 className="sectionTitle">Primary text → traditional interpretation → contemporary question</h2>
          <p>A scientific analogy should never replace the work of reading the source. The study pathway begins with the text, its language and interpretive tradition, then asks what — if anything — may responsibly enter conversation with modern scholarship.</p>
        </section>

        <section>
          <p className="kicker">On-site study hubs</p>
          <h2 className="sectionTitle">Begin with a text or tradition</h2>
          <div className="resourceGrid">
            {internalHubs.map((item)=><Link className="panel linkedCard" href={item.href} key={item.title}><h2>{item.title}</h2><p>{item.text}</p><span>Open study hub →</span></Link>)}
          </div>
        </section>

        <section style={{marginTop:'34px'}}>
          <p className="kicker">Video collections</p>
          <h2 className="sectionTitle">Readings, talks & reflections</h2>
          <div className="contentGrid">
            {collections.map((item) => (
              <a className="contentCard linkedCard" href={item.href} target="_blank" rel="noopener noreferrer" key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <span>Open Collection →</span>
              </a>
            ))}
          </div>
        </section>

        <section className="quotePanel" style={{marginTop:'34px'}}>
          <h2>ऋतं च सत्यं च</h2>
          <p><b>Ṛgveda 10.190.1:</b> ṛta — cosmic order — and satya — truth — appear together in a Vedic reflection on emergence and reality.</p>
          <p><a className="textLink" href="https://vedicheritage.gov.in/samhitas/rigveda/" target="_blank" rel="noopener noreferrer">Explore the Ṛgveda at the Vedic Heritage Portal →</a></p>
        </section>

        <ContinueExploring
          title="Choose your next study pathway"
          intro="Move from the broad Śāstra gateway into a focused text hub, or use the Knowledge Navigator to search across texts and formats."
          items={[
            {title:'Mahābhārata Study Hub',href:'/mahabharata',label:'ITIHĀSA',text:'A structured path through reading progress, characters, themes, videos, and interdisciplinary questions.'},
            {title:'Bhagavad Gītā Study Hub',href:'/gita',label:'GĪTĀ',text:'Crisis, dharma, action, resilience, Vibhūti, and Viśvarūpa.'},
            {title:'Gāyatrī Study Hub',href:'/gayatri',label:'MANTRA & PRACTICE',text:'Primary source, Sandhyā, recitation, contemplative practice, and evidence-aware inquiry.'},
            {title:'Search the full knowledge index',href:'/explore',label:'EXPLORE',text:'Find a person, text, practice, scientific domain, article, video, or research question.'}
          ]}
        />

        <section className="missionBox">
          <h2>वसुधैव कुटुम्बकम्</h2>
          <p>Knowledge is humanity&apos;s shared inheritance. The aspiration is to study tradition with humility and precision, and to let genuine understanding guide any later dialogue with modern science.</p>
        </section>
      </section>
    </main>
  );
}
