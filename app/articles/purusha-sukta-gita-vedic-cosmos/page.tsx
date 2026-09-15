import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'From Puruṣa to Viśvarūpa to Govinda | IvyPandit',
  description: 'A respectful Vedāntic reading of the Puruṣa Sūkta, Bhagavad Gītā Chapters 10–11, Bhaja Govindam, and the sacred forms through which the Infinite becomes approachable.',
  alternates: {
    canonical: 'https://www.ivypandit.com/articles/purusha-sukta-gita-vedic-cosmos',
    languages: {
      en: 'https://www.ivypandit.com/articles/purusha-sukta-gita-vedic-cosmos',
      hi: 'https://www.ivypandit.com/hi/articles/purusha-sukta-gita-vedic-cosmos',
    },
  },
};

const Verse = ({ children, source }: { children: React.ReactNode; source?: string }) => (
  <div className="sanskrit-box devanagari"><p>{children}</p>{source && <small>{source}</small>}</div>
);

export default function Article() {
  const articleLd = {
    '@context': 'https://schema.org', '@type': 'ScholarlyArticle',
    headline: 'From Puruṣa to Viśvarūpa to Govinda',
    alternativeHeadline: 'Why the Infinite Divine Is Worshipped Through Sacred Forms',
    description: metadata.description,
    author: { '@type': 'Person', name: 'Nishant K. Mishra', honorificSuffix: 'MD, PhD', url: 'https://www.ivypandit.com/about' },
    publisher: { '@type': 'Organization', name: 'IvyPandit', url: 'https://www.ivypandit.com' },
    datePublished: '2026-09-15', dateModified: '2026-09-15', inLanguage: 'en',
    mainEntityOfPage: 'https://www.ivypandit.com/articles/purusha-sukta-gita-vedic-cosmos',
    image: 'https://www.ivypandit.com/images/cosmic-purusha-vedic-universe.webp',
    keywords: ['Puruṣa Sūkta', 'Bhaja Govindam', 'Bhagavad Gītā Chapter 10', 'Bhagavad Gītā Chapter 11', 'Viśvarūpa', 'Govinda', 'Brahman', 'Vedānta'],
  };

  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
    <section className="pageHero">
      <div className="eyebrow">Vedānta • Puruṣa Sūkta • Gītā Chapters 10–11 • Bhaja Govindam</div>
      <h1>From Puruṣa to Viśvarūpa to Govinda</h1>
      <p>Why the Infinite Divine Is Worshipped Through Sacred Forms</p>
      <div className="buttons" style={{ justifyContent: 'center', marginTop: '20px' }}>
        <Link className="btn secondary" href="/hi/articles/purusha-sukta-gita-vedic-cosmos" lang="hi">हिन्दी में पढ़ें</Link>
      </div>
    </section>

    <section className="content"><article className="article-body">
      <p className="article-byline"><b>Nishant K. Mishra, MD, PhD</b> · Scholarly essay · Published September 15, 2026</p>
      <div className="callout"><b>Author’s note:</b> I am a physician-scientist and a student of Sanskrit, Vedānta, and Hindu knowledge traditions—not a religious guru or ācārya. This essay is a respectful interpretation, not an authoritative ruling on Hindu doctrine. Corrections, traditional perspectives, and scholarly feedback are warmly welcome.</div>

      <Verse>भज गोविन्दं भज गोविन्दं<br/>गोविन्दं भज मूढमते ।</Verse>
      <p><i>Bhaja Govindaṃ, bhaja Govindaṃ, Govindaṃ bhaja mūḍhamate.</i></p>
      <p>“Worship Govinda, worship Govinda, worship Govinda, O deluded mind.” These famous words traditionally attributed to Ādi Śaṅkarācārya raise a deceptively simple question: <b>Why Govinda?</b></p>
      <p>Did Śaṅkara mean that only Govinda—Śrī Kṛṣṇa or Viṣṇu—should be worshipped? If Advaita’s ultimate teaching concerns Brahman, why not say <i>bhaja Śivam</i>? Why not approach the Divine as Devī? And why does Hindu Dharma contain so many sacred forms if Reality is ultimately one?</p>
      <p>The answer becomes clearer when <i>Bhaja Govindam</i> is read alongside the <b>Puruṣa Sūkta</b> of the Ṛgveda and Chapters <b>10 and 11 of the Bhagavad Gītā</b>:</p>
      <div className="callout" style={{ textAlign: 'center' }}><b>Puruṣa → the all-encompassing Divine</b><br/><b>Viśvarūpa → the unimaginable cosmic Divine</b><br/><b>Govinda → the same Divine made approachable to the human heart</b></div>
      <p>This does not reduce Govinda, Śiva, or Devī to “mere symbols.” It helps us understand why the Infinite may be worshipped through intimate and sacred forms.</p>

      <h2>What is Brahman?</h2>
      <p>It is not quite appropriate to ask, “What is Brahman made of?” Whatever is made of something else depends upon something more fundamental. Brahman, by definition in Vedānta, is not one more object assembled from components. The deeper question is: <b>What does Supreme Reality encompass, and what—if anything—lies outside It?</b></p>
      <Verse source="Ṛgveda 10.90.1">सहस्रशीर्षा पुरुषः सहस्राक्षः सहस्रपात् ।<br/>स भूमिं विश्वतो वृत्वात्यतिष्ठद्दशाङ्गुलम् ॥</Verse>
      <p>Puruṣa is described as possessing “a thousand heads, a thousand eyes, and a thousand feet,” encompassing the earth from every direction and extending beyond it. “Thousand” here opens the imagination toward immeasurable multiplicity rather than imprisoning the vision in arithmetic.</p>
      <Verse source="Ṛgveda 10.90.2">पुरुष एवेदं सर्वं यद्भूतं यच्च भव्यम् ।<br/>उतामृतत्वस्येशानो यदन्नेनातिरोहति ॥</Verse>
      <p>Puruṣa indeed is all this—whatever has been and whatever is yet to be. Past, present, future, life, nature, and cosmos are embraced within this vision.</p>
      <Verse source="Ṛgveda 10.90.3">एतावानस्य महिमातो ज्यायांश्च पूरुषः ।<br/>पादोऽस्य विश्वा भूतानि त्रिपादस्यामृतं दिवि ॥</Verse>
      <p>Yet the manifested world does not exhaust the Divine. All beings constitute only a portion of Puruṣa’s greatness. The Supreme is immanent—present throughout existence—and transcendent—not exhausted by existence as we perceive it.</p>
      <blockquote><b>Everything is within the Divine, yet the Divine is greater than everything we can perceive.</b></blockquote>

      <figure style={{ margin: '34px auto', maxWidth: '900px' }}>
        <img src="/images/cosmic-purusha-vedic-universe.webp" alt="Conceptual cosmic visualization inspired by the Puruṣa Sūkta, with the manifested world held within a luminous Puruṣa" style={{ width: '100%', height: 'auto', borderRadius: '18px', display: 'block' }} />
        <figcaption style={{ marginTop: '12px', fontSize: '.92rem', lineHeight: 1.55, opacity: .82 }}><b>Conceptual visualization inspired by the cosmic imagery of the Puruṣa Sūkta (Ṛgveda 10.90).</b> This is an interpretive illustration, not a canonical representation of Brahman.</figcaption>
      </figure>

      <h2>The Bhagavad Gītā: seeing God throughout creation</h2>
      <p>In Chapter 10, <i>Vibhūti Yoga</i>, Śrī Kṛṣṇa makes this cosmic insight intensely personal.</p>
      <Verse source="Bhagavad Gītā 10.20">अहमात्मा गुडाकेश सर्वभूताशयस्थितः ।<br/>अहमादिश्च मध्यं च भूतानामन्त एव च ॥</Verse>
      <p>“I am the Self dwelling in the hearts of all beings. I am their beginning, their middle, and their end.” The Divine is not simply somewhere else; the Divine is also the innermost presence within life.</p>
      <Verse source="Bhagavad Gītā 10.41">यद्यद्विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा ।<br/>तत्तदेवावगच्छ त्वं मम तेजोंऽशसम्भवम् ॥</Verse>
      <p>Whatever possesses extraordinary splendour, beauty, greatness, or power may become a window toward the deeper source from which it arises.</p>
      <Verse source="Bhagavad Gītā 10.42">विष्टभ्याहमिदं कृत्स्नमेकांशेन स्थितो जगत् ॥</Verse>
      <p>“With one portion of Myself I sustain this entire universe.” Again we meet the intuition of the Puruṣa Sūkta: the universe exists within Divine greatness, but Divine greatness cannot be exhausted by the universe.</p>

      <h2>Arjuna asks to see the Infinite</h2>
      <p>Arjuna has heard about the cosmic Divine. Now he wants to see.</p>
      <Verse source="Bhagavad Gītā 11.8">न तु मां शक्यसे द्रष्टुमनेनैव स्वचक्षुषा ।<br/>दिव्यं ददामि ते चक्षुः पश्य मे योगमैश्वरम् ॥</Verse>
      <p>“You cannot behold Me with these ordinary eyes. I give you divine sight.” This is more subtle than simply saying “God is invisible.” The fullness of Divine Reality exceeds the capacity of ordinary human perception.</p>
      <p>Sañjaya then describes the entire universe, differentiated into countless forms, appearing together within the Divine form. Arjuna sees neither beginning, middle, nor end and addresses Kṛṣṇa as the primordial Divine and ancient Puruṣa whose infinite form pervades the universe (Gītā 11.13, 11.16, 11.38).</p>

      <h2>Can the human heart love a cosmic totality?</h2>
      <p>We may contemplate the source of galaxies, the ground of space and time, the consciousness within innumerable beings, and the Reality in whom the cosmos appears. But whom does a child call? Whom does a grieving mother pray to? Whose name does a devotee repeat? To whom can one say, “Protect me,” “Guide me,” or “I love You”?</p>
      <p>This is where the devotional richness of Sanātana Dharma becomes intelligible. The Infinite need not cease to be Infinite in order to become intimate. Thus Govinda, Śiva, Rāma, Kṛṣṇa, Nārāyaṇa, Devī, Durgā, Kālī, Lakṣmī, Sarasvatī, Gaṇapati, Sūrya, Skanda, and the many avatāras and manifestations through which Hindu traditions encounter the Divine.</p>
      <p>These should not be dismissed as imaginary substitutes. Within their respective traditions, they are <b>sacred and genuine modes of encountering Bhagavān</b>. The Infinite becomes approachable without becoming finite.</p>

      <h2>Avatāra: the Infinite becoming intimate</h2>
      <p>Kṛṣṇa stands before Arjuna in an approachable form. He speaks, counsels, and drives Arjuna’s chariot. Yet within that very Kṛṣṇa lies a cosmic reality so overwhelming that Arjuna requires <i>divya-cakṣus</i>—divine sight—to behold it.</p>
      <blockquote><b>The Infinite can become intimate without ceasing to be Infinite.</b></blockquote>
      <p>Yaśodā can love the child Kṛṣṇa; Arjuna can tremble before the Viśvarūpa. These reveal two dimensions of Divine experience: <b>mādhurya</b>—sweetness, intimacy, beauty, and love—and <b>aiśvarya</b>—majesty, power, sovereignty, and infinitude.</p>
      <p><b>Viśvarūpa tells us how immeasurable God is. Govinda tells us that the immeasurable can nevertheless be loved.</b></p>

      <h2>Now return to Bhaja Govindam</h2>
      <p>Śaṅkara does not begin by telling an ordinary seeker to direct the mind immediately toward a metaphysical Absolute beyond all attributes. He says: <b>भज गोविन्दम्—worship, remember, and love Govinda.</b></p>
      <p>The mind can form a relationship with Govinda: repeat His name, hear His līlā, offer food and flowers, surrender anxiety, and love. Through devotion the scattered mind becomes gathered, the ego softens, desires become disciplined, and the seeker becomes capable of deeper inquiry.</p>
      <p><i>Bhaja Govindam</i> itself moves into unmistakably Vedāntic language: <b>परे ब्रह्मणि</b>, Supreme Brahman; <b>ब्रह्मपदम्</b>, the state of Brahman; <b>कोऽहम्?</b>, “Who am I?”; and the call to see the Self in all and abandon the ignorance of division. Stanza numbering and some readings vary across received versions of the text.</p>
      <div className="callout" style={{ textAlign: 'center' }}><b>moha → bhakti → citta-śuddhi → vairāgya → viveka → ātma-vicāra → jñāna → mokṣa</b></div>

      <h2>Could Śaṅkara have said “Bhaja Śivam”?</h2>
      <p>Within the spiritual logic of Advaita, devotion to Śiva, Devī, or another śāstra-sanctioned form of Īśvara can certainly become genuine upāsanā. But that does not mean we should rewrite <i>Bhaja Govindam</i>. Govinda matters. The hymn invokes Govinda and uses names such as Murāri, Viṣṇu, and Śrīpati. Its Vaiṣṇava devotional fullness deserves respect.</p>
      <p>Likewise, a Śiva stotra should remain a Śiva stotra, and a Devī stotra should retain its Śākta fullness. <b>Unity does not require erasing difference.</b> A Vaiṣṇava, Śaiva, or Śākta may each love their iṣṭa-devatā wholeheartedly. The danger begins when exclusive love becomes exclusive contempt.</p>

      <h2>One Divine Reality, many doors</h2>
      <p>The Puruṣa Sūkta tells us that the Divine encompasses all this and exceeds it. Vibhūti Yoga teaches that Divine splendour may be recognized throughout creation. The Viśvarūpa reveals that Divine fullness overwhelms ordinary perception. Bhakti gives us a way to approach Infinity through relationship.</p>
      <blockquote><b>That which is greater than the cosmos can nevertheless enter the human heart.</b></blockquote>

      <h2>From Puruṣa to Viśvarūpa to Govinda</h2>
      <div className="callout" style={{ textAlign: 'center', lineHeight: 1.8 }}>
        <b>PURUṢA SŪKTA</b><br/>The Supreme encompasses all beings, time, and existence—and transcends the manifested cosmos.<br/>↓<br/>
        <b>BHAGAVAD GĪTĀ — CHAPTER 10</b><br/>The Divine dwells within beings, sustains the universe, and shines through innumerable manifestations.<br/>↓<br/>
        <b>BHAGAVAD GĪTĀ — CHAPTER 11</b><br/>The entire universe is beheld within the Viśvarūpa, beyond ordinary vision.<br/>↓<br/>
        <b>BHAKTI</b><br/>The Infinite becomes lovingly approachable through Govinda, Śiva, Devī, Rāma, and other sacred forms.<br/>↓<br/>
        <b>VEDĀNTA</b><br/>Through devotion, purification, discrimination, and Self-inquiry, the seeker approaches the Reality that was never absent.
      </div>

      <h2>What, then, does “Bhaja Govindam” mean?</h2>
      <p>It means exactly what it says: <b>Worship Govinda.</b> But it need not mean “hate every other path.” Do not lose life entirely in acquisition, mistake youth for permanence, sensual pleasure for ultimate happiness, intellectual achievement for realization, or religious appearance for awakening. Remember Bhagavān. Love. Surrender. Seek truth. Ask who you really are. Learn to recognize the sacred not only before the altar, but throughout existence.</p>
      <p>The Puruṣa Sūkta tells us how vast the Divine is. The Viśvarūpa shows how overwhelming that Reality is. <b>Govinda shows that the same Infinity can nevertheless be loved.</b></p>
      <Verse>भज गोविन्दम्।</Verse>

      <section className="featuredTalks" style={{ marginTop: '40px', marginBottom: '32px' }}><div className="talkGrid"><div className="videoEmbed"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/leQ_SDvEE3g?start=273" title="Puruṣa Sūkta, Bhagavad Gītā Chapters 10 and 11, and the Vedic vision of the cosmos" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div><div className="talkCopy"><span className="label">RELATED IVYPANDIT LECTURE</span><h3>Puruṣa Sūkta, Gītā Chapters 10–11, and the Vedic Vision of the Cosmos</h3><p>A companion lecture on the cosmic Puruṣa, Vibhūti Yoga, and Viśvarūpa Darśana.</p><a className="textLink" href="https://www.youtube.com/watch?v=leQ_SDvEE3g&t=273s" target="_blank" rel="noopener noreferrer">Watch on YouTube →</a></div></div></section>

      <h2>Sources and further study</h2>
      <ol>
        <li>Ṛgveda 10.90, Puruṣa Sūkta. <a className="textLink" href="https://vedicheritage.gov.in/hi/samhitas/rigveda/shakala-samhita/rigveda-shakala-samhita-mandal-10-sukta-090/" target="_blank" rel="noopener noreferrer">Vedic Heritage Portal →</a></li>
        <li>Bhagavad Gītā, Chapters 10 and 11.</li>
        <li><i>Bhaja Govindam</i>, traditionally attributed to Ādi Śaṅkarācārya; received versions vary in stanza order and supplementary verses.</li>
        <li>Jamison, S. W., and Brereton, J. P. <i>The Rigveda: The Earliest Religious Poetry of India.</i> Oxford University Press, 2014.</li>
      </ol>

      <div className="callout"><b>A final note of humility:</b> This synthesis is rooted primarily in the Puruṣa Sūkta, the Bhagavad Gītā, and an Advaita-oriented reading of Bhaja Govindam. Vaiṣṇava, Śaiva, Śākta, Dvaita, Viśiṣṭādvaita, and other Hindu traditions may understand some relationships differently. I offer the essay as a student, not a religious authority. Corrections from Sanskrit scholars, traditional ācāryas, practitioners, and readers are sincerely welcome.<br/><br/><b>परम्परा का सम्मान। जिज्ञासा का स्वागत। सत्य की खोज।</b></div>
      <div className="buttons" style={{ justifyContent: 'flex-start' }}><Link className="btn primary" href="/hi/articles/purusha-sukta-gita-vedic-cosmos">हिन्दी में पढ़ें</Link><Link className="btn secondary" href="/articles">More Articles</Link><Link className="btn secondary" href="/shastra-study">Śāstra Library</Link><a className="btn secondary" href="mailto:nishant.mishra@ivypandit.com?subject=IvyPandit%20scholarly%20feedback">Offer Scholarly Feedback</a></div>
    </article></section>
  </main>;
}
