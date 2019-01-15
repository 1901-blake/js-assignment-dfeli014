/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else if (n > 1) {
        return fib(n-1)+fib(n-2); 
    }
}

// Use cases for the Fibonacci Function 
console.log(fib(3));
console.log(fib(6));
console.log(fib(9));