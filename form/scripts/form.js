// Variables
const contactForm = document.forms['contact-form'];
const fullname = contactForm.fullname;
const email = contactForm.email;
const emailVerification = contactForm['verify-email'];
const phone = contactForm.phone;
const address = contactForm.address;
const message = contactForm.message;
const modal = document.getElementById('thankYouModal');
const closeButton = modal.querySelector('.close-button');

// Full name validation
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

// Email validation
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

// Email verification validation
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

// Phone number validation
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

// Address validation
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

    // Hide the error message after validation
    errorMessage.classList.add('hidden');
    return true;
}

// Message validation
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

// Show modal
function showModal() {
    modal.style.display = 'block';
}

// Array of input fields with their validation functions and error messages
const inputFields = [
    { element: fullname, validate: validateFullname, errorId: 'full-name-error' },
    { element: email, validate: validateEmail, errorId: 'email-error' },
    { element: emailVerification, validate: validateEmailVerification, errorId: 'verify-email-error' },
    { element: phone, validate: validatePhone, errorId: 'phone-error' },
    { element: address, validate: validateAddress, errorId: 'address-error' },
    { element: message, validate: validateMessage, errorId: 'message-error' }
];

// Add event listeners to input fields
inputFields.forEach(inputField => {
    inputField.element.addEventListener('blur', inputField.validate);
    inputField.element.addEventListener('focus', () => {
        const errorMessage = document.getElementById(inputField.errorId);
        errorMessage.classList.add('hidden');
    });
});

// Close modal event listener and reload page
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    location.reload();
});

// Form submission event listener
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const isFullnameValid = validateFullname();
    const isEmailValid = validateEmail();
    const isEmailVerificationValid = validateEmailVerification();
    const isPhoneValid = validatePhone();
    const isAddressValid = validateAddress();
    const isMessageValid = validateMessage();

    if (isFullnameValid && isEmailValid && isEmailVerificationValid && isPhoneValid && isAddressValid && isMessageValid) {
        console.log(`
            Fullname: ${fullname.value},
            Email: ${email.value},
            Email verification: ${emailVerification.value},
            Phone: ${phone.value},
            Address: ${address.value},
            Message: ${message.value}
        `);

        showModal();
    }
});

