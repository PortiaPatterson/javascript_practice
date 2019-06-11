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
  if (!users) throw new Error("users is required");
  // Your code here
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences are required");
  // if (!str) throw new Error("str is required");
  // Your code here
  let n = 0;
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
