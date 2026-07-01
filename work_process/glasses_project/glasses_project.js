document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.slide-container');
    const counter = document.getElementById('counter');
    let currentSlide = 0;

    // --- 슬라이드 뷰어 및 네비게이션 기능 --- //
    function resizePresentation() {
        // 모바일 브라우저 환경을 고려하여 화면 크기 계산 방식 보완
        const width = document.documentElement.clientWidth || window.innerWidth;
        const height = document.documentElement.clientHeight || window.innerHeight;
        
        // 모바일에서 짤림 현상을 방지하기 위해 안전 여백 확보 (기존 0.95 -> 0.90으로 조정)
        const scale = Math.min(width / 1280, height / 720) * 0.90;
        
        slides.forEach(slide => {
            slide.style.transform = `translate(-50%, -50%) scale(${scale})`;
        });
    }

    function goToSlide(index) {
        if (index < 0) index = 0;
        if (index >= slides.length) index = slides.length - 1;

        slides[currentSlide].classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        
        counter.innerText = `${currentSlide + 1} / ${slides.length}`;
    }

    document.addEventListener('keydown', (e) => {
        // 모달이 열려있을 때는 키보드 이동 방지 (선택 사항)
        if (document.getElementById('imageModal').classList.contains('show')) return;

        if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
            goToSlide(currentSlide + 1);
        } else if (e.key === 'ArrowLeft') {
            goToSlide(currentSlide - 1);
        }
    });

    document.getElementById('presentation-area').addEventListener('click', (e) => {
        // 이미지를 클릭한 경우는 슬라이드 이동 방지 (모달 열기 이벤트가 실행되도록)
        if (e.target.tagName.toLowerCase() === 'img') return;
        // 모달이 열려있는 상태면 배경 클릭 시 슬라이드 이동 방지
        if (document.getElementById('imageModal').classList.contains('show')) return;

        goToSlide(currentSlide + 1);
    });

    document.getElementById('btn-prev').addEventListener('click', () => goToSlide(currentSlide - 1));
    document.getElementById('btn-next').addEventListener('click', () => goToSlide(currentSlide + 1));

    document.getElementById('btn-fullscreen').addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log(`전체화면 모드 실행 실패: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    });

    window.addEventListener('resize', resizePresentation);
    
    // 기기 회전(가로/세로 전환) 시 크기 재조정 이벤트 추가
    window.addEventListener('orientationchange', () => {
        setTimeout(resizePresentation, 100);
    });

    resizePresentation();
    goToSlide(0);

    // --- 이미지 확대 모달 기능 --- //
    const modal = document.getElementById("imageModal");
    const expandedImg = document.getElementById("expandedImg");
    const images = document.querySelectorAll(".image-wrapper img, .toc-thumbnail img");

    images.forEach(img => {
        img.addEventListener("click", function() {
            expandedImg.src = this.src; 
            modal.classList.add("show"); 
        });
    });

    modal.addEventListener("click", () => {
        modal.classList.remove("show");
    });
});