
## What We Did

In this workshop we learnt about [JavaScript](https://vle.norwichuni.ac.uk/pluginfile.php/74069/mod_resource/content/2/JavaScript%20Introduction.pdf), the web development coding language, learning about some basics of coding such as Variables, Functions, and Events. To apply this knowledge, we started developing a character choice interface. The user can browse through three characters until they find the one they like.

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