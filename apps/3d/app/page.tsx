import Image from 'next/image'
import Link from 'next/link'
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

/** 渲染统一视觉语言下的 3D 实验索引页。 */
export default function Page(): JSX.Element {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1180px] px-5 pt-28 pb-20 md:px-8 md:pt-36">
      <header className="mb-12 grid gap-6 border-b border-[#343a36] pb-10 md:grid-cols-[1fr_360px] md:items-end">
        <div>
          <p className="mb-4 font-mono text-xs font-bold text-[#71e6bd]">SPATIAL STUDIES / 06 SCENES</p>
          <h1 className="max-w-3xl text-4xl leading-tight font-bold text-[#f4f6f3] md:text-6xl">Interactive space, rendered in the browser.</h1>
        </div>
        <p className="m-0 text-sm leading-7 text-[#aeb6b0] md:text-base">从材质、环境贴图到 GLTF 与 FBX 模型，逐步探索 Three.js 在浏览器中的空间表达与交互方式。</p>
      </header>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="3D 实验列表">
        {THREE_DEMOS.map((demo) => (
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
    </main>
  )
}
