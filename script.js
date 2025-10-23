const container = document.querySelector(".container");
const newGridButton = document.querySelector(".grid-size-button");

for(let i = 0; i < 256; i++) {
    const newDiv = document.createElement('div');
    const divSize = 480 / 16;
    newDiv.classList.add("item-" + (i + 1));
    newDiv.classList.add("gridItem");

    newDiv.style.width = divSize + "px";
    newDiv.style.height = divSize + "px";
    newDiv.style.border = "1px solid red";
    newDiv.style.boxSizing = "border-box";

    container.appendChild(newDiv);
}

const grid = document.querySelectorAll(".gridItem");

grid.forEach(item => 
    item.addEventListener('mouseover', (e) => {
        e.target.style.background = "black";
    })
);

newGridButton.addEventListener('click', (e) => {
    
})
