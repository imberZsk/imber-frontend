'use client'
import * as THREE from 'three'
import { useEffect } from 'react'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

// 场景
// 相机
// 物体 材质 网格 -> scene
// 渲染器 -> scene camera

// 光 贴图

export default function Normal() {
  useEffect(() => {
    // 场景
    const scene = new THREE.Scene()
    // 相机
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    camera.position.z = 5

    scene.add(camera)

    const size = 10
    const divisions = 10

    const gridHelper = new THREE.GridHelper(size, divisions)

    scene.add(gridHelper)

    // 物体
    const radius = 1 // 球体半径
    const widthSegments = 1000 // 水平方向上的细分段数
    const heightSegments = 1000 // 垂直方向上的细分段数

    const geometry = new THREE.SphereGeometry(
      radius,
      widthSegments,
      heightSegments
    )
    // 材质
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    // 网格
    const cube = new THREE.Mesh(geometry, material)

    scene.add(cube)
    // 渲染器
    const renderer = new THREE.WebGLRenderer()
    // 设置渲染器大小
    renderer.setSize(window.innerWidth, window.innerHeight)

    const container = document.querySelector('#container')

    container?.append(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)

    controls.enableDamping = true // 启用阻尼效果
    controls.dampingFactor = 0.05 // 阻尼系数，取值范围为0到1

    controls.update()

    function animate() {
      requestAnimationFrame(animate)

      controls.update()

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      // renderer.dispose()
      container?.removeChild(renderer.domElement)
    }
  }, [])
  return <main id="container"></main>
}
