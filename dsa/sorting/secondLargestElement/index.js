const numArr = [1, 2, 3, 4, 5, 6, 6, 7];

// find second largest element in an array - may contain repeared values
function secondlargestfn(arr) {

    // base condition
    if (arr.length < 2) {
        return -1;
    }

    let largest = arr[0];
    let secondLargest = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (
            arr[i] > secondLargest &&
            arr[i] < largest
        ) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}


console.log(secondlargestfn(numArr))