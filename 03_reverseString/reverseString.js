const reverseString = function (str) {
  let characters = str.split("");
  let reversed = characters.reverse();
  let joinedString = reversed.join("");

  return joinedString;
};

// Do not edit below this line
module.exports = reverseString;
