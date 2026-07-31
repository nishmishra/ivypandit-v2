import Link from 'next/link';

export default function Sanskrit(){
  return <>
    <section className="pageHero localizedHero sanskritHero">
      <div className="languageHeroInner">
        <div className="eyebrow">परम्परा • जिज्ञासा • विज्ञानम्</div>
        <h1>आइवीपण्डितः</h1>
        <h2>शास्त्रविज्ञानयोः सम्मानपूर्णः अनुसन्धानसंवादः</h2>
        <p>संस्कृतवाङ्मयस्य भारतीयज्ञानपरम्पराणां आधुनिकविज्ञानस्य च गम्भीराध्ययनाय, प्रश्ननिर्माणाय, सहकाराय, लोकशिक्षणाय च स्वतन्त्रं विद्वत्-मञ्चम्।</p>
        <div className="heroQuotes"><span className="quotePill"><b>परम्परा</b><span>अवगच्छामः</span></span><span className="quotePill"><b>जिज्ञासा</b><span>पृच्छामः</span></span><span className="quotePill"><b>अनुसन्धानम्</b><span>परीक्षामहे</span></span></div>
        <div className="buttons"><Link className="btn primary" href="/sa/prashna">अनुसन्धानप्रश्नाः</Link><Link className="btn secondary" href="/sa/sahayoga">सहकारः</Link></div>
      </div>
    </section>
    <main className="content languagePage devanagariPage sanskritPage">
      <section className="manifesto localizedManifesto"><p className="kicker">आइवीपण्डितस्य दृष्टिः</p><h2 className="sectionTitle">निर्णयात् पूर्वं परम्परायाः अवबोधः।<br/>स्वीकारात् पूर्वं वैज्ञानिकदावस्य प्रमाणम्।</h2><p>अस्माकं प्रयोजनं न प्राचीनग्रन्थेषु आधुनिकविज्ञानस्य सर्वस्य पूर्वमेव सिद्धत्वं प्रदर्शयितुम्। प्रथमं मूलस्रोतः, भाष्यपरम्परा, ऐतिहासिकसन्दर्भः च ज्ञेयाः; ततः स्पष्टाः अनुसन्धानप्रश्नाः निर्मातव्याः; यत्र शक्यते तत्र आधुनिकपद्धत्या परीक्ष्यन्ताम्।</p></section>
      <section className="languagePrinciples"><div><b>परम्परासम्मानः</b><p>मूलग्रन्थान्, भाष्यानि, ऐतिहासिकसन्दर्भान्, जीवितपरम्पराश्च तेषां स्वकीयबौद्धिकपरिप्रेक्ष्ये अवगन्तुम्।</p></div><div><b>जिज्ञासापोषणम्</b><p>मनः, स्मृतिः, अवधानम्, भाषा, चेतना, स्वास्थ्यं, आचारः, मानवकल्याणं च विषयीकृत्य नूतनान् प्रश्नान् जनयितुम्।</p></div><div><b>अनुसन्धानकठोरता</b><p>मूलस्रोतः, व्याख्या, परिकल्पना, वैज्ञानिकप्रमाणम्, लोकव्याख्या च स्पष्टतया पृथक् स्थापयितुम्।</p></div></section>
      <section><p className="kicker">प्रवेशमार्गाः</p><h2 className="sectionTitle">ज्ञानात् प्रश्नः, प्रश्नात् सहकारः</h2><div className="gatewayGrid languageGateways"><Link className="gatewayCard" href="/iks"><span>01</span><h3>भारतीयज्ञानप्रणाली</h3><p>ग्रन्थाः, आधुनिकसाहित्यं, संस्थाः, पत्रिकाः, डिजिटलसंसाधनानि, अध्ययनावसराः च।</p><strong>IKS Hub →</strong></Link><Link className="gatewayCard" href="/shastra-study"><span>02</span><h3>शास्त्राध्ययनम्</h3><p>गीता, महाभारतम्, भागवतम्, गायत्री, मूलपाठाः, संस्कृताध्ययनम्, व्याख्यानानि च।</p><strong>शास्त्रविभागः →</strong></Link><Link className="gatewayCard" href="/sa/prashna"><span>03</span><h3>अनुसन्धानप्रश्नाः</h3><p>अपूर्णलेखानां प्रकाशनं न; अपितु संस्कृतविदुषां वैज्ञानिकानां च संयुक्तकार्याय संक्षिप्ताः गम्भीराः प्रश्नाः।</p><strong>प्रश्नान् पश्यतु →</strong></Link><Link className="gatewayCard" href="/sa/sahayoga"><span>04</span><h3>सहकारः</h3><p>ग्रन्थः, परम्परा, संकल्पना, साधना, वैज्ञानिकपद्धतिः वा अस्ति चेत् संयुक्तानुसन्धानस्य सम्भावनां चर्चयामः।</p><strong>संवादम् आरभताम् →</strong></Link></div></section>
      <section className="repositoryFeature panel"><p className="kicker">वर्धमानं ज्ञानसाधनम्</p><h2>आइवीपण्डित-ज्ञानसंग्रहः</h2><p>केवलं सामग्रीसंचयः न। मूलस्रोतांसि, व्याख्याः, आधुनिकसाहित्यं, अनुसन्धानप्रश्नाः, व्याख्यानानि, भाविपरियोजनाश्च परस्परं सम्बध्य व्यवस्थितः ज्ञानसंग्रहः निर्मीयते।</p><Link className="btn primary" href="/repository">Knowledge Repository →</Link></section>
      <section className="twoCol"><div className="panel"><h2>संस्कृत-जैवचिकित्सा-ज्ञानकोशः</h2><p>संस्कृतवाङ्मये शरीर-मनः-स्वास्थ्य-रोग-संज्ञान-मानवानुभवसम्बद्धानां निरीक्षणानां व्यवस्थिताध्ययनं, ततः परीक्षणयोग्यवैज्ञानिकप्रश्ननिर्माणम्।</p><Link className="textLink" href="/sbkb">SBKB →</Link></div><div className="panel"><h2>व्याख्यानानि लोकशिक्षणं च</h2><p>चयनितव्याख्यानानि प्रसङ्गेन, ग्रन्थसूच्या, सम्बद्धानुसन्धानप्रश्नैश्च सह वेबसाइट् मध्ये स्थायिसंसाधनरूपेण स्थापयिष्यन्ते।</p><Link className="textLink" href="/videos">व्याख्यानानि →</Link></div></section>
    </main>
  </>;
}
