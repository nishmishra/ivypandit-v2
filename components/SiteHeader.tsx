'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './SiteHeader.module.css';

export default function SiteHeader({
  brandHome,
  lang,
  nav,
}: {
  brandHome: string;
  lang: string;
  nav: Array<[string, string]>;
}) {
  const [open, setOpen] = useState(false);
  const label = lang === 'sa' ? 'सञ्चरणसूची' : lang === 'hi' ? 'मेनू' : 'Menu';
  const tagline = lang === 'sa' ? 'परम्परा • जिज्ञासा • अनुसन्धानम्' : lang === 'hi' ? 'परम्परा • जिज्ञासा • अनुसन्धान' : 'Tradition • Curiosity • Science';

  return <header className={styles.header}>
    <Link href={brandHome} className={styles.brand} onClick={() => setOpen(false)}>
      <span className={styles.sun}>☀</span><span><b>IVY PANDIT</b><small>{tagline}</small></span>
    </Link>
    <button className={styles.menuButton} type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>{label}</button>
    <nav id="primary-navigation" className={`${styles.nav} ${open ? styles.navOpen : ''}`} aria-label={lang === 'sa' ? 'मुख्यसञ्चरणम्' : lang === 'hi' ? 'मुख्य नेविगेशन' : 'Primary navigation'}>
      {nav.map(([name, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{name}</Link>)}
    </nav>
  </header>;
}
