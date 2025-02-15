const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const visibleSlides = 3;
let activeInterval;

function showSlides(startIndex) {
    for (let i = 0; i < slides.length; i++) {
        const isVisible = (i >= startIndex && i < startIndex + visibleSlides) ||
                          (startIndex + visibleSlides > slides.length && i < (startIndex + visibleSlides) % slides.length);
                          //condition 1 checks if the slide is within the visible range
                          //condition 2 checks if the slide is within the visible range when the index is at the end of the slides array - if removed the slides disappear when the index is at the end of the slides array before the loop starts over
        slides[i].classList.toggle('displayBlock', isVisible);
        slides[i].classList.toggle('displayNone', !isVisible);
    }
}

function startLoop() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    showSlides(currentIndex);
    console.log(currentIndex);
}

let timer = setInterval(startLoop, 7000);

// Previous/Next buttons
function previousSlide() {
    clearInterval(timer);
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    showSlides(currentIndex);
    console.log(currentIndex);
}

function nextSlide() {
    clearInterval(timer);
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    showSlides(currentIndex);
    console.log(currentIndex);
}

// Start/Stop buttons
function startCarousel(duration = 7000) {
    if (!activeInterval) {
        activeInterval = setInterval(startLoop, duration);
    }
}

function stopCarousel() {
    clearInterval(activeInterval);
    activeInterval = null;
}

// Thumbnails
function showThumbnail(index) {
    clearInterval(timer);
    currentIndex = index;
    showSlides(currentIndex);
}

// Timer input
const timerInput = document.getElementById('timer');

timerInput.addEventListener('change', () => {
    const newTimer = timerInput.value * 1000;
    stopCarousel();
    startCarousel(newTimer);
});