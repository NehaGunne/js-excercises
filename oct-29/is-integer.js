const num1 = 5;
const num2 = 5.5;

//console.log(Number.isInteger(num1),Number.isInteger(num2))

function isInteger(num) {
  //console.log(num%1)
  if (num % 1 === 0) {
    return true;
  }

  return false;
}
console.log(isInteger(num1));
console.log(isInteger(num2));
