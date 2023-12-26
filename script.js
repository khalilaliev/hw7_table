// ____DIV____//

const divEl = document.getElementById('divEl');
for (let i = 1; i <= 100; i++)  {
    const newEl = document.createElement('div');
    newEl.textContent = i;
    newEl.classList.add('box__div');
    divEl.appendChild(newEl);
}

//____TABLE____//

const tableEl = (row, col) => {
    const table = document.getElementById('tableEl')
    for (let i = 0; i < row; i++){
        const rows = table.insertRow(i)
        for (let a = 0; a < col; a++){
            const cells = rows.insertCell(a)
            cells.textContent = '';
        }
    }
    const tableAutoFill = () => {
        let number = 1;
        for (let i = 0; i < row; i++){
            for (let a = 0; a < col; a++){
                const cells = table.rows[i].cells[a];
                setTimeout(() => {
                    cells.textContent = number++
                }, 50 * (i * col + a));
            }
        }
    }
    tableAutoFill();

}
tableEl(10, 10)


