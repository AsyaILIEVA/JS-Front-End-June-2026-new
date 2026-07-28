function solve() {
    const input = document.getElementById('input');
    const output = document.getElementById('result');
    const select = document.getElementById('selectMenuTo');
    const button = document.querySelector('button');

    // Add options
    const binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';

    const hexOption = document.createElement('option');
    hexOption.value = 'hexadecimal';
    hexOption.textContent = 'Hexadecimal';

    select.appendChild(binaryOption);
    select.appendChild(hexOption);

    button.addEventListener('click', convert);

    function convert() {
        const number = Number(input.value);
        let result = '';

        if (select.value === 'binary') {
            result = number.toString(2);
        } else if (select.value === 'hexadecimal') {
            result = number.toString(16).toUpperCase();
        }

        output.value = result;
    }
}