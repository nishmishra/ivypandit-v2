/** @type {import('next').NextConfig} */
const nextConfig = {
  // IvyPandit intentionally avoids provider-specific runtime features.
  // The site can run on any host that supports a standard Next.js Node build.
  async redirects() {
    return [
      { source: '/youtube', destination: '/videos', permanent: true },
      { source: '/topics', destination: '/videos', permanent: true },
      { source: '/journey', destination: '/about#founder', permanent: true },
      { source: '/articles/gayatri-mantra-cognitive-function', destination: '/articles/gayatri-neuroplasticity', permanent: true },
    ];
  },
};
export default nextConfig;
