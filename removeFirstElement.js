"use strict";
function removeFirstElement(arr, i = 0) {
  if (arr.length === i) {
    arr.pop();
    return arr;
  }
  arr[i] = arr[i + 1];
  i++;
  return removeFirstElement(arr, i);
}
console.log(removeFirstElement([6, 78, "n", 0, 1]));
console.log(removeFirstElement([5]));
console.log(removeFirstElement([]));
