const nonSortedArr = [1, 2, 3, 5, 4, 6];
const sortedArr = [1, 2, 3, 4];

function checkSorted(arr) {

    // base condition
    if (arr.length === 1) {
        return true;
    }

    /**
     * Loop index issue – You're accessing arr[i-1], which will cause an issue when i = 0.
     * Loop condition – It should start from i = 1 to avoid accessing arr[-1].
     **/

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= arr[i-1]) {
          
        } else {
            return false;
        }
    }

    return true;
}

console.log(checkSorted(sortedArr));



