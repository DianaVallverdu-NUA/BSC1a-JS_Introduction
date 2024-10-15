const fancyHat = document.getElementById("complement-one");
const dropZone = document.getElementById ("character-img");

function onDrop(event) { 
    console.log("Element has been dropped");
}

function onDragOver(event) {
    console.log("Something is being dragged over me!");
}

function onDragStart() {
    console.log ("I'm being dragged")
}

dropZone.ondrop = onDrop;
dropZone.ondragover = onDragOver;
fancyHat.ondragstart = onDragStart;
