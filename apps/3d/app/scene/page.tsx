'use client'
import * as THREE from 'three'
import { useEffect } from 'react'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { THREE_BASE_PATH } from '@/lib/site'

export default function Home() {
  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    // 加载用于天空盒的立方体纹理
    const loader = new THREE.CubeTextureLoader()
    const texture = loader.load([
      `${THREE_BASE_PATH}/px.png`, // 正X面（右）
      `${THREE_BASE_PATH}/nx.png`, // 负X面（左）
      `${THREE_BASE_PATH}/py.png`, // 正Y面（上）
      `${THREE_BASE_PATH}/ny.png`, // 负Y面（下）
      `${THREE_BASE_PATH}/pz.png`, // 正Z面（后）
      `${THREE_BASE_PATH}/nz.png` // 负Z面（前）
    ])

    scene.background = texture

    // const geometry = new THREE.SphereGeometry(1, 32, 32)
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    // const sphere = new THREE.Mesh(geometry, material)
    // scene.add(sphere)

    // const size = 10
    // const divisions = 10
    // const gridHelper = new THREE.GridHelper(size, divisions)
    // scene.add(gridHelper)

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    const container = document.querySelector('#container')
    container?.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.update()

    function animate() {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      container?.removeChild(renderer.domElement)
    }
  }, [])

  return <main id="container"></main>
}
