import Link from 'next/link';
import styles from './research.module.css';

export default function Research(){
  return <>
    <section className={styles.researchHero}>
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <div className={styles.heroEyebrow}>Research & Scientific Work</div>
          <h1>Scientific Work</h1>
          <p className={styles.heroLead}>Research across stroke, reperfusion, neuroimaging, post-stroke epilepsy, biomarkers, clinical trials, cognition, language, neuroplasticity, and emerging cultural neuroscience.</p>
          <div className={styles.heroTags}>
            <span>Stroke</span><span>Perfusion Imaging</span><span>Post-Stroke Epilepsy</span><span>Precision Neuroscience</span>
          </div>
          <div className={styles.languageLinks}>
            <Link href="/hi/research">हिन्दी</Link>
            <Link href="/sa/research">संस्कृतम्</Link>
          </div>
        </div>
        <div className={styles.heroArt}>
          <img src="/images/research-brain-stroke-hero.svg" alt="Scientific illustration of cerebral vasculature, brain perfusion imaging, and stroke research" />
          <p className={styles.heroCaption}>Cerebral vasculature · perfusion imaging · tissue physiology</p>
        </div>
      </div>
    </section>

    <div className={styles.scienceBar} aria-label="Research domains">
      <div><b>Clinical Neuroscience</b><span>Stroke treatment & outcomes</span></div>
      <div><b>Neuroimaging</b><span>Perfusion, mismatch & tissue viability</span></div>
      <div><b>Brain Networks</b><span>Post-stroke epilepsy & recovery</span></div>
      <div><b>Precision Science</b><span>Biomarkers, genetics & data</span></div>
    </div>

    <main className={`content ${styles.researchContent}`}>
      <section className="manifesto">
        <h2 className="sectionTitle">From acute brain injury to long-term recovery, prediction, and human cognition.</h2>
        <p>My scientific work has developed around a recurring question: how can a better understanding of the brain improve treatment, recovery, and human well-being? Over time, that work has moved from acute stroke and reperfusion to imaging-guided treatment, neurological outcomes, post-stroke epilepsy, biomarkers and precision neuroscience, while also expanding toward language, cognition, bilingualism, and neuroplasticity.</p>
        <p>These are not separate interests. They are different ways of studying how the brain responds to injury, treatment, learning, repeated practice, language, attention, and experience.</p>
      </section>

      <div className={`${styles.bandWrap} researchBands`}>
        <section className="panel">
          <h2>Stroke, Reperfusion & Neuroimaging</h2>
          <p>Acute ischemic stroke, thrombolysis, endovascular treatment, perfusion and mismatch imaging, tissue viability, patient selection, clinical outcomes, and the relationship between time, tissue, blood flow, and recovery.</p>
        </section>
        <section className="panel">
          <h2>Post-Stroke Epilepsy & Brain Networks</h2>
          <p>Seizures after stroke, epileptogenesis, outcome prediction, biomarkers, genetics, proteomics, treatment questions, and international collaborative research linking vascular neurology and epilepsy.</p>
        </section>
        <section className="panel">
          <h2>Cognition, Language & Neuroplasticity</h2>
          <p>Bilingualism, multilingual experience, attention, memory, cognitive reserve, Sanskrit learning and recitation, long-duration expertise, contemplative practice, and scientifically testable questions arising from language, learning, expertise, and cultural practices.</p>
        </section>
      </div>

      <section className={styles.publicationSection}>
        <div className={styles.publicationIntro}>
          <p className="kicker">Selected scientific contributions</p>
          <h2 className="sectionTitle">Signature contributions</h2>
          <p>These studies illustrate several of the scientific questions that have shaped my work, from imaging-guided reperfusion to post-stroke epilepsy and long-term neurological outcomes.</p>
        </div>

        <div className={styles.publicationGrid}>
          <section className={styles.publicationCard}>
            <div className={styles.cardTopline}>
              <div className={styles.journal}>JAMA Neurology · 2023</div>
              <span className={styles.roleBadge}>Senior & Corresponding Author</span>
            </div>
            <h2>Outcomes in patients with post-stroke seizures</h2>
            <p>This international collaborative study examined the relationship between seizures after stroke and subsequent clinical outcomes, bringing together investigators across stroke and epilepsy.</p>
            <a className="textLink" href="https://doi.org/10.1001/jamaneurol.2023.3240" target="_blank" rel="noopener noreferrer">View paper →</a>
          </section>

          <section className={styles.publicationCard}>
            <div className={styles.cardTopline}>
              <div className={styles.journal}>Neurology · 2024</div>
              <span className={styles.roleBadge}>International Review</span>
            </div>
            <h2>Pathophysiology, diagnosis, prognosis, and prevention of post-stroke epilepsy</h2>
            <p>This international review connected vascular neurology and epileptology to synthesize current understanding of why epilepsy develops after stroke, how risk can be recognized, and how future preventive strategies might be developed.</p>
            <a className="textLink" href="https://doi.org/10.1212/WNL.0000000000209450" target="_blank" rel="noopener noreferrer">View paper →</a>
          </section>

          <section className={styles.publicationCard}>
            <div className={styles.journal}>Stroke · 2010</div>
            <h2>Mismatch-Based Delayed Thrombolysis</h2>
            <p>This work addressed a question that became central to modern stroke medicine: can imaging identify patients with salvageable brain tissue even when conventional time windows have passed? It helped frame the move from clock time alone toward biologically informed treatment selection.</p>
            <a className="textLink" href="https://doi.org/10.1161/STROKEAHA.109.566869" target="_blank" rel="noopener noreferrer">View paper →</a>
          </section>

          <section className={styles.publicationCard}>
            <div className={styles.journal}>The BMJ · 2010</div>
            <h2>Thrombolysis in very elderly people</h2>
            <p>At a time when advanced age frequently limited access to thrombolytic treatment, this international analysis examined outcomes in very elderly patients and contributed evidence relevant to reconsidering age-based treatment restrictions.</p>
            <a className="textLink" href="https://doi.org/10.1136/bmj.c6046" target="_blank" rel="noopener noreferrer">View paper →</a>
          </section>
        </div>
      </section>

      <section className="panel" style={{marginBottom:'28px'}} id="post-stroke-epilepsy-media">
        <p className="kicker">External expert commentary • Neurology Advisor • AES 2025</p>
        <h2>Video: Post-Stroke Epilepsy — AES 2025 Expert Insights</h2>
        <p>This external Neurology Advisor feature is included as professional scientific communication about post-stroke epilepsy. It is presented separately from the peer-reviewed publication record so that media commentary and scientific evidence remain clearly distinguished.</p>
        <a className="textLink" href="https://www.neurologyadvisor.com/reports/video-post-stroke-epilepsy-aes-2025-expert-insights/" target="_blank" rel="noopener noreferrer">View the Neurology Advisor feature →</a>
      </section>

      <section className={`panel ${styles.trajectory}`}>
        <p className="kicker">Scientific trajectory</p>
        <h2>Questions that connect the work</h2>
        <div className="flowLine"><span>Who should receive treatment?</span><b>→</b><span>What tissue can still be saved?</span><b>→</b><span>How should recovery be measured?</span><b>→</b><span>Who develops chronic complications?</span><b>→</b><span>Can we predict or prevent them?</span><b>→</b><span>How can brain function and resilience be understood beyond disease?</span></div>
      </section>

      <section className={styles.publicationSection}>
        <div className={styles.publicationIntro}>
          <p className="kicker">Earlier and additional contributions</p>
          <h2 className="sectionTitle">A broader scientific record</h2>
          <p>Additional studies show the progression of questions around treatment eligibility, patient-centered outcomes, hemorrhage measurement, and imaging-based selection.</p>
        </div>

        <div className={styles.publicationGrid}>
          <section className={styles.publicationCard}>
            <div className={styles.journal}>Diabetes Care · 2010</div>
            <h2>Prior stroke, diabetes, and thrombolysis</h2>
            <p>Patients with both a previous stroke and diabetes had historically been treated cautiously, and in some settings excluded, from intravenous thrombolysis. This study examined whether that exclusion was supported by observed clinical outcomes.</p>
            <a className="textLink" href="https://doi.org/10.2337/dc10-1125" target="_blank" rel="noopener noreferrer">View paper →</a>
          </section>

          <section className={styles.publicationCard}>
            <div className={styles.journal}>Neurology · 2011</div>
            <h2>Thrombolysis after prior stroke and diabetes</h2>
            <p>Using a large international dataset, this study further examined an important treatment-exclusion question and added evidence relevant to thrombolysis in a population traditionally considered at increased risk.</p>
            <a className="textLink" href="https://doi.org/10.1212/WNL.0b013e318238ee42" target="_blank" rel="noopener noreferrer">View paper →</a>
          </section>

          <section className={styles.publicationCard}>
            <div className={styles.journal}>Stroke · 2011</div>
            <h2>Home time as a meaningful stroke outcome</h2>
            <p>Home time—the number of days a patient is alive and outside institutional care—offers an intuitive, patient-centered measure of recovery. This study examined home time in patients receiving thrombolytic therapy.</p>
            <a className="textLink" href="https://doi.org/10.1161/STROKEAHA.110.601302" target="_blank" rel="noopener noreferrer">View paper →</a>
          </section>

          <section className={styles.publicationCard}>
            <div className={styles.journal}>Stroke · 2013</div>
            <h2>Modified Graeb Score</h2>
            <p>This collaborative work developed and evaluated an enhanced method for quantifying intraventricular hemorrhage and relating hemorrhage burden to functional outcome.</p>
            <a className="textLink" href="https://doi.org/10.1161/STROKEAHA.112.670653" target="_blank" rel="noopener noreferrer">View paper →</a>
          </section>

          <section className={styles.publicationCard}>
            <div className={styles.journal}>Stroke · 2014</div>
            <h2>MRI mismatch and endovascular patient selection</h2>
            <p>This study continued the investigation of how advanced imaging might distinguish patients more likely to benefit from endovascular reperfusion therapy.</p>
            <a className="textLink" href="https://doi.org/10.1161/STROKEAHA.114.004772" target="_blank" rel="noopener noreferrer">View paper →</a>
          </section>
        </div>
      </section>

      <section className="twoCol">
        <div className="panel" id="stroke-program-india">
          <h2>Brain Health, Stroke & Collaborative Research in India</h2>
          <p>A longstanding interest in India&apos;s brain-health infrastructure includes the article <i>Stroke Program for India</i> and a broader effort to develop multicenter registries, trials, imaging collaborations, data platforms, training programs, and locally relevant approaches to prevention and treatment.</p>
          <a className="textLink" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2859584/" target="_blank" rel="noopener noreferrer">Read: Stroke Program for India →</a>
        </div>
        <div className="panel">
          <h2>Biomarkers, Proteomics & Data Science</h2>
          <p>Neurological diseases are biologically heterogeneous. Current work increasingly integrates clinical data with imaging, biomarkers, proteomics, genetics, and computational approaches to improve biological understanding, risk prediction, and precision neurological care.</p>
        </div>
      </section>

      <section className="panel">
        <p className="kicker">Emerging research</p>
        <h2>Language, Expertise & Cultural Neuroscience</h2>
        <p>Indian intellectual and contemplative traditions contain highly structured practices involving memory, attention, recitation, visualization, breath regulation, language learning, and sustained concentration. These traditions should neither be dismissed because they are old nor declared scientifically proven merely because they are traditional.</p>
        <p>They can, however, generate serious research questions: how does sustained multilingual experience influence brain networks? What are the cognitive demands of Avadhāna? Can long-duration recitation or contemplative practice produce measurable changes in attention, memory, physiology, or neuroplasticity?</p>
        <p><b>Traditional observation → Research question → Testable hypothesis → Scientific investigation → Evidence → Replication</b></p>
        <Link className="textLink" href="/questions">Explore research questions →</Link>
      </section>

      <section className="panel">
        <h2>Explore the scientific record</h2>
        <p>For the complete publication record and current research activity, use the links below.</p>
        <div className="buttons" style={{justifyContent:'flex-start'}}>
          <a className="btn primary" href="https://scholar.google.com/citations?user=1n2JUc8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
          <Link className="btn secondary" href="/publications">Selected Publications</Link>
          <Link className="btn secondary" href="/collaborate">Collaborate</Link>
        </div>
      </section>
    </main>
  </>;
}
