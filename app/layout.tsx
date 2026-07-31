import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IvyPandit | Tradition. Curiosity. Science.',
  description:
    'IvyPandit is an independent scholarly and educational platform for Sanskrit, Indian Knowledge Systems, scientific curiosity, interdisciplinary research, and public learning.',
};

const nav = [
  ['Home', '/'],
  ['IKS Hub', '/iks'],
  ['Śāstra', '/shastra-study'],
  ['Research', '/research'],
  ['SBKB', '/sbkb'],
  ['Perspectives', '/perspectives'],
  ['Learn', '/videos'],
  ['About', '/about'],
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="topbar">
          <div className="topInner">
            <div>
              <Link href="/">English</Link><span>|</span><Link href="/hi">हिन्दी</Link><span>|</span><Link href="/sa">संस्कृतम्</Link>
            </div>
            <div className="social">
              <a href="https://www.youtube.com/@IvyPandit" target="_blank" rel="noopener noreferrer">YouTube</a>
              <a href="https://x.com/IvyPandit" target="_blank" rel="noopener noreferrer">X</a>
              <a href="https://www.linkedin.com/in/ivy-pandit/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>

        <header className="header">
          <Link href="/" className="brand">
            <span className="tree">☀</span>
            <span><b>IVY PANDIT</b><small>Tradition • Curiosity • Science</small></span>
          </Link>
          <nav aria-label="Primary navigation">
            {nav.map(([name, href]) => <Link key={href} href={href}>{name}</Link>)}
          </nav>
        </header>

        {children}

        <footer className="footer">
          <div className="footerGrid">
            <div>
              <div className="footBrand">☀ IVY PANDIT</div>
              <p>Respect tradition.<br/>Encourage curiosity.<br/>Demand rigor.</p>
            </div>
            <div>
              <h4>Explore</h4>
              <Link href="/iks">IKS Hub</Link>
              <Link href="/shastra-study">Śāstra</Link>
              <Link href="/research">Science & Research</Link>
              <Link href="/sbkb">SBKB</Link>
            </div>
            <div>
              <h4>Scholarship</h4>
              <Link href="/perspectives">Perspectives & Working Papers</Link>
              <Link href="/publications">Publications</Link>
              <Link href="/videos">Talks & Learning</Link>
              <Link href="/articles">Articles</Link>
            </div>
            <div>
              <h4>Connect</h4>
              <a href="mailto:nishant.mishra@ivypandit.com">nishant.mishra@ivypandit.com</a>
              <a href="https://www.youtube.com/@IvyPandit" target="_blank" rel="noopener noreferrer">YouTube @IvyPandit</a>
              <a href="https://scholar.google.com/citations?user=1n2JUc8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
              <Link href="/disclaimer">Disclaimer</Link>
            </div>
          </div>
          <div className="footerBottom">
            IvyPandit is independent. Traditional sources, interpretations, research questions, scientific evidence, and public commentary are distinguished wherever possible. Nothing on this site constitutes medical advice.
            <span>© 2026 IvyPandit.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
