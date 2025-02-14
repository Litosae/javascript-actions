// Get the images from the DOM
const slides = document.querySelectorAll('.slide');

// Set the current slide to 0
let currentIndex = 0;

// Number of slides to show
const visibleSlides = 3;

// Function that shows the active slide and hides the rest
function showSlides(startIndex) {
    for (let i = 0; i < slides.length; i++){
        if (i >= startIndex && i < startIndex + visibleSlides){
            slides[i].classList.add('displayBlock');
            slides[i].classList.remove('displayNone');
        } else{
            slides[i].classList.add('displayNone');
            slides[i].classList.remove('displayBlock');
        }
    }
}


// Function that loops through the slides
function startLoop(){
    currentIndex++;
    if (currentIndex > slides.length - visibleSlides){
        currentIndex = 0;
    }
    showSlides(currentIndex);
    console.log(currentIndex);
}


// Set the timer to 7 seconds
let timer = setInterval(startLoop, 7000);


// Previous/Next buttons

function previousSlide(){
    clearInterval(timer);
    currentIndex--;
    if (currentIndex < 0){
        currentIndex = slides.length - visibleSlides;
    }
    showSlides(currentIndex);
    console.log(currentIndex);
}

function nextSlide(){
    clearInterval(timer);
    currentIndex++;
    if (currentIndex > slides.length - visibleSlides){
        currentIndex = 0;
    }
    showSlides(currentIndex);
    console.log(currentIndex);
}