import { globby } from 'globby'

// STATIC_RENDER_MODE 确保静态导出模式在构建期生成 sitemap.xml。
export const dynamic = 'force-static'

function addPage(page: string) {
  const path = page
    .replace('app', '')
    .replace('.tsx', '')
    .replace('.mdx', '')
    .replace('/page', '')
  return path
}

export default async function sitemap() {
  const pages = await globby([
    'app/**/*.tsx',
    '!app/_*.js',
    '!app/{sitemap,layout}.{js,jsx,ts,tsx}',
    '!app/api'
  ])

  const routes = pages.map((page: string) => ({
    url: `${process.env.WEBSITE_URL}${addPage(page)}`,
    // ISO标准
    lastModified: new Date().toISOString()
  }))

  return [...routes]
}
