const tryingToEnterBar = [
  32, 17, 22, 20, 21, 73, 45, 30, 16, 38, 19, 23, 21, 25,
];
//HERE'S AN EXAMPLE OF ONE OF THE MOST USEFUL HIGHER ORDER ARRAY METHODS:
//FILTER!

//FOR LOOP METHOD OF FILTERING
function allowedInBar(ages) {
  let twentyOneUp = [];
  for (let age of ages) {
    if (age >= 21) {
      twentyOneUp.push(age);
    }
  }
  return twentyOneUp;
}

//HOW TO FILTER USING THE .FILTER HIGHER ORDER ARRAY METHOD
function allowedInFilter(ages) {
  return ages.filter(function (age) {
    age >= 21;
  });
}

//USING THE .FILTER METHOD WITH ARROW SYNTAX FOR THE CALLBACK FUNCTION
// function allowedInFilter(ages) {
//   return ages.filter((age) => age >= 21);
// }
