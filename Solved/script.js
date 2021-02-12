// Write Your Code Below
var isEqual = function (x, y) {
  if (x === y) {
    console.log("They are equal in type and value");
  }
  else if (x == y) {
    console.log("They are equal in value");
  }
  else {
    console.log("The values are not equal");
  }
}

isEqual(6, 6);
isEqual("6", 6);
isEqual(4, "8");