function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  fillings = sandwich.fillings;
  return fillings;
}

function isFromManchester(person) {
  // if (person === undefined) throw new Error("person is required");
  // Your code here!
  if (person.city === "Manchester"){
    rightCity = true;
  } else {
    rightCity = false;
  }
    return rightCity;
}

function getBusNumbers(people) {
  // if (people === undefined) throw new Error("people is required");
  // Your code here!
  numOfBuses = Math.ceil(people/40);
  return numOfBuses;
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
