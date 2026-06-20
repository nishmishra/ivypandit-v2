import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IvyPandit | Ancient Wisdom. Modern Neuroscience.',
  description: 'Nishant K. Mishra, MD, PhD explores ancient wisdom through modern neuroscience, Sanskrit literature, and Indian Knowledge Systems.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="topbar">
          <div className="language"><Link href="/">English</Link><Link href="/hi">हिन्दी</Link><Link href="/sa">संस्कृतम्</Link></div>
          <div><a href="mailto:nishant.mishra@ivypandit.com">nishant.mishra@ivypandit.com</a></div>
        </div>
        <header className="siteHeader">
          <Link href="/" className="brandName">IvyPandit</Link>
          <p>Nishant K. Mishra, MD, PhD · Exploring Ancient Wisdom Through Modern Neuroscience</p>
        </header>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/videos">Videos</Link>
          <Link href="/shastra-study">Shastra Study</Link>
          <Link href="/research">Research</Link>
          <Link href="/speaking">Speaking</Link>
          <Link href="/support">Support</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        {children}
        <footer className="footer">
          <h3>IvyPandit</h3>
          <p>Ancient Wisdom. Modern Neuroscience. Thoughtful Inquiry.</p>
          <p><a href="mailto:nishant.mishra@ivypandit.com">nishant.mishra@ivypandit.com</a></p>
          <p><a href="https://www.youtube.com/playlist?list=PLwQYDVEShtUqlbNhL2Rc53GbmzziVtgwN">YouTube Lecture Playlist</a> · <a href="https://scholar.google.com/citations?user=1n2JUc8AAAAJ&hl=en">Google Scholar</a></p>
        </footer>
      </body>
    </html>
  );
}
