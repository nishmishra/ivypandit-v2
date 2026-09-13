import SanskritNav from '../SanskritNav';

const academicHighlights = [
  {id:'_U0YB0YVWxI',start:214,title:'चयनितम् अकादमिकं वैज्ञानिकं व्याख्यानम् — १',summary:'डॉ. मिश्रस्य व्यापक-आइवीपण्डित-व्याख्यानसंग्रहे अकादमिक-वैज्ञानिक-लोकशिक्षणस्य चयनितम् उदाहरणम्।'},
  {id:'QsLBK1qPCPg',start:517,title:'चयनितम् अकादमिकं वैज्ञानिकं व्याख्यानम् — २',summary:'आइवीपण्डितस्य अकादमिक-अन्तरविषयकपक्षं दर्शयत् चयनितं व्याख्यानम्।'},
  {id:'LjupamrT6Uw',start:31,title:'चयनितम् अकादमिकं वैज्ञानिकं व्याख्यानम् — ३',summary:'डॉ. निशान्त के. मिश्रस्य वैज्ञानिक-विद्वत्-लोकसंवादस्य अपरम् उदाहरणम्।'},
  {id:'nTCykV_86Mo',start:153,title:'युद्धात् पूर्वम् अर्जुनस्य विषादस्य संज्ञानात्मकं पुनर्निरूपणम्',summary:'भगवद्गीतायाः प्रसङ्गेन अर्जुनस्य संकटम्, मोहः, दृष्टिकोणः, कर्तव्यम्, cognitive reframing च मनोविज्ञान-संज्ञानदृष्ट्या चर्च्यते।'}
];

const talks = [
  ['CbtzXqFRGKI','संस्कृतम्, भारतीयज्ञानप्रणाली, वैज्ञानिकजिज्ञासा च','पारम्परिकज्ञानम्, वैज्ञानिकजिज्ञासा, व्याख्या, परिकल्पना, प्रमाणं च।'],
  ['XkEqWuym3dc','आधुनिकानुसन्धानप्रश्नानां स्रोतोरूपेण पारम्परिकज्ञानम्','मूलस्रोतस्य सावधानाध्ययनात् परीक्षणयोग्याः आधुनिकप्रश्नाः कथं जायेरन्।'],
  ['0SsbaEEcWWc','मनः, संज्ञानं मानवानुभवश्च','भारतीयज्ञानपरम्पराभिः सह संज्ञानस्य मानवानुभवस्य च संवादः।'],
  ['yylfBDXc5CY','शास्त्रम्, व्याख्या, समकालीनजिज्ञासा च','आधुनिकवैज्ञानिकभाषायां रूपान्तरणात् पूर्वं संस्कृतग्रन्थानां स्वसन्दर्भे अवबोधः।'],
  ['cNz4HNv5LdI','अवधानम्, स्मृतिः, सांस्कृतिकविशेषज्ञता च','अवधानम्, स्मृतिः, पाठः, अधिगमः, दीर्घकालिकसांस्कृतिकविशेषज्ञता च।'],
  ['0_SCLDfQdUk','परम्परा, चिकित्सा, मानवकल्याणं च','आचार-स्वास्थ्य-व्यवहार-अर्थसम्बद्धपारम्परिकसंकल्पनाः जैवचिकित्साप्रमाणं च।'],
  ['FIZ5jzLfbxQ','IKS, प्रमाणम्, अनुसन्धानपद्धतिश्च','पाठशास्त्रीय-ऐतिहासिककठोरता आधुनिकवैज्ञानिकपद्धतिभिः सह।'],
  ['knKSnPKvGWA','संस्कृतविज्ञानयोः संवादनिर्माणम्','विद्वांसः, वैज्ञानिकाः, चिकित्सकाः, दार्शनिकाः, साधकाश्च मध्ये अन्तरविषयकसंवादः।']
];

const traditionLinks = [
  ['पुराणम्, इतिहासः, पवित्रकथाः','Vishnu Purana','पुराणोपदेशः, पवित्रकथाः, ब्रह्माण्डविचारः, पारम्परिकव्याख्या च।'],
  ['उत्सवाः, व्रतानि, हिन्दू-आचारः','Janmashtami','उत्सवाः, व्रतम्, पूजा, अनुष्ठानम्, जीवितहिन्दूपरम्परा च।'],
  ['पितृपक्षः, श्राद्धम्, पितृपरम्परा','Pitru Shraddha','पितृस्मरणम्, श्राद्धम्, तर्पणम्, महालयः, सम्बद्धशास्त्रीयपरम्पराश्च।'],
  ['गायत्री, सन्ध्या, मन्त्रसाधना','Gayatri Sandhya','गायत्री, सन्ध्योपासना, मन्त्रः, जपः, ध्यानात्मकसाधना च।'],
  ['संस्कृतपाठः सांस्कृतिकाध्ययनं च','Sanskrit','संस्कृतपाठः, श्लोकाः, पारम्परिकाध्ययनम्, सांस्कृतिकशिक्षा च।']
];

