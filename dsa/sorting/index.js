
/**
 * Sorting - Selection Sort
 */

// SWAPING ARRAY ELEMENTS 

// const swapFn = (array, firstIndex, secondIndex) => {
//     const temp = array[firstIndex];
//     array[firstIndex] = array[secondIndex];
//     array[secondIndex] = temp;
// }

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

/**
 * MERGE SHORT - DIVIDE AND MERGE
 * GIVEN ARRAY IS DIVIDED INTO SMALLER PART TILL SINGLE ELEMENT IS LEFT THEN SORTED AND MERGED 
 */

const merge = (arr, low, mid, high) => {
    const n1 = mid - low + 1;
    const n2 = high - mid;

    // Create temp arrays
    const L = new Array(n1);
    const R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (let i = 0; i < n1; i++)
        L[i] = arr[low + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    // Merge the temp arrays back into arr[l..r]
    let i = 0; // Initial index of first subarray
    let j = 0; // Initial index of second subarray
    let k = low; // Initial index of merged subarray
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    // Copy the remaining elements of R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

const mergeSort = (arr, low, high) => {
    if (low < high) {
        const mid = Math.floor(low + (high - low) / 2);
        mergeSort(arr, low, mid);
        mergeSort(arr, mid + 1, high);
        merge(arr, low, mid, high);
        return arr;
    }
}

console.log(mergeSort([1,4,7,9,3,2,5,6,8], 0, 8)); 


/**
 * TWO SUM
 */
// function twoSum(nums, target) {
//     // Create a map to store numbers and their indices
//     const numMap = new Map();
  
//     // Loop through the array
//     for (let i = 0; i < nums.length; i++) {
//       // Calculate the complement
//       const complement = target - nums[i];
//       console.log(complement, i);
  
//       // Check if the complement exists in the map
//       if (numMap.has(complement)) {
//         return [numMap.get(complement), i];
//       }
  
//       // Add the current number and its index to the map
//       numMap.set(nums[i], i);
//     }
  
//     // Return an empty array if no solution exists (shouldn't happen in valid inputs)
//     return [];
//   }
  
//   // Example usage
//   const nums = [2, 7, 11, 15];
//   const target = 9;
//   console.log(twoSum(nums, target)); // Output: [0, 1]
  