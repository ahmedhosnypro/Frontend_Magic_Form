const inputFirstName = document.getElementById('first-name');
const inputLastName = document.getElementById('last-name');
const inputEmail = document.getElementById('email');
const inputPhone = document.getElementById('phone');
const inputCompany = document.getElementById('company');
const inputAddress = document.getElementById('address');
let submitButton = document.getElementById('submit-button');
const inputFields = [inputFirstName, inputLastName, inputEmail, inputPhone, inputCompany, inputAddress];

let data;

submitButton.addEventListener('click', () => {
    // update submissions' history
    let allBlank = true;
    for (const field of inputFields) {
        if (field.value !== "") {
            allBlank = false;
            break
        }
    }

    if (allBlank) {
        return;
    }

    for (const field of inputFields) {
        data[field.name] = field.value;
    }

    let submissions = JSON.parse(localStorage.getItem('submissions')) || [];
    data['id'] = submissions.length;
    submissions[submissions.length] = data;
    localStorage.setItem('submissions', JSON.stringify(submissions));

    // reset form fields, and form cash
    for (const field of inputFields) {
        field.value = "";
    }
    localStorage.setItem('formCash', JSON.stringify({}));
})

// changing any field handler to update form cash, to save changed in localStorage
for (const field of inputFields) {
    field.addEventListener('input', () => {
        data[field.name] = field.value;
        localStorage.setItem('formCash', JSON.stringify(data));
    });
}

document.addEventListener('DOMContentLoaded', function () {
    data = JSON.parse(localStorage.getItem('formCash'));
    if (data != null) {
        updateFormDate();
    } else {
        data = {};
    }
}, false);

setInterval(() => {
    const localStorageData = JSON.parse(localStorage.getItem('formCash'));
    if (localStorageData != null && localStorageData !== data) {
        data = localStorageData;
        updateFormDate();
    }
}, 100)

function updateFormDate() {
    for (const field of inputFields) {
        if (field.name in data) {
            field.value = data[field.name];
        }
    }
}