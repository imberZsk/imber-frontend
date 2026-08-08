'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Home } from 'lucide-react'
import { navigationSections } from '@/app/const'

interface AnimationsSidebarProps {
  children: React.ReactNode
}

export default function AnimationsSidebar({ children }: AnimationsSidebarProps) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-black/80">
      {/* 左侧菜单栏 */}
      <div className="fixed top-0 left-0 z-10 flex h-16 w-full items-center gap-2 border-b border-gray-700 bg-black px-3 md:block md:h-screen md:w-60 md:overflow-y-auto md:border-r md:border-b-0 md:p-3 md:pt-6">
        <h2 className="mb-6 hidden text-sm font-medium text-gray-200 md:block">Animations</h2>
        <nav className="min-w-0 flex-1 overflow-x-auto md:space-y-4 md:overflow-visible">
          <div className="flex w-max items-center gap-1.5 md:ml-2 md:block md:w-auto md:space-y-1.5">
            {navigationSections.map((tab, index) => {
              const isActive = pathname === tab.path
              return (
                <Link
                  key={tab.id + index}
                  href={tab.path}
                  className={`block w-max cursor-pointer whitespace-nowrap rounded px-3 py-1.5 text-left text-sm transition-colors md:w-full ${
                    isActive
                      ? 'bg-gray-200 font-medium text-black'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                  }`}
                >
                  {tab.name}
                </Link>
              )
            })}
          </div>
        </nav>

        {/* 返回首页按钮 */}
        <Link
          href="/"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-900 text-gray-300 transition-all duration-200 hover:border-gray-600 hover:bg-gray-800 hover:text-white md:absolute md:bottom-10 md:left-1/2 md:mt-4 md:h-auto md:w-fit md:-translate-x-1/2 md:gap-2 md:px-4 md:py-2.5"
        >
          <Home className="h-4 w-4" />
          <span className="hidden whitespace-nowrap md:inline">返回首页</span>
        </Link>
      </div>

      {/* 右侧内容区域 */}
      <div className="min-h-screen bg-black/80 pt-16 md:pl-60 md:pt-0">{children}</div>
    </div>
  )
}
