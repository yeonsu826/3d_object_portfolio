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


// 카드가 들어갈 메인 영역 찾기
const mainContainer = document.getElementById('portfolio-main');

// data.json 불러오기
fetch('./json_files/data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach((group, index) => {
            // 1. 그리드 컨테이너(상자) 생성
            const grid = document.createElement('div');
            grid.className = 'grid-container';

            // 2. 그룹 안의 아이템(카드) 생성
            group.items.forEach(item => {
                const card = document.createElement('a');
                card.href = item.link;
                card.className = 'card';
                card.innerHTML = `
                    <div class="card-img" style="background-image: url('${item.thumb}');"></div>
                    <div class="card-info">
                        <h3 class="card-title">${item.title}</h3>
                        <p class="card-desc">${item.desc}</p>
                    </div>
                `;
                grid.appendChild(card);
            });

            // 3. 메인 영역에 완성된 그리드 붙이기
            mainContainer.appendChild(grid);

            // 4. 그룹 사이에 여백 및 구분선 넣기
            if (index < data.length - 1) {
                mainContainer.insertAdjacentHTML('beforeend', '<div style="height: 60px;"></div>');
                
                // 두 번째 그룹(제작 과정)이 끝난 뒤에는 픽셀 구분선 추가
                if (index === 1) {
                    mainContainer.insertAdjacentHTML('beforeend', '<hr class="pixel-line">');
                    mainContainer.insertAdjacentHTML('beforeend', '<div style="height: 60px;"></div>');
                }
            } else {
                // 맨 마지막 그룹 뒤의 여백
                mainContainer.insertAdjacentHTML('beforeend', '<div style="height: 60px;"></div>');
            }
        });
    })
    .catch(error => console.error('포트폴리오 데이터를 불러오는 데 실패함:', error));