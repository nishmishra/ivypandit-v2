import Link from 'next/link';
import SanskritNav from './SanskritNav';

export default function Sanskrit(){
  return <>
    <section className="pageHero localizedHero sanskritHero">
      <div className="languageHeroInner">
        <div className="eyebrow">परम्परा • जिज्ञासा • विज्ञानम्</div>
        <h1>आइवीपण्डितः</h1>
        <h2>शास्त्रविज्ञानयोः सम्मानपूर्णः अनुसन्धानसंवादः</h2>
        <p>संस्कृतवाङ्मयस्य भारतीयज्ञानपरम्पराणां आधुनिकविज्ञानस्य च गम्भीराध्ययनाय, प्रश्ननिर्माणाय, सहकाराय, लोकशिक्षणाय च स्वतन्त्रं विद्वत्-मञ्चम्।</p>
        <div className="heroQuotes"><span className="quotePill"><b>परम्परा</b><span>अवगच्छामः</span></span><span className="quotePill"><b>जिज्ञासा</b><span>पृच्छामः</span></span><span className="quotePill"><b>अनुसन्धानम्</b><span>परीक्षामहे</span></span></div>
        <div className="buttons"><Link className="btn primary" href="/sa/prashna">अनुसन्धानप्रश्नाः</Link><Link className="btn secondary" href="/sa/speaking">व्याख्यानाय आमन्त्रणम्</Link><Link className="btn secondary" href="/sa/sahayoga">सहकारः</Link></div>
      </div>
    </section>
    <main className="content languagePage devanagariPage sanskritPage">
      <SanskritNav/>
      <section className="manifesto localizedManifesto"><p className="kicker">आइवीपण्डितस्य दृष्टिः</p><h2 className="sectionTitle">निर्णयात् पूर्वं परम्परायाः अवबोधः।<br/>स्वीकारात् पूर्वं वैज्ञानिकदावस्य प्रमाणम्।</h2><p>अस्माकं प्रयोजनं न प्राचीनग्रन्थेषु आधुनिकविज्ञानस्य सर्वस्य पूर्वमेव सिद्धत्वं प्रदर्शयितुम्। प्रथमं मूलस्रोतः, भाष्यपरम्परा, ऐतिहासिकसन्दर्भः च ज्ञेयाः; ततः स्पष्टाः अनुसन्धानप्रश्नाः निर्मातव्याः; यत्र शक्यते तत्र आधुनिकपद्धत्या परीक्ष्यन्ताम्।</p></section>
      <section className="languagePrinciples"><div><b>परम्परासम्मानः</b><p>मूलग्रन्थान्, भाष्यानि, ऐतिहासिकसन्दर्भान्, जीवितपरम्पराश्च तेषां स्वकीयबौद्धिकपरिप्रेक्ष्ये अवगन्तुम्।</p></div><div><b>जिज्ञासापोषणम्</b><p>मनः, स्मृतिः, अवधानम्, भाषा, चेतना, स्वास्थ्यं, आचारः, मानवकल्याणं च विषयीकृत्य नूतनान् प्रश्नान् जनयितुम्।</p></div><div><b>अनुसन्धानकठोरता</b><p>मूलस्रोतः, व्याख्या, परिकल्पना, वैज्ञानिकप्रमाणम्, लोकव्याख्या च स्पष्टतया पृथक् स्थापयितुम्।</p></div></section>

      <section><p className="kicker">संस्कृत-विभागस्य मुख्यपृष्ठानि</p><h2 className="sectionTitle">सम्पूर्णं आइवीपण्डितम् संस्कृतेन अन्वेषयतु</h2><div className="gatewayGrid languageGateways">
        <Link className="gatewayCard" href="/sa/iks"><span>01</span><h3>भारतीयज्ञानप्रणाली</h3><p>ग्रन्थाः, आधुनिकसाहित्यं, संस्थाः, पत्रिकाः, डिजिटलसंसाधनानि, अध्ययनावसराश्च।</p><strong>IKS-केन्द्रम् →</strong></Link>
        <Link className="gatewayCard" href="/sa/shastra"><span>02</span><h3>शास्त्राध्ययनम्</h3><p>वेदाः, उपनिषदः, गायत्री, शास्त्रपाठाः, संस्कृताध्ययनं, व्याख्यानानि च।</p><strong>शास्त्रविभागः →</strong></Link>
        <Link className="gatewayCard" href="/sa/research"><span>03</span><h3>विज्ञानम् अनुसन्धानं च</h3><p>मस्तिष्कस्वास्थ्यं, न्यूरोविज्ञानम्, संज्ञानम्, सांस्कृतिकविशेषज्ञता, अनुसन्धानपद्धतिश्च।</p><strong>अनुसन्धानम् →</strong></Link>
        <Link className="gatewayCard" href="/sa/sbkb"><span>04</span><h3>संस्कृत-जैवचिकित्सा-ज्ञानकोशः</h3><p>संस्कृतवाङ्मयस्थितनिरीक्षणेभ्यः पारदर्शक-परीक्षणयोग्य-अनुसन्धानप्रश्नपर्यन्तम्।</p><strong>SBKB →</strong></Link>
        <Link className="gatewayCard" href="/sa/prashna"><span>05</span><h3>अनुसन्धानप्रश्नाः</h3><p>संस्कृतविदुषां वैज्ञानिकानां च संयुक्तकार्याय संक्षिप्ताः गम्भीराः प्रश्नाः।</p><strong>प्रश्नान् पश्यतु →</strong></Link>
        <Link className="gatewayCard" href="/sa/videos"><span>06</span><h3>व्याख्यानानि अध्ययनं च</h3><p>अकादमिक-वैज्ञानिकव्याख्यानानि तथा धर्म-परम्परा-सांस्कृतिकविषयाः पृथक् संग्रहयोः।</p><strong>व्याख्यानानि →</strong></Link>
        <Link className="gatewayCard" href="/sa/speaking"><span>07</span><h3>वक्तृत्वम्</h3><p>विश्वविद्यालय-मन्दिर-सामुदायिककार्यक्रमेषु डॉ. मिश्रस्य व्याख्यानविषयाः, रूपाणि, आमन्त्रणविधिश्च।</p><strong>वक्तृत्वविषयाः →</strong></Link>
        <Link className="gatewayCard" href="/sa/sahayoga"><span>08</span><h3>सहकारः</h3><p>ग्रन्थः, परम्परा, संकल्पना, साधना, वैज्ञानिकपद्धतिः वा अस्ति चेत् संयुक्तानुसन्धानस्य सम्भावनां चर्चयामः।</p><strong>संवादम् आरभताम् →</strong></Link>
        <Link className="gatewayCard" href="/sa/about"><span>09</span><h3>आइवीपण्डितस्य परिचयः</h3><p>मञ्चस्य प्रयोजनम्, सम्पादकीयदृष्टिः, दीर्घकालीनलक्ष्यं च।</p><strong>परिचयं पठतु →</strong></Link>
      </div></section>

      <section className="panel" style={{marginTop:'36px'}}><p className="kicker">अन्यानि संस्कृतपृष्ठानि</p><h2>विद्वत्संसाधनानि सम्पर्कश्च</h2><div className="buttons" style={{justifyContent:'flex-start'}}><Link className="btn secondary" href="/sa/publications">प्रकाशनानि</Link><Link className="btn secondary" href="/sa/articles">लेखाः</Link><Link className="btn secondary" href="/sa/repository">ज्ञानसंग्रहः</Link><Link className="btn secondary" href="/sa/support">समर्थनम्</Link><Link className="btn secondary" href="/sa/contact">सम्पर्कः</Link><Link className="btn secondary" href="/sa/disclaimer">सूचना</Link></div></section>

      <section className="repositoryFeature panel"><p className="kicker">वर्धमानं ज्ञानसाधनम्</p><h2>आइवीपण्डित-ज्ञानसंग्रहः</h2><p>केवलं सामग्रीसंचयः न। मूलस्रोतांसि, व्याख्याः, आधुनिकसाहित्यं, अनुसन्धानप्रश्नाः, व्याख्यानानि, भाविपरियोजनाश्च परस्परं सम्बध्य व्यवस्थितः ज्ञानसंग्रहः निर्मीयते।</p><Link className="btn primary" href="/sa/repository">ज्ञानसंग्रहं पश्यतु →</Link></section>
      <section className="missionBox"><h2>वसुधैव कुटुम्बकम्</h2><p>ज्ञानं मानवजातेः सामूहिकं दायम्। परम्परा, विज्ञानम्, संस्कृतिः, पीढयश्च मध्ये मुक्तः गम्भीरः संवादः सर्वजनहिताय भवतु।</p></section>
    </main>
  </>;
}
