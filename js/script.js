// define sources for each character choice
const image1 = "assets/chikorita.png";
const image2 = "assets/cyndaquil.png";
const image3 = "assets/totodile.png";

// define alternative text for each character choice
const altText1 = "Initial Pokemon Chikorita";
const altText2 = "Initial Pokemon Cyndaquil";
const altText3 = "Initial Pokemon Totodile";

// define text for paragraph for each character choice
const characterName1 = "Chikorita";
const characterName2 = "Cyndaquil";
const characterName3 = "Totodile";

// define HTML Element constants
const myButton = document.getElementById("my-button");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementById("character-img");

// store which character is currently being displayed
let characterCounter = 1;

/**
 * Update character counter and display next character.
 * Sets counter back to 1 if 3 has been surpassed.
 * @returns when character is chosen
 */
function clickFunction() {
  console.log("============== NEW TESTING STARTED ==============");

  // update character counter
  characterCounter = characterCounter + 1;

  // if beyond 3 -> set character counter to 1
  if (characterCounter > 3) {
    characterCounter = 1;
  }

  // update paragraph text with new character
  myParagraph.innerHTML = "I am on character " + characterCounter;

  // find image related to specific character counter
  console.log("Testing if character counter is one");
  if (characterCounter === 1) {
    characterImage.src = image1;
    characterImage.alt = altText1;
    myParagraph.innerHTML = characterName1;
    return;
  }

  console.log("Testing if character counter is two");
  if (characterCounter === 2) {
    characterImage.src = image2;
    characterImage.alt = altText2;
    myParagraph.innerHTML = characterName2;
    return;
  }

  console.log("Testing if character counter is three");
  if (characterCounter === 3) {
    characterImage.src = image3;
    characterImage.alt = altText3;
    myParagraph.innerHTML = characterName3;
    return;
  }

  console.log("No more testing to do");
}

myButton.onclick = clickFunction;
