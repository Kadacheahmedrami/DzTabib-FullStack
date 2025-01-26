import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images : {
    domains : ['loremflickr.com']
  }
  /* config options here */
};

export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   async rewrites() {
//     return [
//       {
//         source: "/api/:path*", // Proxy path
//         destination: "https://dztabib.onrender.com/:path*", // Backend API
//       },
//     ];
//   },
// };

// export default nextConfig;
