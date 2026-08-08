import { MetadataRoute } from 'next'

// THREE_SITEMAP_URL 表示统一站点中的 3D sitemap 地址。
const THREE_SITEMAP_URL = 'https://imber-frontend.netlify.app/3d/sitemap.xml'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: THREE_SITEMAP_URL
  }
}
