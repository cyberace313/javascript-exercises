const sumAll = function (start, end) {
  let sumArr = [];
  if (start < 0 || end < 0) {
    return "ERROR";
  } else if (typeof start !== "number" || typeof end !== "number") {
    return "ERROR";
  } else if (start > end) {
    for (let i = end; i <= start; i++) {
      sumArr.push(i);
    }
  } else {
    for (let i = start; i <= end; i++) {
      sumArr.push(i);
    }
  }
  let sum = sumArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
