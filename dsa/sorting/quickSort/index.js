// quick sort

const num = [8,3,4,1,2,6,5,7];

// swap function
function swap (arr, low, high) {
 const temp = arr[low];

 arr[low] = arr[high];
 arr[high] = temp;
}

// pIndex function - The partition function is required to correctly place the pivot in its sorted position.
function partition (arr, low, high) {
    let pivot = arr[high]; // choosing last element as pivot
    let i = low - 1;

    for(let j = low; j < high; j++){

        if(arr[j] < pivot){
            i++;
            swap(arr, i, j);
        }
    }

  // Swap pivot to its correct position
  swap(arr, i + 1, high);
  return i + 1; // Return pivot index
}



// sort function 
function quickSort (arr, low, high) {
    // check for arr of length 1 and less
    if(low < high) {
        // find pIndex
        let pIndex = partition(arr, low, high);

        // left side array
        quickSort(arr, low, pIndex - 1)

        // right side array
        quickSort(arr, pIndex + 1, high)
    }
}


// Example usage
quickSort(num, 0, num.length - 1);
console.log(num); // Output: [1, 2, 4, 6, 7, 8, 9]



