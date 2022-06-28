const inputFirstName = document.getElementById('first-name');
const inputLastName = document.getElementById('last-name');
const inputEmail = document.getElementById('email');
const inputPhone = document.getElementById('phone');
const inputCompany = document.getElementById('company');
const inputAddress = document.getElementById('address');
const inputFields = [inputFirstName, inputLastName, inputEmail, inputPhone, inputCompany, inputAddress];

let formInputs = {};

for (const field of inputFields) {
    field.addEventListener('input', () => {
        localStorage.setItem(field.name, field.value)
    });
}

document.addEventListener('DOMContentLoaded', function () {
    for (let i = 0; i < localStorage.length; i++) {
        let input = localStorage.key(i);
        for (const field of inputFields) {
            if (input === field.name) {
                field.value = localStorage.getItem(input)
            }
        }
    }
}, false);