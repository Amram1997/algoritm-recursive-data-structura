function minimalPositiveArray(arr, minPositive = Infinity) {
  let newArr = [...arr];
  let min = minPositive;
  if (arr.length === 0) {
    if (min === Infinity) {
      return -1;
    } else {
      return min;
    }
  }
  const lastElem = newArr.pop();
  if (lastElem >= 0 && lastElem < minPositive) {
    min = lastElem;
  }
  return minimalPositiveArray(newArr, min);
}
console.log(minimalPositiveArray([56, -9, 87, -23, 0, -105, 55, 1]));
console.log(minimalPositiveArray([45, -9, 15, 5, -78]));
console.log(minimalPositiveArray([-5, -9, -111, -1000, -7]));
