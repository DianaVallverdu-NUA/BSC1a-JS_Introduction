## What We Did

In this workshop we learnt about [JavaScript](https://vle.norwichuni.ac.uk/pluginfile.php/74069/mod_resource/content/2/JavaScript%20Introduction.pdf), the web development coding language, learning about some basics of coding such as Variables, Functions, and Events. To apply this knowledge, we started developing a character choice interface. The user can browse through three characters until they find the one they like. Steps for this workshop can be found from the section [Preliminary Steps](#preliminary-steps) on.

A second workshop served us to add a drag and drop funcionality, to allow users to customize their characters. Steps for this exercise can be found from the section [Drag & Drop](#drag-&-drop).

## How to do it at Home

### Preliminary Steps

1. Login and [create a new repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository). You should give it a significant name, for ex. **Character Choice Website**
2. Using GitHub Desktop, [clone your repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository?tool=desktop) to your computer.
3. From GitHub Desktop, click the button "Open In Visual Studio Code"
4. Create a new HTML file, a new `styles.css` file, and link it to the HTML. If you struggle with this step, review [HTML & CSS workshop](https://github.com/DianaVallverdu-NUA/BSC1a-HTML)
5. Create [this diagram](https://miro.com/app/board/uXjVLUfEZKc=/?moveToWidget=3458764602927451353&cot=14) with (minimmum) given styles.
6. Your website you should similar [to this one](https://miro.com/app/board/uXjVLUfEZKc=/?moveToWidget=3458764602928304955&cot=14)
7. Find three character images and save them in an assets subfolder.
8. In your image Element, add a `src` attribute pointing to one of those images, and an `alt` attribute explaining what the image displays.
9. Make sure to give an id to your paragraph (for ex. `my-paragraph`), your button (for ex. `my-button`) and your image (for ex. `character-img`).

### Linking JavaScript with HTML

1. Create a new subfolder named `js` and, inside said subfolder, a new file named `script.js`
2. In your html file, add the following line in the `<head>` element:

```html
<script src="js/character-choice.js" defer></script>
```

This line is tellint the HTML where to find the JavaScript program. [The keyword `defer` is necessary](https://ishaileshmishra.medium.com/about-defer-keyword-in-javascript-html-script-file-399f366952ec#:~:text=basically%2C%20In%20HTML%2C%20the%20defer,the%20JavaScript%20is%20being%20downloaded.).

3. In your `script.js` file, type `console.log('hello world')`
4. Use the Live Server extension to display your website
5. Right click anywhere on the page and select `Inspector`. If you are on Safari, you may need to [enable developer tools](https://help.salesforce.com/s/articleView?id=sf.s1_branded_apps_playground_safari_devtools.htm&type=5) first.
6. In the Inspector Panel, find the Console Window.

You should see in the console a printed `hello world`. This means that the script is correctly connected to the HTML.

### JavaScript Skeleton

Before continuing it is suggested that you try figuring out the code by following the steps in the [VLE JS Introduction](https://vle.norwichuni.ac.uk/pluginfile.php/74069/mod_resource/content/2/JavaScript%20Introduction.pdf) slides. The order in which elements are coded is different, as this guide is meant to give you the solution rather than getting you to figure it out.

1. In your `script.js`, create three constant variables:

```JavaScript
// define sources for each character choice
const imageOne = "path_to_image_one";
const imageTwo = "path_to_image_two";
const imageThree = "path_to_image_three";
```

Constant variables cannot be reassigned later on. We want these as constants as they will never change.

2. Use the `document.getElementById` to select the button, paragraph, and id, using the id's created in `Preliminary Steps -> Step 9`. If you have used the example ids, these would look like so:

```JavaScript
// define HTML Element constants
const myButton = document.getElementById("my-button");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementById("character-img");
```

Each of these new constants is used to interact with each of the HTML elements previously created. We will use them differently according to our needs.

3. Create a variable of type `let` which will store the `characterCount`, i.e., which character is being displayed in the moment. This variable is initiated at one since we are initially displaying the first character.

```JavaScript
let characterCount = 1;
```

4. Create a function and name it `clickFunction` which for now will be empty. This is the function that will be executed when the button is clicked.

```JavaScript
function clickFunction() {
}
```

5. Link the **event** `onclick` of the `myButton` object with the `clickFunction`:

```JavaScript
myButton.onclick = clickFunction;
```

With this, we have built the skeleton of the JavaScript. Now, we will implement more code only **inside** the `clickFunction` - i.e., in between the `clickFunction` brackets.

To test that this code is correctly coded, you can add a `console.log` line inside the click function. for ex.

```JavaScript
function clickFunction() {
  console.log('the button has been clicked');
}
```

If you now click the button, the message will appear in the console tab.

### Filling the `clickFunction`

Let's now lock at what needs to happen when the button is clicked. Inside the click function:

1. Start by updating the `characterCount`:

```JavaScript
// update character counter
characterCounter = characterCounter + 1;
```

2. Add a conditional statement to make sure the character stays within `1`, `2` and `3`:

```JavaScript
// if beyond 3 -> set character counter to 1
if (characterCounter > 3) {
  characterCounter = 1;
}
```

3. Update the text in the paragraph to display which character is being selected:

```JavaScript
// update paragraph text with new character
myParagraph.innerHTML = "I am on character " + characterCounter;
```

With this, you should now see in your website which character is being displayed as you press the button. However, the image is not yet updating.

To update the image, we will need to access the `src` property of the object `myImage`. You can do so with the line:

```JavaScript
myImage.src = "new source"
```

We will use three conditionals to test which character the user wants to see, and display the specific image the user is asking for.

4. Implement the three conditionals like so:

```JavaScript
if (characterCounter === 1) {
  characterImage.src = imageOne;
}

if (characterCounter === 2) {
  characterImage.src = imageTwo;
}

if (characterCounter === 3) {
  characterImage.src = imageThree;
}
```

With this, the `characterImage.src` property is continuously updating as the user clicks on the button.

### Final Touches

In class, we added the keyword `return` after each `characterImag.src` assignment. The `return` keyword tells the function to stop testing. Since we have found which character we were looking for, the program does not need to keep checking the value of `characterCount`. You can check the `script.js` file in this repository to see how we implemented.

### Drag & Drops

Implementing drag & drop is a complicated process. In this guide I will explain how the final implementation was done, but trying to implement a single drag & drop first is recommended. A simple [Drag & Drop tutorial](https://www.youtube.com/watch?v=_G8G1OrEOrI) can be followed in advance of these steps.

1. Download two (or more) pictures in png or jpg format (an online [Image Converter](https://www.youtube.com/watch?v=_G8G1OrEOrI) can be used if needed).
2. Save your new images in a subfolder in `assets/complements`.
3. In your HTML, before your `character-img` image, add the following div:

```HTML
<div class="container flex-column">
  <img draggable="true" class="complement" src="assets/complements/name_of_first_image" alt="description" />

  <img draggable="true" class="complement" src="assets/complements/name_of_second_image" alt="description" />
</div>
```

**Note:** You will have to change the `src` to match your images.
**Note:** It is intended to have a `container` image with `flex-direction: column` properties. You may do this using different classes.

4. Surround the `character-img`, the paragraph with its name, the change name input & button and the character change button with a `div` with the same properties. For example, in my case this would be:

```HTML
<div class="container flex-column">
  <img id="character-img" src="assets/chikorita.png" alt="Initial Pokemon Chikorita" />

    <p id="my-paragraph">Chikorita</p>

    <div class="container">
      <input id="name-change-input" />
      <button id="name-change-button">Change Name</button>
    </div>

    <button id="my-button">Click Me</button>
</div>
```

5. Remove the `flex-column` property from the div that contains both of these divs.

In the end, your HTML body tag should look similar to this:

```HTML
<body>
  <!-- main div - full width and full height -->
  <div class="container width-full height-full">
    <!-- inner div - floating in middle of webpage -->
    <div class="container width-half height-500px bg-marine_blue text-white">

      <!-- complements div - displayed as one column -->
      <div class="container flex-column">
        <img draggable="true" class="complement" src="assets/complements/hat.png" alt="A hat" />
        <img draggable="true" class="complement" src="assets/complements/sunglasses.jpg" alt="Fancy Sunglasses" /> 
      </div>

      <!-- character choice div - displayed as one column -->
      <div class="container flex-column">
        <!-- image of the character currently selected -->
        <img id="character-img" src="assets/chikorita.png" alt="Initial Pokemon Chikorita" />
        
        <!-- character name -->
        <p id="my-paragraph">Chikorita</p>

        <!-- change name of character input -->
        <div class="container">
          <input id="name-change-input" />
          <button id="name-change-button">Change Name</button>
        </div>

        <!-- change of text button -->
        <button id="my-button">Click Me</button>
      </div>

    </div>
  </div>
</body>
```

6. Having modified the HTML, change the CSS so that the images have the correct properties. Add the following class properties somewhere in your CSS:

```CSS
.complement {
  position: relative;
  width: 100px;
  height: 100px;
}
```

`position: relative` will ensure that the images of class `complement` can be modified using the property `left` and `top`. These are necessary - as we will see when implementing the JavaScript - to implmenet the drag & drop.

**Note:** You can change the pixels of `width` and `height`. These could even be changed individually for each image, with the use of ids.

#### JavaScript - Iteration 1

By default JavaScript does not allow to drag & drop Elements. However, it is possible to add code that prevents the default behaviour from happening. Three events will be used to implement the drag & drop:

- The `ondrop` event - used to mark when something is dropped onto an Element. The `ondrop` element will be linked to the area where elements can be dropped (aka the character image).
- The `ondragover` event - this is a special event. Usually, JavaScript will reset all the CSS of an Element that is being dragged on top of another element. We need to use the `ondragover` event to prevent the default behavior. This will be linked to the area where elements can be dropped (aka the character image).
- The `ondrag` event - used to specify what happens when the user starts dragging a `draggable` element. We will use this to save some important information related to the drag & drop event. This will be linked individually to each of the draggable complements.

1. At the top, select all elements with class `complement`. The `document.getElementsByClassName` function can do this, and returns a list of objects of given class. These are the draggable elements.

```JavaScript
const complements = document.getElementsByClassName("complement");
```

2. Create a second variable with name `dropZone` which points to the `character-img` element. This is the area where draggable elements are allowed to drop.

```JavaScript
const dropZone = document.getElementById("character-img");
```

3. Create three empty functions, and link each of them to its corresponding object. Since we have a list of draggable objects, we will have to use the concept of `loop` to link the `onDragStart` fucntion to each individual complement:

```JavaScript

function onDragStart(event) {

}

function onDrop(event) {

}

function onDragOver(event) {

}

dropZone.ondrop = onDrop;
dropZone.ondragover = onDragOver;

// the following command selects each of the complements of a list and applies the code to each of them individually
for(let complement of complements) {
  complement.ondragstart = onDragStart;
}
```

**Note:** The `event` paramater that we have added to these functions is used to access properties and functions of the current event object. These could be the `target` - i.e., which object in the page fired the event.

4. In the `onDragOver` function, add following code to prevent the default behavior:

```JavaScript
function onDragOver(event) {
  event.preventDefault();
}
```

5. Create a new `let` variable at the top with name `draggedElement`. This `let` variable will be used to mark which element is currently being dragged, so that we can then retreive it at the `drop` event and update its position.

```JavaScript
let draggedElement = undefined;
```

**Note:** When the page is rendered there is no no actively dragged element yet, so it is safe to leave this as `undefined`.

6. Modify the `onDragStart` function to update the value of the `draggedElement` to the event `target` - i.e., the element that originated this event:

```JavaScript
function onDragStart(event) {
  draggedElement = event.target;
}
```

7. Modify the `onDrop` function to update the position of the `draggedElement` to the current mouse position. The current mouse position can be accessed with `event.clientX` (horizontal) and `event.clientY` (vertical).

```JavaScript
function onDrop(event) {
  draggedElement.style.left = event.clientX + "px";
  draggedElement.style.top = event.clinetY + "px";
}
```

**Note:** Only elements with position set to `absolute` or `relative` can be modified using the `style.left` and `style.top` property. This is why it was important to set this property in the CSS.
**Note:** An element's position can only be modified by changing its `left` and `top` style properties - i.e., which horiziontal or vertical position they have according to the top, left corner.

8. Test it out! - Hint, it won't fully work.

While it is possible to drag & drop the complement images, they are not being placed exactly where the mouse leaves them. Move on to **Iteration 2** to see how to fix this.

### JavaScript - Iteration 2

Think about the dragging steps with this example:

- The first complements starts with position `initialLeft = 50`, `initialTop = 0`
- The user clicks the object. However, the click doesn't happen at `(50,0)`. It may happen at `initialClientX = 53`, `initialClientY = 4`
- The object is dropped, let's say at position `finalClientX = 40`, `finalClientY = 55`
- The object is updated to have `finalLeft: 40`, `finalTop: 55`

The problem here is that the calculation is not accounting for the initial displacement (the offset) of the mouse. The offset is the distance from `initialClientX` (where the client clicked) to `initialLeft` (the original position of the complement) in the horizontal axis, and the distance from `initialClientY` (where the client clicked) and `initialTop` (the original position of the complement) in the vertical axis.

In this example, the initial offset was:

`offsetX = initialClientX - initialLeft = 53 - 3 = 3`

`offsetY = initialClientY - initialTop = 4 - 0 = 4`

When dropping the element, the new position should have been

`finalLeft = finalClientX - offsetX = 40 - 3 = 37`

`finalTop = finalClientY - offsetY = 55 - 3 = 32`

Access [this diagram](https://miro.com/app/board/uXjVLUfEZKc=/?moveToWidget=3458764603756583109&cot=14) for a visual explanation.

This highlights that an offset needs to be implemented. To do this:

1. Add two `let` variables `offsetX` and `offsetY` and implement them at `0`.

```JavaScript
let offsetX = 0;
let offsetY = 0;
```

2. Modify the `onDragStart` function to calculate these offsets at the beginning:

```JavaScript
function onDragStart(event) {
    draggedElement = event.target;

    const style = window.getComputedStyle(draggedImage);

    offsetX = event.clientX - parseInt(style.left);
    offsetY = event.clientY - parseInt(style.top);
}
```

**Note:** The `window.getComputedStyle` is a function that converts the CSS style (for ex. `300px`) to a version without the `px` part (for ex. `200`). 
**Note:** The `parseInt` is necessary as `style.left` and `style.right` are of type string, and they need to be converted into Numbers.

3. Modify the `onDrop` function to apply the `offset` at the end of the process:
```JavaScript
function onDrop(event) {
    draggedImage.style.left = event.clientX - offsetX + "px";
    draggedImage.style.top = event.clientY - offsetY + "px";
}
```

4. Test it!

With these changes, your drag & drop should be working.