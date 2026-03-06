

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xd0d0d0);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 3); // 카메라를 정중앙에서 약간 뒤로 배치

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const ambientLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

const loader = new GLTFLoader();

loader.load(
    './glb_files/glasses_1.glb',
    function (gltf) {
        const model = gltf.scene;
        scene.add(model);
        
        // --- 모델 자동 크기 조절 및 중앙 정렬 코드 ---
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        
        // 1. 모델의 가장 긴 축을 찾아서, 화면에 꽉 차게(크기 2.0 기준) 스케일 강제 조절
        const maxAxis = Math.max(size.x, size.y, size.z);
        model.scale.multiplyScalar(2.0 / maxAxis); 

        // 2. 스케일이 변했으니 바운딩 박스(영역)를 다시 계산
        box.setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());

        // 3. 모델의 중심을 화면 정중앙 좌표(0,0,0)로 강제 이동
        model.position.x -= center.x;
        model.position.y -= center.y;
        model.position.z -= center.z;
        // ---------------------------------------------

        console.log('모델 로드 및 자동 스케일 조절 완료!');
    },
    undefined,
    function (error) {
        console.error('모델 로드 실패:', error);
    }
);

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();

// 브라우저 창 크기가 변할 때 화면 찌그러짐 방지
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});