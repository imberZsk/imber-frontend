'use client'
import { useLoadModal } from './hooks'

const Index = () => {
  const { containerRef } = useLoadModal()
  return <div className="h-full w-full" ref={containerRef} />
}

export default Index
