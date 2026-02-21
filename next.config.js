/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
        images: {
        domains: ["images.microcms-assets.io"],
    },
}
 
module.exports = nextConfig