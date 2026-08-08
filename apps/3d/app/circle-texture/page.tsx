'use client'
import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

export default function Home() {
  const tipRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    const sphere = new THREE.SphereGeometry(16, 50, 50)
    const texture = new THREE.TextureLoader().load('/livingRoom.jpg')
    const material = new THREE.MeshBasicMaterial({ map: texture })
    const sphereMesh = new THREE.Mesh(sphere, material)
    sphere.scale(16, 16, -16)
    scene.add(sphereMesh)

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    const container = document.querySelector('#container')
    container?.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)

    controls.enableDamping = true // 启用阻尼效果
    controls.dampingFactor = 0.05 // 阻尼系数，取值范围为0到1

    controls.update()

    const dataList = [
      {
        image: '/livingRoom.jpg',
        tipsList: [
          {
            position: { x: -200, y: -4, z: -147 },
            content: {
              title: '进入厨房',
              text: '',
              image: 1,
              showTip: false,
              showTitle: true
            }
          }
          // {
          //   position: { x: -100, y: 0, z: -231 },
          //   content: {
          //     title: '信息点2',
          //     text: '77989',
          //     showTip: true,
          //     showTitle: false
          //   }
          // },
          // {
          //   position: { x: 150, y: -50, z: -198 },
          //   content: {
          //     title: '信息点3',
          //     text: 'qwdcz',
          //     showTip: true,
          //     showTitle: false
          //   }
          // },
          // {
          //   position: { x: 210, y: 111, z: -140 },
          //   content: {
          //     title: '信息点4',
          //     text: '大豆食心虫侦察十大大苏打大大大大大大大',
          //     showTip: true,
          //     showTitle: false
          //   }
          // },
          // {
          //   position: { x: 208, y: -12, z: 140 },
          //   content: {
          //     title: '信息点5',
          //     text: 'eq',
          //     showTip: true,
          //     showTitle: false
          //   }
          // },
          // {
          //   position: { x: 86, y: -9, z: 236 },
          //   content: {
          //     title: '进入房间',
          //     text: '',
          //     showTip: false,
          //     showTitle: true
          //   }
          // }
        ]
      }
    ]

    const addTipsSprite = (index = 0) => {
      let tipTexture = new THREE.TextureLoader().load('/tip.png')
      let material = new THREE.SpriteMaterial({ map: tipTexture })
      // const tipsSpriteList = []
      dataList[index].tipsList.forEach((item) => {
        let sprite = new THREE.Sprite(material)
        sprite.scale.set(10, 10, 10)
        sprite.position.set(item.position.x, item.position.y, item.position.z)
        // sprite.content = item.content
        // tipsSpriteList.push(sprite)
        scene.add(sprite)
      })
    }

    addTipsSprite()

    // const onMouseClick = (e: React.MouseEvent<HTMLDivElement>) => {
    //   e.preventDefault()
    //   let element = this.$refs.threeDBox
    //   let raycaster = new THREE.Raycaster()
    //   let mouse = new THREE.Vector2()
    //   mouse.x = (e.clientX / element.clientWidth) * 2 - 1
    //   mouse.y = -(e.clientY / element.clientHeight) * 2 + 1

    //   raycaster.setFromCamera(mouse, camera)
    //   let intersects = raycaster.intersectObjects(this.tipsSpriteList, true)
    //   if (intersects.length > 0 && intersects[0].object.content.showTitle) {
    //     this.changeContentAndtips(intersects[0].object.content.image)
    //     this.handleTooltipHide(e)
    //   }
    //   // const x = e.clientX;
    //   // const y = e.clientY;

    //   // const pos = this.screenToWorld(x, y);
    //   // console.log(pos);
    // }

    // window.addEventListener('click', onMouseClick, false)

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

  return (
    <main>
      <div id="container"></div>
      <div className="tooltip-box" ref={tipRef}>
        <div className="container">
          <div className="title">标题：1</div>
          <div className="explain">说明：2</div>
        </div>
      </div>
    </main>
  )
}
