import createNextIntlPlugin from "next-intl/plugin";
/** @type {import('next').NextConfig} */
const nextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:locale(en|es)/api/:path*",
  //       destination: "/api/:path*",
  //     },
  //     // other rewrites...
  //   ];
  // },

  images: {
    domains: ["utfs.io", "images.unsplash.com"],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