export default function SanskritVideos(){return <>
  <section className="pageHero localizedHero sanskritHero"><div className="languageHeroInner"><div className="eyebrow">आइवीपण्डित-अध्ययनम्</div><h1>व्याख्यानानि संवादाः पारम्परिकाध्ययनं च</h1><p>द्वौ परस्परपूरकौ संग्रहौ — अकादमिकम् अन्तरविषयकं च विद्वत्कार्यम्; तथा स्पष्टतया पारम्परिकं धार्मिकं पुराणिकं सांस्कृतिकं च अध्ययनम्।</p></div></section>
  <main className="content devanagariPage sanskritPage"><SanskritNav/>
    <section className="callout"><b>एकः मञ्चः, द्वौ प्रवेशमार्गौ।</b> विश्वविद्यालय-वैज्ञानिक-व्यावसायिकदर्शकाः अकादमिकविषयेषु प्रत्यक्षं गच्छेयुः; हिन्दू-परम्परा, शास्त्रम्, अनुष्ठानम्, उत्सवाः, संस्कृतिः च इच्छन्तः पृथक् निर्दिष्टं संग्रहं पश्येयुः। एवं उभयोः स्वरूपं स्पष्टं तिष्ठति।</section>

    <section id="academic"><p className="kicker">संग्रहः १ • अकादमिकम् / वैज्ञानिकम् / अन्तरविषयकम्</p><h2 className="sectionTitle">न्यूरोविज्ञानम्, चिकित्सा, संज्ञानम्, संस्कृतम्, भारतीयज्ञानप्रणाली च</h2><p>एतानि व्याख्यानानि आइवीपण्डितस्य विद्वत्पक्षं प्रदर्शयन्ति — अकादमिकचिकित्सा-विज्ञानम्, संज्ञान-मनोविज्ञानम्, अनुसन्धानपद्धतिः, संस्कृतम्, IKS, तथा पारम्परिकस्रोतः आधुनिकजिज्ञासा च मध्ये परिकल्पनाजनकः संवादः।</p>
      <div className="curatedVideoGrid" style={{marginTop:'30px'}}>{academicHighlights.map((talk)=><a key={talk.id} className="videoCard" href={`https://www.youtube.com/watch?v=${talk.id}&t=${talk.start}s`} target="_blank" rel="noopener noreferrer"><img src={`https://i.ytimg.com/vi/${talk.id}/hqdefault.jpg`} alt={talk.title} loading="lazy"/><div><span className="label">अकादमिकम् / वैज्ञानिकम्</span><h2>{talk.title}</h2><p>{talk.summary}</p><strong>YouTube मध्ये पश्यतु →</strong></div></a>)}</div>
      <div className="sectionHeaderRow" style={{marginTop:'44px'}}><div><p className="kicker">चयनित-आइवीपण्डित-संग्रहः</p><h2 className="sectionTitle">अन्यानि अन्तरविषयकव्याख्यानानि</h2></div></div>
      <div className="curatedVideoGrid">{talks.map(([id,topic,summary])=><a key={id} className="videoCard" href={`https://youtu.be/${id}`} target="_blank" rel="noopener noreferrer"><img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt={topic} loading="lazy"/><div><span className="label">अकादमिकम् / अन्तरविषयकम्</span><h2>{topic}</h2><p>{summary}</p><strong>पश्यतु →</strong></div></a>)}</div>
    </section>

    <section id="tradition" style={{marginTop:'54px'}}><p className="kicker">संग्रहः २ • परम्परा / धर्मः / संस्कृतिः</p><h2 className="sectionTitle">हिन्दूचिन्तनम्, पुराणम्, अनुष्ठानम्, उत्सवाः, पाठः, जीवितपरम्परा च</h2><p>अयं संग्रहः अधिकं पारम्परिक-सांस्कृतिकः। हिन्दू-परिचयः, सनातनी-संस्कृतिः, पुराण-शास्त्रविषयाः, व्रत-उत्सवाः, पितृपरम्परा, मन्त्रः, सन्ध्या, संस्कृताध्ययनं च अत्र अन्तर्भवन्ति।</p>
      <div className="curatedVideoGrid" style={{marginBottom:'32px'}}><a className="videoCard" href="https://www.youtube.com/watch?v=AxObzgp-WBw&t=19s" target="_blank" rel="noopener noreferrer"><img src="https://i.ytimg.com/vi/AxObzgp-WBw/hqdefault.jpg" alt="हिन्दू सनातनी संस्कृतिः किम्?" loading="lazy"/><div><span className="label">परम्परा / संस्कृतिः</span><h2>हिन्दू सनातनी संस्कृतिः किम्?</h2><p>हिन्दू-सनातनी-संस्कृतेः अर्थं स्वरूपं च विषयीकृत्य सांस्कृतिक-पारम्परिकचिन्तनम्।</p><strong>YouTube मध्ये पश्यतु →</strong></div></a></div>
      <div className="resourceGrid">{traditionLinks.map(([title,query,desc])=><a key={title} className="panel linkedCard" href={`https://www.youtube.com/@IvyPandit/search?query=${encodeURIComponent(query)}`} target="_blank" rel="noopener noreferrer"><h2>{title}</h2><p>{desc}</p><span>सम्बद्ध-आइवीपण्डित-वीडियो पश्यतु →</span></a>)}</div>
    </section>

    <section className="missionBox" style={{marginTop:'44px'}}><h2>सम्पूर्णम् आइवीपण्डित-YouTube-चैनल्</h2><p>नूतनव्याख्यानानि, लघुचिन्तनानि, अकादमिकसंवादाः, संस्कृत-IKS-सामग्री, पारम्परिकहिन्दूसांस्कृतिकविषयाश्च निरन्तरं योज्यन्ते।</p><div className="buttons"><a className="btn secondary" href="https://www.youtube.com/@IvyPandit" target="_blank" rel="noopener noreferrer">YouTube @IvyPandit</a><a className="btn secondary" href="https://www.youtube.com/@IvyPandit/videos" target="_blank" rel="noopener noreferrer">सर्वाणि वीडियो</a></div></section>
  </main>
</>}
