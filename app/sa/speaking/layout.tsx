import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'व्याख्यानानि वक्तृत्वं च',
  description: 'डॉ. निशान्त के. मिश्रस्य न्यूरोविज्ञान-संस्कृत-भारतीयज्ञानप्रणाली-गीता-गायत्री-अवधान-मस्तिष्कस्वास्थ्यादिविषयेषु व्याख्यानानि।',
  alternates: {
    canonical: '/sa/speaking',
    languages: {
      en: '/speaking',
      hi: '/hi/speaking',
      sa: '/sa/speaking',
      'x-default': '/speaking',
    },
  },
};

export default function SanskritSpeakingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
