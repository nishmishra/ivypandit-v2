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
          <Link className="btn primary" href="/iks">Explore IKS</Link>
          <Link className="btn secondary" href="/research">Explore Research</Link>
          <Link className="btn secondary" href="/speaking">Invite Dr. Mishra to Speak</Link>
        </div>
      </div>
    </section>

    <main className="main">
      <section className={styles.identityCard}>
        <p className="kicker">Founder & public scholar</p>
        <h2>Nishant K. Mishra, MD, PhD</h2>
        <p>Physician-scientist • Neurologist • Neuroscience researcher • Sanskrit & Indian Knowledge Systems scholar</p>
        <p className={styles.identityLine}>Public scholarship connecting brain science, Sanskrit, and Indian Knowledge Systems with intellectual rigor.</p>
      </section>

      <section className="manifesto">
        <p className="kicker">The IvyPandit approach</p>
        <h2 className="sectionTitle">Tradition deserves understanding before judgment.<br/>Scientific claims deserve evidence before acceptance.</h2>
        <p>IvyPandit studies Sanskrit and Indian Knowledge Systems in their historical and intellectual contexts while asking new questions through neuroscience, medicine, cognitive science, behavioral science, and other modern disciplines.</p>
        <p>The aim is neither to declare that ancient texts anticipated modern science nor to dismiss traditional knowledge because it is old. It is to understand carefully, ask better questions, and distinguish evidence from interpretation.</p>
      </section>

      <section className={`${styles.gatewayRefined} gatewayGrid`} aria-label="Explore IvyPandit">
        <Link className="gatewayCard" href="/iks"><span>01</span><h3>IKS Hub</h3><p>A curated gateway to scholars, institutions, resources, learning opportunities, and the IvyPandit Knowledge Repository.</p><strong>Explore the hub →</strong></Link>
        <Link className="gatewayCard" href="/shastra-study"><span>02</span><h3>Śāstra & Sanskrit</h3><p>Texts, recitations, commentaries, study pathways, and direct engagement with classical knowledge traditions.</p><strong>Enter the library →</strong></Link>
        <Link className="gatewayCard" href="/research"><span>03</span><h3>Science & Research</h3><p>Neuroscience, cognition, brain health, cultural expertise, publications, methods, and research questions.</p><strong>View research →</strong></Link>
        <Link className="gatewayCard" href="/videos"><span>04</span><h3>Learn & Watch</h3><p>Curated academic, interdisciplinary, and traditional lecture collections, clearly distinguished by purpose.</p><strong>Explore video collections →</strong></Link>
      </section>

      <section className={styles.vedicSection}>
        <div className={styles.vedicHeader}>
          <p className="kicker">Vedic visions of creation</p>
          <h2>Ṛta, Satya, Puruṣa & the Cosmos</h2>
          <p>Vedic poetry asks enduring questions about order, truth, creation, and the relationship between the cosmos and the divine. IvyPandit presents these passages as scriptural and philosophical visions that can inspire inquiry without being treated as substitutes for empirical science.</p>
        </div>

        <div className={styles.vedicGrid}>
          <div className={styles.vedicText}>
            <div className={styles.verseBlock}>
              <div className={styles.sourceLabel}>Ṛgveda 10.190.1 • Ṛta and cosmic emergence</div>
              <p className={styles.devanagari}>ऋतं च सत्यं चाभीद्धात्तपसोऽध्यजायत ।<br/>ततो रात्र्यजायत ततः समुद्रो अर्णवः ॥</p>
              <p className={styles.transliteration}>ṛtaṃ ca satyaṃ cābhīddhāt tapaso ’dhyajāyata | tato rātry ajāyata tataḥ samudro arṇavaḥ ||</p>
              <p className={styles.interpretation}>The hymn places <i>ṛta</i> (cosmic order), <i>satya</i> (truth), and <i>tapas</i> within a poetic account of cosmic emergence. For IvyPandit, the scientific value lies not in claiming a modern cosmology hidden in the verse, but in asking how ancient cultures conceptualized order, causation, emergence, and reality.</p>
            </div>

            <div className={styles.verseBlock}>
              <div className={styles.sourceLabel}>Puruṣa Sūkta • Ṛgveda 10.90.2</div>
              <p className={styles.devanagari}>पुरुष एवेदं सर्वं यद्भूतं यच्च भव्यम् ।<br/>उतामृतत्वस्येशानो यदन्नेनातिरोहति ॥</p>
              <p className={styles.transliteration}>puruṣa evedaṃ sarvaṃ yad bhūtaṃ yac ca bhavyam | utāmṛtatvasyeśāno yad annenātirohati ||</p>
              <p className={styles.interpretation}>The Puruṣa is presented as encompassing all that has been and all that will be. Later Vaiṣṇava traditions identify the cosmic Puruṣa with Nārāyaṇa/Viṣṇu. In this theological vision, the divine is not merely one object inside the universe, but the source, ground, and pervasive presence of <i>jagat</i>—creation itself.</p>
              <p style={{marginTop:'12px'}}><a className="textLink" href="https://vedicheritage.gov.in/hi/samhitas/rigveda/shakala-samhita/rigveda-shakala-samhita-mandal-10-sukta-090/" target="_blank" rel="noopener noreferrer">Read the Puruṣa Sūkta at the Vedic Heritage Portal →</a></p>
            </div>
          </div>

          <div className={styles.vedicArt}>
            <img src="/images/cosmic-vishnu-purusha.svg" alt="Symbolic cosmic Puruṣa and Viṣṇu-inspired figure surrounded by galaxies, planets, living forms, and scientific motifs" />
            <div className={styles.artOverlay}>
              <b>The divine and the fabric of creation</b>
              <span>A symbolic visualization of the Hindu idea that the sacred is not external to creation alone, but also its source, support, and indwelling presence. The illustration is interpretive, not a scientific diagram.</span>
            </div>
          </div>
        </div>

        <div className={styles.methodNote}><b>Methodological distinction:</b> scriptural meaning, traditional theology, philosophical interpretation, research questions, and empirical scientific evidence are different categories. IvyPandit keeps them distinct while allowing each to enrich the questions we ask.</div>
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
        <div className="sectionHeaderRow"><div><p className="kicker">Featured talk</p><h2 className="sectionTitle">Hear the argument, then explore the evidence.</h2></div><Link className="textLink" href="/videos">Browse video collections →</Link></div>
        <div className="talkGrid">
          <div className="videoEmbed"><iframe src="https://www.youtube-nocookie.com/embed/CbtzXqFRGKI" title="Featured IvyPandit talk" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
          <div className="talkCopy"><span className="label">ACADEMIC / INTERDISCIPLINARY</span><h3>Sanskrit, Indian Knowledge Systems & Scientific Inquiry</h3><p>Engaging classical knowledge respectfully while distinguishing textual interpretation, research hypotheses, and scientific evidence.</p><a className="textLink" href="/videos#academic">Academic collection →</a><br/><a className="textLink" href="/videos#tradition">Tradition & Dharma collection →</a><br/><a className="textLink" href="https://www.youtube.com/@IvyPandit" target="_blank" rel="noopener noreferrer">YouTube channel →</a></div>
        </div>
      </section>

      <section className="initiativeSection">
        <div>
          <p className="kicker">Invite a speaker</p>
          <h2 className="sectionTitle">Invite Dr. Nishant K. Mishra to speak.</h2>
          <p>Live or virtual talks can be adapted for universities, Sanskrit institutions, temples, conferences, professional groups, youth programs, podcasts, and community audiences.</p>
          <div className="buttons" style={{justifyContent:'flex-start'}}><Link className="btn primary" href="/speaking">View Speaking Topics</Link><a className="btn secondary" href="mailto:nishant.mishra@ivypandit.com?cc=nishmishra@gmail.com&subject=IvyPandit%20Lecture%20Invitation">Email an Invitation</a></div>
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
