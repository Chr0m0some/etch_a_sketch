let grid_size = 16
let default_ink = '#000000';

const grid_container = document.querySelector('.grid-container');

function buildGrid(size){
    grid_container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid_container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++){
        const grid_square = document.createElement('div');
        grid_square.classList.add('grid-square');
        grid_square.addEventListener('mouseover', changeColor);
        grid_container.appendChild(grid_square);
    }
}

function changeColor(e){
    e.target.style.backgroundColor = default_ink;
}

buildGrid(grid_size);