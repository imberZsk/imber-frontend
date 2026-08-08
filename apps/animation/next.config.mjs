import { withSentryConfig } from '@sentry/nextjs'

// animationBasePath 表示动画应用在统一站点中的发布路径。
const animationBasePath = '/animation'

/** @type {import('next').NextConfig} */
// nextConfig 配置动画应用的纯静态子路径构建。
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  basePath: animationBasePath,
  assetPrefix: animationBasePath,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'store.res.meizu.com',
        port: '',
        pathname: '/www/**'
      },
      {
        protocol: 'https',
        hostname: 'fms.res.meizu.com',
        port: '',
        pathname: '/dms/**'
      },
      {
        protocol: 'https',
        hostname: 'openfile.meizu.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'cimg2.res.meizu.com',
        port: '',
        pathname: '/www/**'
      },
      {
        protocol: 'https',
        hostname: 'ssm.res.meizu.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**'
      }
    ]
  },
  // 忽略 fm 文件夹的类型检查
  typescript: {
    ignoreBuildErrors: true
  }
}

export default withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://www.npmjs.com/package/@sentry/webpack-plugin#options

  org: 'imberzsk',

  project: 'imber-animation',

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true
})
