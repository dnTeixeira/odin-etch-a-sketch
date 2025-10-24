const container = document.querySelector(".container");

let gridSize = 256;
let userChoice = 16;

let grid = null;
const configButtons = document.querySelectorAll(".config-buttons button")
const newGridButton = document.querySelector(".grid-size");
const clearGridButton = document.querySelector(".clear-grid");
const randomColorsButton = document.querySelector(".random-colors-mode");
const defaultColorButton = document.querySelector(".default-color-mode");

let currentMode = "default-color";

newGridButton.addEventListener('click', (e) => {
    changeGridSize();
});

clearGridButton.addEventListener('click', () => {
    clearGrid();
});

randomColorsButton.addEventListener('click', () => {
    setMode("random-colors");
});

defaultColorButton.addEventListener('click', () => {
    setMode("default-color");
});

function createGrid() {
    for(let i = 0; i < gridSize; i++) {
        const newDiv = document.createElement('div');
        const divSize = 700 / userChoice;
        newDiv.classList.add("item-" + (i + 1));
        newDiv.classList.add("gridItem");
    
        newDiv.style.width = divSize + "px";
        newDiv.style.height = divSize + "px";
        newDiv.style.border = "1px solid rgba(192, 192, 192, 1)";
        newDiv.style.boxSizing = "border-box";
    
        container.appendChild(newDiv);
    }
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

function changeColorMode(e) {
    if(currentMode == "default-color") {
        e.target.style.background = "black";
    } else if(currentMode == "random-colors") {
        e.target.style.background = "#" + Math.random().toString(16).slice(-6);
    } else {
        e.target.style.background = "black";
    }
}

function setMode(mode) {
    currentMode = mode;
    console.log(currentMode);
    configButtons.forEach(button => button.classList.remove("active"));
    console.log(`.${mode}-mode`);
    document.querySelector(`.${mode}-mode`).classList.add("active")
    console.log(`${document.querySelector(`.${mode}-mode`).classList}`)
}

container.addEventListener('mouseover', changeColorMode);

createGrid();