function createBoxes(amount) {
    const inputNumber = document.querySelector('#input-number');
    const boxesContainer = document.querySelector('#boxes');
    for (let i = 0; i < amount; i++) {
        const size = 30 + i * 10;
        const div = document.createElement('div');
        div.classList.add('box');
div.style.width = `${size}px`;
div.style.height = `${size}px`;
div.style.backgroundColor = getRandomHexColor();
        boxesContainer.appendChild(div);
    }
}

function destroyBoxes() {
    const boxesContainer = document.querySelector('#boxes');
    boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

document.querySelector('[data-create]').addEventListener('click', () => {
    const inputNumber = document.querySelector('#input-number');
    const amount = parseInt(inputNumber.value);
    createBoxes(amount);
});

document.querySelector('[data-destroy]').addEventListener('click', () => {
    destroyBoxes();
});