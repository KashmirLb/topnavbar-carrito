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
            value: "default-src 'self'; script-src 'self' 'nonce-gDRGUOpOC-LIAQdoLx71ykxbHLxzahlMoGzQ3O-Fpeo'; style-src 'self' 'sha256-1yXoDkopPdM1MaX0oJCekyQXEnZXj1CPs-guuRaRElI'; frame-ancestors 'self';",
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
