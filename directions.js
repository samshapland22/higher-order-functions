const directions = [];
function storeDirections(direction) {
  directions.push(direction);
}
function go(direction, operation) {
  operation(direction);
  return direction;
}

go("Left", storeDirections);
go("Right", storeDirections);
go("Up", storeDirections);
console.log(directions); //> ["Left", "Right", "Up"]
