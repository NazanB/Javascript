function oddNumbers(firstNumber, secondNumber) {
  if (firstNumber < 0 || secondNumber < 0) {
    return "positive numbers";
  }

  let oddNums = "";
  for (let i = firstNumber; i <= secondNumber; i++) {
    if (i % 2 !== 0) {
      if (oddNums !== "") {
        oddNums += ",";
      }
      oddNums += i;
    }
  }

  return oddNums;
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

function charCount(word, character) {
  if (character.length !== 1) {
    return "one character";
  }

  const lowerWord = word.toLowerCase();
  const lowerChar = character.toLowerCase();

  let count = 0;
  for (let i = 0; i < lowerWord.length; i++) {
    if (lowerWord[i] === lowerChar) {
      count++;
    }
  }

  return count;
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
