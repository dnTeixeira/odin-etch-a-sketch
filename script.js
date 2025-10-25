const container = document.querySelector(".container");

let gridSize = 256;
let divsPerSide = 16;

const configButtons = document.querySelectorAll(".config-buttons button")
const newGridButton = document.querySelector(".grid-size");
const clearGridButton = document.querySelector(".clear-grid");
const randomColorsButton = document.querySelector(".random-colors-mode");
const defaultColorButton = document.querySelector(".default-color-mode");
const shadingColorButton = document.querySelector(".shading-mode");

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

shadingColorButton.addEventListener('click', () => {
    setMode("shading");
})

function createGrid() {
    for(let i = 0; i < gridSize; i++) {
        const newDiv = document.createElement('div');
        const divSize = 700 / divsPerSide;
        newDiv.classList.add("item-" + (i + 1));
        newDiv.classList.add("gridItem");
    
        newDiv.style.width = divSize + "px";
        newDiv.style.height = divSize + "px";
        newDiv.style.border = "1px solid rgba(192, 192, 192, 1)";
        newDiv.style.boxSizing = "border-box";
    
        container.appendChild(newDiv);
    }

    setMode("default-color");
}

function changeGridSize() {
    divsPerSide = parseInt(prompt("Number of squares per side for the new board: (100 is the max)"));

    if(divsPerSide > 100 || divsPerSide < 0) {
       changeGridSize();
    } else if(!Number.isNaN(divsPerSide)) {
        gridSize = divsPerSide * divsPerSide;
        
        deleteGrid();
        createGrid();
    } else {
        return;
    }

    console.log(divsPerSide);
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
        e.target.style.opacity = "initial";
    } else if(currentMode == "random-colors") {
        e.target.style.background = "#" + Math.random().toString(16).slice(-6);
        e.target.style.opacity = "initial";
    } else if(currentMode == "shading") {
        e.target.style.opacity = (parseFloat(e.target.style.opacity) || 0) + 0.1;
        e.target.style.background = "black";
    }
}

function setMode(mode) {
    currentMode = mode;

    configButtons.forEach(button => button.classList.remove("active"));
    document.querySelector(`.${mode}-mode`).classList.add("active")
}

container.addEventListener('mouseover', changeColorMode);

createGrid();