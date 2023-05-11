/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async headers() {
    return [
      {
        // Set the Content-Security-Policy header for all pages
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'nonce-ABC123'; style-src 'self' 'sha256-DEFG456'; frame-ancestors 'self';",
          },
          {
            key: 'X-Frame-Options',
            value: 'false',
          },
        ],
      },
    ];
  },
};


module.exports = nextConfig
