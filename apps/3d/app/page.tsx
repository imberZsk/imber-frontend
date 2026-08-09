'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Search } from 'lucide-react'
import type { ChangeEvent } from 'react'
import { useMemo, useState } from 'react'
import { THREE_BASE_PATH } from '@/lib/site'

interface ThreeDemo {
  description: string
  image: string
  index: string
  path: string
  title: string
  type: string
}

// THREE_DEMOS 存储 3D 实验首页展示的场景信息与入口。
const THREE_DEMOS: ThreeDemo[] = [
  { index: '01', title: '基础场景', description: '从相机、光源和几何体开始理解 Three.js 渲染循环。', image: 'normal.gif', path: '/normal', type: 'FOUNDATION' },
  { index: '02', title: '立方体场景', description: '用六面纹理构建可自由观察的空间环境。', image: 'circle-texture.gif', path: '/scene', type: 'ENVIRONMENT' },
  { index: '03', title: '天空盒', description: '将环境纹理映射到立方体内侧，形成沉浸式背景。', image: 'skybox.gif', path: '/sky-box', type: 'ENVIRONMENT' },
  { index: '04', title: '全景看房', description: '球面贴图结合 OrbitControls，模拟室内全景浏览。', image: 'circle-texture.gif', path: '/circle-texture', type: 'PANORAMA' },
  { index: '05', title: '数据地球', description: '加载 GLTF 点阵模型并持续渲染地球旋转动画。', image: 'earth.gif', path: '/earth', type: 'GLTF' },
  { index: '06', title: '角色动画', description: '加载 FBX 模型与骨骼动画，展示实时角色动作。', image: 'dance.gif', path: '/dance', type: 'FBX' }
]

// THREE_SEARCH_PLACEHOLDER 描述 3D 场景搜索框可检索的内容。
const THREE_SEARCH_PLACEHOLDER = '搜索场景、模型或技术类型'

/** 渲染统一视觉语言下的 3D 实验索引页。 */
export default function Page(): JSX.Element {
  // searchQuery 存储用户输入的 3D 场景搜索词。
  const [searchQuery, setSearchQuery] = useState('')
  // filteredDemos 存储标题、说明或技术类型命中搜索词的 3D 场景。
  const filteredDemos = useMemo(() => {
    // normalizedQuery 存储去除首尾空格并统一为小写的搜索词。
    const normalizedQuery = searchQuery.trim().toLocaleLowerCase()

    if (!normalizedQuery) {
      return THREE_DEMOS
    }

    return THREE_DEMOS.filter((demo) => `${demo.title} ${demo.description} ${demo.type}`.toLocaleLowerCase().includes(normalizedQuery))
  }, [searchQuery])

  /** 同步用户输入的 3D 场景搜索词。 */
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1180px] px-5 pt-28 pb-20 md:px-8 md:pt-36">
      <header className="mb-8 grid gap-6 border-b border-[#343a36] pb-10 md:grid-cols-[1fr_360px] md:items-end">
        <div>
          <p className="mb-4 font-mono text-xs font-bold text-[#71e6bd]">SPATIAL STUDIES / 06 SCENES</p>
          <h1 className="max-w-3xl text-4xl leading-tight font-bold text-[#f4f6f3] md:text-6xl">Interactive space, rendered in the browser.</h1>
        </div>
        <p className="m-0 text-sm leading-7 text-[#aeb6b0] md:text-base">从材质、环境贴图到 GLTF 与 FBX 模型，逐步探索 Three.js 在浏览器中的空间表达与交互方式。</p>
      </header>

      <section className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" aria-label="搜索 3D 场景">
        <label className="flex h-12 w-full max-w-xl items-center gap-3 rounded-md border border-[#343a36] bg-[#191c1a] px-4 transition-colors focus-within:border-[#71e6bd]">
          <Search className="h-4 w-4 shrink-0 text-[#71e6bd]" aria-hidden="true" />
          <span className="sr-only">搜索 3D 场景</span>
          <input
            className="min-w-0 flex-1 bg-transparent text-sm text-[#f4f6f3] outline-none placeholder:text-[#6f7872]"
            type="search"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder={THREE_SEARCH_PLACEHOLDER}
          />
        </label>
        <p className="m-0 font-mono text-xs text-[#6f7872]">{filteredDemos.length} / {THREE_DEMOS.length} SCENES</p>
      </section>

      {filteredDemos.length > 0 ? (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="3D 实验列表">
          {filteredDemos.map((demo) => (
            <article className="group overflow-hidden rounded-lg border border-[#343a36] bg-[#191c1a] transition-colors hover:border-[#71e6bd]" key={demo.path}>
              <Link href={demo.path}>
                <div className="aspect-[16/10] overflow-hidden border-b border-[#343a36] bg-[#0b0d0c]">
                  <Image className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src={`${THREE_BASE_PATH}/${demo.image}`} width={800} height={500} alt={`${demo.title}预览`} unoptimized />
                </div>
                <div className="min-h-36 p-4">
                  <p className="mb-2 font-mono text-[11px] font-bold text-[#71e6bd]">{demo.index} / {demo.type}</p>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="m-0 text-lg font-semibold text-[#f4f6f3]">{demo.title}</h2>
                      <p className="mt-2 mb-0 text-sm leading-6 font-normal text-[#aeb6b0]">{demo.description}</p>
                    </div>
                    <span className="mt-1 text-lg text-[#6f7872] transition-transform group-hover:translate-x-1 group-hover:text-[#71e6bd]" aria-hidden="true">→</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </section>
      ) : (
        <div className="flex min-h-60 items-center justify-center rounded-lg border border-dashed border-[#343a36] text-sm text-[#aeb6b0]">没有找到匹配的 3D 场景</div>
      )}
    </main>
  )
}
