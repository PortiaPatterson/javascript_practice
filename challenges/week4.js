function findSmallNums(nums) {
  if (!nums) throw new Error("nums are required");
  // Your code here
  // Only returns values that are less than 1.
  let lessThanOne = [];
  nums.forEach(function (num) {
    if (num < 1) {
      lessThanOne.push(num);
    };
  });
  return lessThanOne;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("name is required");
  // if (!char) throw new Error("char is required");
  // Your code here
  // Uses .charAt to find the first letter of an element in an array
  let namesFound = names.filter(function (name) {
    if (name.charAt(0) == char) {
      return true;
    };
  });
  return namesFound;
}

function findVerbs(words) {
  if (!words) throw new Error("words are required");
  // Your code here
  let wordCheck = [];
  // uses .includes to search for a particular string and prints out any terms that match
  words.forEach(function (word) {
    if (word.includes("to ")) {
      wordCheck.push(word)
    }
  });
  return wordCheck;
}

function getIntegers(nums) {
  if (!nums) throw new Error("num is required");
  // This code creates a new array based on using the Number.isInteger 
  // to check if a number is a whole one or not
  let wholeNums = nums.filter(function (num) {
    if (Number.isInteger(num)) {
      return true;
    }
  });
  return wholeNums;
}

function getCities(users) {
  if (!users) throw new Error("users are required");
  // Your code here
  // refers to the nested parts of an array to print out values
  let cities = [];
  users.forEach(function (c) {
    cities.push(c.data.city.displayName);
  });
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums are required");
  // Your code here
  // Uses Math.sqrt() to get square root of a num and checks if it's an integer, if so,
  // the number is pushed to a new array, if not then, .toFixed(2) is used to set it to 2 decimals
  // and parseFloat is used to make the value a number not a string, then it's pushed to the new array.
  let newNums = [];
  let numCheck = 0;
  nums.map(function (num) {
    numCheck = (Math.sqrt(num));
    if (Number.isInteger(numCheck)) {
      newNums.push(numCheck)
    } else {
      numCheck = parseFloat(Math.sqrt(num).toFixed(2));
      newNums.push(numCheck);
    }
  });
  console.log(newNums);
  return newNums;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences are required");
  // if (!str) throw new Error("str is required");
  // Your code here
  let stringCheck = [];
  sentences.filter(function (word) {
    if (word.search(str) >= 0) {
      stringCheck.push(word)
    }
  });
  return stringCheck;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles are required");
  // Your code here
  // Uses .sort function to check 2 values against each other and then returning the higher one 1st,
  // to make it an ascending list of you would just return the lower one 1st
  // .map is used so the new array can be filled one row at a time.
  let sortedNums = [];
  triangles.map(function (nums) {
    sortedNums.push(nums.sort(function (a, b) { return b - a })[0]);
  });
  return sortedNums;
};


module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
