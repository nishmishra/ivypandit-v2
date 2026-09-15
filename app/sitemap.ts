import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.ivypandit.com';
  const routes = [
    '/', '/iks', '/shastra-study', '/research', '/sbkb', '/questions', '/videos', '/speaking', '/collaborate', '/about',
    '/repository', '/evidence', '/publications', '/articles', '/support', '/contact', '/disclaimer', '/editorial-policy', '/privacy', '/terms',
    '/gayatri', '/gita', '/garbhadhana', '/mahabharata', '/bhagavatam', '/principles', '/perspectives',
    '/research/consciousness/avadhana', '/articles/gayatri-neuroplasticity', '/articles/gita-cognitive-resilience', '/articles/garbhadhana-epigenetics',
    '/hi', '/hi/research', '/hi/prashna', '/hi/sahyog', '/hi/speaking',
    '/sa', '/sa/iks', '/sa/shastra', '/sa/research', '/sa/sbkb', '/sa/prashna', '/sa/videos', '/sa/speaking', '/sa/sahayoga', '/sa/about',
    '/sa/publications', '/sa/articles', '/sa/repository', '/sa/support', '/sa/contact', '/sa/disclaimer',
    '/sa/articles/gayatri-neuroplasticity', '/sa/articles/gita-cognitive-resilience', '/sa/articles/garbhadhana-epigenetics',
    '/speaking/speaker-sheet',
    '/speaking/gayatri-samskara-developing-brain',
    '/speaking/avadhana-indian-science-attention',
    '/speaking/bhagavad-gita-cognitive-reframing-resilience',
    '/speaking/ancestors-memory-brain-pitrapaksha',
    '/speaking/shastra-scientific-discovery-iks',
    '/speaking/brain-culture-human-neuroplasticity'
  ];

  const highPriority = new Set(['/', '/research', '/iks', '/shastra-study', '/videos', '/speaking', '/questions', '/sbkb', '/evidence', '/research/consciousness/avadhana']);
  return routes.map((route) => ({
    url: `${base}${route}`,
    changeFrequency: route === '/' || route === '/speaking' || route === '/videos' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : highPriority.has(route) || route.startsWith('/speaking/') ? 0.9 : 0.7,
  }));
}
