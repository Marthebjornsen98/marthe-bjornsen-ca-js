// Button
const submit = document.querySelector('.submit__cta');

// All error messages
const nameError = document.querySelector('.nameError');
const emailError = document.querySelector('.emailError');
const subjectError = document.querySelector('.subjectError');
const adressError = document.querySelector('.adressError');

submit.onclick = function (event) {
    event.preventDefault();

    // All inputs
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const subject = document.querySelector('#subject').value.trim();
    const adress = document.querySelector('#adress').value.trim();

    if (testLength(name, 1)) {
        nameError.classList.add('hide');
        nameError.classList.remove('show');
    } else {
        nameError.classList.add('show');
        nameError.classList.remove('hide');
    }

    if (testLength(subject, 10)) {
        subjectError.classList.add('hide');
        subjectError.classList.remove('show');
    } else {
        subjectError.classList.add('show');
        subjectError.classList.remove('hide');
    }

    if (testLength(adress, 25)) {
        adressError.classList.add('hide');
        adressError.classList.remove('show');
    } else {
        adressError.classList.add('show');
        adressError.classList.remove('hide');
    }

    if (validateEmail(email)) {
        emailError.classList.add('hide');
        emailError.classList.remove('show');
    } else {
        emailError.classList.add('show');
        emailError.classList.remove('hide');
    }
};

function validateEmail(addEmail) {
    const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isEmailValid = emailExpression.test(addEmail);
    return isEmailValid;
};

function testLength(element, length) {
    if (element.length > length) {
        return true;
    } else {
        return false;
    };
};
