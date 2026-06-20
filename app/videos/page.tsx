const videos = [
  ['Why I Created IvyPandit: Ancient Wisdom, Modern Neuroscience, and the Search for Understanding','The launch video introducing the purpose of the IvyPandit platform.','https://youtu.be/XkEqWuym3dc?si=-rj450GAkbZZYALF'],
  ['Can Learning Sanskrit Change the Brain?','A discussion of language, memory, attention, recitation, and neuroplasticity.','https://youtu.be/egQBTnJCpAQ?si=m93SLXtxHJCTrnJH'],
  ['Did Gurukuls Train Extraordinary Minds?','Learning, focused attention, natural environments, memory, and the science of education.','https://youtu.be/z8cUfCnHV10?si=1hHuUJD6dJO0dsx8'],
  ['Did Ancient India Understand Hygiene Before Germ Theory?','Ayurveda, cleanliness, public health, daily practice, and contemporary scientific reflection.','https://youtu.be/j-7VlYV8WVQ?si=Nn-T0RRNV9VaAtB8']
];

export default function Videos(){
  return <main className="article">
    <h1>Featured Lectures</h1>
    <p className="lead">A curated entry point into IvyPandit talks on neuroscience, Sanskrit literature, Indian Knowledge Systems, cognition, and human flourishing.</p>
    <div className="videoCards pageCards">
      {videos.map(([title,text,href]) => <a className="videoCard" href={href} key={title}><h3>{title}</h3><p>{text}</p><span>Watch →</span></a>)}
    </div>
    <h2>Gayatri Mantra Series</h2>
    <p>A focused series on the Gayatri Mantra, Sanskrit recitation, meaning, and neuroscience.</p>
    <p><a className="btn" href="https://youtube.com/playlist?list=PLwQYDVEShtUrQTTjvBffuXE8wWoEnKEXj&si=c76V84a4zyCdKdM_">Open Gayatri Playlist</a></p>
    <div className="embed"><iframe src="https://www.youtube.com/embed/videoseries?list=PLwQYDVEShtUrQTTjvBffuXE8wWoEnKEXj" title="Gayatri Mantra Series" allowFullScreen></iframe></div>
    <h2>Shastra and Neuroscience Talks</h2>
    <p>All talks connecting shastra, neuroscience, cognition, meditation, brain health, and contemporary life.</p>
    <div className="embed"><iframe src="https://www.youtube.com/embed/videoseries?list=PLwQYDVEShtUqlbNhL2Rc53GbmzziVtgwN" title="IvyPandit Lecture Playlist" allowFullScreen></iframe></div>
    <h2>IvyPandit Channel Archive</h2>
    <p>Simple readings of the Shastras and all past recordings are available on the IvyPandit YouTube channel.</p>
    <p><a className="btn secondary" href="https://www.youtube.com/@IvyPandit">Visit YouTube Channel</a></p>
  </main>
}
