const size = 25;
let result;

if (size > 20) {
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}

console.log(result);

function oddEven(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddEven(4));
console.log(oddEven(3));
console.log(oddEven(-1));
console.log(oddEven(10));

function oldYoung(number) {
  if (typeof number != "number" || number < 0) {
    return "invalid parameter";
  } else if (number < 16) {
    return "children";
  } else if (number < 50) {
    return "young person";
  } else {
    return "elder person";
  }
}

console.log(oldYoung(27));
console.log(oldYoung(6));
console.log(oldYoung(-1));
console.log(oldYoung(86));
