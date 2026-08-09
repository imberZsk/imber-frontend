'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { navigationSections } from '@/app/const'

interface AnimationsSidebarProps {
  children: React.ReactNode
}

/** 渲染动画详情页的响应式实验索引和内容区域。 */
export default function AnimationsSidebar({ children }: AnimationsSidebarProps) {
  // pathname 存储当前路由，用于标记正在浏览的实验。
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-[#101211]">
      {/* 左侧菜单栏 */}
      <aside className="fixed top-16 left-0 z-40 flex h-16 w-full items-center border-b border-[#343a36] bg-[#151816] px-3 md:block md:h-[calc(100vh-4rem)] md:w-72 md:overflow-y-auto md:border-r md:border-b-0 md:px-5 md:py-7">
        <div className="mb-6 hidden md:block">
          <p className="mb-2 font-mono text-[11px] font-bold text-[#71e6bd]">EXPERIMENT INDEX</p>
          <h2 className="m-0 text-lg font-semibold text-[#f4f6f3]">Animation library</h2>
        </div>
        <nav className="min-w-0 flex-1 overflow-x-auto md:space-y-4 md:overflow-visible">
          <div className="flex w-max items-center gap-1.5 md:block md:w-auto md:space-y-1">
            {navigationSections.map((tab, index) => {
              // isActive 标记当前实验入口是否与浏览器路由一致。
              const isActive = pathname === tab.path
              return (
                <Link
                  key={tab.id + index}
                  href={tab.path}
                  className={`block w-max cursor-pointer whitespace-nowrap rounded px-3 py-2 text-left text-sm transition-colors md:w-full ${
                    isActive
                      ? 'bg-[#71e6bd] font-semibold text-[#0d211a]'
                      : 'text-[#aeb6b0] hover:bg-[#222623] hover:text-[#f4f6f3]'
                  }`}
                >
                  {tab.name}
                </Link>
              )
            })}
          </div>
        </nav>
      </aside>

      {/* 右侧内容区域 */}
      <div className="min-h-screen bg-[#101211] pt-32 md:pt-16 md:pl-72">{children}</div>
    </div>
  )
}
