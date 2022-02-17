function oddNumber(num) {
  let strNum = num.toString();
  let currentWords = "";
  if (strNum.length === 0) {
    return true;
  }
  if (strNum[0] % 2 !== 0) {
    currentWords = strNum.slice(1, strNum.length);
    return oddNumber(currentWords);
  } else {
    return false;
  }
}
console.log(oddNumber(4211133));
console.log(oddNumber(7791));
console.log(oddNumber(5));
