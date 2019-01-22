/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {

    // New array to hold elements
    let newArr = [];
  
    // Check to make sure the array given - someArr is an actual array and the index is a positive number 
    // Also checks to make sure index is within the range bounds of the array
    if (typeof(index) !== "number" || index < 0) {
        throw new Error("Index is not of type Number or is not a positive number");
    } else if (Array.isArray(someArr) == false) {
        throw new Error("someArr is not an Array");
    } else if (index >= someArr.length) {
        throw new Error("Index is out of range");
    }

     // Using forEach, someArr will be iterated through until the necessary index is found. 
     // From there, the element will not be added to newArr
     someArr.forEach((element, ind) => {
        if (ind === index) {
            // Do nothing since the element at this index needs to be spliced out
        } else {
            newArr.push(element);
        }
     });

     return newArr;
}
  
/**
 * Testing spliceElement function
 */
try {
    let arr = [1,2,3,4];
    let newArr = spliceElement(arr, 2);
    console.log(newArr);
    let arr2 = true;
    spliceElement(arr2, 1);
} catch (error) {
    console.log(error);
}