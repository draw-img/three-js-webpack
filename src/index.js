import * as THREE from 'three'
import { WEBGL } from './webgl'

if (WEBGL.isWebGLAvailable()) {
  //코드작성
  //장면
  const scene = new THREE.Scene()
  //장면 색상
  scene.background = new THREE.Color(0x004fff)

  //카메라
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  //캔버스 (렌더러)
  const canvas = document.querySelector("#c");
  const renderer = new THREE.WebGLRenderer({ canvas });
  
  //애니메이션 적용 코드
  function render(time) {
    time *= 0.001;  

    // cube.rotation.x = time;
    // cube.rotation.y = time;

    renderer.render(scene, camera);

    requestAnimationFrame(render)
  }

  requestAnimationFrame(render)

} else {
  var warning = WEBGL.getWebGLErrorMessage()
  document.body.appendChild(warning)
}
