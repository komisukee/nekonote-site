/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
        images: {
        domains: ["images.microcms-assets.io"],
    },
}
 
module.exports = nextConfig