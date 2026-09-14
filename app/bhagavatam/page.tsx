import Link from 'next/link';

export default function Page() { return <main>
  <section className="pageHero"><div className="eyebrow">Study hub • Bhakti • Sacred narrative</div><h1>Bhāgavata Study Hub</h1><p>Devotion, sacred narrative, memory, meaning, surrender, and spiritual psychology — studied first within the text’s own theological world.</p></section>
  <section className="content">
    <div className="twoCol">
      <section className="panel"><p className="kicker">Traditional frame</p><h2>Bhakti and theological meaning</h2><p>The Bhāgavata Purāṇa is a devotional and theological work whose narratives, metaphysics, aesthetics, and practices cannot be reduced to modern psychology. Traditional interpretation belongs at the center of study.</p></section>
      <section className="panel"><p className="kicker">Human questions</p><h2>Narrative, memory & identity</h2><p>Without collapsing theology into science, the Bhāgavata can prompt broader questions about how sacred narrative organizes memory, value, devotion, moral identity, emotion, community, and a sense of meaning.</p></section>
    </div>

    <section className="resourceGrid" style={{marginTop:'28px'}}>
      <a className="panel linkedCard" href="https://www.youtube.com/@IvyPandit/search?query=Bhagavatam" target="_blank" rel="noopener noreferrer"><span className="label">VIDEO COLLECTION</span><h2>Bhāgavata on IvyPandit</h2><p>Lectures and reflections on narrative, devotion, cosmology, and traditional learning.</p><span>Browse videos →</span></a>
      <Link className="panel linkedCard" href="/videos#tradition"><span className="label">TRADITION COLLECTION</span><h2>Purāṇa, ritual & lived practice</h2><p>Explore the broader IvyPandit collection devoted explicitly to traditional and cultural learning.</p><span>Explore collection →</span></Link>
      <Link className="panel linkedCard" href="/editorial-policy"><span className="label">METHOD</span><h2>Tradition and evidence</h2><p>Why theological meaning, philosophical interpretation, research questions, and scientific evidence remain distinct categories.</p><span>Read policy →</span></Link>
    </section>

    <section className="panel"><p className="kicker">Study themes</p><h2>Possible pathways</h2><div className="outcomeCloud"><span>Bhakti</span><span>Sacred narrative</span><span>Memory</span><span>Identity</span><span>Meaning</span><span>Surrender</span><span>Cosmology</span><span>Spiritual psychology</span></div></section>
  </section>
</main> }
