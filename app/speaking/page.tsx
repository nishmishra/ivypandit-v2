export default function Speaking(){
  return <main className="article">
    <h1>Lectures & Conversations</h1>
    <p className="lead">Keynote lectures, invited presentations, educational programs, panel discussions, and public conversations on neuroscience, Sanskrit literature, Indian Knowledge Systems, and human flourishing.</p>
    <div className="banner"><img src="/images/ivypandit-channel-banner.png" alt="IvyPandit Lectures and Conversations" /></div>
    <blockquote>यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः ।<br/>स यत्प्रमाणं कुरुते लोकस्तदनुवर्तते ॥<br/><span>Whatever exemplary individuals do, others follow.</span></blockquote>
    <h2>Representative Topics</h2>
    <div className="grid">
      {['Sanskrit and the Brain','Neuroplasticity and Learning','Mahabharata and Human Psychology','Gurukul Education and Attention Training','Meditation and Neuroscience','Consciousness: Ancient Questions and Modern Science','Indian Knowledge Systems and Global Health','Ritual, Grief, and the Brain'].map(x=><div className="card" key={x}><h3>{x}</h3><p>Evidence-informed, accessible, and respectful lecture for mixed scholarly and general audiences.</p></div>)}
    </div>
    <h2>Audiences</h2>
    <p><span className="pill">Universities</span><span className="pill">Medical schools</span><span className="pill">Sanskrit departments</span><span className="pill">Professional societies</span><span className="pill">Community organizations</span><span className="pill">Cultural institutions</span><span className="pill">Public audiences</span></p>
    <h2>Contact</h2>
    <p>For lectures, conversations, workshops, interviews, and collaborations: <a href="mailto:nishant.mishra@ivypandit.com">nishant.mishra@ivypandit.com</a></p>
  </main>
}
