function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  word = word[0].toUpperCase() + word.slice(1);
  return word
}


function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("name is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  nameInitials = firstName.slice(0, 1) + "." + lastName.slice(0, 1);
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
  //if (str === undefined) throw new Error("str is required");
  // Add your code here!
  if (str.length % 2 == 1) {
    strMiddle = (str.length - 1) / 2
    return str[strMiddle]
  } else {
    strMiddle = (str.length - 2) / 2
    strMidMiddle = strMiddle + 2
    return str.slice(strMiddle, strMidMiddle)
  }
}

// This function takes in a string, splits it out and  
// then uses the reverse operation to reverse the string and 
// then rejoined and put in reversedString

function reverseWord(word) {
  // if (word === undefined) throw new Error("word is required");

  reversedString = word.split("").reverse().join("")

  return reversedString
}

function reverseAllWords(words) {
  // if (words === undefined) throw new Error("words is required");
  reverseArray = words.split("").reverse()
  return reverseArray
}

function countLinuxUsers(users) {
  // if (users === undefined) throw new Error("users is required");
  // Add your code here!
  // This code uses filter to loop through an array and find a particular string and also
  // count how many of these strings have been found, if some are found it returns 
  // the number of them found or else a 0. 
  i = 0;
  userCount = 0;
  users.forEach(function(user){
     if (user.type == "Linux"){
       userCount = userCount + 1;
     } else {
       userCount = userCount + 0;
     }
  });  
  return userCount;
};

function getMeanScore(scores) {
  // if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  // this code takes some values from an array, totals them and then divides them by
  // the amount of numbers there are to find the mean average. Math.round is used to 
  // make sure that it is set to 2 decimal place; you also must multiply the number 
  // by 100 then divide it by 100.
  totSum = 0;
  i = 0;

  for (i = 0; i < scores.length; i++) {
    totSum = totSum + scores[i];
  }

  return Math.round(totSum / i * 100) / 100;
}
// scores.forEach(getMeanScore);

function simpleFizzBuzz(n) {
  // if (n === undefined) throw new Error("n is required");
  // Add your code here!
  // This uses % to determine if a number can be divided by another number without a remainder
  // it uses && to stand for AND, ̣|| to stand for OR.
  if (n % 3 === 0 && n % 5 === 0) {
    return "fizzbuzz"
  }
  if (n % 3 === 0) {
    return "fizz"
  }
  if (n % 5 === 0) {
    return "buzz"
  }
  if (n % 3 === 1 || n % 5 === 1) {
    return n
  }
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
