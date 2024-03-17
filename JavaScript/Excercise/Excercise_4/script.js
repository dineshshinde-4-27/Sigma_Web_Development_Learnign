let container = document.getElementById("container");

function colorCreator() {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    let str = ` rgb(${r},${g},${b}) `
    return str
}
let color = colorCreator();
// Giving Color to Background 
container.style.backgroundColor = color;

// Giving color to the boxes
let allBoxes = container.children;
for (element of allBoxes) {
    let color = colorCreator();
    element.style.backgroundColor = color;
    element.innerText = color;
    if (element.matches('#refresh')) {
        element.style.backgroundColor = "white"
        element.innerText = "refresh".toUpperCase();
        let a = element;
        element.addEventListener("click", () => {
            location.reload();
        })

    }
}




