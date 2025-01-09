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

const insertionShort = (array) => {
     for(let i = 1; i < array.length - 1; i++){
        let j = i;

        while(j > 0 && array[j] < array[j - 1]){
            swapFn(array, j, j - 1);
            j--;
        }
     }
     return array;
}

console.log(insertionShort([3,4,2,1,5]))
