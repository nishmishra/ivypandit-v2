import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'व्याख्यान और वक्तृत्व',
  description: 'डॉ. निशान्त के. मिश्र के हिन्दी और अंग्रेज़ी व्याख्यान: न्यूरोसाइंस, संस्कृत, भारतीय ज्ञान प्रणाली, गीता, महाभारत, गायत्री, अवधान, मस्तिष्क स्वास्थ्य और मानव विकास।',
  alternates: {
    canonical: '/hi/speaking',
    languages: {
      en: '/speaking',
      hi: '/hi/speaking',
      sa: '/sa/speaking',
      'x-default': '/speaking',
    },
  },
};

export default function HindiSpeakingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
