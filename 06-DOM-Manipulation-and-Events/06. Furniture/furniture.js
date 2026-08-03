document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const generateForm = document.getElementById('input');
    const buyForm = document.getElementById('shop');

    const inputArea = generateForm.querySelector('textarea');
    const outputArea = buyForm.querySelector('textarea');
    const tbody = document.querySelector('tbody');

    generateForm.addEventListener('submit', generate);
    buyForm.addEventListener('submit', buy);

    function generate(e) {
        e.preventDefault();

        const furniture = JSON.parse(inputArea.value);

        furniture.forEach(item => {
            const tr = document.createElement('tr');

            // Image
            const tdImg = document.createElement('td');
            const img = document.createElement('img');
            img.src = item.img;
            tdImg.appendChild(img);

            // Name
            const tdName = document.createElement('td');
            const pName = document.createElement('p');
            pName.textContent = item.name;
            tdName.appendChild(pName);

            // Price
            const tdPrice = document.createElement('td');
            const pPrice = document.createElement('p');
            pPrice.textContent = item.price;
            tdPrice.appendChild(pPrice);

            // Decoration Factor
            const tdDec = document.createElement('td');
            const pDec = document.createElement('p');
            pDec.textContent = item.decFactor;
            tdDec.appendChild(pDec);

            // Checkbox
            const tdCheck = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            tdCheck.appendChild(checkbox);

            tr.appendChild(tdImg);
            tr.appendChild(tdName);
            tr.appendChild(tdPrice);
            tr.appendChild(tdDec);
            tr.appendChild(tdCheck);

            tbody.appendChild(tr);
        });
    }

    function buy(e) {
        e.preventDefault();

        const checkedBoxes = tbody.querySelectorAll(
            'input[type="checkbox"]:checked'
        );

        const names = [];
        let totalPrice = 0;
        let totalDecFactor = 0;

        checkedBoxes.forEach(box => {
            const row = box.closest('tr');
            const cells = row.querySelectorAll('td');

            names.push(cells[1].textContent.trim());
            totalPrice += Number(cells[2].textContent);
            totalDecFactor += Number(cells[3].textContent);
        });

        const average =
            names.length > 0 ? totalDecFactor / names.length : 0;

        outputArea.value =
            `Bought furniture: ${names.join(', ')}\n` +
            `Total price: ${totalPrice}\n` +
            `Average decoration factor: ${average}`;
    }
}