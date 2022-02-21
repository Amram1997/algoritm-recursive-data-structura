"use strict";
function rotateArray(arr, n, i = 0) {
  if (n === i) {
    return arr;
  }
  if (n >= 0) {
    let firstElement = arr.shift();
    arr.push(firstElement);
    i++;
    return rotateArray(arr, n, i);
  } else if (n < 0) {
    let lastElement = arr.pop();
    arr.unshift(lastElement);
    i--;
    return rotateArray(arr, n, i);
  }
}
console.log(rotateArray(["a", "b", "c", "d", "e", "f", "g", "h"], 3));
console.log(rotateArray(["a", "b", "c", "d", "e", "f", "g", "h"], -2));
