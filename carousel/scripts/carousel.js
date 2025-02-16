const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
let intervalDuration = 5000;
let activeInterval = setInterval(startLoop, intervalDuration);
const timerInput = document.getElementById('timer');
const currentDurationDisplay = document.getElementById('currentDuration');
const playPauseButton = document.getElementById('playPauseButton');

function showSlides(activeIndex) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.toggle("displayBlock", i === activeIndex);
        slides[i].classList.toggle("displayNone", i !== activeIndex);
    }
}

function startLoop() {
    currentIndex++;
    if (currentIndex > slides.length - 1) {
        currentIndex = 0;
    }
    showSlides(currentIndex);
}

// Previous/Next buttons
function previousSlide() {
    clearInterval(activeInterval);
    activeInterval = null; 
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    showSlides(currentIndex);
    playPauseButton.src = "carousel/images/icons/play.svg";
}

function nextSlide() {
    clearInterval(activeInterval);
    activeInterval = null; 
    currentIndex++;
    if (currentIndex > slides.length - 1) {
        currentIndex = 0;
    }
    showSlides(currentIndex);
    playPauseButton.src = "carousel/images/icons/play.svg";
}

// Start/Stop button
function toggleCarousel() {
    if (activeInterval) {
        clearInterval(activeInterval);
        activeInterval = null;
        playPauseButton.src = "carousel/images/icons/play.svg";
    } else {
        activeInterval = setInterval(startLoop, intervalDuration); 
        playPauseButton.src = "carousel/images/icons/pause.svg";
    }
}

// Thumbnails
function showThumbnail(index) {
    clearInterval(activeInterval);
    activeInterval = null; 
    currentIndex = index;
    showSlides(currentIndex);
    playPauseButton.src = "carousel/images/icons/play.svg";
}

// User Input Timer
function updateDurationDisplay(value) {
    currentDurationDisplay.textContent = `${value} seconds`;
}

timerInput.addEventListener('change', () => {
    intervalDuration = timerInput.value * 1000;
    stopCarousel();
    startCarousel(intervalDuration);
    updateDurationDisplay(timerInput.value);
});

// Initial display update
updateDurationDisplay(timerInput.value);

function startCarousel(duration = intervalDuration) {
    if (!activeInterval) {
        activeInterval = setInterval(startLoop, duration);
    }
}

function stopCarousel() {
    clearInterval(activeInterval);
    activeInterval = null;
}