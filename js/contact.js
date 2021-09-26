
const form = document.querySelector(".contact-form form");
const firstName = document.querySelector("#firstName");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");


function validateForm() {
    event.preventDefault();


    if (chechkLength(firstName.value, 4) === true) {
        nameError.style.display = "none";
    }
    else {
        nameError.style.display = "block";
    }
    if (chechkLength(subject.value, 14) === true) {
        subjectError.style.display = "none";
    }
    else {
        subjectError.style.display = "block";
    }
    if (chechkLength(message.value, 24) === true) {
        messageError.style.display = "none";
    }
    else {
        messageError.style.display = "block";
    }
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm)

function chechkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}