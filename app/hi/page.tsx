import Link from 'next/link';

export default function Hindi(){
  return <>
    <section className="pageHero localizedHero hindiHero">
      <div className="languageHeroInner">
        <div className="eyebrow">परम्परा • जिज्ञासा • विज्ञान</div>
        <h1>आइवी पण्डित</h1>
        <h2>भारतीय ज्ञान-परम्परा और आधुनिक अनुसन्धान के बीच संवाद</h2>
        <p>संस्कृत, भारतीय ज्ञान प्रणालियों, विज्ञान, चिकित्सा और सार्वजनिक शिक्षा के लिए एक स्वतंत्र विद्वत् मंच — जहाँ परम्परा का सम्मान हो, प्रश्न पूछने की स्वतंत्रता हो और दावों के लिए प्रमाण अपेक्षित हो।</p>
        <div className="heroQuotes"><span className="quotePill"><b>परम्परा</b><span>समझें</span></span><span className="quotePill"><b>जिज्ञासा</b><span>प्रश्न करें</span></span><span className="quotePill"><b>अनुसन्धान</b><span>जाँचें</span></span></div>
        <div className="buttons"><Link className="btn primary" href="/hi/prashna">अनुसन्धान-प्रश्न</Link><Link className="btn secondary" href="/hi/sahyog">सहयोग करें</Link></div>
      </div>
    </section>
    <main className="content languagePage devanagariPage">
      <section className="manifesto localizedManifesto">
        <p className="kicker">आइवी पण्डित की दृष्टि</p>
        <h2 className="sectionTitle">निर्णय से पहले परम्परा को समझें।<br/>स्वीकार से पहले वैज्ञानिक दावे का प्रमाण देखें।</h2>
        <p>हमारा उद्देश्य यह सिद्ध करना नहीं है कि प्राचीन ग्रन्थों में आधुनिक विज्ञान पहले से मौजूद था। उद्देश्य है — ग्रन्थ को उसके सन्दर्भ में समझना, परम्परागत व्याख्याओं को गंभीरता से लेना, अच्छे प्रश्न बनाना और जहाँ सम्भव हो वहाँ उन्हें आधुनिक विधियों से जाँचना।</p>
      </section>

      <section className="languagePrinciples">
        <div><b>परम्परा का सम्मान</b><p>मूल ग्रन्थ, भाष्य, ऐतिहासिक सन्दर्भ और जीवित परम्पराओं को उनके अपने बौद्धिक परिवेश में समझना।</p></div>
        <div><b>जिज्ञासा को प्रोत्साहन</b><p>मन, स्मृति, ध्यान, भाषा, चेतना, स्वास्थ्य, आचरण और मानव कल्याण पर नए अनुसन्धान-प्रश्न उत्पन्न करना।</p></div>
        <div><b>विज्ञान में कठोरता</b><p>स्रोत, व्याख्या, परिकल्पना, वैज्ञानिक प्रमाण और सार्वजनिक टिप्पणी को अलग-अलग स्तरों पर स्पष्ट रखना।</p></div>
      </section>

      <section>
        <p className="kicker">यहाँ से आरम्भ करें</p>
        <h2 className="sectionTitle">ज्ञान से प्रश्न, प्रश्न से सहयोग</h2>
        <div className="gatewayGrid languageGateways">
          <Link className="gatewayCard" href="/iks"><span>01</span><h3>भारतीय ज्ञान प्रणाली</h3><p>विश्वसनीय साहित्य, संस्थान, पत्रिकाएँ, डिजिटल अभिलेखागार, अध्ययन-अवसर और IKS संसाधनों का विकसित होता प्रवेश-द्वार।</p><strong>IKS Hub देखें →</strong></Link>
          <Link className="gatewayCard" href="/shastra-study"><span>02</span><h3>शास्त्र एवं संस्कृत</h3><p>गीता, महाभारत, भागवत, गायत्री, संस्कृत अध्ययन, मूलपाठ, व्याख्या और परम्परा से प्रत्यक्ष जुड़ने की सामग्री।</p><strong>शास्त्र अध्ययन →</strong></Link>
          <Link className="gatewayCard" href="/hi/prashna"><span>03</span><h3>अनुसन्धान-प्रश्न</h3><p>अधूरे शोध-पत्र नहीं, बल्कि ऐसे संक्षिप्त और गंभीर प्रश्न जिन्हें संस्कृतविद्, वैज्ञानिक और चिकित्सक मिलकर आगे बढ़ा सकें।</p><strong>प्रश्न देखें →</strong></Link>
          <Link className="gatewayCard" href="/hi/sahyog"><span>04</span><h3>सहयोग</h3><p>यदि आपके पास कोई ग्रन्थ, परम्परा, अवधारणा, पद्धति या वैज्ञानिक प्रश्न है, तो उसे साझा शोध-परियोजना में विकसित करने के लिए संवाद आरम्भ करें।</p><strong>सहयोग करें →</strong></Link>
        </div>
      </section>

      <section className="repositoryFeature panel">
        <p className="kicker">एक विकसित होता ज्ञान-संसाधन</p><h2>IvyPandit Knowledge Repository</h2><p>लक्ष्य केवल सामग्री इकट्ठा करना नहीं है। साहित्य, मूल-स्रोत, व्याख्या, आधुनिक शोध, अनुसन्धान-प्रश्न, व्याख्यान और भविष्य की परियोजनाओं को आपस में जोड़ने वाला सुव्यवस्थित ज्ञान-संग्रह विकसित किया जा रहा है।</p><Link className="btn primary" href="/repository">Repository देखें</Link>
      </section>

      <section className="twoCol">
        <div className="panel"><h2>संस्कृत जैवचिकित्सा ज्ञानकोश — SBKB</h2><p>संस्कृत साहित्य में शरीर, मन, स्वास्थ्य, रोग, संज्ञान और मानव अनुभव से सम्बन्धित निरीक्षणों को व्यवस्थित रूप से पहचानकर वैज्ञानिक रूप से पूछे जा सकने वाले प्रश्नों में बदलने का कार्यक्रम।</p><Link className="textLink" href="/sbkb">SBKB →</Link></div>
        <div className="panel"><h2>व्याख्यान और सार्वजनिक शिक्षा</h2><p>चयनित व्याख्यान, संवाद, पाठ और वीडियो वेबसाइट पर सन्दर्भ, ग्रन्थ-सूची और सम्बन्धित शोध-विषयों के साथ जोड़े जाएँगे।</p><Link className="textLink" href="/videos">देखें और सीखें →</Link></div>
      </section>
    </main>
  </>;
}
