import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// 캔버스 요소 가져오기
const canvas = document.getElementById('bg-canvas');
const headerHeight = 600;

const scene = new THREE.Scene();
// 배경을 투명하게 설정하여 CSS 배경이 보이도록 함
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
renderer.setSize(window.innerWidth, headerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / headerHeight, 0.1, 1000);
camera.position.set(0, 0, 4);

const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(5, 5, 2);
scene.add(directionalLight);

let mainModel;
const loader = new GLTFLoader();

// 대표 모델 불러오기 (원하는 모델 파일명으로 변경하세요)
loader.load('./glb_files/glasses_1.glb', function (gltf) {
    mainModel = gltf.scene;
    
    // 크기 맞추기
    const box = new THREE.Box3().setFromObject(mainModel);
    const size = box.getSize(new THREE.Vector3());
    const maxAxis = Math.max(size.x, size.y, size.z);
    mainModel.scale.multiplyScalar(2.5 / maxAxis); 

    // 중앙 정렬
    box.setFromObject(mainModel);
    const center = box.getCenter(new THREE.Vector3());
    mainModel.position.x -= center.x;
    mainModel.position.y -= center.y;
    mainModel.position.z -= center.z;

    // 모델의 투명도 오류 방지 코드 적용
    mainModel.traverse(function (child) {
        if (child.isMesh && child.material) {
            child.material.transparent = false;
            child.material.depthWrite = true;
        }
    });

    scene.add(mainModel);
});

// 마우스 위치 추적 변수
let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;

const windowHalfX = window.innerWidth / 2;
const windowHalfY = headerHeight / 2;

// 마우스가 움직일 때마다 목표 회전값 갱신
document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - windowHalfX);
    mouseY = (event.clientY - windowHalfY);
});

// 부드러운 애니메이션 루프
function animate() {
    requestAnimationFrame(animate);

    // 모델이 존재할 때만 회전 적용
    if (mainModel) {
        // 목표값으로 부드럽게 보간 (Lerp)
        targetX = mouseX * 0.001;
        targetY = mouseY * 0.001;

        mainModel.rotation.y += 0.05 * (targetX - mainModel.rotation.y);
        mainModel.rotation.x += 0.05 * (targetY - mainModel.rotation.x);
        
        // 기본적으로 천천히 돌아가는 효과 추가
        mainModel.rotation.y += 0.002; 
    }

    renderer.render(scene, camera);
}
animate();

// 창 크기 조절 대응
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / headerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, headerHeight);
});


        