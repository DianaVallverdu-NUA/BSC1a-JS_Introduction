const fancyHat = document.getElementById("complement-one");
const dropZone = document.getElementById("character-img");

function onDrop(event) {
    // bring fancy hat to the position (clientX, clientY)
    fancyHat.style.left = event.clientX - offsetX + "px";
    fancyHat.style.top = event.clientY - offsetY + "px";
    console.log("Element has been dropped");
}

function onDragOver(event) {
    event.preventDefault();
    console.log("Something is being dragged over me!");
}

let offsetX = 0;
let offsetY = 0;

function onDragStart(event) {
    const style = window.getComputedStyle(fancyHat, null); 

    offsetX = event.clientX - parseInt(style.left);
    offsetY = event.clientY - parseInt(style.top);
    console.log("I'm being dragged")
}

dropZone.ondrop = onDrop;
dropZone.ondragover = onDragOver;
fancyHat.ondragstart = onDragStart;
