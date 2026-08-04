document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const [checkBtn, clearBtn] = document.querySelectorAll('button');
    const table = document.querySelector('table');
    const result = document.querySelector('#check p');

    checkBtn.addEventListener('click', checkBoard);
    clearBtn.addEventListener('click', clearBoard);

    function checkBoard() {
        const rows = Array.from(document.querySelectorAll('tbody tr'));

        let valid = true;

        for (const row of rows) {
            const values = Array.from(row.querySelectorAll('input')).map(x => x.value);

            if (values.includes('') || new Set(values).size !== 3) {
                valid = false;
                break;
            }
        }

        if (valid) {
            for (let c = 0; c < 3; c++) {
                const values = rows.map(r => r.querySelectorAll('input')[c].value);

                if (values.includes('') || new Set(values).size !== 3) {
                    valid = false;
                    break;
                }
            }
        }

        if (valid) {
            table.style.border = '2px solid green';
            result.textContent = 'Success!';
            result.style.color = 'green';
        } else {
            table.style.border = '2px solid red';
            result.textContent = 'Keep trying...';
            result.style.color = 'red';
        }
    }

    function clearBoard() {
        document.querySelectorAll('tbody input').forEach(i => i.value = '');
        table.style.border = '';
        result.textContent = '';
        result.style.color = '';
    }

}