let grid_size = 16
let default_ink = '#707070';

const GRID_CONTAINER = document.querySelector('.grid-container');
const REGULAR = document.querySelector('.regular.choice');
const MEDIUM = document.querySelector('.medium.choice');
const LARGE = document.querySelector('.large.choice');
const RAINBOW = document.querySelector('.rainbow.choice');
const ERASE = document.querySelector('.erase');

function buildGrid(size){
    GRID_CONTAINER.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    GRID_CONTAINER.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++){
        const grid_square = document.createElement('div');
        grid_square.classList.add('grid-square');
        grid_square.addEventListener('mouseover', changeColor);
        GRID_CONTAINER.appendChild(grid_square);
    }
}

function changeColor(e){
    e.target.style.backgroundColor = default_ink;
}

function clearGrid(){
    grid_squares.forEach(square => {
        square.style.backgroundColor = '#c1c1b3';
        console.log(square);
    });
    console.log('erase');
}
 
buildGrid(grid_size);

let grid_squares = document.querySelectorAll('.grid-square');
ERASE.addEventListener('click', clearGrid);