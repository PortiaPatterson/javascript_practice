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
  if (!words) throw new Error("words are required");
  // Your code here!
  //  This will allow you to put various words into a new array that have been changes
  // newWord.push(word);

  let newWord = [];
  let rejoinedWord = "";
  words.forEach(function (word, index) {
    if (words.length === 1) {
      rejoinedWord = word.charAt(0).toLowerCase() + word.slice(1);
      newWord.push(rejoinedWord);
    }
    if (words.length > 1 && index == 0) {
      rejoinedWord = word.charAt(0).toLowerCase() + word.slice(1);
      newWord.push(rejoinedWord);
    }

    if (words.length > 1 && index > 0) {
      rejoinedWord = word.charAt(0).toUpperCase() + word.slice(1);
      newWord.push(rejoinedWord);
    }
  });

  return newWord.join('');
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
  // if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
  var inMenu = false;

  menu.forEach(function (items) {
    if (items.ingredients.includes(ingredient)) {
      inMenu = true;
    }
  });

  return inMenu;
};



function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  // if (!arr2) throw new Error("arr2 is required");
  // Your code here!
  let dupNum = [];
  arr1.forEach(function (num1) {
    arr2.forEach(function (num2) {
      if (num1 == num2) {
        dupNum.push(num2);
      }
    })
  });
  dupNum.sort(function (a, b) { return a - b });
  return dupNum;
};

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
