'use client'
import { useEffect } from 'react'
import * as THREE from 'three'
// @ts-ignore
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
// @ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { THREE_BASE_PATH } from '@/lib/site'

// MOBILE_VIEWPORT_MAX_WIDTH 表示使用移动端相机距离的最大视口宽度。
const MOBILE_VIEWPORT_MAX_WIDTH = 767
// DESKTOP_CAMERA_DISTANCE 表示桌面端地球相机与场景原点的距离。
const DESKTOP_CAMERA_DISTANCE = 5
// MOBILE_CAMERA_DISTANCE 表示窄屏完整容纳地球模型所需的相机距离。
const MOBILE_CAMERA_DISTANCE = 10

const Three: React.FC = () => {
  useEffect(() => {
    // camera 存储当前地球场景相机，供窗口尺寸变化时更新构图。
    let camera: THREE.PerspectiveCamera | null = null
    // renderer 存储当前 WebGL 渲染器，供 resize 与卸载阶段使用。
    let renderer: THREE.WebGLRenderer | null = null
    // animationFrameId 存储当前动画帧编号，避免页面卸载后继续渲染。
    let animationFrameId: number | null = null

    /** 根据当前视口同步相机距离、宽高比和 Canvas 尺寸。 */
    const updateViewport = (): void => {
      if (!camera || !renderer) return

      // isMobileViewport 表示当前是否需要使用窄屏相机构图。
      const isMobileViewport = window.innerWidth <= MOBILE_VIEWPORT_MAX_WIDTH
      camera.aspect = window.innerWidth / window.innerHeight
      camera.position.z = isMobileViewport ? MOBILE_CAMERA_DISTANCE : DESKTOP_CAMERA_DISTANCE
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    const loader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath(`${THREE_BASE_PATH}/draco/gltf/`)
    loader.setDRACOLoader(dracoLoader)
    loader.load(
      `${THREE_BASE_PATH}/earthnew.glb`,
      (gltf: { scene: any }) => {
        // 获取模型
        const earth = gltf.scene

        // 设置模型的位置和大小
        earth.position.set(0, 0, 0)
        earth.scale.set(1, 1, 1)

        // 创建场景
        const scene = new THREE.Scene()
        scene.add(earth)

        // 创建相机
        camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        )

        // 创建渲染器
        renderer = new THREE.WebGLRenderer()
        updateViewport()
        document.querySelector('.three')?.appendChild(renderer.domElement)

        /** 持续旋转地球并绘制当前场景。 */
        const animate = function () {
          animationFrameId = requestAnimationFrame(animate)
          earth.rotation.y += 0.01
          renderer?.render(scene, camera as THREE.PerspectiveCamera)
        }
        animate()
      },
      (xhr: { loaded: number; total: number }) => {
        console.log(`加载中... ${(xhr.loaded / xhr.total) * 100}%`)
      },
      (error: any) => {
        console.log('加载失败', error)
      }
    )

    window.addEventListener('resize', updateViewport)

    return () => {
      window.removeEventListener('resize', updateViewport)
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId)
      renderer?.dispose()
      renderer?.domElement.remove()
    }
  }, [])

  return <div className="three"></div>
}

export default Three
