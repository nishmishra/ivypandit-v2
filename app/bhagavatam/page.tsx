export default function Page() {
  return (
    <main>
      <section className="final-page-banner">
        <img src="/images/cultural-page-banner.jpg" alt="Ivy Pandit banner" />
      </section>

      <section className="page-hero">
        <h1>Bhagavatam Knowledge Center</h1>
        <p>Devotion, consciousness, memory, narrative wisdom, and spiritual psychology.</p>
      </section>
      <section className="section copy narrow">
        <h2>English</h2>
        <p>The Bhagavatam offers a rich narrative tradition for exploring devotion, meaning, memory, surrender, and consciousness.</p>
        <h2>हिन्दी</h2>
        <p className="devanagari">भागवतम् भक्ति, अर्थ, स्मृति, समर्पण और चेतना को कथाओं के माध्यम से समझने का अद्भुत मार्ग देता है।</p>
        <h2>संस्कृतम्</h2>
        <p className="devanagari">भागवतम् भक्तेः, स्मृतेः, समर्पणस्य, चेतनायाः च कथारूपेण महान् उपदेशं ददाति।</p>
      </section>
      <section className="section">
        <div className="article-grid">
          <div className="article-card"><span className="badge">Bhakti</span><h3>Emotion & Meaning</h3><p>Devotion as a disciplined orientation of mind and heart.</p></div>
<div className="article-card"><span className="badge">Narrative</span><h3>Memory & Identity</h3><p>Stories shape values, attention, and self-understanding.</p></div>
<div className="article-card"><span className="badge">Consciousness</span><h3>Surrender & Insight</h3><p>Spiritual psychology through sacred narrative.</p></div>
        </div>
      </section>
    </main>
  );
}
