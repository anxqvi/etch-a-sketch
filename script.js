const container = document.querySelector("#container");
for (let i = 0; i < 4; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < 4; j++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = getRandomColor();
        })
        row.appendChild(square);
    }
    container.appendChild(row);
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}