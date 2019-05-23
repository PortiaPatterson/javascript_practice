function getSquares(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here!
  let squaresArray = [];
  if (nums === 0) {
    squaresArray = nums;
  }
  if (nums.length > 0) {
    squaresArray = nums.map(function (num) {
      return num * num;
    })
  }
  return squaresArray;
}

function camelCaseWords(words) {
  if (!words) throw new Error("words is required");
  // Your code here!
}

function getTotalSubjects(people) {
  if (!people) throw new Error("people is required");
  // Your code here!
  let subjCount = 0;
  people.forEach(function (person) {
    if (person.subjects == "") {
      subjCount = subjCount + 0;
    } else {
      subjCount = subjCount + person.subjects.length;
    }
  });
  return subjCount;
};

function checkIngredients(menu, ingredient) {
  if (!menu) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  if (!arr2) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
