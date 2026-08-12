const form = document.getElementById('form');
const tableBody = document.querySelector('#results tbody');
const baseUrl = 'http://localhost:3030/jsonstore/collections/students';

form.addEventListener('submit', createStudent);

loadStudents();

async function loadStudents() {
    try {
        const response = await fetch(baseUrl);

        if (!response.ok) {
            throw new Error('Failed to load students');
        }

        const data = await response.json();

        tableBody.replaceChildren();

        Object.values(data).forEach(student => {
            const row = document.createElement('tr');

            const firstNameCell = document.createElement('td');
            firstNameCell.textContent = student.firstName;

            const lastNameCell = document.createElement('td');
            lastNameCell.textContent = student.lastName;

            const facultyNumberCell = document.createElement('td');
            facultyNumberCell.textContent = student.facultyNumber;

            const gradeCell = document.createElement('td');
            gradeCell.textContent = student.grade;

            row.appendChild(firstNameCell);
            row.appendChild(lastNameCell);
            row.appendChild(facultyNumberCell);
            row.appendChild(gradeCell);

            tableBody.appendChild(row);
        });

    } catch (error) {
        console.error(error);
    }
}

async function createStudent(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const firstName = formData.get('firstName').trim();
    const lastName = formData.get('lastName').trim();
    const facultyNumber = formData.get('facultyNumber').trim();
    const grade = Number(formData.get('grade'));

    if (!firstName || !lastName || !facultyNumber || !grade) {
        return;
    }

    const student = {
        firstName,
        lastName,
        facultyNumber,
        grade
    };

    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        });

        if (!response.ok) {
            throw new Error('Failed to create student');
        }

        form.reset();

        await loadStudents();

    } catch (error) {
        console.error(error);
    }
}

