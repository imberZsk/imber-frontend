import { MetadataRoute } from 'next'

// ANIMATION_SITEMAP_URL 表示统一站点中的动画 sitemap 地址。
const ANIMATION_SITEMAP_URL = 'https://imber-frontend.netlify.app/animation/sitemap.xml'

// STATIC_RENDER_MODE 确保静态导出模式在构建期生成 robots.txt。
export const dynamic = 'force-static'

// 如果有国际化，可以通过robots动态让搜索引擎爬取对应的页面
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: ANIMATION_SITEMAP_URL
  }
}
