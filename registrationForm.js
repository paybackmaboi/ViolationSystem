const form = document.getElementById('registration-form');
const firstname = document.getElementById('first-name');
const lastname = document.getElementById('last-name');
const ages = document.getElementById('ages');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirm-password');

// Errors //
const lastnameError = document.getElementById('lnameError');
const firstnameError = document.getElementById('fnameError');
const ageError = document.getElementById('ageError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmpasswordError = document.getElementById('confirmpassError');

const numberPattern = /\d/;

ages.addEventListener('keydown', function(e) {
    if (['e', '+', '-'].includes(e.key)) {
        e.preventDefault(); 
    }
});

ages.addEventListener('input', function(e) {
    if (ages.value.length > 3) {
        ages.value = ages.value.slice(0, 3); 
    }
});

function preventInitialSpace(input) {
    input.addEventListener('keydown', function(e) {
        if (e.key === ' ' && input.value.length === 0) {
            e.preventDefault(); 
        }
    });
}

document.querySelectorAll('input[type="text"], input[type="password"]').forEach(input => {
    preventInitialSpace(input);
});

form.addEventListener('submit', function(e) {
    let valid = true;

    if (lastname.value.trim() === '') {
        lastnameError.textContent = 'Please fill up your last name';
        lastnameError.style.display = 'inline';
        valid = false;
    } else if (numberPattern.test(lastname.value)) {
        lastnameError.textContent = 'Last name cannot contain numbers';
        lastnameError.style.display = 'inline';
        valid = false;
    } else {
        lastnameError.style.display = 'none';
    }

    if (firstname.value.trim() === '' || numberPattern.test(firstname.value)) {
        firstnameError.textContent = 'First name cannot contain numbers';
        firstnameError.style.display = 'inline';
        valid = false;
    } else {
        firstnameError.style.display = 'none';
    }

    const ageNum = parseInt(ages.value.trim(), 10);
    if (isNaN(ageNum) || ageNum <= 0) {
        ageError.textContent = 'Please enter a valid age';
        ageError.style.display = 'inline';
        valid = false;
    } else {
        ageError.style.display = 'none';
    }

    if (!email.value.includes('@gmail.com') || email.value.trim() === '') {
        emailError.textContent = 'Please enter a valid email (must contain \'@gmail.com\')';
        emailError.style.display = 'inline';
        valid = false;
    } else {
        emailError.style.display = 'none';
    }

    if (password.value.trim() === '') {
        passwordError.textContent = 'Please enter a password';
        passwordError.style.display = 'inline';
        valid = false;
    } else {
        passwordError.style.display = 'none';
    }

    if (password2.value.trim() === '') {
        confirmpasswordError.textContent = 'Please confirm your password';
        confirmpasswordError.style.display = 'inline';
        valid = false;
    } else if (password.value !== password2.value) {
        confirmpasswordError.textContent = 'Passwords do not match, please try again';
        confirmpasswordError.style.display = 'inline';
        valid = false;
    } else {
        confirmpasswordError.style.display = 'none';
    }

    if (!valid) {
        e.preventDefault();
        hideWarnings();  // Automatically hides warnings after 10 seconds
    }
});

function clearDaForm() {
    form.reset();
    hideWarnings();
}

function hideWarnings() {
    setTimeout(() => {
        lastnameError.style.display = 'none';
        firstnameError.style.display = 'none';
        ageError.style.display = 'none';
        emailError.style.display = 'none';
        passwordError.style.display = 'none';
        confirmpasswordError.style.display = 'none';
    }, 10000);
}
