/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: ['./app/styles'],
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.shopify.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    // Development optimizations
    ...(process.env.NODE_ENV === 'development' && {
        compiler: {
            removeConsole: false,
        },
    }),
    // WSL file watching fix
    webpack: (config, { dev }) => {
        if (dev) {
            config.watchOptions = {
                poll: 1000, // Check for changes every second
                aggregateTimeout: 300, // Delay before rebuilding
                ignored: /node_modules|\.next|\.git|public|favicon\.ico/, // Ignore these paths
            }
        }
        return config
    },
}

module.exports = nextConfig
