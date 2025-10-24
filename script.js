const container = document.querySelector(".container");
const newGridButton = document.querySelector(".grid-size-button");
let gridSize = 256;
let userChoice = 16;

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
    
    const grid = document.querySelectorAll(".gridItem");
    
    grid.forEach(item => 
        item.addEventListener('mouseover', (e) => {
            e.target.style.background = "black";
        })
    );
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

newGridButton.addEventListener('click', (e) => {
    changeGridSize()
})

createGrid();