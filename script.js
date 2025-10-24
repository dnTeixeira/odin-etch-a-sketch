const container = document.querySelector(".container");

let gridSize = 256;
let userChoice = 16;

let grid = null;
const newGridButton = document.querySelector(".grid-size");
const clearGridButton = document.querySelector(".clear-grid");
const randomColorsButton = document.querySelector(".random-colors");
const defaultColorButton = document.querySelector(".default-color");

let isRandomColorsOn = false;

newGridButton.addEventListener('click', (e) => {
    changeGridSize();
});

clearGridButton.addEventListener('click', () => {
    clearGrid();
});

randomColorsButton.addEventListener('click', () => {
    setRandomColorsMode(grid);
});

defaultColorButton.addEventListener('click', () => {
    setDefaultColorMode();
});

function createGrid() {
    for(let i = 0; i < gridSize; i++) {
        const newDiv = document.createElement('div');
        const divSize = 480 / userChoice;
        newDiv.classList.add("item-" + (i + 1));
        newDiv.classList.add("gridItem");
    
        newDiv.style.width = divSize + "px";
        newDiv.style.height = divSize + "px";
        newDiv.style.border = "1px solid rgba(192, 192, 192, 1)";
        newDiv.style.boxSizing = "border-box";
    
        container.appendChild(newDiv);
    }

    grid = document.querySelectorAll(".gridItem");
    
    setDefaultColorMode(grid);
}

function changeGridSize() {
    userChoice = parseInt(prompt("Number of squares per side for the new board: (100 is the max)"));

    if(userChoice > 100 || userChoice < 0) {
       changeGridSize();
    } else if(!Number.isNaN(userChoice)) {
        gridSize = userChoice * userChoice;
        
        deleteGrid();
        createGrid();
    } else {
        return;
    }

    console.log(userChoice);
}

function deleteGrid() {
    container.querySelectorAll(".gridItem").forEach(item =>
        item.remove()
    );
}

function clearGrid() {
    container.querySelectorAll(".gridItem").forEach(item =>
        item.style.background = "white"
    );
}

function setRandomColorsMode(grid) {
    isRandomColorsOn = true

    if(isRandomColorsOn) {
        randomColorsButton.style.background = "rgba(255, 255, 216, 1)"
        randomColorsButton.style.border = "1px solid rgba(255, 200, 0, 1)"
        randomColorsButton.style.color = "rgba(255, 200, 0, 1)"
    }

    grid.forEach(item => 
        item.addEventListener('mouseover', (e) => {
            e.target.style.background = "#" + Math.random().toString(16).slice(-6);
        })
    );
}

function setDefaultColorMode() {
    grid.forEach(item => 
        item.addEventListener('mouseover', (e) => {
            e.target.style.background = "black";
        })
    );
}

createGrid();