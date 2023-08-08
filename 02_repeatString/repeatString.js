const repeatString = function (str, num) {
  let result = str;
  for (let i = 1; i < num; i++) {
    result += str;
  }
  if (num === 0 || str === "") {
    result = "";
  } else if (num < 0) {
    result = "ERROR";
  }
  return result;
};

function repeatRandomTimes(str) {
  let result = str;
  randomNum = Math.floor(Math.random() * 1000);
  for (let i = 1; i < randomNum; i++) {
    result += str;
  }
  if (str === "") {
    result = "";
  }
  return result;
}

// Do not edit below this line
module.exports = repeatString;
