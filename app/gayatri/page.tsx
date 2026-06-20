export default function Page() {
  return (
    <main>
      <section className="final-page-banner">
        <img src="/images/cultural-page-banner.jpg" alt="Ivy Pandit banner" />
      </section>

      <section className="page-hero">
        <h1>Gayatri & Neuroplasticity Center</h1>
        <p>Mantra, attention, sound, meaning, and the developing brain.</p>
      </section>
      <section className="section copy narrow">
        <h2>English</h2>
        <p>Gayatri practice can be explored through attention, rhythm, breath, meaning, repetition, memory, and neuroplasticity.</p>
        <h2>हिन्दी</h2>
        <p className="devanagari">गायत्री साधना को ध्यान, लय, श्वास, अर्थ, पुनरावृत्ति, स्मृति और न्यूरोप्लास्टिसिटी की दृष्टि से समझा जा सकता है।</p>
        <h2>संस्कृतम्</h2>
        <p className="devanagari">गायत्री-साधना ध्यानस्य, लयस्य, श्वासस्य, अर्थस्य, स्मृतेः, न्यूरोप्लास्टिसिटी-तत्त्वस्य च अध्ययनाय योग्या।</p>
      </section>
      <section className="section">
        <div className="article-grid">
          <div className="article-card"><span className="badge">Attention</span><h3>Sustained Focus</h3><p>How repeated meaningful recitation may train attention.</p></div>
<div className="article-card"><span className="badge">Sound</span><h3>Rhythm & Breath</h3><p>The physiology of chanting and regulated breathing.</p></div>
<div className="article-card"><span className="badge">Meaning</span><h3>धियो यो नः प्रचोदयात्</h3><p>The aspiration toward awakened intelligence.</p></div>
        </div>
      </section>
    </main>
  );
}
