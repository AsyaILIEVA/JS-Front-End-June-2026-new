const BASE_URL = 'http://localhost:3030/jsonstore/orders/';

const loadBtn = document.getElementById('load-orders');
const orderBtn = document.getElementById('order-btn');
const editBtn = document.getElementById('edit-order');

const nameInput = document.getElementById('name');
const quantityInput = document.getElementById('quantity');
const dateInput = document.getElementById('date');

const list = document.getElementById('list');

let currentOrderId = null;

loadBtn.addEventListener('click', loadOrders);
orderBtn.addEventListener('click', createOrder);
editBtn.addEventListener('click', editOrder);

async function loadOrders() {
    list.innerHTML = '';

    const response = await fetch(BASE_URL);
    const data = await response.json();

    Object.values(data).forEach(order => {
        const container = document.createElement('div');
        container.classList.add('container');

        const nameEl = document.createElement('h2');
        nameEl.textContent = order.name;

        const dateEl = document.createElement('h3');
        dateEl.textContent = order.date;

        const quantityEl = document.createElement('h3');
        quantityEl.textContent = order.quantity;

        const changeBtn = document.createElement('button');
        changeBtn.classList.add('change-btn');
        changeBtn.textContent = 'Change';

        const doneBtn = document.createElement('button');
        doneBtn.classList.add('done-btn');
        doneBtn.textContent = 'Done';

        changeBtn.addEventListener('click', () => {
            nameInput.value = order.name;
            quantityInput.value = order.quantity;
            dateInput.value = order.date;

            currentOrderId = order._id;

            orderBtn.disabled = true;
            editBtn.disabled = false;

            container.remove();
        });

        doneBtn.addEventListener('click', async () => {
            await fetch(BASE_URL + order._id, {
                method: 'DELETE'
            });

            loadOrders();
        });

        container.appendChild(nameEl);
        container.appendChild(dateEl);
        container.appendChild(quantityEl);
        container.appendChild(changeBtn);
        container.appendChild(doneBtn);

        list.appendChild(container);
    });
}

async function createOrder(event) {
    event.preventDefault();

    const name = nameInput.value;
    const quantity = quantityInput.value;
    const date = dateInput.value;

    if (!name || !quantity || !date) {
        return;
    }

    await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            quantity,
            date
        })
    });

    clearInputs();
    loadOrders();
}

async function editOrder(event) {
    event.preventDefault();

    const name = nameInput.value;
    const quantity = quantityInput.value;
    const date = dateInput.value;

    if (!name || !quantity || !date) {
        return;
    }

    await fetch(BASE_URL + currentOrderId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            _id: currentOrderId,
            name,
            quantity,
            date
        })
    });

    clearInputs();

    orderBtn.disabled = false;
    editBtn.disabled = true;

    currentOrderId = null;

    loadOrders();
}

function clearInputs() {
    nameInput.value = '';
    quantityInput.value = '';
    dateInput.value = '';
}