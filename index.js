var loop = ["martin", 4];
for (var i = 0; i < loop.length; i++) {
  document.write(loop[i] + "</br>");
}

function addition() {
  var numbers = [4, 6, 8, 9];
  return numbers[0] + numbers[1] + numbers[2] + numbers[3];
}
document.write(addition() + "</br>");

function evenNumbers(num) {
  if (num % 2 === 0) {
    document.write(num + "</br>");
  }
}

var numbers = [2, 7, 4, 6, 12, 17];
numbers.forEach(evenNumbers);

function reverse() {
  const number = [2, 7, 4, 6, 12, 17];
  return number.reverse();
}
document.write(reverse() + "</br>");

function largest() {
  const numbers = [2, 7, 4, 6, 12];
  return Math.max(...numbers);
}

document.write(largest());

export { evenNumbers, reverse, largest };
