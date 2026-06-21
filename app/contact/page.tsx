export default function ContactPage() {
  return (
    <main className="pageShell">
      <section className="pageHero compact">
        <p className="eyebrow">Connect</p>
        <h1>Contact IvyPandit</h1>
        <p>
          For lectures, educational programs, collaborations, public conversations,
          and IvyPandit-related communication.
        </p>
      </section>

      <section className="contentGrid">
        <div className="contentCard">
          <h2>Email</h2>
          <p><a href="mailto:nishant.mishra@ivypandit.com">nishant.mishra@ivypandit.com</a></p>
          <p><a href="mailto:ptnishantkmishra@gmail.com">ptnishantkmishra@gmail.com</a></p>
        </div>

        <div className="contentCard">
          <h2>Social & Community</h2>
          <p><a href="https://x.com/IvyPandit" target="_blank" rel="noopener noreferrer">X / Twitter: @IvyPandit</a></p>
          <p><a href="https://www.linkedin.com/in/ivy-pandit/" target="_blank" rel="noopener noreferrer">LinkedIn: IvyPandit</a></p>
          <p><a href="https://www.facebook.com/profile.php?id=61576900484843" target="_blank" rel="noopener noreferrer">Facebook: IvyPandit</a></p>
          <p><a href="https://whatsapp.com/channel/0029Vb8Gcek8KMqcg1X7IS0g" target="_blank" rel="noopener noreferrer">WhatsApp Channel</a></p>
        </div>
      </section>

      <section className="quotePanel">
        <h2>For Knowledge. For Understanding. For Human Flourishing.</h2>
        <p>वसुधैव कुटुम्बकम्</p>
      </section>
    </main>
  );
}
