const container = document.querySelector(".grid-container");

for (i = 0; i < 16; i++) {
    const pixelRow = document.createElement("div");
    pixelRow.style.flex = 1;
    pixelRow.style.display = "flex";
    for (h = 0; h < 16; h++) {
        const pixel = document.createElement("div");
        pixel.style.border = "1px dashed gray";
        pixel.style.flex = 1;
        pixelRow.appendChild(pixel);
    }
    container.appendChild(pixelRow);
}



