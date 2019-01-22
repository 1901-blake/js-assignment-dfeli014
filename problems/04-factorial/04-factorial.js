/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
  
  // Check to see if sumNum is a number and if it is positive
  // Otherwise, recursively get the factorial of sumNum
  if (sumNum < 0) {
    throw new Error("sumNum is not a positive number");
  } else if (typeof(sumNum) !== "number") {
    throw new Error("sumNum is not a number");
  } else if (sumNum >= 1) {
      return sumNum * factorial(sumNum - 1);
  } else {
      return 1;
  }
}

/**
 * Testing for the Factorial Function
 */
  try {
    console.log(factorial(0));
    console.log(factorial(4));
    console.log(factorial(7));
    console.log(factorial(-2));
} catch (error) {
    console.log(error);
}