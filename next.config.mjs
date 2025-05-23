/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['s5000.sobhoy.com', 's8080.sobhoy.com', 'res.cloudinary.com'], // Add all external image domains here
  },
  server: {
    allowedHosts: ['nimur5000.sobhoy.com']
  }
};

export default nextConfig;
