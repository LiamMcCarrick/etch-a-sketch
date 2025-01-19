const container = document.querySelector(".grid-container");

function drawGrid (pixelCount = 16) {
    container.innerHTML = "";

    for (i = 0; i < pixelCount; i++) {
        const pixelRow = document.createElement("div");
        pixelRow.style.flex = 1;
        pixelRow.style.display = "flex";
        for (h = 0; h < pixelCount; h++) {
            const pixel = document.createElement("div");
            pixel.style.border = "1px dashed gray";
            pixel.style.flex = 1;
            pixelRow.appendChild(pixel);
            pixel.addEventListener("mouseover", () => {
                pixel.style.backgroundColor = "red";
            })
        }
        container.appendChild(pixelRow);
    }
}

let grid = drawGrid();

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let pixelCount = +prompt("Enter Grid Size");
    if (pixelCount > 0 && pixelCount < 101) {
        grid = drawGrid(pixelCount);
    } else {
        alert("Enter number between 0 and 100.");
    }
})