/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        base_url: "https://test.abid.com.bd/api",
    },
    images: {
        domains: ['test.abid.com.bd'], // Add your domain(s) to this array
    },
}

module.exports = nextConfig
