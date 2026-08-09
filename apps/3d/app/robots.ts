import { MetadataRoute } from 'next'

// THREE_SITEMAP_URL 表示统一站点中的 3D sitemap 地址。
const THREE_SITEMAP_URL = 'https://imber-frontend.netlify.app/3d/sitemap.xml'

// STATIC_RENDER_MODE 确保静态导出模式在构建期生成 robots.txt。
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: THREE_SITEMAP_URL
  }
}
