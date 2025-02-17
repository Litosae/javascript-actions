// Variables
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
let intervalDuration = 5000;
let activeInterval = setInterval(startLoop, intervalDuration);
const timerInput = document.getElementById('timer');
const currentDurationDisplay = document.getElementById('currentDuration');
const playPauseButton = document.getElementById('playPauseButton');

// Functions

// Display slides
function showSlides(activeIndex) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.toggle("displayBlock", i === activeIndex);
        slides[i].classList.toggle("displayNone", i !== activeIndex);
    }
}

// Loop through slides
function startLoop() {
    currentIndex++;
    if (currentIndex > slides.length - 1) {
        currentIndex = 0;
    }
    showSlides(currentIndex);
}

// Previous slide
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

// Next slide
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

// User input timer
function updateDurationDisplay(value) {
    currentDurationDisplay.textContent = `${value} second${value === "1" ? "" : "s"}`;
}

// Event Listeners

// Input timer event listener
timerInput.addEventListener('change', () => {
    intervalDuration = timerInput.value * 1000;
    updateDurationDisplay(timerInput.value);
    if (activeInterval) {
        clearInterval(activeInterval);
        activeInterval = setInterval(startLoop, intervalDuration);
    }
});

// Update display
updateDurationDisplay(timerInput.value);