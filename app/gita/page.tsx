export default function Page() {
  return (
    <main>
      <section className="final-page-banner">
        <img src="/images/cultural-page-banner.jpg" alt="Ivy Pandit banner" />
      </section>

      <section className="page-hero">
        <h1>Bhagavad Gita Knowledge Center</h1>
        <p>Cognitive resilience, dharma, attention, and action under stress.</p>
      </section>
      <section className="section copy narrow">
        <h2>English</h2>
        <p>Explore the Bhagavad Gita as a profound text on crisis, clarity, disciplined action, emotional regulation, and self-knowledge.</p>
        <h2>हिन्दी</h2>
        <p className="devanagari">भगवद्गीता संकट, स्पष्टता, कर्तव्य, ध्यान, भावनात्मक संतुलन और आत्मबोध का अद्भुत ग्रन्थ है।</p>
        <h2>संस्कृतम्</h2>
        <p className="devanagari">भगवद्गीता संकटे धैर्यम्, कर्तव्ये निष्ठाम्, मनसः संयमम्, आत्मबोधं च उपदिशति।</p>
      </section>
      <section className="section">
        <div className="article-grid">
          <div className="article-card"><span className="badge">Arjuna’s Crisis</span><h3>Stress & Decision Paralysis</h3><p>A framework for understanding cognitive overload and moral conflict.</p></div>
<div className="article-card"><span className="badge">Krishna’s Teaching</span><h3>Attention & Action</h3><p>A vision of disciplined action rooted in clarity and dharma.</p></div>
<div className="article-card"><span className="badge">Resilience</span><h3>Equanimity</h3><p>Psychological steadiness under uncertainty.</p></div>
        </div>
      </section>
    </main>
  );
}
