import Link from 'next/link';

const links = [
  ['मुखपृष्ठम्','/sa'],
  ['भारतीयज्ञानप्रणाली','/sa/iks'],
  ['शास्त्राध्ययनम्','/sa/shastra'],
  ['अनुसन्धानम्','/sa/research'],
  ['SBKB','/sa/sbkb'],
  ['प्रश्नाः','/sa/prashna'],
  ['व्याख्यानानि','/sa/videos'],
  ['वक्तृत्वम्','/sa/speaking'],
  ['सहकारः','/sa/sahayoga'],
  ['परिचयः','/sa/about'],
];

export default function SanskritNav(){
  return <section className="panel devanagariPage sanskritPage" style={{marginBottom:'28px'}}>
    <p className="kicker">संस्कृत-विभागः</p>
    <div className="buttons" style={{justifyContent:'flex-start'}}>
      {links.map(([name,href]) => <Link key={href} className="btn secondary" href={href}>{name}</Link>)}
    </div>
  </section>;
}
