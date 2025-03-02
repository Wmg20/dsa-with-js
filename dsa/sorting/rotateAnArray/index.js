const arr = [1, 2, 3, 4, 5, 6]

/**
 * 1. Rotating array k places - left
 */

function rotateArr(arr) {

    // base case
    if (arr.length <= 1) {
        return arr;
    }


    let n = arr.length;
    let temp = arr[0]; // store first element

    // why starting from i = 1 - as we are already storing the o index value and want to shift the values to left 
    for (let i = 1; i < n; i++) {
        // shift element of array by one
        arr[i - 1] = arr[i]
    }

    // assign last element to first
    arr[n - 1] = temp;

    return arr;
}

/**
 * 2. Rotating array k places - right
 */

function rotateArrK(arr, k) {

    // base case
    if (arr.length <= 1) {
        return arr;
    }

    let n = arr.length;
    let d = k % n; // for neglection rest condition like when k = n(arr length) in that case we can skip the rotation

    // will contain last d elements
    let tempArr = arr.slice(0, d)

    // will contain first n-d
    for (let i = d; i < n; i++) {
        arr[i - d] = arr[i];
    }

    // assign last d elements to end
    for (let i = 0; i < d; i++) {
        // assign last d elements to end of array one by one
        arr[n - d + i] = tempArr[i];
    }

    return arr;
}

/**
 * 3. Revesre an array
 */

function RevesreArr(arr) {

    // base case
    if (arr.length <= 1) {
        return arr;
    }

    let n = arr.length;

    for (let i = 0; i < n / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[n - 1 - i];
        arr[n - 1 - i] = temp;
    }

    return arr;
}

console.log(RevesreArr(arr));











