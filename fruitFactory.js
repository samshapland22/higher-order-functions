function cakeMaker(fruitString) {
  return `${fruitString} cake`;
}

function pieMaker(fruitString) {
  return `${fruitString} pie`;
}

function factory(fruits, func) {
  let products = [];
  for (let fruit of fruits) {
    products.push(func(fruit));
  }
  return products;
}

console.log(factory(["cherry", "mango", "kiwi"], pieMaker));
