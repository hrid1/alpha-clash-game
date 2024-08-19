function hideElement(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElement(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function randomAlphabets() {
  const stringAlphabet = "abcdefghijklmnopqrstwuvxyz";
  const alphabets = stringAlphabet.split("");
  const index = Math.round(Math.random() * 25);
  const alphabet = alphabets[index];
  // console.log(alphabet);
  return alphabet;
}

function elementBackgroundChange(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
function elementBackgroundRemove(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}
