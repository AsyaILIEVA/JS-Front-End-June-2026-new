function solve() {
    const headers = Array.from(document.querySelectorAll('thead th'));
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    const output = document.getElementById('output');

    // Get selected columns
    const selectedColumns = headers
        .map((th, index) => ({
            index,
            name: th.querySelector('input').name,
            checked: th.querySelector('input').checked
        }))
        .filter(col => col.checked);

    const result = [];

    for (const row of rows) {
        const cells = row.querySelectorAll('td');
        const obj = {};

        for (const col of selectedColumns) {
            obj[col.name] = cells[col.index].textContent;
        }

        result.push(obj);
    }

    output.value = JSON.stringify(result);
}