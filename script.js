const GRID_CONTAINER = document.querySelector('.grid-container');
const REGULAR = document.querySelector('.regular.choice');
const MEDIUM = document.querySelector('.medium.choice');
const LARGE = document.querySelector('.large.choice');
const RAINBOW = document.querySelector('.rainbow.choice');
const ERASE = document.querySelector('.erase');

const REGULAR_GRID_SIZE = 16;
const MEDIUM_GRID_SIZE = 32;
const LARGE_GRID_SIZE = 64;

let default_ink = '#707070';
let current_size_mode = REGULAR;
let blotted_squares;

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
    Adds a marker to the event target to indicate that the target is colored

*/
function changeColor(e){
    e.target.style.backgroundColor = default_ink;
    e.target.classList.add('blotted');
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
/* 

function erase:
    Create a variable that gets all the blotted grid square elements because they'll change based on what size mode the player is on
    Clear the grid of those colored grid square elements

*/
function erase(){
    blotted_squares = document.querySelectorAll('.blotted');
    clearGrid(blotted_squares);
}

buildGrid(REGULAR_GRID_SIZE);
ERASE.addEventListener('click', erase);

/* Size Buttons */
/* 
    When the button is clicked:
        Clear the grid 
        Build a new grid of the button's corresponding size 
    IF the current size of the grid is the same size as the button says:
        Don't do anything
    ELSE:
        Change the grid 
        Take away the current mode's button background
        Give the new mode's button a highlighted background

*/
REGULAR.addEventListener('click', size => {
    if (current_size_mode == size.target) return;
    erase();
    buildGrid(REGULAR_GRID_SIZE);
    current_size_mode.classList.remove('activated');
    current_size_mode = REGULAR;
    current_size_mode.classList.add('activated');
    console.log('regular');
});

MEDIUM.addEventListener('click', size => {
    if (current_size_mode == size.target) return;
    erase();
    buildGrid(MEDIUM_GRID_SIZE);
    current_size_mode.classList.remove('activated');
    current_size_mode = MEDIUM;
    current_size_mode.classList.add('activated');
    console.log('medium');
});

LARGE.addEventListener('click', size => {
    if (current_size_mode == size.target) return;
    erase();
    buildGrid(LARGE_GRID_SIZE);
    current_size_mode.classList.remove('activated');
    current_size_mode = LARGE;
    current_size_mode.classList.add('activated');
    console.log('large');
});

