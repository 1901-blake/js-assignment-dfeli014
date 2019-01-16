/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
  
  // Checking to see if the string can be reversed
  if (someStr.length <= 1) {
      console.log("String too short to be reversed");
  } else {

    let letters = someStr.split('');
    let newStr = '';

    for (let i = 0; i < letters.length; i++) {
        newStr += letters[letters.length - i - 1];
    }

  return newStr;
  }
}


/**
 * Testing the reverseStr function
 */
let test = reverseStr('hello');
let test2 = reverseStr('world');
let test3 = reverseStr('people');
console.log(test);
console.log(test2);
console.log(test3);