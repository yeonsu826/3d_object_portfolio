import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xd0d0d0);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 3); 

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const ambientLight = new THREE.AmbientLight(0xffffff, 2.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 4);
directionalLight.position.set(5, 5, 2);
scene.add(directionalLight);

const loader = new GLTFLoader();

// --- 1. URL 파라미터 읽어오기 ---
const urlParams = new URLSearchParams(window.location.search);
const targetModel = urlParams.get('model');

// 2. 기본 경로 설정 (파라미터 없이 접속했을 때 띄울 기본 화면)
let modelPath = '../glb_files/glasses_1.glb';

// 3. 파라미터 값이 존재하면 해당 이름으로 경로 덮어쓰기
if (targetModel !== null) {
    modelPath = `../glb_files/${targetModel}.glb`;
}

// 4. 완성된 경로(modelPath)를 이용해 3D 객체 로드
loader.load(
    modelPath,
    function (gltf) {
        const model = gltf.scene;
        
        // --- 모델 내부 순회하며 재질 세팅 ---
        model.traverse(function (child) {
            if (child.isMesh && child.material) {
                
                console.log('부품 이름 확인:', child.name);

                // 1. 기본 투명도 오류 방지 (기존 코드)
                child.material.transparent = false;
                child.material.depthWrite = true;

                    // 2. 이름에 'glass'가 포함된 경우 유리 물리 재질로 교체 (병합된 코드)
                    // 블렌더에서 이름을 소문자로 적었는지 대문자(Glass)로 적었는지 확인 필요
                    if (child.material.name.includes('glass') || child.material.name.includes('Glass')) {
                    const oldMat = child.material;
                
                    child.material = new THREE.MeshPhysicalMaterial({
                        color: oldMat.color,
                        metalness: 0.1,
                        roughness: 0.05,
                        transmission: 1.0,      
                        opacity: 1.0,           
                        transparent: true,
                        ior: 1.2,               
                        thickness: 0.3,         
                        side: THREE.DoubleSide
                    });
                }
            }
        });

        scene.add(model);
        
        // --- 모델 자동 크기 조절 및 중앙 정렬 코드 ---
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        
        const maxAxis = Math.max(size.x, size.y, size.z);
        model.scale.multiplyScalar(2.0 / maxAxis); 

        box.setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());

        model.position.x -= center.x;
        model.position.y -= center.y;
        model.position.z -= center.z;

        console.log(modelPath + ' 로드 및 재질 세팅 완료!');
    },
    undefined,
    function (error) {
        console.error('모델 로드 실패. 파일 이름을 다시 확인하세요:', error);
    }
);

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});