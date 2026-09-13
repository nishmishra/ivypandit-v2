import Link from 'next/link';
import SanskritNav from '../SanskritNav';

export default function SanskritResearch(){
  return <>
    <section className="pageHero localizedHero sanskritHero">
      <div className="languageHeroInner">
        <div className="eyebrow">विज्ञानम् अनुसन्धानं च</div>
        <h1>वैज्ञानिककार्य</h1>
        <p>मस्तिष्काघातः, पुनर्रक्तसञ्चारः, न्यूरोइमेजिङ्, मस्तिष्काघातोत्तर-अपस्मारः, जैवचिह्नानि, चिकित्सकीयपरीक्षणानि, संज्ञानम्, भाषा, न्यूरोप्लास्टिसिटी तथा उद्भवमानं सांस्कृतिक-न्यूरोविज्ञानम्।</p>
        <div className="buttons" style={{justifyContent:'center', marginTop:'22px'}}>
          <Link className="btn secondary" href="/research">English</Link>
          <Link className="btn secondary" href="/hi/research">हिन्दी</Link>
        </div>
      </div>
    </section>

    <main className="content devanagariPage sanskritPage">
      <SanskritNav/>

      <section className="manifesto localizedManifesto">
        <p className="kicker">एका निरन्तरा वैज्ञानिकयात्रा</p>
        <h2 className="sectionTitle">तीव्रमस्तिष्कहानितः दीर्घकालीनपुनरुद्धारं, पूर्वानुमानं, मानवीयसंज्ञानं च यावत्</h2>
        <p>मम वैज्ञानिककार्यस्य मूलप्रश्नः अयम् अस्ति—मस्तिष्कस्य गभीरतरज्ञानं चिकित्सां, पुनरुद्धारं, मानवकल्याणं च कथं उन्नयितुं शक्नोति? कालेन मम कार्यं तीव्रमस्तिष्काघातात् पुनर्रक्तसञ्चारपर्यन्तम्, तस्मात् मस्तिष्कचित्रणाधारित-रोगिनिर्वाचनम्, चिकित्साफलम्, मस्तिष्काघातोत्तर-अपस्मारः, जैवचिह्नानि, precision neuroscience, भाषा, द्विभाषिकता, संज्ञानं, न्यूरोप्लास्टिसिटी च प्रति विस्तृतम्।</p>
        <p>एते पृथक् विषयाः न, अपितु मस्तिष्कं हानिं, चिकित्सां, भाषां, शिक्षणं, अभ्यासं, ध्यानम्, अनुभवं च प्रति कथं प्रत्युत्तरं ददाति इत्यस्य विभिन्नाः पक्षाः।</p>
      </section>

      <div className="researchBands">
        <section className="panel"><h2>मस्तिष्काघातः, पुनर्रक्तसञ्चारः, न्यूरोइमेजिङ् च</h2><p>तीव्र-इस्कीमिक-मस्तिष्काघातः, thrombolysis, endovascular-चिकित्सा, perfusion तथा mismatch imaging, ऊतकजीवनीयता, रोगिनिर्वाचनम्, चिकित्साफलम्, काल–ऊतक–रक्तप्रवाह–पुनरुद्धारसम्बन्धश्च।</p></section>
        <section className="panel"><h2>मस्तिष्काघातोत्तर-अपस्मारः तथा मस्तिष्कजालानि</h2><p>आक्षेपाः, epileptogenesis, जोखिमपूर्वानुमानम्, जैवचिह्नानि, genetics, proteomics, उपचारप्रश्नाः तथा vascular neurology-epilepsy क्षेत्रयोः अन्तर्राष्ट्रीयसहकारः।</p></section>
        <section className="panel"><h2>संज्ञानम्, भाषा, न्यूरोप्लास्टिसिटी च</h2><p>द्विभाषिकता, बहुभाषिकानुभवः, अवधानम्, स्मृतिः, cognitive reserve, संस्कृताध्ययन-पाठः, दीर्घकालीनविशेषज्ञता, contemplative practice तथा सांस्कृतिकपरम्पराभ्यः उत्पन्नाः परीक्षणयोग्यवैज्ञानिकप्रश्नाः।</p></section>
      </div>

      <section>
        <p className="kicker">चयनितवैज्ञानिकयोगदानानि</p>
        <h2 className="sectionTitle">प्रतिनिधि-अनुसन्धानानि तेषां मूलप्रश्नाश्च</h2>
        <p>अत्र सम्पूर्णप्रकाशनसूची न प्रदर्श्यते। निम्नलिखितानि अध्ययनानि मम वैज्ञानिककार्यस्य क्रमिकविकासं दर्शयन्ति।</p>

        <div className="twoCol">
          <section className="panel"><div className="eyebrow">The BMJ · 2010</div><h2>अतिवृद्धेषु रोगिषु thrombolysis</h2><p>यस्मिन् काले वृद्धावस्था एव बहुषु स्थलेषु thrombolysis-चिकित्सायाः सीमा आसीत्, तदा अस्मिन् अन्तर्राष्ट्रीय-अध्ययने अतिवृद्धरोगिषु चिकित्साफलानि परीक्षितानि तथा आय्वाधारित-प्रतिबन्धानां पुनर्विचाराय प्रमाणं प्रदत्तम्।</p><a className="textLink" href="https://doi.org/10.1136/bmj.c6046" target="_blank" rel="noopener noreferrer">लेखं पश्यतु →</a></section>

          <section className="panel"><div className="eyebrow">Diabetes Care · 2010</div><h2>पूर्वमस्तिष्काघातः, मधुमेहः, thrombolysis च</h2><p>पूर्वमस्तिष्काघातयुक्ताः मधुमेहिनः च रोगिणः अनेकत्र intravenous thrombolysis इत्यस्मात् वर्जिताः आसन्। अस्मिन् अध्ययने तादृशं वर्जनं वास्तविकचिकित्साफलैः समर्थ्यते वा न वा इति परीक्षितम्।</p><a className="textLink" href="https://doi.org/10.2337/dc10-1125" target="_blank" rel="noopener noreferrer">लेखं पश्यतु →</a></section>

          <section className="panel"><div className="eyebrow">Stroke · 2010</div><h2>Mismatch-Based Delayed Thrombolysis</h2><p>अस्य कार्यस्य प्रमुखः प्रश्नः आसीत्—परम्परागत-कालसीमा अतीता चेत् अपि imaging द्वारा रक्षणीयं मस्तिष्क-ऊतकं ज्ञातुं शक्यते किम्? एषः विचारः कालमात्रात् जैविक-ऊतकस्थित्याधारितनिर्वाचनं प्रति आधुनिकचिन्तनस्य भागः अभवत्।</p><a className="textLink" href="https://doi.org/10.1161/STROKEAHA.109.566869" target="_blank" rel="noopener noreferrer">लेखं पश्यतु →</a></section>

          <section className="panel"><div className="eyebrow">Neurology · 2011</div><h2>पूर्वमस्तिष्काघात-मधुमेहयुक्तेषु thrombolysis</h2><p>विस्तीर्णस्य अन्तर्राष्ट्रीयदत्तांशस्य उपयोगेन अस्मिन् अध्ययने परम्परया अधिकजोखिमयुक्ता इति मता रोगिसमूहे thrombolysis-सम्बद्धानि फलानि परीक्षितानि।</p><a className="textLink" href="https://doi.org/10.1212/WNL.0b013e318238ee42" target="_blank" rel="noopener noreferrer">लेखं पश्यतु →</a></section>

          <section className="panel"><div className="eyebrow">Stroke · 2011</div><h2>Home Time — रोगिकेन्द्रितं फलमापनम्</h2><p>रोगी कियत्कालं जीवन् चिकित्सालयात् अथवा संस्थागतसेवातः बहिः स्वगृहे वसति—एतत् वास्तविकपुनरुद्धारस्य सरलम् अर्थपूर्णं च मापनं भवितुमर्हति। अस्मिन् अध्ययने thrombolysis अनन्तरं home time परीक्षितम्।</p><a className="textLink" href="https://doi.org/10.1161/STROKEAHA.110.601302" target="_blank" rel="noopener noreferrer">लेखं पश्यतु →</a></section>

          <section className="panel"><div className="eyebrow">Stroke · 2013</div><h2>Modified Graeb Score</h2><p>एतत् सहयोगात्मक-अनुसन्धानम् intraventricular hemorrhage इत्यस्य परिमाणस्य सूक्ष्मतरमापनाय तथा तस्य कार्यात्मकफलेन सम्बन्धस्य मूल्याङ्कनाय कृतम्।</p><a className="textLink" href="https://doi.org/10.1161/STROKEAHA.112.670653" target="_blank" rel="noopener noreferrer">लेखं पश्यतु →</a></section>

          <section className="panel"><div className="eyebrow">JAMA Neurology · 2023</div><h2>मस्तिष्काघातोत्तर-आक्षेपाः तथा दीर्घकालीनफलानि</h2><p>अस्मिन् अन्तर्राष्ट्रीय-अध्ययने post-stroke seizures तथा अनन्तरचिकित्साफलानां सम्बन्धः परीक्षितः। अहं senior तथा corresponding author रूपेण stroke तथा epilepsy क्षेत्रयोः अन्तर्राष्ट्रीयसहयोगिभिः सह कार्यस्य नेतृत्वं कृतवान्।</p><a className="textLink" href="https://doi.org/10.1001/jamaneurol.2023.3240" target="_blank" rel="noopener noreferrer">लेखं पश्यतु →</a></section>

          <section className="panel"><div className="eyebrow">Neurology · 2024</div><h2>मस्तिष्काघातोत्तर-अपस्मारः: रोगजननम्, निदानम्, पूर्वानुमानम्, प्रतिषेधश्च</h2><p>अस्मिन् अन्तर्राष्ट्रीयसमीक्षालेखे vascular neurology तथा epileptology इत्येतयोः ज्ञानं संयोज्य अपस्मारस्य उत्पत्तिः, जोखिमपरिचयः, निदानम्, पूर्वानुमानम् तथा भाविप्रतिषेधमार्गाः समालोचिताः।</p><a className="textLink" href="https://doi.org/10.1212/WNL.0000000000209450" target="_blank" rel="noopener noreferrer">लेखं पश्यतु →</a></section>
        </div>
      </section>

      <section className="panel">
        <p className="kicker">वैज्ञानिकप्रश्नपरम्परा</p>
        <h2>कार्यस्य विभिन्नभागान् संयोजयन्तः प्रश्नाः</h2>
        <div className="flowLine"><span>कः उपचारं प्राप्नुयात्?</span><b>→</b><span>कियत् ऊतकं रक्षितुं शक्यते?</span><b>→</b><span>पुनरुद्धारः कथं मापनीयः?</span><b>→</b><span>कस्य दीर्घकालीनजटिलता भविष्यति?</span><b>→</b><span>पूर्वानुमानं प्रतिषेधश्च शक्यते किम्?</span></div>
      </section>

      <section className="twoCol">
        <div className="panel"><h2>भारते मस्तिष्कस्वास्थ्यं तथा Stroke-अनुसन्धानम्</h2><p>भारतस्य brain-health infrastructure विषये मम दीर्घकालीनरुचिः <i>Stroke Program for India</i> लेखात् आरभ्य multicenter registries, clinical trials, imaging collaborations, data platforms, प्रशिक्षणकार्यक्रमाः तथा भारतानुकूलाः prevention-treatment पद्धतयः यावत् विस्तृता अस्ति।</p><a className="textLink" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2859584/" target="_blank" rel="noopener noreferrer">Stroke Program for India पठतु →</a></div>
        <div className="panel"><h2>जैवचिह्नानि, प्रोटीओमिक्स्, दत्तांशविज्ञानं च</h2><p>न्यूरोलॉजिकल्-रोगाः जैविकदृष्ट्या विविधाः सन्ति। वर्तमानकार्ये clinical data, imaging, biomarkers, proteomics, genetics तथा computational approaches संयोज्य सूक्ष्मतरजैविकबोधः, जोखिमपूर्वानुमानम्, precision neurological care च विकसितुं प्रयत्नः क्रियते।</p></div>
      </section>

      <section className="panel">
        <p className="kicker">उद्भवमानम् अनुसन्धानम्</p>
        <h2>भाषा, सांस्कृतिक-न्यूरोविज्ञानम्, परीक्षणयोग्यप्रश्नाश्च</h2>
        <p>भारतीयासु बौद्धिकासु साधनापरम्परासु स्मृतिः, अवधानम्, जपः, पाठः, मानसिकदर्शनम्, श्वासनियमनम्, भाषाभ्यासः, दीर्घकालीनैकाग्रता च सम्बद्धाः संरचिताः अभ्यासाः विद्यन्ते। केवलं प्राचीनत्वात् तेषां निरसनं न युक्तम्; केवलं परम्परायां स्थितत्वात् वैज्ञानिकसिद्धत्वं कल्पयितुमपि न युक्तम्।</p>
        <p>तेभ्यः वैज्ञानिकप्रश्नाः उत्पद्यन्ते—बहुभाषिकानुभवः मस्तिष्कजालानि कथं प्रभावितं करोति? अवधानस्य संज्ञानात्मकभारः कः? दीर्घकालीनपाठः अथवा contemplative practice अवधान-स्मृति-शरीरक्रिया-न्यूरोप्लास्टिसिटीषु मापनीयपरिवर्तनानि जनयति किम्?</p>
        <p><b>परम्परागतनिरीक्षणम् → अनुसन्धानप्रश्नः → परीक्षणयोग्या परिकल्पना → वैज्ञानिकपरीक्षणम् → प्रमाणम् → पुनरावृत्तिः</b></p>
        <Link className="textLink" href="/sa/prashna">अनुसन्धानप्रश्नान् पश्यतु →</Link>
      </section>

      <section className="panel">
        <h2>सम्पूर्णं वैज्ञानिकप्रकाशनवृत्तं पश्यतु</h2>
        <div className="buttons" style={{justifyContent:'flex-start'}}>
          <a className="btn primary" href="https://scholar.google.com/citations?user=1n2JUc8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
          <Link className="btn secondary" href="/sa/publications">प्रकाशनानि</Link>
          <Link className="btn secondary" href="/sa/sahayoga">सहकारः</Link>
        </div>
      </section>
    </main>
  </>;
}
