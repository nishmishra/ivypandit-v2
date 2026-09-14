import Link from 'next/link';

export default function Article() { return <main>
  <section className="pageHero"><div className="eyebrow">Short reflection • Text & psychology</div><h1>Bhagavad Gītā & Cognitive Resilience</h1><p>Arjuna’s crisis, Krishna’s teaching, and questions about action under stress.</p></section>
  <section className="content"><article className="article-body">
    <div className="callout"><b>Evidence status:</b> This is a short interpretive reflection, not a claim that the Bhagavad Gītā is a modern psychotherapy or neuroscience text. Psychological concepts are used as comparative lenses.</div>
    <h2>Arjuna’s Crisis</h2>
    <p>The Bhagavad Gītā begins with a profound human crisis: paralysis in the face of moral conflict, grief, duty, anticipated loss, and uncertainty. The larger setting is dharmic, philosophical, and theological; modern psychology can illuminate only part of it.</p>
    <h2>Modern Questions the Text Can Generate</h2>
    <ul><li>How does appraisal of a situation alter emotional response?</li><li>How do identity, duty, and values influence action under uncertainty?</li><li>What is the relationship between attention, self-regulation, and purposeful behavior?</li><li>How does distinguishing action from control over outcomes affect stress and agency?</li></ul>
    <h2>Responsible Comparison</h2>
    <p>Terms such as cognitive reframing, psychological flexibility, or values-based action may help modern audiences formulate questions. They should not be treated as translations of the Gītā’s own categories or as evidence that the text anticipated a specific modern therapy.</p>
    <h2>Where to Go Deeper</h2>
    <p>The fuller lecture develops these questions while keeping classical interpretation and scientific evidence separate.</p>
    <p><Link className="textLink" href="/speaking/bhagavad-gita-cognitive-reframing-resilience">Explore the full lecture framework →</Link></p>
    <p><Link className="textLink" href="/gita">Bhagavad Gītā Study Hub →</Link></p>
  </article></section>
</main> }
