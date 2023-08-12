/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        base_url: "https://admin.noeticit.tech",
    },
    images: {
        domains: ['admin.noeticit.tech'], // Add your domain(s) to this array
    },
}

module.exports = nextConfig
