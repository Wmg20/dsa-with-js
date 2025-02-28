// rotate an array by on place
const arr = [1,2,3,4,5,6]

function rotateArr (arr) {

    // base case
    if (arr.length <= 1) {
        return arr;
    }


    let n = arr.length; 
    let temp = arr[0]; // store first element

    // why starting from i = 1 - as we are already storing the o index value and want to shift the values to left 
    for (let i = 1; i < n; i++) {
        // shift element of array by one
        arr[i-1] = arr[i] 
    }

    // assign last element to first
    arr[n-1] = temp;

    return arr;
}

console.log(rotateArr(arr))
