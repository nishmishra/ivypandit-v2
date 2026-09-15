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
          <Link className="btn secondary" href="/evidence">Examine Evidence</Link>
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

      <section className={`${styles.gatewayRefined} gatewayGrid`} aria-label="Explore IvyPandit">
        <Link className="gatewayCard" href="/iks"><span>01</span><h3>IKS Hub</h3><p>A curated gateway to scholars, institutions, resources, learning opportunities, and the IvyPandit Knowledge Repository.</p><strong>Explore the hub →</strong></Link>
        <Link className="gatewayCard" href="/shastra-study"><span>02</span><h3>Śāstra & Sanskrit</h3><p>Texts, recitations, commentaries, study pathways, and direct engagement with classical knowledge traditions.</p><strong>Enter the library →</strong></Link>
        <Link className="gatewayCard" href="/research"><span>03</span><h3>Science & Research</h3><p>Neuroscience, cognition, brain health, cultural expertise, publications, methods, and research questions.</p><strong>View research →</strong></Link>
        <Link className="gatewayCard" href="/videos"><span>04</span><h3>Learn & Watch</h3><p>Curated academic, interdisciplinary, and traditional lecture collections, clearly distinguished by purpose.</p><strong>Explore video collections →</strong></Link>
      </section>

      <section className={styles.vedicSection}>
        <div className={styles.vedicHeader}>
          <p className="kicker">Vedic visions of creation</p>
          <h2>Ṛta, Satya, Puruṣa, and the Cosmos</h2>
          <p>Vedic poetry asks enduring questions about order, truth, creation, and the relationship between the cosmos and the divine. These verses are presented here as scriptural and philosophical visions that can deepen reflection and inspire inquiry without being treated as substitutes for empirical science.</p>
        </div>

        <div className={styles.verseGrid}>
          <article className={styles.verseCard}>
            <div className={styles.sourceLabel}>Ṛgveda 10.190.1 • Ṛta and cosmic emergence</div>
            <p className={styles.devanagari}>ऋतं च सत्यं चाभीद्धात्तपसोऽध्यजायत ।<br/>ततो रात्र्यजायत ततः समुद्रो अर्णवः ॥</p>
            <p className={styles.transliteration}>ṛtaṃ ca satyaṃ cābhīddhāt tapaso ’dhyajāyata | tato rātry ajāyata tataḥ samudro arṇavaḥ ||</p>
            <p className={styles.interpretation}>The hymn places <i>ṛta</i> (cosmic order), <i>satya</i> (truth), and <i>tapas</i> within a poetic account of cosmic emergence. The value of the verse here is not a claim that modern cosmology is hidden in Vedic poetry, but the invitation to examine how human beings have conceptualized order, causation, emergence, and reality.</p>
            <p className={styles.verseLink}><a className="textLink" href="https://vedicheritage.gov.in/samhitas/rigveda/" target="_blank" rel="noopener noreferrer">Explore the Ṛgveda at the Vedic Heritage Portal →</a></p>
          </article>

          <article className={styles.verseCard}>
            <div className={styles.sourceLabel}>Puruṣa Sūkta • Ṛgveda 10.90.2</div>
            <p className={styles.devanagari}>पुरुष एवेदं सर्वं यद्भूतं यच्च भव्यम् ।<br/>उतामृतत्वस्येशानो यदन्नेनातिरोहति ॥</p>
            <p className={styles.transliteration}>puruṣa evedaṃ sarvaṃ yad bhūtaṃ yac ca bhavyam | utāmṛtatvasyeśāno yad annenātirohati ||</p>
            <p className={styles.interpretation}>The Puruṣa is presented as encompassing all that has been and all that will be. In later Vaiṣṇava traditions, the cosmic Puruṣa is identified with Nārāyaṇa/Viṣṇu. This is a theological vision in which the divine is not merely an object within the universe, but its source, ground, and pervasive presence.</p>
            <p className={styles.verseLink}><a className="textLink" href="https://vedicheritage.gov.in/hi/samhitas/rigveda/shakala-samhita/rigveda-shakala-samhita-mandal-10-sukta-090/" target="_blank" rel="noopener noreferrer">Read the Puruṣa Sūkta at the Vedic Heritage Portal →</a></p>
          </article>
        </div>

        <div className={styles.theologyBand}>
          <p className="kicker">A theological vision of creation</p>
          <h3>The divine as source, support, and indwelling presence</h3>
          <p>Hindu traditions offer multiple ways of speaking about the relation between the divine and <i>jagat</i>. The Puruṣa Sūkta provides one powerful cosmic vision: creation is understood in relation to a reality that exceeds any single created object while also pervading the whole. IvyPandit approaches this as theology and philosophy first, and then asks what questions such ideas may inspire for the study of mind, meaning, human experience, and the history of ideas.</p>
          <p><a className="textLink" href="https://www.youtube.com/watch?v=leQ_SDvEE3g&t=273s" target="_blank" rel="noopener noreferrer">Watch: Puruṣa Sūkta, Bhagavad Gītā Chapters 10–11 & the Vedic vision of the cosmos →</a></p>
        </div>

        <div className={styles.methodNote}><b>Methodological note:</b> scriptural meaning, traditional theology, philosophical interpretation, research questions, and empirical scientific evidence are distinct categories. IvyPandit keeps them separate while allowing each to sharpen the questions we ask.<br/><br/><Link className="textLink" href="/articles/purusha-sukta-gita-vedic-cosmos">Read: From Puruṣa to Viśvarūpa to Govinda →</Link></div>
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
          <p className="kicker">Invite a speaker</p>
          <h2 className="sectionTitle">Invite Dr. Nishant K. Mishra to speak.</h2>
          <p>Live or virtual talks can be adapted for universities, Sanskrit institutions, temples, conferences, professional groups, youth programs, podcasts, and community audiences.</p>
          <div className="buttons" style={{justifyContent:'flex-start'}}><Link className="btn primary" href="/speaking">View Speaking Topics</Link><a className="btn secondary" href="mailto:nishant.mishra@ivypandit.com?subject=IvyPandit%20Lecture%20Invitation">Email an Invitation</a></div>
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
