const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const visibleSlides = 3;
let activeInterval;

function showSlides(startIndex) {
    for (let i = 0; i < slides.length; i++) {
        if (i >= startIndex && i < startIndex + visibleSlides) {
            slides[i].classList.add('displayBlock');
            slides[i].classList.remove('displayNone');
        } else if (startIndex + visibleSlides > slides.length && i < (startIndex + visibleSlides) % slides.length) {
            slides[i].classList.add('displayBlock');
            slides[i].classList.remove('displayNone');
        } else {
            slides[i].classList.add('displayNone');
            slides[i].classList.remove('displayBlock');
        }
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

// Timer

const timerInput = document.getElementById('timer');

timerInput.addEventListener('change', () => {
    const newTimer = timerInput.value * 1000;
    stopCarousel();
    startCarousel(newTimer);
});