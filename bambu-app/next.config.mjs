
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.svgrepo.com"], // Reemplaza 'example.com' con tu dominio
  },
  webpack(config){
    config.module.rules.push({
      test: /\.svg$/,
      use: [{loader: '@svgr/webpack', options: {icon: true} }],
    });
    return config;
  }
};

export default nextConfig;

