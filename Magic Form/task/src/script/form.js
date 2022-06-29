const inputFirstName = document.getElementById('first-name');
const inputLastName = document.getElementById('last-name');
const inputEmail = document.getElementById('email');
const inputPhone = document.getElementById('phone');
const inputCompany = document.getElementById('company');
const inputAddress = document.getElementById('address');
let submitButton = document.getElementById('submit-button');
const inputFields = [inputFirstName, inputLastName, inputEmail, inputPhone, inputCompany, inputAddress];

let formInputs = {};

submitButton.addEventListener('click', () => {
    for (const field of inputFields) {
        formInputs[field.name] = field.value;
    }
    let submits = JSON.parse(localStorage.getItem('submissions')) || [];
    submits[submits.length] = formInputs;
    localStorage.setItem('submissions', JSON.stringify(submits));

    for (const field of inputFields) {
        field.value = "";
    }
    localStorage.setItem('formCash', JSON.stringify({}));
})

for (const field of inputFields) {
    field.addEventListener('input', () => {
        let formCash = JSON.parse(localStorage.getItem('formCash')) || {};
        formCash[field.name] = field.value;
        localStorage.setItem('formCash', JSON.stringify(formCash));
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const formCash = JSON.parse(localStorage.getItem('formCash'));

    for (const field of inputFields) {
        const value = formCash[field.name];
        if (typeof value === 'undefined') {
            continue;
        }
        field.value = formCash[field.name];
    }
}, false);