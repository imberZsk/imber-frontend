'use client'

import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import { navigationSections } from './const'

/** 渲染动画实验的统一索引页。 */
export default function Page(): JSX.Element {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1180px] px-5 pt-28 pb-20 md:px-8 md:pt-36">
      <header className="mb-12 grid gap-6 border-b border-[#343a36] pb-10 md:grid-cols-[1fr_360px] md:items-end">
        <div>
          <p className="mb-4 font-mono text-xs font-bold text-[#71e6bd]">MOTION STUDIES / 22 EXPERIMENTS</p>
          <h1 className="max-w-3xl text-4xl leading-tight font-bold text-[#f4f6f3] md:text-6xl">Web animation, studied frame by frame.</h1>
        </div>
        <p className="m-0 text-sm leading-7 text-[#aeb6b0] md:text-base">用 GSAP 与 Framer Motion 对照拆解文字、布局、滚动和时间轴动画。选择一个实验，查看真实交互与实现源码。</p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {navigationSections.map((item, index) => {
          return <VideoCard key={`${item.id}-${index}`} item={item} index={index} />
        })}
      </div>
    </main>
  )
}

interface VideoCardProps {
  index: number
  item: {
    name: string
    path: string
    src: string
  }
}

/** 渲染单个动画实验卡片，并根据可见性和悬停状态控制预览视频。 */
function VideoCard({ item, index }: VideoCardProps) {
  // videoRef 存储当前卡片预览视频的 DOM 引用。
  const videoRef = useRef<HTMLVideoElement>(null)
  // containerRef 存储卡片容器的 DOM 引用，用于观察可见性。
  const containerRef = useRef<HTMLDivElement>(null)
  // isVisible 记录卡片是否已进入视口，以延迟加载视频资源。
  const [isVisible, setIsVisible] = useState(false)
  // isHovered 记录指针是否停留在卡片上，以控制视频播放。
  const [isHovered, setIsHovered] = useState(false)

  // 懒加载实现
  useEffect(() => {
    // observer 监听卡片进入视口，并在首次命中后停止观察。
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // hover播放控制
  useEffect(() => {
    // video 存储当前预览视频元素，元素不存在时不执行播放控制。
    const video = videoRef.current
    if (!video || !isVisible) return

    if (isHovered) {
      video.play().catch(() => {
        // 忽略播放错误
      })
    } else {
      video.pause()
      video.currentTime = 0 // 重置到开始
    }
  }, [isHovered, isVisible])

  /** 标记指针进入卡片，触发可见视频播放。 */
  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  /** 标记指针离开卡片，将视频重置到起始帧。 */
  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  // displayNumber 存储卡片在实验列表中的两位序号。
  const displayNumber = String(index + 1).padStart(2, '0')

  return (
    <article
      ref={containerRef}
      className="group overflow-hidden rounded-lg border border-[#343a36] bg-[#191c1a] transition-colors hover:border-[#71e6bd]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={item.path}>
        <div className="aspect-[16/10] w-full overflow-hidden border-b border-[#343a36] bg-[#0b0d0c]">
          {isVisible ? (
            <video
              ref={videoRef}
              src={item.src}
              width={600}
              height={400}
              className="h-full w-full object-cover"
              poster="/assets/animation-cover.png"
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[#0b0d0c]">
              <div className="font-mono text-xs text-[#6f7872]">PREPARING PREVIEW</div>
            </div>
          )}
        </div>
        <div className="flex min-h-20 items-center justify-between gap-4 p-4">
          <div>
            <p className="mb-1 font-mono text-[11px] font-bold text-[#71e6bd]">{displayNumber} / MOTION</p>
            <h2 className="m-0 text-base font-semibold text-[#f4f6f3]">{item.name}</h2>
          </div>
          <span className="text-lg text-[#6f7872] transition-transform group-hover:translate-x-1 group-hover:text-[#71e6bd]" aria-hidden="true">→</span>
        </div>
      </Link>
    </article>
  )
}
