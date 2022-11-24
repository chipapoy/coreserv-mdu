/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
//   publicRuntimeConfig: {
//     // Will be available on both server and client
//     backendUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
//   },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'https://chipapoy.online/:path*'
  //     }
  //   ]
  // },
  async headers() {
    return [
      {
        // matching all API routes
        source: [
          "/data/:path*",
          "/:path*"
        ],
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
}

module.exports = nextConfig
