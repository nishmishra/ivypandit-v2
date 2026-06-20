export default function Page() {
  return (
    <main>
      <section className="final-page-banner">
        <img src="/images/cultural-page-banner.jpg" alt="Ivy Pandit banner" />
      </section>

      <section className="page-hero">
        <h1>Garbhadhana & Epigenetics Center</h1>
        <p>Preconception health, parental preparation, and future generations.</p>
      </section>
      <section className="section copy narrow">
        <h2>English</h2>
        <p>Garbhadhana Samskara can be discussed through parental health, stress, nutrition, environment, and epigenetic inquiry.</p>
        <h2>हिन्दी</h2>
        <p className="devanagari">गर्भाधान संस्कार को माता-पिता के स्वास्थ्य, तनाव, आहार, वातावरण और epigenetics के संदर्भ में समझा जा सकता है।</p>
        <h2>संस्कृतम्</h2>
        <p className="devanagari">गर्भाधान-संस्कारः मातृ-पितृ-स्वास्थ्यस्य, तनावस्य, आहारस्य, वातावरणस्य, एपिजेनेटिक्स्-विचारस्य च संदर्भे विचारणीयः।</p>
      </section>
      <section className="section">
        <div className="article-grid">
          <div className="article-card"><span className="badge">Preconception</span><h3>Preparation</h3><p>Health before conception as biological and ethical responsibility.</p></div>
<div className="article-card"><span className="badge">Epigenetics</span><h3>Environment & Expression</h3><p>How environment may affect gene regulation.</p></div>
<div className="article-card"><span className="badge">Samskara</span><h3>Intentional Living</h3><p>Ritual as a discipline of preparation and responsibility.</p></div>
        </div>
      </section>
    </main>
  );
}
