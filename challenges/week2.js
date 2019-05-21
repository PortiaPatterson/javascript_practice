function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  word = word[0].toUpperCase() + word.slice(1);
  return word
}
function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  fillings = sandwich.fillings;
  return fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
}

function countSheep(arr) {
  if (!arr) throw new Error("arr is required");
  // Your code here!
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
