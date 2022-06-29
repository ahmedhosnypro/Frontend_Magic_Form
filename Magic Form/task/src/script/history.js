const historyContainer = document.getElementById('history-container');
let submissions;
let submit = "submit-"

// read submission history and add them to the page
document.addEventListener('DOMContentLoaded', function () {
    submissions = JSON.parse(localStorage.getItem('submissions'));
    if (submissions != null && submissions.length !== 0) {
        updateDate();
    } else {
        submissions = [];
    }
}, false);

function createHistory(submission) {
    const cardContainer = document.createElement('div');
    historyContainer.appendChild(cardContainer);
    cardContainer.id = `${submit}${submission.id}`;
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
        deleteSubmission(submission.id);
    });
}

function deleteSubmission(submissionId) {
    let tempSubmissions = [];
    for (const submission of submissions) {
        if (submission.id !== submissionId) {
            tempSubmissions.push(submission);
        }
    }

    submissions = tempSubmissions;
    localStorage.setItem('submissions', JSON.stringify(submissions));

    const element = document.getElementById(`${submit}${submissionId}`);
    element.parentNode.removeChild(element);
}

function updateDate() {
    submissions.forEach((submission) => {
        createHistory(submission);
    })
}

setInterval(() => {
    const localStorageSubmissions = JSON.parse(localStorage.getItem('submissions'));
    if (localStorageSubmissions != null
        && localStorageSubmissions.length !== 0
        && JSON.stringify(localStorageSubmissions) !== JSON.stringify(submissions)) {
        while (historyContainer.firstChild) {
            historyContainer.removeChild(historyContainer.firstChild);
        }
        submissions = localStorageSubmissions;
        updateDate();
    }
}, 100)