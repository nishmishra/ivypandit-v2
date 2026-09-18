import Link from 'next/link';
import ContinueExploring from '../../../components/ContinueExploring';

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
  </article>
    <ContinueExploring items={[
      {title:'Bhagavad Gītā Study Hub',href:'/gita',label:'STUDY HUB',text:'Read the article within the larger textual, theological, lecture, and research context.'},
      {title:'Mahābhārata Study Hub',href:'/mahabharata',label:'WIDER ITIHĀSA',text:'Place Arjuna’s crisis back inside the broader Mahābhārata narrative and its competing obligations.'},
      {title:'Arjuna and Mental Resilience',href:'https://www.youtube.com/watch?v=xhqdP_hUIF0',label:'VIDEO',text:'Watch the character-focused lecture on Arjuna, crisis, identity, and resilience.',external:true},
      {title:'Search resilience & Gītā',href:'/explore?q=resilience',label:'KNOWLEDGE NAVIGATOR',text:'Find connected IvyPandit resources by concept rather than by page type.'}
    ]} />
  </section>
</main> }
