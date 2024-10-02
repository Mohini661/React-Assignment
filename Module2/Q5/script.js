const wrapper = document.querySelector('.card-wrapper');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentSlide = 0;
const totalSlides = document.querySelectorAll('.card').length;
const cardWidth = document.querySelector('.card').clientWidth;

nextBtn.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        wrapper.style.transform = `translateX(-${cardWidth * currentSlide}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        wrapper.style.transform = `translateX(-${cardWidth * currentSlide}px)`;
    }
});
