import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IvyPandit | Ancient Wisdom. Modern Neuroscience.',
  description: 'IvyPandit is a public education initiative exploring neuroscience, Sanskrit literature, Indian Knowledge Systems, consciousness, learning, and human flourishing.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="topbar">
          <div className="topbarInner">
            <div className="language">
              <Link href="/">English</Link><span>|</span><Link href="/hi">हिन्दी</Link><span>|</span><Link href="/sa">संस्कृतम्</Link>
            </div>
            <div className="socialLinks">
              <a href="https://www.youtube.com/@IvyPandit" aria-label="YouTube">▶</a>
              <a href="https://www.facebook.com/profile.php?id=61576900484843" aria-label="Facebook">f</a>
              <a href="https://scholar.google.com/citations?user=1n2JUc8AAAAJ&hl=en" aria-label="Google Scholar">Scholar</a>
            </div>
          </div>
        </div>
        <header className="siteHeader">
          <Link href="/" className="brandBlock">
            <span className="treeMark">☀</span>
            <span><strong>IVY PANDIT</strong><em>Ancient Wisdom. Modern Neuroscience.<br/>Timeless Inquiry.</em></span>
          </Link>
          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/about">About IvyPandit</Link>
            <Link href="/journey">The Journey</Link>
            <Link href="/research">Research</Link>
            <Link href="/videos">Lectures</Link>
            <Link href="/shastra-study">Shastra Study</Link>
            <Link href="/speaking">Lectures & Conversations</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
        <footer className="footer">
          <div className="footerGrid">
            <div>
              <div className="footerBrand">☀ IVY PANDIT</div>
              <p>Ancient Wisdom.<br/>Modern Neuroscience.<br/>Vasudhaiva Kutumbakam.</p>
            </div>
            <div><h4>Explore</h4><Link href="/about">About IvyPandit</Link><Link href="/videos">Featured Lectures</Link><Link href="/shastra-study">Shastra Study</Link><Link href="/speaking">Lectures & Conversations</Link></div>
            <div><h4>Connect</h4><a href="mailto:nishant.mishra@ivypandit.com">nishant.mishra@ivypandit.com</a><a href="https://www.youtube.com/@IvyPandit">YouTube @IvyPandit</a><a href="https://www.facebook.com/profile.php?id=61576900484843">Facebook Page</a><a href="https://scholar.google.com/citations?user=1n2JUc8AAAAJ&hl=en">Google Scholar</a></div>
          </div>
          <p className="quote">“सा विद्या या विमुक्तये” — Knowledge that liberates.</p>
          <p className="tiny">© 2026 IvyPandit. Educational, hypothesis-generating content. Not medical advice. Views are independent and do not represent any employer or affiliated institution.</p>
        </footer>
      </body>
    </html>
  );
}
