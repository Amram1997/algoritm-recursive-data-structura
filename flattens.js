"use strict";
function flattensArray(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((prev, curent) => {
      return prev.concat(flattensArray(curent));
    }, []);
  } else {
    return arr;
  }
}
console.log(flattensArray([14, [1, [[[3, []]], 1], 0]]));
console.log(flattensArray([1, [3, 4, [1, 2]], 10]));
