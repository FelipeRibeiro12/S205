let currentSlideIndex = {
    'proximas-aulas': 0,
    'proximas-provas': 0
};

function changeSlide(direction, carouselId) {
    const slides = document.querySelectorAll(`#${carouselId} .carousel-item`);
    currentSlideIndex[carouselId] = (currentSlideIndex[carouselId] + direction + slides.length) % slides.length;
    updateCarousel(carouselId);
}

function currentSlide(index, carouselId) {
    currentSlideIndex[carouselId] = index;
    updateCarousel(carouselId);
}

function updateCarousel(carouselId) {
    const slides = document.querySelectorAll(`#${carouselId} .carousel-item`);
    const indicators = document.querySelectorAll(`#${carouselId} .carousel-indicators li`);
    
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlideIndex[carouselId]);
    });
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlideIndex[carouselId]);
    });
}

// Initialize the carousels
updateCarousel('proximas-aulas');
updateCarousel('proximas-provas');