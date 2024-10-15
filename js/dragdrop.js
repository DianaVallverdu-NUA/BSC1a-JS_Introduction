// store HTML elements of class complement in complements
const complements = document.getElementsByClassName("complement");

// drop zone is the area where complements can be dropped
const dropZone = document.getElementById("character-img");

//offsetX and offsetY store the initial offset from clicking on the dragged image
let offsetX = 0;
let offsetY = 0;

//draggedImage stores the currently dragged image
let draggedImage = undefined;

/**
 * when something is dropped in the dropzone, update draggedImage style accordingly
 * @param {Event} event stores information related to the current drop event
 */
function onDrop(event) {
    //update draggedImage style to:
    // event.clientX (horizontal mouse position) - offsetX (calculated initial offset)
    // event.clientY (vertical mouse position) - offsetY (calculated initial offset)
    draggedImage.style.left = event.clientX - offsetX + "px";
    draggedImage.style.top = event.clientY - offsetY + "px";
}

/**
 * prevent the event default to allow dropping to happen
 * @param {Event} event stores information related to the current dragover event
 */
function onDragOver(event) {
    event.preventDefault();
}

/**
 * store draggedImage as the event target and compute initial offsetX and offsetY
 * @param {Event} event stores information related to the current dragover event
 */
function onDragStart(event) {
    //event.target points to the HTML Element that started the drag event, i.e.
    //the currently dragged image
    draggedImage = event.target;

    //window.getComputedStyle returns the style of the element removing the CSS text
    //for ex. "100px" becomes "100"
    const style = window.getComputedStyle(draggedImage); 

    //offset is calculated as:
    //clientX (horizontal mouse position) - style.left (left position of the image)
    //clientY (vertical mouse position) - style.top (left position of the image)
    //parseInt is needed to transform the style strings to numbers
    offsetX = event.clientX - parseInt(style.left);
    offsetY = event.clientY - parseInt(style.top);
}

//link dropZone related events to dropZone object
dropZone.ondrop = onDrop;
dropZone.ondragover = onDragOver;

//loop through HTML Elements stored inside the complements array
for(let complement of complements) {
    //link complement related events to each individual complement
    complement.ondragstart = onDragStart;
    complement.ondragover = onDragOver;
    complement.ondrop = onDrop;
}
