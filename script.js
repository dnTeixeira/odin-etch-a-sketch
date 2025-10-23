const container = document.querySelector(".container");

for(let i = 0; i < 256; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add("item-" + (i + 1));
    newDiv.classList.add("gridItem");

    container.appendChild(newDiv);
}
