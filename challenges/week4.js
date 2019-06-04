function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("name is required");
  // if (!char) throw new Error("char is required");
  // Your code here
  let namesFound = names.filter(function(name){
    if(name.charAt(0) == char){
      return true;
    };
  });
  return namesFound;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
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
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

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
