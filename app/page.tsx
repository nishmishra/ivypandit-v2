import Link from 'next/link';
import styles from './home.module.css';

export default function Home() {
  return <>
    <style>{`
      @media print {
        .topbar, .header, .footer { display: none !important; }
        .hero { min-height: auto !important; break-after: avoid; }
        .heroInner { padding-top: 42px !important; padding-bottom: 42px !important; }
        .gatewayCard, .initiativeSection, .initiativeCard, .talkGrid, .panel, .evidenceGrid > div, .missionBox { break-inside: avoid; page-break-inside: avoid; }
        .main { padding-top: 28px !important; padding-bottom: 20px !important; }
      }
    `}</style>

    <section className="hero">
      <div className="heroInner">
        <div className="eyebrow">Sanskrit • Indian Knowledge Systems • Science • Public Scholarship</div>
        <h1>IVY PANDIT</h1>
        <h2>Ancient Wisdom. Modern Neuroscience.</h2>
        <p>A scholarly and educational platform for respectful engagement with tradition, scientific curiosity, and rigorous interdisciplinary inquiry.</p>
        <div className="heroQuotes">
          <span className="quotePill"><b>परम्परा</b><span>Respect tradition.</span></span>
          <span className="quotePill"><b>जिज्ञासा</b><span>Encourage curiosity.</span></span>
          <span className="quotePill"><b>अनुसन्धानम्</b><span>Demand rigor.</span></span>
        </div>
        <div className="buttons">
          <Link className="btn primary" href="/explore">Explore IvyPandit</Link>
          <Link className="btn secondary" href="/research/consciousness/avadhana">Start with Featured Scholarship</Link>
        </div>
        <p style={{marginTop:'14px'}}><Link className="textLink" href="/evidence">Examine the evidence behind IvyPandit’s interdisciplinary work →</Link></p>
      </div>
    </section>

    <main className="main">
      <section className="panel" style={{marginBottom:'34px',padding:'28px'}} aria-label="Knowledge Navigator">
        <p className="kicker">Find anything on IvyPandit</p>
        <h2 className="sectionTitle">What would you like to explore?</h2>
        <p>Search by text, person, practice, scientific topic, content type, or language. You do not need to know which section of the website contains it.</p>
        <form action="/explore" method="get" style={{display:'flex',gap:'10px',flexWrap:'wrap',marginTop:'18px'}}>
          <input name="q" aria-label="Search IvyPandit" placeholder="Mahābhārata, Gāyatrī, Sanskrit, stroke, memory, karma…" style={{flex:'1 1 360px',padding:'14px 16px',border:'1px solid #d7c5a5',borderRadius:'10px',fontSize:'17px',background:'#fffdf8'}} />
          <button className="btn primary" type="submit">Search IvyPandit</button>
        </form>
        <div className="buttons" style={{justifyContent:'flex-start',marginTop:'16px',flexWrap:'wrap'}}>
          <Link className="btn secondary" href="/explore?q=Mah%C4%81bh%C4%81rata">Mahābhārata</Link>
          <Link className="btn secondary" href="/explore?q=G%C4%81yatr%C4%AB">Gāyatrī</Link>
          <Link className="btn secondary" href="/explore?q=Sanskrit">Sanskrit</Link>
          <Link className="btn secondary" href="/explore?q=Post-Stroke%20Epilepsy">Post-Stroke Epilepsy</Link>
          <Link className="btn secondary" href="/explore">Browse everything →</Link>
        </div>
      </section>


      <section className="initiativeSection" style={{marginTop:'34px',marginBottom:'48px'}}>
        <div>
          <p className="kicker">Current event • Sunday, October 4, 2026 • 5:30 PM</p>
          <h2 className="sectionTitle">Ancestors, Memory, and the Brain</h2>
          <p><b>Understanding Pitṛpakṣa through Hindu tradition and neuroscience</b></p>
          <p>Join a community conversation at HCC Stratford on ancestral remembrance, memory, grief, family ritual, and the limits of scientific explanation. Open to the community; 30–40 minute talk followed by discussion.</p>
          <div className="buttons" style={{justifyContent:'flex-start'}}>
            <Link className="btn primary" href="/news">Event details</Link>
            <Link className="btn secondary" href="/articles/pitrapaksha-memory-grief">Related essay</Link>
          </div>
        </div>
        <div className="panel">
          <span className="label">COMMUNITY LECTURE • HCC STRATFORD</span>
          <h3>Sunday, October 4, 2026 • 5:30 PM</h3>
          <p><b>HCC Stratford</b><br/>96 Chapel Street, Stratford, CT 06614</p>
          <p><b>Nishant K. Mishra, MD, PhD</b><br/>Neurologist • Physician-scientist • Founder, IvyPandit</p>
          <Link className="textLink" href="/news">View current news & events →</Link>
        </div>
      </section>

      <section className={`${styles.gatewayRefined} gatewayGrid`} aria-label="Explore IvyPandit">
        <Link className="gatewayCard" href="/shastra-study"><span>01</span><h3>Śāstra & Sanskrit</h3><p>Texts, recitations, commentaries, study pathways, Indian Knowledge Systems resources, and direct engagement with classical knowledge traditions.</p><strong>Explore tradition & texts →</strong></Link>
        <Link className="gatewayCard" href="/research"><span>02</span><h3>Science & Research</h3><p>Neuroscience, cognition, brain health, cultural expertise, publications, methods, and research questions.</p><strong>Explore research →</strong></Link>
        <Link className="gatewayCard" href="/videos"><span>03</span><h3>Learn & Watch</h3><p>Curated academic, interdisciplinary, and traditional lectures, with clear pathways for newcomers and returning learners.</p><strong>Watch & learn →</strong></Link>
      </section>

      <section className={styles.identityCard}>
        <p className="kicker">Founder</p>
        <h2>Nishant K. Mishra, MD, PhD</h2>
        <p>Physician-scientist • Neurologist • Neuroscience researcher • Student of Sanskrit and Indian Knowledge Systems</p>
        <p className={styles.identityLine}>IvyPandit brings together brain science, Sanskrit, and Indian Knowledge Systems through careful scholarship, open inquiry, and clear distinctions between tradition, interpretation, hypothesis, and evidence.</p>
      </section>

      <section className="initiativeSection" style={{marginTop:'34px',marginBottom:'48px'}}>
        <div>
          <p className="kicker">Definitive guide</p>
          <h2 className="sectionTitle">Avadhāna and the Indian Science of Attention</h2>
          <p>What can a living Indian tradition of structured multi-stream performance teach us about attention, working memory, language, improvisation, and long-duration expertise?</p>
          <p>This evidence-aware article explains what Avadhāna is, why “multitasking” is an incomplete label, which cognitive mechanisms can be tested, and what responsible neuroscience research should do next.</p>
          <Link className="btn primary" href="/research/consciousness/avadhana">Read the definitive article</Link>
        </div>
        <div className="panel">
          <span className="label">AVADHĀNA • ATTENTION • MEMORY</span>
          <h3>Tradition understood. Hypotheses tested.</h3>
          <p>Historical practice, Indian conceptual vocabulary, cognitive task analysis, research safeguards, scholarly references, and a staged behavioral–EEG–MRI–longitudinal program.</p>
          <Link className="textLink" href="/speaking/avadhana-indian-science-attention">Explore the related lecture →</Link>
        </div>
      </section>

      <section className="featuredTalks" style={{marginTop:'34px',marginBottom:'48px'}}>
        <div className="sectionHeaderRow"><div><p className="kicker">Start here</p><h2 className="sectionTitle">Introducing IvyPandit</h2></div><a className="textLink" href="https://www.youtube.com/watch?v=XkEqWuym3dc" target="_blank" rel="noopener noreferrer">Watch on YouTube →</a></div>
        <div className="talkGrid">
          <div className="videoEmbed"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/XkEqWuym3dc" title="Introducing IvyPandit — platform launch video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
          <div className="talkCopy"><span className="label">PLATFORM LAUNCH</span><h3>Why IvyPandit?</h3><p>In this launch video, Dr. Nishant K. Mishra introduces the purpose of IvyPandit: to create a serious public space where Sanskrit, Indian Knowledge Systems, neuroscience, medicine, and contemporary scholarship can meet without confusing tradition, interpretation, hypothesis, and scientific evidence.</p><p>It is the best short introduction to the platform before exploring its research, study resources, lectures, and collaborative projects.</p><Link className="textLink" href="/about">About IvyPandit →</Link><br/><Link className="textLink" href="/editorial-policy">Editorial & Evidence Policy →</Link></div>
        </div>
      </section>

      <section className="manifesto">
        <p className="kicker">The IvyPandit approach</p>
        <h2 className="sectionTitle">Tradition deserves understanding before judgment.<br/>Scientific claims deserve evidence before acceptance.</h2>
        <p>IvyPandit studies Sanskrit and Indian Knowledge Systems in their historical and intellectual contexts while asking new questions through neuroscience, medicine, cognitive science, behavioral science, and other modern disciplines.</p>
        <p>The aim is neither to declare that ancient texts anticipated modern science nor to dismiss traditional knowledge because it is old. It is to understand carefully, ask better questions, and distinguish evidence from interpretation.</p>
        <p><Link className="textLink" href="/editorial-policy">Read the Editorial & Evidence Policy →</Link><Link className="textLink" href="/evidence">Explore the Evidence Library →</Link></p>
      </section>





      <section className="initiativeSection">
        <div>
          <p className="kicker">Research infrastructure</p>
          <h2 className="sectionTitle">From source to question to evidence.</h2>
          <p>Structured repositories connect classical sources, modern scholarship, research questions, working papers, lectures, and future datasets.</p>
          <div className="flowLine"><span>Source</span><b>→</b><span>Interpretation</span><b>→</b><span>Question</span><b>→</b><span>Evidence</span><b>→</b><span>Scholarship</span><b>→</b><span>Public learning</span></div>
        </div>
        <div className="initiativeCards">
          <Link className="initiativeCard" href="/sbkb"><small>FLAGSHIP INITIATIVE</small><h3>Sanskrit Biomedical Knowledge Base</h3><p>A structured program for identifying medically and scientifically relevant observations in Sanskrit literature and converting them into transparent, testable research questions.</p><strong>Discover SBKB →</strong></Link>
          <Link className="initiativeCard" href="/questions"><small>INVITATION TO INQUIRY</small><h3>Research Questions & Collaborations</h3><p>Carefully framed questions inviting textual expertise, scientific discussion, interdisciplinary projects, and future collaborations.</p><strong>Explore the questions →</strong></Link>
        </div>
      </section>

      <section className={`${styles.featuredRefined} featuredTalks`}>
        <div className="sectionHeaderRow"><div><p className="kicker">Featured talks</p><h2 className="sectionTitle">Hear the argument, then explore the evidence.</h2></div><Link className="textLink" href="/videos">Browse video collections →</Link></div>
        <div className="talkGrid">
          <div className="videoEmbed"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/CbtzXqFRGKI" title="Sanskrit, Indian Knowledge Systems and Scientific Inquiry" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
          <div className="talkCopy"><span className="label">ACADEMIC / INTERDISCIPLINARY</span><h3>Sanskrit, Indian Knowledge Systems & Scientific Inquiry</h3><p>Engaging classical knowledge respectfully while distinguishing textual interpretation, research hypotheses, and scientific evidence.</p><a className="textLink" href="/videos#academic">Academic collection →</a><br/><a className="textLink" href="/videos#tradition">Tradition & Dharma collection →</a><br/><a className="textLink" href="https://www.youtube.com/@IvyPandit" target="_blank" rel="noopener noreferrer">YouTube channel →</a></div>
        </div>
        <div className="talkGrid" style={{marginTop:'28px'}}>
          <div className="videoEmbed"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/vArP8eE0ROU" title="Sandhyopasana, samskara, brain development and modern science" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
          <div className="talkCopy"><span className="label">INTERDISCIPLINARY INQUIRY • HINDI</span><h3>Sandhyopāsanā, Saṃskāra & the Developing Brain</h3><p>A Hindi lecture examining Sandhyopāsanā as a multi-component daily practice involving prāṇāyāma, Gāyatrī-japa, attention, imagery, meaning, self-regulation, and routine — and asking which of these dimensions can be studied rigorously with modern neuroscience.</p><p>The lecture treats traditional meaning and scientific evidence as distinct, and argues for collaboration among Sanskrit scholars, practitioners, clinicians, psychologists, and neuroscientists.</p><Link className="textLink" href="/gayatri">Gāyatrī Study Hub →</Link><br/><Link className="textLink" href="/questions#nityakarma-sandhya-daily-practice">Related research question →</Link><br/><a className="textLink" href="https://youtu.be/vArP8eE0ROU" target="_blank" rel="noopener noreferrer">Watch on YouTube →</a></div>
        </div>
        <div className="talkGrid" style={{marginTop:'28px'}}>
          <div className="videoEmbed"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/fQ5gXu7pt1c" title="Sandhyopasana, contemplative practice and neuroscience — English lecture" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
          <div className="talkCopy"><span className="label">INTERDISCIPLINARY INQUIRY • ENGLISH</span><h3>Sandhyopāsanā, Contemplative Practice & Neuroscience</h3><p>An English-language exploration of Sandhyopāsanā as a structured daily practice bringing together mantra, breath, attention, reflection, imagery, regularity, and meaning.</p><p>The lecture asks how these components might be investigated through neuroscience and behavioral science while keeping traditional interpretation, scientific analogy, hypothesis, and established evidence clearly distinct.</p><Link className="textLink" href="/gayatri">Gāyatrī Study Hub →</Link><br/><Link className="textLink" href="/evidence">Related scientific evidence →</Link><br/><Link className="textLink" href="/questions#nityakarma-sandhya-daily-practice">Related research question →</Link><br/><a className="textLink" href="https://www.youtube.com/watch?v=fQ5gXu7pt1c" target="_blank" rel="noopener noreferrer">Watch on YouTube →</a></div>
        </div>
      </section>

      <section className="initiativeSection">
        <div>
          <p className="kicker">Lectures & speaking</p>
          <h2 className="sectionTitle">Bring IvyPandit to your institution or community.</h2>
          <p>Dr. Nishant K. Mishra offers live and virtual lectures at the intersection of Sanskrit, Indian Knowledge Systems, neuroscience, medicine, and scientific inquiry. Talks can be adapted for universities, Sanskrit institutions, temples, conferences, professional groups, youth programs, podcasts, and community audiences.</p>
          <div className="buttons" style={{justifyContent:'flex-start'}}><Link className="btn primary" href="/speaking">Explore Speaking Topics</Link><a className="btn secondary" href="mailto:nishant.mishra@ivypandit.com?subject=IvyPandit%20Lecture%20Invitation">Invite Dr. Mishra</a></div>
        </div>
        <div className="panel">
          <h3>Featured lecture themes</h3>
          <ul className={styles.themeList}>
            <li>Gāyatrī & the developing brain</li>
            <li>Pitṛpakṣa, memory & identity</li>
            <li>Avadhāna & attention</li>
            <li>Sandhyopāsanā & contemplative practice</li>
            <li>Sanskrit, bilingualism & neuroplasticity</li>
          </ul>
          <p className={styles.languageLine}><b>Languages:</b> English • Hindi • Sanskrit</p>
        </div>
      </section>

      <section className={`${styles.evidenceRefined} evidenceSection`}>
        <h2 className="sectionTitle">How IvyPandit approaches interdisciplinary questions</h2>
        <p>When a traditional idea is discussed alongside modern science, four questions are kept separate:</p>
        <div className="evidenceGrid">
          <div><b>Classical source</b><p>What does the text actually say?</p></div>
          <div><b>Traditional interpretation</b><p>How has the idea been understood within its own tradition?</p></div>
          <div><b>Research question</b><p>What new hypothesis or inquiry might the source inspire?</p></div>
          <div><b>Scientific evidence</b><p>What has actually been tested, measured, replicated, or remains uncertain?</p></div>
        </div>
      </section>

      <section className="missionBox"><h2>वसुधैव कुटुम्बकम्</h2><p>The world is one family. IvyPandit treats knowledge as humanity&apos;s shared inheritance and seeks dialogue across traditions, disciplines, cultures, and generations for the good of the wider world.</p></section>
    </main>
  </>;
}
