const body = document.body;
let container = document.querySelector("#container");
createGrid(container,4);

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let size = prompt("Enter the number of squares per side for the new grid:");
    if (size < 1 || size > 100) {
        alert("Invalid size! The grid size must be between 1 to 100");
        return;
    }
    container.remove();
    container = document.createElement("div");
    container.id = "container";
    body.appendChild(container);
    createGrid(container, size);
});

function createGrid(container, size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < size; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.opacity = 1.1;
            square.style.height = `calc(80vh / ${size})`
            square.addEventListener("mouseover", () => {
                square.style.opacity = parseFloat(square.style.opacity) - 0.1;
                square.style.backgroundColor = getRandomColor();
            })
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomColor() {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    return `rgba(${red}, ${green}, ${blue})`
}