import SanskritNav from '../SanskritNav';

const collections = [
  ['वेदाः','https://youtube.com/playlist?list=PLwQYDVEShtUoo8AoWn-6jYqbu0bk425h5&si=tJFxbnC9VvDjbGCW','भारतीयज्ञानपरम्परायाः मूलभूतवाङ्मयस्य पाठाः, श्रवणम्, मननं च।'],
  ['उपनिषदः','https://youtube.com/playlist?list=PLwQYDVEShtUpeuJKGxSnFepXer-BY0GVy&si=MRZe8jWsRq67Lnrw','चेतना, आत्मज्ञानम्, तत्त्वम्, मोक्षः इत्यादिविषयाणां अध्ययनम्।'],
  ['गायत्री-व्याख्यानमाला','https://youtube.com/playlist?list=PLwQYDVEShtUrQTTjvBffuXE8wWoEnKEXj&si=c76V84a4zyCdKdM_','गायत्रीमन्त्रस्य संस्कृतपरम्परा, संज्ञानम्, अवधानम्, न्यूरोविज्ञानं च समन्वित्य अध्ययनम्।'],
  ['सम्पूर्णः शास्त्रसंग्रहः','https://www.youtube.com/@IvyPandit/playlists','वेदाः, उपनिषदः, गीता, इतिहासः, पुराणानि, वेदान्तः इत्यादिषु आइवीपण्डितस्य playlist-संग्रहः।']
];

export default function SanskritShastra(){return <main className="pageShell devanagariPage sanskritPage">
  <section className="pageHero compact localizedHero sanskritHero"><div className="languageHeroInner"><p className="eyebrow">शास्त्राध्ययनम्</p><h1>परम्परायाः अध्ययनम्</h1><p>संस्कृतवाङ्मयस्य पठन-श्रवण-मनन-चिन्तनरूपं जीवनपर्यन्तं अध्ययनयात्राम् आइवीपण्डितः विनयेन जिज्ञासया च अभिलेखयति।</p></div></section>
  <section className="content"><SanskritNav/>
    <section className="missionBox"><h2>वसुधैव कुटुम्बकम्</h2><p>ज्ञानं मानवजातेः सामूहिकं दायम्। प्राचीनज्ञानं आधुनिकविज्ञानं च जिज्ञासा-विनय-सेवाभावेन परीक्ष्य सर्वेषां हिताय उपलब्धं करणीयम् इति आइवीपण्डितस्य आकाङ्क्षा।</p></section>
    <section className="contentGrid">{collections.map(([title,href,text])=><a className="contentCard linkedCard" href={href} target="_blank" rel="noopener noreferrer" key={title}><h2>{title}</h2><p>{text}</p><span>संग्रहं उद्घाटयतु →</span></a>)}</section>
    <section className="quotePanel"><h2>ऋतं च सत्यं च</h2><p>यथार्थता सत्यता च — निष्कपटजिज्ञासायाः समानभूमिः।</p></section>
  </section>
</main>}
