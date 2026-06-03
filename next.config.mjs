/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Demo-Bilder von Unsplash. Pro Kunde durch eigene Assets ersetzen.
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
}

export default nextConfig
