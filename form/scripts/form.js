// Access the form
const contactForm = document.forms['contact-form'];

// Validate fullname
function validateFullname() {
    const fullname = contactForm.fullname.value.trim();
    const errorMessage = document.getElementById('full-name-error');

    // Check if fullname is empty
    if (fullname === "") {
        errorMessage.textContent = "Full name is a required field.";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Check length requirements
    if (fullname.length < 3 || fullname.length > 50) {
        errorMessage.textContent = "Full name must be between 3 and 50 characters long.";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Check if fullname contains only letters and spaces
    const lettersAndSpacesPattern = /^[a-zA-Z\s]+$/;
    if (!lettersAndSpacesPattern.test(fullname)) {
        errorMessage.textContent = "Full name must contain only letters and spaces.";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Check if fullname contains at least two words
    const words = fullname.split(' ');
    if (words.length < 2) {
        errorMessage.textContent = "Full name must contain at least two words.";
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

// Validate email
function validateEmail() {
    const email = contactForm.email.value.trim();
    const errorMessage = document.getElementById('email-error');

    // Check if email is empty
    if (email === "") {
        errorMessage.textContent = "Email address is a required field.";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Check if email is valid
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Email address must be a valid email address (e.g., name@example.com)";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // If all validations pass, hide the error message
    errorMessage.classList.add('hidden');
    return true;
}

const email = contactForm.email;

email.addEventListener('blur', validateEmail);

email.addEventListener('focus', () => {
    const errorMessage = document.getElementById('email-error');
    errorMessage.classList.add('hidden');
});

// Validate email verification

function validateEmailVerification() {
    const email = contactForm.email.value.trim();
    const emailVerification = contactForm['verify-email'].value.trim();
    const errorMessage = document.getElementById('verify-email-error');

    // Check if email verification is empty
    if (emailVerification === "") {
        errorMessage.textContent = "Verify email address is a required field.";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Check if email verification matches email
    if (emailVerification !== email) {
        errorMessage.textContent = "Verify email address must match email.";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // If all validations pass, hide the error message
    errorMessage.classList.add('hidden');
    return true;
}

const emailVerification = contactForm['verify-email'];

emailVerification.addEventListener('blur', validateEmailVerification);

emailVerification.addEventListener('focus', () => {
    const errorMessage = document.getElementById('verify-email-error');
    errorMessage.classList.add('hidden');
});

// Log all values on submit
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const isFullnameValid = validateFullname();
    const isEmailValid = validateEmail();

    if (isFullnameValid && isEmailValid) {
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
    }
});

