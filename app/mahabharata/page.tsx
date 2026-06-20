export default function Page() {
  return (
    <main>
      <section className="final-page-banner">
        <img src="/images/cultural-page-banner.jpg" alt="Ivy Pandit banner" />
      </section>

      <section className="page-hero">
        <h1>Mahabharata Knowledge Center</h1>
        <p>Leadership, conflict, moral complexity, and decision-making.</p>
      </section>
      <section className="section copy narrow">
        <h2>English</h2>
        <p>The Mahabharata is a vast laboratory of human nature, leadership, family conflict, ethics, loyalty, and power.</p>
        <h2>हिन्दी</h2>
        <p className="devanagari">महाभारत मानव-स्वभाव, नेतृत्व, पारिवारिक संघर्ष, नीति, निष्ठा और शक्ति का विशाल अध्ययन है।</p>
        <h2>संस्कृतम्</h2>
        <p className="devanagari">महाभारतम् मानवस्वभावस्य, नेतृत्वस्य, धर्मसंकटस्य, नीतिशास्त्रस्य च महान् कोशः।</p>
      </section>
      <section className="section">
        <div className="article-grid">
          <div className="article-card"><span className="badge">Leadership</span><h3>Yudhishthira & Vidura</h3><p>Ethical judgment and counsel in complex systems.</p></div>
<div className="article-card"><span className="badge">Conflict</span><h3>Duryodhana & Karna</h3><p>Resentment, loyalty, ambition, and identity.</p></div>
<div className="article-card"><span className="badge">Dharma</span><h3>Bhishma & Krishna</h3><p>Duty, wisdom, and difficult choices.</p></div>
        </div>
      </section>
    </main>
  );
}
