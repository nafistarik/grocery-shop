/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "example.com", // For example.com images
          pathname: "/images/**", // Adjust if your paths differ
        },
        {
          protocol: "https",
          hostname: "ibb.co.com", // Corrected to ibb.co
          pathname: "/**", // Allow all paths
        },
        {
          protocol: "https",
          hostname: "i.ibb.co.com", // Corrected to ibb.co
          pathname: "/**", // Allow all paths
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com", // Corrected to ibb.co
          pathname: "/**", // Allow all paths
        },
        
      ],
    },
  };
  
  export default nextConfig;
  