import Link from 'next/link';
import SanskritNav from '../SanskritNav';

export default function SanskritRepository(){return <>
  <section className="pageHero localizedHero sanskritHero"><div className="languageHeroInner"><div className="eyebrow">पोर्टेबल्-ज्ञानसंरचना</div><h1>आइवीपण्डित-ज्ञानसंग्रहः</h1><p>सार्वजनिकवेबसाइटस्य पृष्ठभूमौ स्थितस्य अनुक्रमितसाहित्यस्य, मूलस्रोतसां, अनुसन्धानप्रश्नानां, विद्वत्संसाधनानां च सुव्यवस्थितं गृहस्थानम्।</p></div></section>
  <main className="content devanagariPage sanskritPage"><SanskritNav/>
    <div className="callout"><b>दीर्घकालाय निर्मीयते।</b> hosting-platform, database, website-technology इत्येते परिवर्तन्ते चेदपि बौद्धिकसंग्रहः स्थायित्वेन तिष्ठेत् इति मुक्त-पोर्टेबल्-रूपेषु ज्ञानसंग्रहः विन्यस्यते।</div>
    <div className="resourceGrid">
      <section className="panel"><h2>अनुक्रमितसाहित्यम्</h2><p>आधुनिकशोधपत्राणि, पुस्तकानि, समीक्षाः, अनुवादाः, भाष्याणि, ग्रन्थसूची-अभिलेखाश्च विषय-स्रोतपरम्परा-विज्ञानक्षेत्र-परियोजनानुसारं व्यवस्थिताः।</p><span className="statusBadge">सूची निर्मीयते</span></section>
      <section className="panel"><h2>ग्रन्थाः पाठांशाश्च</h2><p>संस्कृतग्रन्थ-पाठांशानां सुव्यवस्थितसन्दर्भाः; editions, अनुवादाः, टिप्पणयः, पारम्परिकसन्दर्भः, विषयाः, सम्बद्धशोधलिङ्कानि च योजयितुं स्थानम्।</p><span className="statusBadge">रूपरेखा सिद्धा</span></section>
      <section className="panel"><h2>अनुसन्धानप्रश्नाः</h2><p>पाठाध्ययन-अन्तरविषयकविद्वत्ताभ्यः उत्पन्नाः प्रश्नाः; प्रमाणस्थितिः, व्यवहार्यता, सम्बद्धसाहित्यं, परियोजनाः, भाविअध्ययनानि च सह।</p><span className="statusBadge">मूलसंरचना सिद्धा</span></section>
      <section className="panel"><h2>IKS-संसाधनानि</h2><p>संस्थाः, पत्रिकाः, अभिलेखागाराः, डिजिटलोपकरणानि, शिक्षामार्गाः, सम्मेलनानि, fellowships, अन्योपयोगिसंसाधनानि च।</p><span className="statusBadge">चयनकार्यं प्रचलति</span></section>
      <section className="panel"><h2>SBKB-अभिलेखाः</h2><p>संस्कृतवाङ्मयस्थित-जैवचिकित्सकीय-वैज्ञानिकतया परीक्षणीयनिरीक्षणानि आधुनिकप्रमाणात् पृथक् स्थाप्य परीक्षणयोग्यप्रश्नैः सह सम्बध्यन्ते।</p><Link className="textLink" href="/sa/sbkb">SBKB पश्यतु →</Link></section>
      <section className="panel"><h2>कार्यपत्राणि</h2><p>स्थिरmetadata, downloadable PDFs, स्पष्टसमीक्षास्थितिः, पश्चात् औपचारिकप्रकाशनलिङ्कानि च सहितानि संस्करणयुक्तविद्वत्पत्राणि।</p><Link className="textLink" href="/perspectives">Working Papers →</Link></section>
    </div>
    <section className="panel"><h2>भाव्य-अभिलेखस्य सम्बन्धरचना</h2><div className="flowLine"><span>स्रोतः</span><b>→</b><span>सन्दर्भः</span><b>→</b><span>विषयः</span><b>→</b><span>साहित्यम्</span><b>→</b><span>प्रश्नः</span><b>→</b><span>प्रमाणम्</span><b>→</b><span>फलितम्</span></div><p>सार्वजनिकरूपं क्रमशः प्रकाश्यते। प्रथमं दत्तांशरचना सुदृढा भवतु, येन अन्वेषणम्, बहुभाषिकपृष्ठानि, ग्रन्थसूचयः, कार्यपत्राणि, अनुसन्धानपरियोजनाश्च एकस्मात् विश्वसनीयस्रोतसः पोषणं प्राप्नुयुः।</p></section>
  </main>
</>}
