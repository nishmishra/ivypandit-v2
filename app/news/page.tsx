import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'News & Events | IvyPandit',
  description: 'Current IvyPandit lectures, community events, announcements, and public scholarship.',
  openGraph: {
    title: 'News & Events | IvyPandit',
    description: 'Current IvyPandit lectures, community events, announcements, and public scholarship.',
    url: 'https://www.ivypandit.com/news',
    type: 'website',
  },
};

export default function NewsAndEvents() {
  const eventLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Ancestors, Memory, and the Brain',
    description: 'A community lecture exploring Pitṛpakṣa, ancestral remembrance, memory, grief, attachment, ritual, and the limits of scientific explanation.',
    startDate: '2026-10-04T17:30:00-04:00',
    image: 'https://www.ivypandit.com/images/ancestors-memory-brain-oct4-2026.jpeg',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'HCC Stratford',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '96 Chapel Street',
        addressLocality: 'Stratford',
        addressRegion: 'CT',
        postalCode: '06614',
        addressCountry: 'US',
      },
    },
    performer: {
      '@type': 'Person',
      name: 'Nishant K. Mishra, MD, PhD',
      url: 'https://www.ivypandit.com/about',
    },
    organizer: {
      '@type': 'Organization',
      name: 'IvyPandit',
      url: 'https://www.ivypandit.com',
    },
    url: 'https://www.ivypandit.com/news',
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(eventLd)}} />
    <section className="pageHero">
      <div className="eyebrow">Current events • Community lectures • Public scholarship</div>
      <h1>News & Events</h1>
      <p>Upcoming IvyPandit lectures, public conversations, announcements, and community programs.</p>
    </section>

    <main className="content">
      <section className="panel" aria-label="Yogvani October 2026 featured article" style={{marginBottom:'34px',padding:'28px',borderLeft:'5px solid #c7932d',background:'#fff7e7'}}>
        <p className="kicker">New publication • Yogvani • October 2026</p>
        <h2 className="sectionTitle">From Śāstra to the Laboratory</h2>
        <p lang="hi"><b>शास्त्र से प्रयोगशाला तक — संस्कृत वाङ्मय का वैज्ञानिक अनुसन्धान</b></p>
        <p>Read Dr. Nishant Kumar Mishra’s Hindi article on transforming insights from Sanskrit literature into testable research questions. Published in <i>Yogvani</i>, October 2026, pages 24–27.</p>
        <div className="buttons" style={{justifyContent:'flex-start',flexWrap:'wrap'}}>
          <Link className="btn primary" href="/articles/yogvani-october-2026">Explore the featured article</Link>
          <a className="btn secondary" href="/library/yogvani-october-2026-nishant-mishra.pdf" target="_blank" rel="noopener noreferrer">Read the original Hindi article</a>
          <a className="btn secondary" href="/library/yogvani-october-2026.pdf" target="_blank" rel="noopener noreferrer">Read the complete October issue</a>
        </div>
      </section>

      <section className="initiativeSection" style={{alignItems:'start'}}>
        <div>
          <p className="kicker">Community lecture delivered • October 4, 2026</p>
          <h2 className="sectionTitle">Ancestors, Memory, and the Brain</h2>
          <p>The HCC Stratford lecture was delivered on October 4. A follow-up lecture on memory is in preparation as part of <Link className="textLink" href="/brain-health">Brain Health &amp; Indian Traditions</Link>. Its date remains to be confirmed.</p>
          <p style={{fontSize:'1.12rem'}}><b>Understanding Pitṛpakṣa through Hindu tradition and neuroscience</b></p>
          <p>Pitṛpakṣa invites reflection on forebears, family ties, gratitude, and rituals of remembrance. This community lecture places the traditional practice in conversation with what contemporary neuroscience and psychology can tell us about memory, grief, attachment, family narrative, and human connection—while keeping religious interpretation and scientific evidence clearly distinct.</p>

          <div className="panel" style={{marginTop:'24px'}}>
            <p style={{marginTop:0}}><b>Sunday, October 4, 2026 • 5:30 PM</b></p>
            <p><b>HCC Stratford</b><br/>96 Chapel Street, Stratford, CT 06614</p>
            <p><b>Format:</b> Open to the community • 30–40 minute talk followed by discussion</p>
          </div>

          <div style={{marginTop:'28px'}}>
            <p className="kicker">The conversation</p>
            <ol>
              <li>What is Pitṛpakṣa and why is it observed?</li>
              <li>How do memory and grief shape our lives?</li>
              <li>Why do families ritualize remembrance?</li>
              <li>Where are the limits of scientific explanation?</li>
            </ol>
          </div>

          <blockquote style={{fontSize:'1.35rem',fontStyle:'italic',margin:'32px 0',paddingLeft:'20px',borderLeft:'3px solid #c7932d'}}>
            “To remember is to remain connected.”
          </blockquote>

          <div className="buttons" style={{justifyContent:'flex-start'}}>
            <a className="btn primary" href="mailto:nishant.mishra@ivypandit.com?subject=October%204%20Pitrapaksha%20lecture%20attendance">Ask about attending</a>
            <Link className="btn secondary" href="/articles/pitrapaksha-memory-grief">Read the essay and watch the videos</Link>
          </div>
          <p style={{fontSize:'.95rem',marginTop:'16px'}}>Planning to come? The talk is open to the community. The email link is for questions; no registration requirement has been announced here.</p>
        </div>

        <aside className="panel">
          <figure style={{margin:'0 0 28px'}}>
            <a href="/images/ancestors-memory-brain-oct4-2026.jpeg" target="_blank" rel="noopener noreferrer" aria-label="Open the full-size October 4 community lecture flyer">
              <Image src="/images/ancestors-memory-brain-oct4-2026.jpeg" alt="Ancestors, Memory, and the Brain: community lecture by Nishant K. Mishra, MD, PhD, Sunday, October 4, 2026 at 5:30 PM, HCC Stratford, 96 Chapel Street, Stratford, CT. Open to the community; 30–40 minute talk followed by discussion." width={1055} height={1491} style={{width:'100%',height:'auto',display:'block',borderRadius:'8px'}} />
            </a>
            <figcaption style={{marginTop:'12px'}}><a className="textLink" href="/images/ancestors-memory-brain-oct4-2026.jpeg" target="_blank" rel="noopener noreferrer">Open the full-size event flyer</a></figcaption>
          </figure>
          <div style={{display:'grid',gridTemplateColumns:'96px 1fr',gap:'16px',alignItems:'center'}}>
            <Image src="/images/dr-nishant-mishra.jpeg" alt="Nishant K. Mishra, MD, PhD" width={192} height={240} style={{width:'96px',height:'120px',objectFit:'cover',borderRadius:'10px'}} />
            <div>
              <p className="kicker" style={{marginBottom:'6px'}}>Speaker</p>
              <h3 style={{margin:'0 0 4px'}}>Nishant K. Mishra, MD, PhD</h3>
              <p style={{margin:0}}>Neurologist • Physician-scientist<br/>Founder, IvyPandit</p>
            </div>
          </div>
          <hr style={{margin:'22px 0',border:0,borderTop:'1px solid #e1d2b8'}}/>
          <p className="kicker">Program note</p>
          <p>This is an educational community program. It is not medical advice, diagnosis, treatment, or religious instruction. Traditional and scriptural interpretations are distinguished from scientific evidence. Views are the speaker’s own.</p>
          <p style={{marginBottom:0}}><a className="textLink" href="mailto:nishant.mishra@ivypandit.com?subject=Ancestors%2C%20Memory%2C%20and%20the%20Brain">Contact IvyPandit →</a></p>
        </aside>
      </section>

      <section className="panel" style={{marginTop:'36px',padding:'28px'}} aria-label="Recent IvyPandit lectures">
        <p className="kicker">Recent lectures</p>
        <h2 className="sectionTitle">From śāstra to research questions</h2>
        <div style={{display:'grid',gap:'26px'}}>
          <article>
            <p className="label">September 25, 2026 • Online lecture • Yājñavalkya Sevārtha Saṃsthānam, Varanasi</p>
            <h3>Śāstra se Śodh Tak: Scientific Research Methods in Sanskrit Study</h3>
            <p>Dr. Mishra discussed how careful reading of texts, traditional interpretation, and lived practice can generate precise research questions. The lecture considered study design, evidence, editorial responsibility, and collaboration between Sanskrit scholars and scientists. The discussion included interest in studying values and daily Sandhyopāsanā with methods appropriate to the questions.</p>
            <Link className="textLink" href="/articles/shastra-to-scientific-discovery">Read the related research framework →</Link>
          </article>
          <article>
            <p className="label">July 25, 2026 • Sanskrit group lecture • Devashayani Ekādaśī</p>
            <h3>The Mahābhārata as a Source of Research Questions</h3>
            <p>In a lecture delivered on Devashayani Ekādaśī, Dr. Mishra used episodes from the Mahābhārata to show how a literary or philosophical observation might inspire a testable question. The talk distinguished the text’s own meaning from a modern hypothesis and warned against treating the epic as a neuroscience textbook.</p>
            <Link className="textLink" href="/mahabharata">Explore the Mahābhārata study hub →</Link>
          </article>
        </div>
      </section>

      <section className="missionBox" style={{marginTop:'44px'}}>
        <p className="kicker" style={{color:'#ffd36b'}}>Tradition • Science • Human experience</p>
        <h2>Why this conversation belongs on IvyPandit</h2>
        <p>The event reflects the platform’s core method: understand a traditional practice in its own context, ask precise questions about memory and human experience, and be explicit about what science can—and cannot—establish.</p>
      </section>
    </main>
  </>;
}
