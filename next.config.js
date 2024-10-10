/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
          test: /\.m?js$/,
          resolve: {
            fullySpecified: false,
          },
        });
        return config;
      },
    images:{
        domains:["lh3.googleusercontent.com","firebasestorage.googleapis.com"]
      }
};

module.exports = nextConfig
