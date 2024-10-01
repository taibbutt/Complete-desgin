/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '97.74.89.204',
          port: '',
          pathname: '/uploads/products/**', 
        },
      ],
    },
  };
  
  export default nextConfig;
  