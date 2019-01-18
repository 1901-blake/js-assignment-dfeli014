/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
  if (sumNum < 0) {
    // -1 means that the function got a number that cant be factorialized
    return -1;
  } else if (sumNum >= 1) {
      return sumNum * factorial(sumNum - 1);
  } else {
      return 1;
  }
}

/**
 * Testing for the Factorial Function
 */
let test1 = factorial(-2);
console.log(test1);
console.log(factorial(0));
console.log(factorial(4));