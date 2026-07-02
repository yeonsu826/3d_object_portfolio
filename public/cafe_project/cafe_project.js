document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.slide-container');
    const counter = document.getElementById('counter');
    const modal = document.getElementById("imageModal");
    const expandedImg = document.getElementById("expandedImg");
    let currentSlide = 0;

    function resizePresentation() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const scale = Math.min(width / 1280, height / 720) * 0.92;
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
        if (modal.classList.contains('show')) {
            if (e.key === 'Escape') modal.classList.remove('show');
            return;
        }
        if (e.key === 'ArrowRight' || e.key === ' ') goToSlide(currentSlide + 1);
        else if (e.key === 'ArrowLeft') goToSlide(currentSlide - 1);
    });

    document.getElementById('btn-prev').addEventListener('click', () => goToSlide(currentSlide - 1));
    document.getElementById('btn-next').addEventListener('click', () => goToSlide(currentSlide + 1));

    document.getElementById('btn-fullscreen').addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });

    document.querySelectorAll(".image-wrapper img, .gallery-img").forEach(img => {
        img.addEventListener("click", function() {
            expandedImg.src = this.src;
            modal.classList.add("show");
        });
    });

    modal.addEventListener("click", () => modal.classList.remove("show"));

    window.addEventListener('resize', resizePresentation);
    
    resizePresentation();
    goToSlide(0);
});