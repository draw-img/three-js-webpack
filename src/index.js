import * as THREE from 'three'
import { WEBGL } from './webgl'

if (WEBGL.isWebGLAvailable()) {
  //코드작성
  //장면
  const scene = new THREE.Scene()
  //장면 색상
  scene.background = new THREE.Color(0x004fff)

  //카메라
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

  //렌더러
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  //어디에 어떤 코드에 출력할건지
  document.body.appendChild(renderer.domElement);

  renderer.render(scene, camera)

} else {
  var warning = WEBGL.getWebGLErrorMessage()
  document.body.appendChild(warning)
}
