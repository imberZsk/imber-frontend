import { globby } from 'globby'

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
