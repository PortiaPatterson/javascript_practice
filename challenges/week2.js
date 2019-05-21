function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  fillings = sandwich.fillings;
  return fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.city === "Manchester"){
    rightCity = true;
  } else {
    rightCity = false;
  }
    return rightCity;
}

function getBusNumbers(people) {
if (people === undefined) throw new Error("number of people is required");
  // Your code here!
  numOfBuses = Math.ceil(people/40);
  return numOfBuses;
}

function countSheep(arr) {
  if (!arr) throw new Error("array is required");
  // Your code here!
  sheepCount = 0;
  arr.map(function(animal){
    if(animal === "sheep"){
      sheepCount = sheepCount + 1;
    } else {
      sheepCount = sheepCount + 0;
    }
  });
  return(sheepCount);
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
