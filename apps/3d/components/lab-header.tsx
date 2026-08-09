/* eslint-disable @next/next/no-img-element -- 头像由统一站点根路径提供，不能继承当前应用 basePath。 */
import { Github } from 'lucide-react'

/** 渲染统一站点的产品级导航，并标识 3D 为当前区域。 */
export default function LabHeader(): JSX.Element {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex h-16 items-center border-b border-[#343a36] bg-[#101211]/95 px-4 backdrop-blur-xl md:px-8">
      <a className="flex shrink-0 items-center gap-2.5 font-semibold text-[#f4f6f3]" href="/">
        <img className="h-8 w-8 rounded-full object-cover" src="/assets/avatar.jpeg" alt="Imber" />
        <span className="hidden text-sm sm:inline">Imber Frontend</span>
      </a>
      <nav className="mx-auto flex min-w-0 items-center gap-1 overflow-x-auto rounded-md border border-[#343a36] bg-[#191c1a] p-1 text-xs font-semibold text-[#aeb6b0] sm:text-sm" aria-label="产品导航">
        <a className="whitespace-nowrap rounded px-3 py-2 hover:text-[#f4f6f3]" href="/">Overview</a>
        <a className="whitespace-nowrap rounded px-3 py-2 hover:text-[#f4f6f3]" href="/animation/">Animation</a>
        <a className="whitespace-nowrap rounded bg-[#71e6bd] px-3 py-2 text-[#0d211a]" href="/3d/" aria-current="page">3D</a>
        <a className="whitespace-nowrap rounded px-3 py-2 hover:text-[#f4f6f3]" href="/docs/">Docs</a>
      </nav>
      <a className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#343a36] text-[#aeb6b0] hover:border-[#71e6bd] hover:text-[#71e6bd]" href="https://github.com/imberZsk/imber-frontend" title="查看 GitHub 仓库" aria-label="查看 GitHub 仓库">
        <Github className="h-4 w-4" />
      </a>
    </header>
  )
}
