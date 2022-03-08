let area = function (length, breadth) {
  return length * breadth;
}

let volume = function (length, breadth, height) {
  return length * breadth * height;
}

// export default area;
// export { volume };
export { area as default, volume }; //This also works
