/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: "/:path*",
          destination: "https://web3backend-uydb.onrender.com/:path*",
        },
      ];
    },
  };
  
export default nextConfig;