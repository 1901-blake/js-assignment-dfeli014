/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
  let i, j;

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

let arr = [64, 34, 25, 12, 22, 11, 90];
let sortedArr = bubbleSort(arr);
console.log(sortedArr);