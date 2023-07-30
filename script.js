gridInit(16);

function gridInit(size) {
    const spacer = document.querySelector('.spacer');
    spacer.textContent = '';
    for (let i = 0; i < size; i++) {
        pixelRow = document.createElement('div');
        pixelRow.classList.add('pixelRow');
        spacer.appendChild(pixelRow);
        for (let j = 0; j < size; j++) {
            pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.addEventListener('mouseenter', colorize)
            pixelRow.appendChild(pixel);
        }
    }
}

function colorize(e) {
    if (drawMode == 'Draw') {
        e.target.classList.add('darkened');
    } else {
        e.target.classList.remove('darkened');
    }
}

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', reset);

function reset() {
    x = prompt('Set grid to what size? (1-40)');
    while (x < 1 || x > 40 || isNaN(x) == true) {
        if (x === null) {
            return;
        }
        alert('Invalid input, try again.');
        x = prompt('Set grid to what size? (1-40)');
    }
    gridInit(x);
}

const modeBtn = document.querySelector('#mode');
modeBtn.addEventListener('click', toggleMode);

let drawMode = 'Draw';

function toggleMode() {
    if (drawMode == 'Draw') {
        drawMode = 'Erase';
        modeBtn.innerHTML = `Mode: ${drawMode}`;
    } else if (drawMode == 'Erase') {
        drawMode = 'Draw';
        modeBtn.innerHTML = `Mode: ${drawMode}`;
    }
}