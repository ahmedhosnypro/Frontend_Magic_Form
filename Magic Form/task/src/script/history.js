const historyContainer = document.getElementById('history-container');

document.addEventListener('DOMContentLoaded', function () {
    let submissions = JSON.parse(localStorage.getItem('submissions')) || [];
    if (submissions.length === 0) {
        return;
    }

    submissions.forEach((submission, index) => {
        createHistory(submission, index);
    })
}, false);

function createHistory(submission, id) {
    const cardContainer = document.createElement('div');
    historyContainer.appendChild(cardContainer);
    cardContainer.id = `submit-${id}`;
    cardContainer.classList.add('submit-history-card');

    const firstNameLabel = document.createElement('p');
    cardContainer.appendChild(firstNameLabel);
    firstNameLabel.textContent = "First Name";

    const cardFirstName = document.createElement('p');
    cardContainer.appendChild(cardFirstName);
    cardFirstName.classList.add('card-first-name', 'card-data');
    cardFirstName.textContent = submission['first-name'];


    const lastNameLabel = document.createElement('p');
    cardContainer.appendChild(lastNameLabel);
    lastNameLabel.textContent = "Last Name";

    const cardLastName = document.createElement('p');
    cardContainer.appendChild(cardLastName);
    cardLastName.classList.add('card-last-name', 'card-data');
    cardLastName.textContent = submission['last-name'];

    const emailLabel = document.createElement('p');
    cardContainer.appendChild(emailLabel);
    emailLabel.textContent = "Email";

    const cardEmail = document.createElement('p');
    cardContainer.appendChild(cardEmail);
    cardEmail.classList.add('card-email', 'card-data');
    cardEmail.textContent = submission['email'];

    const phoneLabel = document.createElement('p');
    cardContainer.appendChild(phoneLabel);
    phoneLabel.textContent = "Phone";

    const cardPhone = document.createElement('p');
    cardContainer.appendChild(cardPhone);
    cardPhone.classList.add('card-phone', 'card-data');
    cardPhone.textContent = submission['phone'];

    const companyLabel = document.createElement('p');
    cardContainer.appendChild(companyLabel);
    companyLabel.textContent = "Company";

    const cardCompany = document.createElement('p');
    cardContainer.appendChild(cardCompany);
    cardCompany.classList.add('card-company', 'card-data');
    cardCompany.textContent = submission['company'];

    const addressLabel = document.createElement('p');
    cardContainer.appendChild(addressLabel);
    addressLabel.textContent = "Address";

    const cardAddress = document.createElement('p');
    cardContainer.appendChild(cardAddress);
    cardAddress.classList.add('card-address', 'card-data');
    cardAddress.textContent = submission['address'];

    const deleteButton = document.createElement('button');
    cardContainer.appendChild(deleteButton);
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', () => {
        deleteSubmit(`submit-${id}`);
    });
}

function deleteSubmit(submissionId) {
    let submissions = JSON.parse(localStorage.getItem('submissions')) || [];
    if (submissions.length === 0) {
        return;
    }

    const id = Number(submissionId.split("submit-")[1]);

    submissions.splice(id, 1);
    localStorage.setItem('submissions', JSON.stringify(submissions));

    const element = document.getElementById(submissionId);
    element.parentNode.removeChild(element);
}