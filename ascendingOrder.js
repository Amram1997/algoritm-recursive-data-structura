"use strict";
function ascendingOrder(arr) {
  let index;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= arr[i + 1]) {
      index = -1;
    } else {
      return (index = arr.indexOf(arr[i + 1]));
    }
  }
  return index;
}
console.log(ascendingOrder([2, 12, 15, 48, 64]));
console.log(ascendingOrder([-9, -4, -4, 3, 12, 4, 5]));
