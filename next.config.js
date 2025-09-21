/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Don't fail the build if ESLint isn't installed in the environment
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      { source: '/programs', destination: '/courses', permanent: true },
      { source: '/program', destination: '/courses', permanent: true },
      { source: '/course', destination: '/courses', permanent: true },
    ]
  },
}

module.exports = nextConfig
