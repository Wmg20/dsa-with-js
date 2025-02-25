// find the largest element of a num array - IN NON REPEATING ARRAY
const num = [1, 2, 3, 4, 5];


function bubbleSort(arr) {
    let n = arr.length;

    // Traverse through all array elements
    for (let i = 0; i < n - 1; i++) {
        // compare and swap - (n - 1 - i) this is for not including last sorted element in each iteration
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {

                // Swap elements - ES6 method
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr[n - 1];
}

console.log(bubbleSort(num));


// FIND SECOND LARGEST ELEMENT - IN NON REPEATING ARRAY

// return arr[n - 2];


// FIND SECOND LARGEST ELEMENT - IN NON REPEATING ELEMENT ARRAY

/**
 * STEP-1
 * SORT AND REMOVE DUBLICATE ELEMENTS
 * 
*/