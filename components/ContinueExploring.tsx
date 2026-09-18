import Link from 'next/link';

export type ContinueItem = {
  title: string;
  href: string;
  text: string;
  label?: string;
  external?: boolean;
};

export default function ContinueExploring({
  items,
  title = 'Continue exploring',
  intro = 'Move between the text, interpretation, lectures, research questions, and evidence without losing the thread.'
}: {
  items: ContinueItem[];
  title?: string;
  intro?: string;
}) {
  return <section style={{marginTop:'38px'}}>
    <p className="kicker">Connected knowledge</p>
    <h2 className="sectionTitle">{title}</h2>
    <p>{intro}</p>
    <div className="resourceGrid">
      {items.map((item)=>{
        const body = <><span className="label">{item.label || 'RELATED'}</span><h2>{item.title}</h2><p>{item.text}</p><span>{item.external ? 'Open resource ↗' : 'Explore →'}</span></>;
        return item.external
          ? <a key={item.href} className="panel linkedCard" href={item.href} target="_blank" rel="noopener noreferrer">{body}</a>
          : <Link key={item.href} className="panel linkedCard" href={item.href}>{body}</Link>;
      })}
    </div>
  </section>;
}
