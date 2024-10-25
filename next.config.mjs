/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ecosmetics.com',
        pathname: '/**', // Allow all paths from this domain
      },
      {
        protocol: 'https',
        hostname:
          'nw-profile-images20220414025019424500000002.s3.amazonaws.com',
        pathname: '/**', // Allow all paths from the S3 domain
      },
    ],
  },
}

export default nextConfig
