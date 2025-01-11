/**
 * Sorting - Selection Sort
 */

// SWAPING ARRAY ELEMENTS 

const swapFn = (array, firstIndex, secondIndex) => {
    const temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

// const selectionSort = (array) => {
//     for (let i = 0; i < array.length; i++){
//         let min = i;

//         // Find the minimum element in the unsorted part of the array
//         for (let j = i; j < array.length - 1; j++){
//             if (array[j] < array[min]){
//                 min = j;
//             }
//         }

//         // Swap the minimum element with the current element
//         if (i !== min){
//             swapFn(array, i, min);
//         }
//     }
//     return array;
// }

// console.log(selectionSort([3,4,2,1,5]))

/**
 * Sorting - Bubble Sort
 */

// const bubbleSort = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//         console.log("i", i)

//       for (let j = 0; j < i; j++) {
//         console.log("j", j)
//             if (array[j] > array[j + 1]) {
//                 swapFn(array, j, j + 1);
//             }
//         }
//     }
//         return array;
//   };

// console.log(bubbleSort([3,4,2,1,5]))

/**
 * INSERTION SHORT
 */

// const insertionShort = (array) => {
//      for(let i = 1; i < array.length - 1; i++){
//         let j = i;

//         while(j > 0 && array[j] < array[j - 1]){
//             swapFn(array, j, j - 1);
//             j--;
//         }
//      }
//      return array;
// }

// console.log(insertionShort([3,4,2,1,5]))


function twoSum(nums, target) {
    // Create a map to store numbers and their indices
    const numMap = new Map();
  
    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
      // Calculate the complement
      const complement = target - nums[i];
      console.log(complement, i);
  
      // Check if the complement exists in the map
      if (numMap.has(complement)) {
        return [numMap.get(complement), i];
      }
  
      // Add the current number and its index to the map
      numMap.set(nums[i], i);
    }
  
    // Return an empty array if no solution exists (shouldn't happen in valid inputs)
    return [];
  }
  
  // Example usage
  const nums = [2, 7, 11, 15];
  const target = 9;
  console.log(twoSum(nums, target)); // Output: [0, 1]
  