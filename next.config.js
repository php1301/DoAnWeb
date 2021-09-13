const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});
const config = {
    devServer: {
        proxy: {
            "/api": "http://localhost:3000",
        },
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: [],
    },
};
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
    pwa: {
        disable: process.env.NODE_ENV !== "production",
        dest: "public",
        runtimeCaching,
    },
});

module.exports = withPlugins([[withBundleAnalyzer, withPWA]], config);
