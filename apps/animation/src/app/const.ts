// ANIMATION_BASE_PATH 表示动画应用在统一站点中的公共资源前缀。
export const ANIMATION_BASE_PATH = '/animation'

interface NavigationSection {
  id: string
  name: string
  path: string
  src: string
}

export const navigationSections: NavigationSection[] = [
  { id: 'split', name: 'Split Text - GSAP', path: '/animations/split', src: `${ANIMATION_BASE_PATH}/animations/split.mov` },
  { id: 'blur', name: 'Blur Text', path: '/animations/blur', src: `${ANIMATION_BASE_PATH}/animations/blur.mov` },
  { id: 'add', name: 'Add Text', path: '/animations/add', src: `${ANIMATION_BASE_PATH}/animations/add.mov` },
  { id: 'shiny', name: 'Shiny Text - CSS', path: '/animations/shiny', src: `${ANIMATION_BASE_PATH}/animations/shiny.mov` },
  {
    id: 'stagger-framer',
    name: 'Stagger - Framer Motion',
    path: '/animations/stagger/framer',
    src: `${ANIMATION_BASE_PATH}/animations/stagger.mov`
  },
  { id: 'stagger-gsap', name: 'Stagger - GSAP', path: '/animations/stagger/gsap', src: `${ANIMATION_BASE_PATH}/animations/stagger.mov` },
  {
    id: 'timeline-framer',
    name: 'Timeline - Framer Motion',
    path: '/animations/timeline/framer',
    src: `${ANIMATION_BASE_PATH}/animations/timeline.mp4`
  },
  {
    id: 'timeline-gsap',
    name: 'Timeline - GSAP',
    path: '/animations/timeline/gsap',
    src: `${ANIMATION_BASE_PATH}/animations/timeline.mp4`
  },
  {
    id: 'exit-framer',
    name: 'Exit - Framer Motion',
    path: '/animations/exit/framer',
    src: `${ANIMATION_BASE_PATH}/animations/exit.mov`
  },
  { id: 'exit-gsap', name: 'Exit - GSAP', path: '/animations/exit/gsap', src: `${ANIMATION_BASE_PATH}/animations/exit.mov` },
  { id: 'layout', name: 'Layout - Framer Motion', path: '/animations/layout', src: `${ANIMATION_BASE_PATH}/animations/layout.mov` },
  { id: 'flip', name: 'Flip - GSAP', path: '/animations/flip', src: `${ANIMATION_BASE_PATH}/animations/flip.mp4` },
  { id: 'tab', name: 'Tab - Framer Motion', path: '/animations/tab', src: `${ANIMATION_BASE_PATH}/animations/tab.mov` },
  { id: 'scroll', name: 'Scroll - GSAP', path: '/animations/scroll/gsap', src: `${ANIMATION_BASE_PATH}/animations/scroll.mp4` },
  { id: 'scroll', name: 'Scroll - Framer Motion', path: '/animations/scroll/framer', src: `${ANIMATION_BASE_PATH}/animations/scroll.mp4` },
  { id: 'scrub', name: 'Scrub - GSAP', path: '/animations/scrub/gsap', src: `${ANIMATION_BASE_PATH}/animations/scrub.mp4` },
  { id: 'scrub', name: 'Scrub - Framer Motion', path: '/animations/scrub/framer', src: `${ANIMATION_BASE_PATH}/animations/scrub.mp4` },
  { id: 'pin', name: 'Pin - GSAP', path: '/animations/pin/gsap', src: `${ANIMATION_BASE_PATH}/animations/pin.mp4` },
  { id: 'vertical', name: 'Vertical - GSAP', path: '/animations/vertical', src: `${ANIMATION_BASE_PATH}/animations/vertical.mp4` },
  { id: 'horizontal', name: 'Horizontal - GSAP', path: '/animations/horizontal', src: `${ANIMATION_BASE_PATH}/animations/horizontal.mp4` },
  { id: 'parallax', name: 'Parallax - GSAP', path: '/animations/parallax/gsap', src: `${ANIMATION_BASE_PATH}/animations/parallax.mp4` },
  {
    id: 'multipart-scrollTrigger',
    name: 'multipart ScrollTrigger - GSAP',
    path: '/animations/multipart-scrollTrigger',
    src: `${ANIMATION_BASE_PATH}/animations/multipart-scrollTrigger.mp4`
  }

  // {
  //   id: 'parallax',
  //   name: 'Parallax - Framer Motion',
  //   path: '/animations/parallax/framer',
  //   src: '/animations/parallax.mov'
  // },
  // { id: 'svg', name: 'SVG - GSAP', path: '/animations/svg/gsap', src: '/animations/svg.mp4' }
  // { id: 'svg', name: 'SVG - Framer Motion', path: '/animations/svg/framer', src: '/animations/svg.mov' }
]
