'use client'
import * as THREE from 'three'
import { useEffect } from 'react'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

export default function SkyBox() {
  useEffect(() => {
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    // "left", "right", "top", "bottom", "front", "back"
    let picList = ['px', 'nx', 'py', 'ny', 'pz', 'nz']
    let boxGeometry = new THREE.BoxGeometry(10, 10, 10)

    let boxMaterials: any = []
    picList.forEach((item) => {
      let texture = new THREE.TextureLoader().load(`/${item}.png`)
      boxMaterials.push(new THREE.MeshBasicMaterial({ map: texture }))
    })

    const mesh = new THREE.Mesh(boxGeometry, boxMaterials)

    boxGeometry.scale(10, 10, -10)

    scene.add(mesh)

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    const container = document.querySelector('#container')
    container?.appendChild(renderer.domElement)
    const controls = new OrbitControls(camera, renderer.domElement)

    controls.enableDamping = true
    controls.dampingFactor = 0.05

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
