// const phonebookElement = document.getElementById('phonebook');
// const loadButton = document.getElementById('btnLoad');
// const createButton = document.getElementById('btnCreate');
// const personInput = document.getElementById('person');
// const phoneInput = document.getElementById('phone');

// const baseUrl = 'http://localhost:3030/jsonstore/phonebook';

// function attachEvents() {
//     loadButton.addEventListener('click', loadContacts);
//     createButton.addEventListener('click', createContact);
//     phonebookElement.addEventListener(`click`, handleDelete);
// }

// async function loadContacts() {
//     try {
//         const response = await fetch(baseUrl);
//         if (!response.ok) {
//             throw new Error(`Failed to load contacts`)
//         }

//         const data = await response.json();
//         const contacts = Array.isArray(data) ? data : Object.values(data);

//         renderContacts(contacts);
//     } catch (error) {
//         console.error(error)
//     }
// }

// function renderContacts(contacts) {
//     phonebookElement.replaceChildren()

//     contacts.forEach(contact => {
//         const li = document.createElement(`li`)
//         li.appendChild(document.createTextNode(`${contact.person}: ${contact.phone}`));

//         const deleteButton = document.createElement(`button`);
//         deleteButton.textContent = `Delete`;
//         deleteButton.dataset.id = contact._id;

//         li.appendChild(deleteButton);
//         phonebookElement.appendChild(li);
//     });
// }

// async function createContact() {
//     const person = personInput.value.trim();
//     const phone = phoneInput.value.trim();

//     if (!person || !phone) {
//         return;
//     }

//     try {
//         const response = await fetch(baseUrl, {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ person, phone })
//     });

//     if (!response.ok) {
//         throw new Error("Failed to create contact");
//     }

//     personInput.value = ``;
//     phoneInput.value = ``;
//     await loadContacts();

//     } catch (error) {
//         console.error(error);
//     }
// }

// async function handleDelete(event) {
//     const deleteButton = event.target.closest(`button`);
//     if (!deleteButton) {
//         return;
//     }

//     try {
//         const response = await fetch(`${baseUrl}/${id}`, {
//             method: `DELETE`
//         });

//         if (!response.ok) {
//             throw new Error("Failed to delete contact");
//         }

//         await loadContacts();
//     } catch (error) {
//         console.error(error);
//     }
// }

// attachEvents();


const phonebookElement = document.getElementById('phonebook');
const loadButton = document.getElementById('btnLoad');
const createButton = document.getElementById('btnCreate');
const personInput = document.getElementById('person');
const phoneInput = document.getElementById('phone');

const baseUrl = 'http://localhost:3030/jsonstore/phonebook';

loadButton.addEventListener('click', loadContacts);
createButton.addEventListener('click', createContact);
phonebookElement.addEventListener('click', handleDelete);

async function loadContacts() {
    try {
        const response = await fetch(baseUrl);

        if (!response.ok) {
            throw new Error('Failed to load contacts');
        }

        const data = await response.json();
        const contacts = Object.values(data);

        phonebookElement.replaceChildren();

        const fragment = document.createDocumentFragment();

        contacts.forEach(contact => {
            const li = createContactElement(contact);
            fragment.appendChild(li);
        });

        phonebookElement.appendChild(fragment);

    } catch (error) {
        console.error(error);
    }
}

async function createContact() {
    const person = personInput.value.trim();
    const phone = phoneInput.value.trim();

    if (!person || !phone) {
        return;
    }

    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ person, phone })
        });

        if (!response.ok) {
            throw new Error('Failed to create contact');
        }

        const contact = await response.json();

        // Update the UI directly instead of making another GET request
        phonebookElement.appendChild(createContactElement(contact));

        personInput.value = '';
        phoneInput.value = '';

    } catch (error) {
        console.error(error);
    }
}

async function handleDelete(event) {
    if (event.target.tagName !== 'BUTTON') {
        return;
    }

    const button = event.target;
    const id = button.dataset.id;
    const li = button.parentElement;

    try {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Failed to delete contact');
        }

        // Remove it directly instead of making another GET request
        li.remove();

    } catch (error) {
        console.error(error);
    }
}

function createContactElement(contact) {
    const li = document.createElement('li');

    li.appendChild(
        document.createTextNode(`${contact.person}: ${contact.phone}`)
    );

    const button = document.createElement('button');
    button.textContent = 'Delete';
    button.dataset.id = contact._id;

    li.appendChild(button);

    return li;
}
