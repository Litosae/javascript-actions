// Access the form
const contactForm = document.forms['contact-form'];

// Validate full name
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

    // Check if fullname contains only letters and spaces (including Greek alphabet)
    const lettersAndSpacesPattern = /^[a-zA-Z\u0370-\u03FF\s]+$/;
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

    // Hide the error message after validation
    errorMessage.classList.add('hidden');
    return true;
}
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

     // Hide the error message after validation
    errorMessage.classList.add('hidden');
    return true;
}

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

     // Hide the error message after validation
    errorMessage.classList.add('hidden');
    return true;
}

function validatePhone() {
    const phone = contactForm.phone.value.trim();
    const errorMessage = document.getElementById('phone-error');

    // Check if phone is empty
    if (phone === "") {
        errorMessage.textContent = "Phone number is a required field.";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Check if phone is valid
    const phonePattern = /^(0030|\+30)\s?\d{10}$/;
    if (!phonePattern.test(phone)) {
        errorMessage.textContent = "Phone number must start with 0030 or +30, followed by 10 digits.";
        errorMessage.classList.remove('hidden');
        return false;
    }

     // Hide the error message after validation
    errorMessage.classList.add('hidden');
    return true;
}

function validateAddress() {
    const address = contactForm.address.value.trim();
    const errorMessage = document.getElementById('address-error');

    // Check if address is empty
    if (address === "") {
        errorMessage.textContent = "Address is a required field.";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Check if address is valid
    const addressPattern = /^[a-zA-Z0-9\u0370-\u03FF\s,]+$/; 
    if (!addressPattern.test(address)) {
        errorMessage.textContent = "Address must contain only letters, numbers, spaces, and commas.";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Check if address is between 5 and 100 characters
    if (address.length < 5 || address.length > 100) {
        errorMessage.textContent = "Address must be between 5 and 100 characters long.";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Check if address is of the form: 4 Privet Drive, Little Whinging, Surrey, England
    const addressComponents = address.split(',');
    if (addressComponents.length !== 4) {
        errorMessage.textContent = "Address must be of the form: 4 Privet Drive, Little Whinging, Surrey, England";
        errorMessage.classList.remove('hidden');
        return false;
    }

     // Hide the error message after validation
    errorMessage.classList.add('hidden');
    return true;
}

function validateMessage() {
    const message = contactForm.message.value.trim();
    const errorMessage = document.getElementById('message-error');

    // Check if message is empty
    if (message === "") {
        errorMessage.textContent = "Message is a required field.";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Check if message is at most 500 characters
    if (message.length > 500) {
        errorMessage.textContent = "Message must be at most 500 characters long.";
        errorMessage.classList.remove('hidden');
        return false;
    }

     // Hide the error message after validation
    errorMessage.classList.add('hidden');
    return true;
}

// Fullname event listeners
const fullname = contactForm.fullname;
fullname.addEventListener('blur', validateFullname);
fullname.addEventListener('focus', () => {
    const errorMessage = document.getElementById('full-name-error');
    errorMessage.classList.add('hidden');
});

// Email event listeners
const email = contactForm.email;
email.addEventListener('blur', validateEmail);
email.addEventListener('focus', () => {
    const errorMessage = document.getElementById('email-error');
    errorMessage.classList.add('hidden');
});

// Email verification event listeners
const emailVerification = contactForm['verify-email'];
emailVerification.addEventListener('blur', validateEmailVerification);
emailVerification.addEventListener('focus', () => {
    const errorMessage = document.getElementById('verify-email-error');
    errorMessage.classList.add('hidden');
});

// Phone event listeners
const phone = contactForm.phone;
phone.addEventListener('blur', validatePhone);
phone.addEventListener('focus', () => {
    const errorMessage = document.getElementById('phone-error');
    errorMessage.classList.add('hidden');
});

// Address event listeners
const address = contactForm.address;
address.addEventListener('blur', validateAddress);
address.addEventListener('focus', () => {
    const errorMessage = document.getElementById('address-error');
    errorMessage.classList.add('hidden');
});

// Message event listeners
const message = contactForm.message;
message.addEventListener('blur', validateMessage);
message.addEventListener('focus', () => {
    const errorMessage = document.getElementById('message-error');
    errorMessage.classList.add('hidden');
});

// Log all values on submit
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const isFullnameValid = validateFullname();
    const isEmailValid = validateEmail();
    const isEmailVerificationValid = validateEmailVerification();
    const isPhoneValid = validatePhone();
    const isAddressValid = validateAddress();
    const isMessageValid = validateMessage();

    if (isFullnameValid && isEmailValid && isEmailVerificationValid && isPhoneValid && isAddressValid && isMessageValid) {
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

