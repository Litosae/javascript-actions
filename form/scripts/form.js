// Access the form
const contactForm = document.forms['contact-form'];

// Log all values on submit
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullname = contactForm.fullname;
    const email = contactForm.email;
    const phone = contactForm.phone;
    const date = contactForm.date;
    const address = contactForm.address;
    const message = contactForm.message;

    console.log(`
        username: ${fullname.value},
        email: ${email.value},
        phone: ${phone.value},
        date: ${date.value},
        address: ${address.value},
        message: ${message.value}
    `);
});

// Validate fullname

function validateFullname() {
    const fullname = contactForm.fullname.value.trim();
    const errorMessage = document.getElementById('full-name-error'); 

    // Check if fullname is empty
    if (fullname === "") {
        errorMessage.textContent = "Fullname must not be empty.";
        errorMessage.classList.remove('hidden');
        return false; 
    }

    // Check length requirements
    if (fullname.length < 3 || fullname.length > 50) {
        errorMessage.textContent = "Fullname must be between 3 and 50 characters long.";
        errorMessage.classList.remove('hidden');
        return false; 
    }

    // Check if fullname contains only letters and spaces
    const lettersAndSpacesPattern = /^[a-zA-Z\s]+$/;
    if (!lettersAndSpacesPattern.test(fullname)) {
        errorMessage.textContent = "Fullname must contain only letters and spaces.";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Check if fullname contains at least two words
    const words = fullname.split(' ');
    if (words.length < 2) {
        errorMessage.textContent = "Fullname must contain at least two words.";
        errorMessage.classList.remove('hidden');
        return false; 
    }

    // If all validations pass, hide the error message
    errorMessage.classList.add('hidden');
    return true;
}

const fullname = contactForm.fullname;

fullname.addEventListener('blur', validateFullname);

fullname.addEventListener('focus', () => {
    const errorMessage = document.getElementById('full-name-error'); 
    errorMessage.classList.add('hidden');
});