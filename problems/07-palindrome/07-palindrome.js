/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    
    // Error Handling
    if (typeof(someStr) !== "string") {
        throw new Error("Parameter is not a string");
    }

    // The variable letters holds someStr in array form by letter
    let letters = someStr.split('');
    let start, end, value = false;

    // Loop through each letter, if the two variables iterating through
    // the array meet the middle and are the same, value will be true.
    // Otherwise, value will be false;
    for (let i = 0; i < letters.length;) {
        start = letters[i];
        end = letters[letters.length - i - 1];

        if (start === end && i !== Math.floor((letters.length / 2))) {
            i++;
        } else if (i === Math.floor((letters.length / 2)) && start === end) {
            value = true;
            i++;
        } else {
            i++;
        }
    }

    return value;
}

/**
 * Testing of isPalindrome with multiple use cases 
 */
try {    
    console.log(isPalindrome('racecar'));
    console.log(isPalindrome('people'));
    console.log(isPalindrome('Repaper'));
    console.log(isPalindrome('Anna'));
    console.log(isPalindrome(123));
} catch (error) {
    console.log(error);
}