/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
  // Check to see if the array is empty or has less than 2 items, otherwise sort the array
  if (numArray.length == 0) {
      console.log("numArray is empty");
  } else if (numArray.length == 1) {
      console.log("Array is numArray is sorted");
  } else if (numArray.length == 2) {
      let i = 0, j = 1;
      let temp = numArray[i];
      numArray[i] = numArray[j];
      numArray[j] = temp;
  } else { 
        for (i = 0; i < numArray.length - 1; i++) {
            for (j = 0; j < numArray.length - i - 1; j++) {
                if (numArray[j] > numArray[j+1]) {
                        let temp = numArray[j];
                        numArray[j] = numArray[j+1];
                        numArray[j+1] = temp;
                }
            }
        }

        return numArray;
    }
}


/**
 * Testing sortedArr, a random number array 
 */
let arr = [64, 34, 25, 12, 22, 11, 90];
let sortedArr = bubbleSort(arr);
console.log(sortedArr);