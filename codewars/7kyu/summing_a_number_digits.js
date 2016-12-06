/*
Write a function named sumDigits which takes a number as input and returns the 
sum of the absolute value of each of the number's decimal digits. For example:

  sumDigits(10);  // Returns 1
  sumDigits(99);  // Returns 18
  sumDigits(-32); // Returns 5
Let's assume that all numbers in the input will be integer values.

*/


function sumDigits(number) {
  var arr = [];
  var result = 0;
  number = Math.abs(number);
  arr = number.toString().split("");
  for(var i = 0; i <arr.length; i++){
    result += parseInt(arr[i]);
  }
  return result;
}

/*One of the best solution*/
function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
}