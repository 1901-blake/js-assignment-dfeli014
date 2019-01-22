/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
  
  // Checking to see if the string can be reversed and if it is a string
  if (someStr.length <= 1) {
      throw new Error("someStr is too short");
  } else if (typeof(someStr) !== "string") {
      throw new Error("someStr is not a string");
  } else {

    // The string is split here and then in the for loop the new string is 
    // built with the reverse of the old one
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
try {
  let test = reverseStr('hello');
  let test2 = reverseStr('world');
  let test3 = reverseStr('people');
  console.log(test);
  console.log(test2);
  console.log(test3);
  let test4 = reverseStr(1);
} catch (error) {
  console.log(error);
}