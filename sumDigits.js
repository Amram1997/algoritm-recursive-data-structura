function sumOfDigit(n, i = 0) {
  let strN = n.toString();
  let strArray = strN.split("");
  if (strArray.length > 1) {
    strArray.forEach((element) => {
      i += +element;
    });
    return sumOfDigit(i);
  } else {
    return n;
  }
}
console.log(sumOfDigit(14));
console.log(sumOfDigit(29));
console.log(sumOfDigit(999999999999));
