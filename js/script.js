// define sources for each character choice
const imageSources = ["assets/chikorita.png", "assets/cyndaquil.png", "assets/totodile.png"];

// define alternative text for each character choice
const altText = ["Initial Pokemon Chikorita", "Initial Pokemon Cyndaquil", "Initial Pokemon Totodile"];

// define text for paragraph for each character choice
const characterNames = ["Chikorita", "Cyndaquil", "Totodile"];

// define HTML Element constants - character selection
const myButton = document.getElementById("my-button");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementById("character-img");

// define HTML Element constants - character nameing
const characterNameInput = document.getElementById("name-change-input");
const characterNameButton = document.getElementById("name-change-button");

// store which character is currently being displayed
let characterCounter = 1;


/**
 * Update character counter and display next character.
 * Sets counter back to 1 if 3 has been surpassed.
 */
function clickFunction() {
  console.log("============== NEW CLICK  ==============");

  // update character counter
  characterCounter = characterCounter + 1;

  // if beyond 3 -> set character counter to 1
  if (characterCounter > 3) {
    characterCounter = 1;
  }

  console.log('character counter', characterCounter);

  // update paragraph text with new character
  myParagraph.innerHTML = "I am on character " + characterCounter;

  // find image related to specific character counter
  characterImage.src = imageSources[characterCounter - 1];
  characterImage.alt = altText[characterCounter - 1];
  myParagraph.innerHTML = characterNames[characterCounter - 1];
}

/**
 * Update character name to what is stored in the input field.
 */
function onSubmitButton() {
  myParagraph.innerHTML = characterNameInput.value;
}

myButton.onclick = clickFunction;
characterNameButton.onclick = onSubmitButton;