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
    e.target.classList.add('darkened');
}

const resetBtn = document.querySelector('button');
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