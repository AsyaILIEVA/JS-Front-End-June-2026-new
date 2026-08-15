const BASE_URL = 'http://localhost:3030/jsonstore/matches/';

const loadBtn = document.getElementById('load-matches');
const addBtn = document.getElementById('add-match');
const editBtn = document.getElementById('edit-match');

const hostInput = document.getElementById('host');
const scoreInput = document.getElementById('score');
const guestInput = document.getElementById('guest');

const list = document.getElementById('list');

let currentMatchId = null;

loadBtn.addEventListener('click', loadMatches);
addBtn.addEventListener('click', addMatch);
editBtn.addEventListener('click', editMatch);

async function loadMatches() {
    list.innerHTML = '';

    const response = await fetch(BASE_URL);
    const data = await response.json();

    Object.values(data).forEach(match => {
        const container = document.createElement('li');
        container.classList.add('match');

        const info = document.createElement('div');
        info.classList.add('info');

        const hostEl = document.createElement('p');
        hostEl.textContent = match.host;

        const scoreEl = document.createElement('p');
        scoreEl.textContent = match.score;

        const guestEl = document.createElement('p');
        guestEl.textContent = match.guest;

        const btnWrapper = document.createElement('div');
        btnWrapper.classList.add('btn-wrapper');

        const changeBtn = document.createElement('button');
        changeBtn.classList.add('change-btn');
        changeBtn.textContent = 'Change';

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';

        changeBtn.addEventListener('click', () => {
            hostInput.value = match.host;
            scoreInput.value = match.score;
            guestInput.value = match.guest;

            currentMatchId = match._id;

            addBtn.disabled = true;
            editBtn.disabled = false;

            container.remove();
        });

        deleteBtn.addEventListener('click', async () => {
            await fetch(BASE_URL + match._id, {
                method: 'DELETE'
            });

            loadMatches();
        });

        info.appendChild(hostEl);
        info.appendChild(scoreEl);
        info.appendChild(guestEl);

        btnWrapper.appendChild(changeBtn);
        btnWrapper.appendChild(deleteBtn);

        container.appendChild(info);
        container.appendChild(btnWrapper);

        list.appendChild(container);
    });
}

async function addMatch(event) {
    event.preventDefault();

    const host = hostInput.value;
    const score = scoreInput.value;
    const guest = guestInput.value;

    if (!host || !score || !guest) {
        return;
    }

    await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            host,
            score,
            guest
        })
    });

    clearInputs();
    loadMatches();
}

async function editMatch(event) {
    event.preventDefault();

    const host = hostInput.value;
    const score = scoreInput.value;
    const guest = guestInput.value;

    if (!host || !score || !guest) {
        return;
    }

    await fetch(BASE_URL + currentMatchId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            _id: currentMatchId,
            host,
            score,
            guest
        })
    });

    clearInputs();

    addBtn.disabled = false;
    editBtn.disabled = true;

    currentMatchId = null;

    loadMatches();
}

function clearInputs() {
    hostInput.value = '';
    scoreInput.value = '';
    guestInput.value = '';
}