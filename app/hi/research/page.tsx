import Link from 'next/link';

export default function HindiResearch(){
  return <>
    <section className="pageHero localizedHero hindiHero">
      <div className="languageHeroInner">
        <div className="eyebrow">विज्ञान एवं अनुसन्धान</div>
        <h1>वैज्ञानिक कार्य</h1>
        <p>स्ट्रोक, रीपरफ्यूज़न, न्यूरोइमेजिंग, स्ट्रोकोत्तर मिर्गी, बायोमार्कर, क्लिनिकल ट्रायल, संज्ञान, भाषा, न्यूरोप्लास्टिसिटी और उभरते सांस्कृतिक न्यूरोसाइंस पर अनुसन्धान।</p>
        <div className="buttons" style={{justifyContent:'center', marginTop:'22px'}}>
          <Link className="btn secondary" href="/research">English</Link>
          <Link className="btn secondary" href="/sa/research">संस्कृतम्</Link>
        </div>
      </div>
    </section>

    <main className="content languagePage devanagariPage">
      <section className="manifesto localizedManifesto">
        <p className="kicker">एक सतत वैज्ञानिक यात्रा</p>
        <h2 className="sectionTitle">तीव्र मस्तिष्क-आघात से दीर्घकालीन पुनर्प्राप्ति, पूर्वानुमान और मानवीय संज्ञान तक</h2>
        <p>मेरे वैज्ञानिक कार्य के केंद्र में एक मूल प्रश्न रहा है: मस्तिष्क की बेहतर समझ से हम उपचार, पुनर्प्राप्ति और मानव कल्याण को कैसे बेहतर बना सकते हैं? समय के साथ मेरा काम तीव्र स्ट्रोक और रीपरफ्यूज़न से इमेजिंग-आधारित रोगी-चयन, उपचार के परिणाम, स्ट्रोकोत्तर मिर्गी, बायोमार्कर और प्रिसीजन न्यूरोसाइंस तक विकसित हुआ है। साथ ही भाषा, द्विभाषिकता, संज्ञान और न्यूरोप्लास्टिसिटी में रुचि बढ़ी है।</p>
        <p>ये अलग-अलग विषय नहीं हैं। ये इस प्रश्न के विभिन्न आयाम हैं कि मस्तिष्क चोट, उपचार, भाषा, सीखने, अभ्यास, ध्यान और अनुभव के प्रति कैसे बदलता है।</p>
      </section>

      <div className="researchBands">
        <section className="panel"><h2>स्ट्रोक, रीपरफ्यूज़न और न्यूरोइमेजिंग</h2><p>तीव्र इस्कीमिक स्ट्रोक, थ्रोम्बोलाइसिस, एंडोवैस्कुलर उपचार, परफ्यूज़न और mismatch imaging, ऊतक की जीवनक्षमता, रोगी-चयन, clinical outcomes और समय–ऊतक–रक्तप्रवाह–पुनर्प्राप्ति का संबंध।</p></section>
        <section className="panel"><h2>स्ट्रोकोत्तर मिर्गी और ब्रेन नेटवर्क</h2><p>स्ट्रोक के बाद दौरे, epileptogenesis, जोखिम-पूर्वानुमान, biomarkers, genetics, proteomics, treatment questions तथा vascular neurology और epilepsy को जोड़ने वाला अंतरराष्ट्रीय सहयोग।</p></section>
        <section className="panel"><h2>संज्ञान, भाषा और न्यूरोप्लास्टिसिटी</h2><p>द्विभाषिकता, बहुभाषिक अनुभव, ध्यान, स्मृति, cognitive reserve, संस्कृत-अध्ययन एवं पाठ, दीर्घकालीन विशेषज्ञता, contemplative practice और सांस्कृतिक परम्पराओं से उत्पन्न परीक्षणयोग्य वैज्ञानिक प्रश्न।</p></section>
      </div>

      <section>
        <p className="kicker">चयनित वैज्ञानिक योगदान</p>
        <h2 className="sectionTitle">कुछ प्रतिनिधि शोध और उनके मूल प्रश्न</h2>
        <p>यह सम्पूर्ण प्रकाशन-सूची नहीं है। नीचे वे अध्ययन हैं जो मेरी वैज्ञानिक यात्रा के प्रमुख प्रश्नों को दर्शाते हैं।</p>

        <div className="twoCol">
          <section className="panel"><div className="eyebrow">The BMJ · 2010</div><h2>अत्यधिक वृद्ध रोगियों में थ्रोम्बोलाइसिस</h2><p>जब अधिक आयु के कारण अनेक रोगियों को thrombolysis से वंचित रखा जाता था, इस अंतरराष्ट्रीय अध्ययन ने अत्यधिक वृद्ध रोगियों के परिणामों का परीक्षण किया और आयु-आधारित उपचार-सीमाओं पर पुनर्विचार के लिए प्रमाण दिया।</p><a className="textLink" href="https://doi.org/10.1136/bmj.c6046" target="_blank" rel="noopener noreferrer">शोध-पत्र देखें →</a></section>

          <section className="panel"><div className="eyebrow">Diabetes Care · 2010</div><h2>पूर्व स्ट्रोक, मधुमेह और थ्रोम्बोलाइसिस</h2><p>पूर्व स्ट्रोक और मधुमेह दोनों वाले रोगियों को कई स्थानों पर intravenous thrombolysis के लिए अनुपयुक्त माना जाता था। इस अध्ययन ने पूछा कि क्या वास्तविक clinical outcomes ऐसे बहिष्कार को उचित ठहराते हैं।</p><a className="textLink" href="https://doi.org/10.2337/dc10-1125" target="_blank" rel="noopener noreferrer">शोध-पत्र देखें →</a></section>

          <section className="panel"><div className="eyebrow">Stroke · 2010</div><h2>Mismatch-Based Delayed Thrombolysis</h2><p>इस कार्य ने आधुनिक stroke medicine के एक केंद्रीय प्रश्न को संबोधित किया: क्या पारम्परिक समय-सीमा बीत जाने के बाद भी imaging ऐसे रोगियों की पहचान कर सकती है जिनका मस्तिष्क-ऊतक अभी बचाया जा सकता है?</p><a className="textLink" href="https://doi.org/10.1161/STROKEAHA.109.566869" target="_blank" rel="noopener noreferrer">शोध-पत्र देखें →</a></section>

          <section className="panel"><div className="eyebrow">Neurology · 2011</div><h2>पूर्व स्ट्रोक और मधुमेह वाले रोगियों में थ्रोम्बोलाइसिस</h2><p>एक बड़े अंतरराष्ट्रीय dataset का उपयोग करते हुए इस अध्ययन ने उन रोगियों में thrombolysis से जुड़े परिणामों का परीक्षण किया जिन्हें परम्परागत रूप से अधिक जोखिम वाला माना जाता था।</p><a className="textLink" href="https://doi.org/10.1212/WNL.0b013e318238ee42" target="_blank" rel="noopener noreferrer">शोध-पत्र देखें →</a></section>

          <section className="panel"><div className="eyebrow">Stroke · 2011</div><h2>Home Time: रोगी-केंद्रित परिणाम</h2><p>रोगी कितने दिन जीवित रहते हुए अस्पताल या संस्थागत देखभाल से बाहर अपने घर में रह सका—यह स्वतंत्रता और वास्तविक जीवन की पुनर्प्राप्ति का सहज माप हो सकता है। इस अध्ययन ने thrombolysis के बाद home time का परीक्षण किया।</p><a className="textLink" href="https://doi.org/10.1161/STROKEAHA.110.601302" target="_blank" rel="noopener noreferrer">शोध-पत्र देखें →</a></section>

          <section className="panel"><div className="eyebrow">Stroke · 2013</div><h2>Modified Graeb Score</h2><p>इस सहयोगात्मक अध्ययन ने intraventricular hemorrhage की मात्रा को अधिक व्यवस्थित रूप से मापने और उसे functional outcome से जोड़ने के लिए एक उन्नत पद्धति का मूल्यांकन किया।</p><a className="textLink" href="https://doi.org/10.1161/STROKEAHA.112.670653" target="_blank" rel="noopener noreferrer">शोध-पत्र देखें →</a></section>

          <section className="panel"><div className="eyebrow">JAMA Neurology · 2023</div><h2>स्ट्रोक के बाद दौरे और दीर्घकालीन परिणाम</h2><p>इस अंतरराष्ट्रीय अध्ययन ने post-stroke seizures और बाद के clinical outcomes के संबंध का अध्ययन किया। मैंने senior और corresponding author के रूप में stroke और epilepsy के अंतरराष्ट्रीय सहयोगियों के साथ इस कार्य का नेतृत्व किया।</p><a className="textLink" href="https://doi.org/10.1001/jamaneurol.2023.3240" target="_blank" rel="noopener noreferrer">शोध-पत्र देखें →</a></section>

          <section className="panel"><div className="eyebrow">Neurology · 2024</div><h2>स्ट्रोकोत्तर मिर्गी: रोगजनन, निदान, पूर्वानुमान और रोकथाम</h2><p>इस अंतरराष्ट्रीय समीक्षा ने vascular neurology और epileptology को जोड़ते हुए यह समझने का प्रयास किया कि स्ट्रोक के बाद epilepsy क्यों विकसित होती है, जोखिम कैसे पहचाना जा सकता है और भविष्य में preventive strategies कैसे विकसित हो सकती हैं।</p><a className="textLink" href="https://doi.org/10.1212/WNL.0000000000209450" target="_blank" rel="noopener noreferrer">शोध-पत्र देखें →</a></section>
        </div>
      </section>

      <section className="panel">
        <p className="kicker">वैज्ञानिक क्रम</p>
        <h2>वे प्रश्न जो इस कार्य को आपस में जोड़ते हैं</h2>
        <div className="flowLine"><span>किसे उपचार मिले?</span><b>→</b><span>कौन-सा ऊतक अभी बचाया जा सकता है?</span><b>→</b><span>पुनर्प्राप्ति कैसे मापें?</span><b>→</b><span>किसे दीर्घकालीन जटिलताएँ होंगी?</span><b>→</b><span>क्या हम उनका पूर्वानुमान या रोकथाम कर सकते हैं?</span></div>
      </section>

      <section className="twoCol">
        <div className="panel"><h2>भारत में ब्रेन हेल्थ और स्ट्रोक अनुसन्धान</h2><p>भारत के brain-health infrastructure में मेरी दीर्घकालीन रुचि <i>Stroke Program for India</i> से लेकर multicenter registries, clinical trials, imaging collaborations, data platforms, training और स्थानीय आवश्यकताओं के अनुरूप prevention तथा treatment models तक फैली है।</p><a className="textLink" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2859584/" target="_blank" rel="noopener noreferrer">Stroke Program for India पढ़ें →</a></div>
        <div className="panel"><h2>बायोमार्कर, प्रोटीओमिक्स और डेटा साइंस</h2><p>न्यूरोलॉजिकल रोग जैविक रूप से अत्यन्त विविध हैं। वर्तमान कार्य clinical data को imaging, biomarkers, proteomics, genetics और computational approaches के साथ जोड़कर बेहतर biological understanding, risk prediction और precision neurological care की दिशा में आगे बढ़ता है।</p></div>
      </section>

      <section className="panel">
        <p className="kicker">उभरता अनुसन्धान</p>
        <h2>भाषा, सांस्कृतिक न्यूरोसाइंस और परीक्षणयोग्य प्रश्न</h2>
        <p>भारतीय बौद्धिक और साधना-परम्पराओं में स्मृति, ध्यान, जप, पाठ, दृश्य-कल्पना, श्वास-नियमन, भाषा-अभ्यास और दीर्घकालीन एकाग्रता से जुड़ी अत्यन्त संरचित पद्धतियाँ हैं। इन्हें केवल प्राचीन होने के कारण अस्वीकार करना उचित नहीं, और केवल परम्परा में होने के कारण वैज्ञानिक रूप से सिद्ध मान लेना भी उचित नहीं।</p>
        <p>इनसे वैज्ञानिक प्रश्न उत्पन्न किए जा सकते हैं: बहुभाषिक अनुभव brain networks को कैसे प्रभावित करता है? अवधान की cognitive demands क्या हैं? क्या दीर्घकालीन पाठ या contemplative practice ध्यान, स्मृति, physiology या neuroplasticity में मापे जा सकने वाले परिवर्तन उत्पन्न करते हैं?</p>
        <p><b>परम्परागत अवलोकन → अनुसन्धान-प्रश्न → परीक्षणयोग्य परिकल्पना → वैज्ञानिक अध्ययन → प्रमाण → पुनरावृत्ति</b></p>
        <Link className="textLink" href="/hi/prashna">अनुसन्धान-प्रश्न देखें →</Link>
      </section>

      <section className="panel">
        <h2>वैज्ञानिक प्रकाशन देखें</h2>
        <div className="buttons" style={{justifyContent:'flex-start'}}>
          <a className="btn primary" href="https://scholar.google.com/citations?user=1n2JUc8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
          <Link className="btn secondary" href="/publications">Selected Publications</Link>
          <Link className="btn secondary" href="/hi/sahyog">सहयोग करें</Link>
        </div>
      </section>
    </main>
  </>;
}
