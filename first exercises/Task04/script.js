let userName = "Brad";
userName = "Janna";

function getUserNameLength(name) {
  return name.length;
}

console.log(getUserNameLength(userName) > 4);

function isString(input) {
  return typeof input === "string";
}

console.log(isString("Hello"));
console.log(isString(3));
console.log(isString(undefined));
console.log(isString(""));
console.log(isString("John" + "Doe"));
