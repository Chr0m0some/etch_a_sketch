const GRID_CONTAINER = document.querySelector('.grid-container');
const REGULAR = document.querySelector('.regular.choice');
const MEDIUM = document.querySelector('.medium.choice');
const LARGE = document.querySelector('.large.choice');
const RAINBOW = document.querySelector('.rainbow.choice');
const ERASE = document.querySelector('.erase');

const REGULAR_GRID_SIZE = 16;
const MEDIUM_GRID_SIZE = 64;
const LARGE_GRID_SIZE = 100;

let default_ink = '#707070';

/* 

function buildGrid: Builds a grid of squares of a desired size and gives each square a relevant event type
    Create a square grid of size by size columns/rows 
    LOOP through each grid square and add them to the grid-square container:
        Give them a new div with their own shared class
        Give them event listeners so that they can detect when a mouse goes over to change color

*/
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
/* 

function changeColor:
    Sets the square that just got touched by a mouse to the hex color code that's set as the default ink

*/
function changeColor(e){
    e.target.style.backgroundColor = default_ink;
}

/* 

function clearGrid:
    LOOP through each grid square:
        Turn it back to the default color

*/
function clearGrid(squares){
    squares.forEach(square => {
        square.style.backgroundColor = '#c1c1b3';
    });
    console.log('cleared');
}
 
function erase(){
    let grid_squares = document.querySelectorAll('.grid-square');
    clearGrid(grid_squares);
}

buildGrid(REGULAR_GRID_SIZE);
ERASE.addEventListener('click', erase);

/* Size Buttons */

MEDIUM.addEventListener('click', size => {
    erase();
    buildGrid(MEDIUM_GRID_SIZE);
    console.log('medium');
});

