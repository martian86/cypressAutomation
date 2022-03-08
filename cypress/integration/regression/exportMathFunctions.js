let squareNum = function (num) {
  return num * num;
}

let cubeNum = function (num) {
  return num * num * num;
}

//Export variables from a file
//Import them in the target file using the same variable names in {} used here
export { squareNum, cubeNum };