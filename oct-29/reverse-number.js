//reverse number without predefined methods

function reverse(num) {
   // return parseInt(num.toString().split('').reverse().join(''))
 // rev=0;
  rev = "";
  while (num > 0) {
    //rev=rev * 10 + num%10
    rev = rev + (num % 10);
    num = Math.floor(num / 10);
  }
  return parseInt(rev);
}
const res = reverse(320);
console.log( res);
