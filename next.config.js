/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        base_url: "https://menuki.dlsoftpro.com/api",
    },
    images: {
        domains: ['menuki.dlsoftpro.com'], // Add your domain(s) to this array
    },
}

module.exports = nextConfig
