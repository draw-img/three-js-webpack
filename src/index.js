import * as THREE from 'three'
import { WEBGL } from './webgl'

if (WEBGL.isWebGLAvailable()) {
  //코드작성
  //장면
  const scene = new THREE.Scene()
  //장면 색상
  scene.background = new THREE.Color(0x004fff);

  //카메라
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 3

  //렌더러
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);

  //어디에 어떤 코드에 출력할건지
  document.body.appendChild(renderer.domElement);

  //매쉬
  // const boxWidth = 1;
  // const boxHeight = 1
  // const boxDepth = 1;
  // const geometry01 = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth)
  const geometry01 = new THREE.BoxGeometry(1, 1, 1)
  const material01 = new THREE.MeshStandardMaterial({ color: 0x999999 })
  const obj01 = new THREE.Mesh(geometry01, material01)
  scene.add(obj01)

  obj01.position.x = -2;
  
  const geometry02 = new THREE.ConeGeometry(0.8, 1.2, 8)
  const material02 = new THREE.MeshStandardMaterial({ color: 0x999999  })
  const obj02 = new THREE.Mesh(geometry02, material02)
  scene.add(obj02)

  const geometry03 = new THREE.IcosahedronGeometry(0.8, 0)
  const material03 = new THREE.MeshStandardMaterial({ color: 0x999999  })
  const obj03 = new THREE.Mesh(geometry03, material03)
  scene.add(obj03)

  obj03.position.x = 2;
  
  //애니메이션 적용 코드
  function render(time) {
    time *= 0.001;  
    
    obj01.rotation.x = time;
    obj01.rotation.y = time;
    obj02.rotation.x = time;
    obj02.rotation.y = time;
    obj03.rotation.x = time;
    obj03.rotation.y = time;

    renderer.render(scene, camera);

    requestAnimationFrame(render)
  }
  
  requestAnimationFrame(render)

  //반응형 처리
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
window.addEventListener('resize', onWindowResize);

} else {
  var warning = WEBGL.getWebGLErrorMessage()
  document.body.appendChild(warning)
}
