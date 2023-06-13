function calculateNumber(type, a, b) {
    firstInt = Math.round(a);
    secondInt = Math.round(b);

    if (type === "SUM") {
    return firstInt + secondInt;
  } else if (type === "SUBTRACT") {
    return firstInt - secondInt;
  } else if (type === "DIVIDE") {
    if (secondInt === 0) {
      return "Error";
    } else {
    return firstInt / secondInt;
    }
  }
}
module.exports = calculateNumber;
