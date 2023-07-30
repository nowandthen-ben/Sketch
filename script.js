function colorize(e) {
    e.target.classList.add('darkened');
}

for (let i = 0; i < 16; i++) {
    const spacer = document.querySelector('.spacer');
    pixelRow = document.createElement('div');
    pixelRow.classList.add('pixelRow');
    spacer.appendChild(pixelRow);
    for (let j = 0; j < 16; j++) {
        pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseenter', colorize)
        pixelRow.appendChild(pixel);
    }
}

