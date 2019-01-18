/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    // someNum and 1 are AND together and then NOT, this will use bitwise operations to figure
    if (!(someNum & 1)) {
        return true;
    } else {
        return false;
    }
}

/**
 * Testing isEven with multiple use cases
 */
console.log(isEven(15));
console.log(isEven(4));
console.log(isEven(56));
console.log(isEven(9));