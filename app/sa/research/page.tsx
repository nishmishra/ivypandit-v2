import Link from 'next/link';
import SanskritNav from '../SanskritNav';

export default function SanskritResearch(){return <>
  <section className="pageHero localizedHero sanskritHero"><div className="languageHeroInner"><div className="eyebrow">विज्ञानम् अनुसन्धानं च</div><h1>अनुसन्धानम्</h1><p>नैदानिक-न्यूरोविज्ञानम्, मस्तिष्कस्वास्थ्यं, सांस्कृतिक-न्यूरोविज्ञानम्, भारतीयज्ञानप्रणाली, तथा निरीक्षणात् कठोरानुसन्धानपर्यन्तं गमनाय आवश्यकसंरचना।</p></div></section>
  <main className="content devanagariPage sanskritPage"><SanskritNav/>
    <div className="researchBands">
      <section className="panel"><h2>मस्तिष्कस्वास्थ्यं नैदानिक-न्यूरोविज्ञानं च</h2><p>आघातः (stroke), आघातोत्तर-मिर्गी, न्यूरोवास्कुलर-रोगाः, precision neurology, पूर्वानुमानमॉडेल्, biomarkers, clinical trials, उपचारव्यवस्थाश्च।</p><a className="textLink" href="https://scholar.google.com/citations?user=1n2JUc8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar →</a></section>
      <section className="panel"><h2>सांस्कृतिकं संज्ञानात्मकं च न्यूरोविज्ञानम्</h2><p>अवधानम्, स्मृतिः, भाषा, संस्कृताध्ययन-पाठाभ्यासः, ध्यानपरम्पराः, दीर्घकालिकसांस्कृतिकविशेषज्ञता, न्यूरोप्लास्टिसिटी, मानवीयसंज्ञानं च।</p></section>
      <section className="panel"><h2>भारतीयज्ञानप्रणाली-अनुसन्धानम्</h2><p>शास्त्रात्, जीवितपरम्पराभ्यः, ग्रन्थस्थितनिरीक्षणेभ्यः, पारम्परिकसंकल्पनाभ्यश्च उत्पन्नानां प्रश्नानां पद्धतिशुद्धमध्ययनम् — परम्परां प्रत्यक्षवैज्ञानिकप्रमाणेन न समीकुर्वन्।</p><Link className="textLink" href="/sa/sbkb">SBKB पश्यतु →</Link></section>
    </div>
    <section className="panel"><h2>अनुसन्धानसंरचना</h2><p>दीर्घकालीनलक्ष्यं नाम — अनुक्रमितसाहित्यं, मूलस्रोतांसि, नियंत्रितसंकल्पनाः, अनुसन्धानप्रश्नाः, प्रमाणस्थितिः, कार्यपत्राणि, प्रकाशनानि, शैक्षिकमाध्यमानि च एकस्मिन् पोर्टेबल्-ज्ञानतन्त्रे संयोजयितुम्।</p><div className="flowLine"><span>स्रोतांसि</span><b>→</b><span>अनुक्रमितज्ञानम्</span><b>→</b><span>प्रश्नाः</span><b>→</b><span>अध्ययनानि</span><b>→</b><span>फलितानि</span></div></section>
    <section className="panel"><h2>भारतस्य Stroke Program</h2><p>भारतस्य मस्तिष्कस्वास्थ्यसंरचनायां दीर्घकालिकप्रतिबद्धतायाः भागरूपेण <i>Stroke Program for India</i> लेखे stroke-सेवा, शिक्षा, जनस्वास्थ्यक्षमता च विस्तारयितुं व्यवहार्याः उपायाः प्रस्ताविताः।</p><a className="textLink" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2859584/" target="_blank" rel="noopener noreferrer">लेखं पठतु →</a></section>
  </main>
</>}
