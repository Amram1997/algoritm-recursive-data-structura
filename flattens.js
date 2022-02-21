"use strict";
function flattensArray(arr, arr1 = []) {
  return arr.reduce(function (prev, curent) {
    if (typeof curent !== "object") {
      arr1.push(curent);
      return arr1;
    }
  }, []);
}
console.log(flattensArray([1, [3, 4, [1, 2]], 10]));
