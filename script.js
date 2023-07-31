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

let activeBrush = false;
const frame = document.querySelector('.frame');
document.body.onmousedown = () => (activeBrush = true);
document.body.onmouseup = () => (activeBrush = false);

function colorize(e) {
    if (activeBrush !== true) {
        return;
    };
    if (drawMode == true) {
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
    drawMode = 1;
    modeBtn.textContent = 'Mode: Draw';
}

let drawMode = 1;
const modeBtn = document.querySelector('#mode');
modeBtn.addEventListener('click', toggleMode);

function toggleMode() {
    if (drawMode == 1) {
        drawMode = 0;
        modeBtn.textContent = 'Mode: Erase';
    } else if (drawMode == 0) {
        drawMode = 1;
        modeBtn.textContent = 'Mode: Draw';
    }
}