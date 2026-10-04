/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The History page moved when it became a hub for scrapbooks and the
      // timeline; keep old links and bookmarks working.
      { source: "/history-timeline", destination: "/history", permanent: true },
    ];
  },
};

export default nextConfig;
