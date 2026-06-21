export default function ShastraStudyPage() {
  const collections = [
    {
      title: "Vedas",
      href: "https://youtube.com/playlist?list=PLwQYDVEShtUoo8AoWn-6jYqbu0bk425h5&si=tJFxbnC9VvDjbGCW",
      text: "Readings and reflections on the foundational texts of the Indian Knowledge Tradition."
    },
    {
      title: "Upanishads",
      href: "https://youtube.com/playlist?list=PLwQYDVEShtUpeuJKGxSnFepXer-BY0GVy&si=MRZe8jWsRq67Lnrw",
      text: "Explorations of consciousness, self-knowledge, reality, and liberation."
    },
    {
      title: "Gayatri Series",
      href: "https://youtube.com/playlist?list=PLwQYDVEShtUrQTTjvBffuXE8wWoEnKEXj&si=c76V84a4zyCdKdM_",
      text: "The Gayatri Mantra through Sanskrit tradition, cognition, attention, and neuroscience."
    },
    {
      title: "Complete Shastra Library",
      href: "https://www.youtube.com/@IvyPandit/playlists",
      text: "A comprehensive archive of IvyPandit playlists across Vedas, Upanishads, Gita, Itihasa, Puranas, Vedanta, and more."
    }
  ];

  return (
    <main className="pageShell">
      <section className="pageHero compact">
        <p className="eyebrow">Shastra Study</p>
        <h1>Explore the Tradition</h1>
        <p>
          IvyPandit preserves a lifelong journey of reading, listening, reflecting,
          and learning from Sanskrit literature with humility and curiosity.
        </p>
      </section>

      <section className="missionBox">
        <h2>वसुधैव कुटुम्बकम्</h2>
        <p>
          IvyPandit believes that knowledge is humanity&apos;s shared inheritance.
          Our aspiration is to explore ancient wisdom and modern science in a spirit
          of inquiry, humility, and service for the benefit of all people.
        </p>
      </section>

      <section className="contentGrid">
        {collections.map((item) => (
          <a className="contentCard linkedCard" href={item.href} target="_blank" rel="noopener noreferrer" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <span>Open Collection →</span>
          </a>
        ))}
      </section>

      <section className="quotePanel">
        <h2>ऋतं च सत्यं च</h2>
        <p>Reality and truth — the shared ground of sincere inquiry.</p>
      </section>
    </main>
  );
}
