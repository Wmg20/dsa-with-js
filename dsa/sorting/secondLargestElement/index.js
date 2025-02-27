/**
 * ------- Why let secondLargest = -1? ------------
 * Acts as a Placeholder:
 * 
 * Since arrays typically contain positive numbers,
 * -1 is a safe default to indicate that no valid 
 * second-largest number has been found yet.
 * 
 **/


const numArr = [1, 2, 3, 4, 5, 6, 6, 7];

// find second largest element in an array - may contain repeared values
function secondlargestfn(arr) {

    // base condition
    if (arr.length < 2) return -1;

    // main logic
    let largest = arr[0]; // assume first element as largest
    let secondLargest = -1; // initialize second largest element as it do no exist initially

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest; // largest become second larges element
            largest = arr[i]; // update largest element
        } else if (
            // check if current element is greater than second largest and less than largest
            arr[i] > secondLargest &&
            arr[i] < largest
        ) {
            secondLargest = arr[i];
        }
    }

    // return second largest element
    return secondLargest;
}


console.log(secondlargestfn(numArr))