// threeBasePath 表示 3D 应用在统一站点中的发布路径。
const threeBasePath = '/3d'

/** @type {import('next').NextConfig} */
// nextConfig 配置 3D 应用的纯静态子路径构建。
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  basePath: threeBasePath,
  assetPrefix: threeBasePath,
  images: {
    unoptimized: true
  }
}

export default nextConfig
