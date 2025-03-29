/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/get_ship_info",
                destination: 'http://localhost:5001/get_ship_info',
            },
        ]
    },
};

export default nextConfig;
