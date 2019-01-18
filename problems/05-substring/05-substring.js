/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    // Declare and assign a variable that will hold the substring
    let subStr = '';

    // Check the input to make sure it is a String and that it's longer than one character
    // Otherwise, someStr will be split by letter and then saved into subStr and returned after.
    if (someStr.length < 2  || typeof(someStr) !== "string") {
        throw new Error("Incorrect type inputted or String is too short");
    } else {
        let tmpStr = someStr.split('');
        for (let i = startIndex; i < endIndex; i++) {
            subStr += tmpStr[i];
        }
        return subStr;
    }
}

/** 
 * Testing substring function with multiple use cases
 */
try {    
    console.log(substring(12, 2, 2));
    console.log(substring('hello', 1 , 3));
    console.log(substring('people', 1, 4));
    console.log(substring('happening', 3, 8));
    
} catch (e) {
    console.log(e);
}