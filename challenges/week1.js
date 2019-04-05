function capitalize(word) {
  //  Haven't gotten throw new Error to work yet
  //so I have done a work-around  
  if (word === undefined) throw new Error("word is required");
  word = word[0].toUpperCase() + word.slice(1);
  return word
}



function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("name is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  nameInitials = firstName.slice(0,1) + "." + lastName.slice(0,1);
  return nameInitials 
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  vatAdded = (originalPrice * vatRate) / 100 + originalPrice
  return Math.round(vatAdded * 100) / 100
}


function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  reducedPrice = originalPrice - (originalPrice * reduction) / 100
  return Math.round(reducedPrice * 100) / 100
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
