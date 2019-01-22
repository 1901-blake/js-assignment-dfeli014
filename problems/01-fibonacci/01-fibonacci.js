/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {

    // Check to see that n is a number and is positive
    if (typeof(n) !== "number" || n < 0) {
        throw new Error("n is not a number or is not positive");
    }  

    // Cases for fibonacci which a recursive function
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else if (n > 1) {
        return fib(n-1)+fib(n-2); 
    }
}

/**
 *  Test cases for the Fibonacci Function 
 */
try {
    console.log(fib(3));
    console.log(fib(6));
    console.log(fib(9));
    console.log(fib(-1));
} catch (error) {
    console.log(error);
}