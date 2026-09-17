import KnowledgeNavigator from '../../components/KnowledgeNavigator';

export default function Explore(){
  return <>
    <section className="pageHero inquiryHero">
      <div className="eyebrow">Find by topic • format • pathway • language</div>
      <h1>Explore IvyPandit</h1>
      <p>A searchable knowledge navigator across Śāstra, Sanskrit, Indian Knowledge Systems, neuroscience, medicine, articles, videos, research questions, and evidence.</p>
    </section>
    <main className="content">
      <section className="manifesto compactManifesto">
        <p className="kicker">Start with your question</p>
        <h2 className="sectionTitle">You do not need to know how IvyPandit is organized before you begin.</h2>
        <p>Search for a text, person, practice, scientific topic, or idea. A single resource can appear in several pathways because Mahābhārata, Gāyatrī, Sanskrit, cognition, neuroscience, medicine, and cultural practice naturally overlap.</p>
      </section>
      <KnowledgeNavigator />
      <section className="callout" style={{marginTop:'30px'}}>
        <b>About the index:</b> this is the public-facing layer of the IvyPandit knowledge catalogue. It will grow as older videos, primary-source records, evidence records, and multilingual material are normalized into the same metadata structure.
      </section>
    </main>
  </>;
}
