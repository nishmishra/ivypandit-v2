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
          <div className="topbarInner">
            <div className="language"><Link href="/">English</Link><span>|</span><Link href="/hi">हिन्दी</Link><span>|</span><Link href="/sa">संस्कृतम्</Link></div>
            <div className="socialLinks"><a href="https://www.youtube.com/@IvyPandit" aria-label="YouTube">▶</a><a href="https://x.com/nishmishra" aria-label="X">𝕏</a><a href="https://www.linkedin.com/in/nishantkmishra" aria-label="LinkedIn">in</a></div>
          </div>
        </div>
        <header className="siteHeader">
          <Link href="/" className="brandBlock"><span className="treeMark">☀</span><span><strong>IVY PANDIT</strong><em>Ancient Wisdom. Modern Neuroscience.<br/>Timeless Inquiry.</em></span></Link>
          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/research">Research</Link>
            <Link href="/articles">Articles</Link>
            <Link href="/videos">YouTube</Link>
            <Link href="/shastra-study">Shastra Study</Link>
            <Link href="/speaking">Speaking</Link>
            <Link href="/support">Support</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
        <footer className="footer">
          <div className="footerGrid">
            <div><div className="footerBrand">☀ IVY PANDIT</div><p>Ancient Wisdom.<br/>Modern Neuroscience.<br/>Timeless Inquiry.</p></div>
            <div><h4>Quick Links</h4><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/research">Research</Link><Link href="/articles">Articles</Link><Link href="/videos">YouTube</Link><Link href="/contact">Contact</Link></div>
            <div><h4>Explore</h4><a href="https://youtube.com/playlist?list=PLwQYDVEShtUrQTTjvBffuXE8wWoEnKEXj&si=c76V84a4zyCdKdM_">Gayatri Mantra Series</a><a href="https://www.youtube.com/@IvyPandit">IvyPandit Channel Archive</a><Link href="/shastra-study">Shastra Library</Link><Link href="/speaking">Invite Me to Speak</Link></div>
            <div><h4>Connect</h4><a href="mailto:nishant.mishra@ivypandit.com">nishant.mishra@ivypandit.com</a><a href="mailto:info@ivypandit.com">info@ivypandit.com</a><a href="https://scholar.google.com/citations?user=1n2JUc8AAAAJ&hl=en">Google Scholar</a><a href="https://www.youtube.com/@IvyPandit">YouTube @IvyPandit</a></div>
          </div>
          <div className="footerBottom"><span>“सा विद्या या विमुक्तये” — Knowledge that liberates.</span><span>© 2025 Ivy Pandit. All rights reserved.</span></div>
        </footer>
      </body>
    </html>
  );
}
