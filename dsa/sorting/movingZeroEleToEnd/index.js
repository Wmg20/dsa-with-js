// Moving zero element of array to end
const arr = [1,2,0,4,0,6,7,0,8];

function movingZeroToEnd (arr) {
    //base condition
    if (arr.length <= 1) {
        return arr;
    }

    let n = arr.length;
    let temp = [];

    // store non-zero element in temp array
    for(let i = 0; i < n; i++) {
        if(arr[i] != 0){
            temp.push(arr[i]);
        }
    }

    // place temp array element at the begninng of arr
    for(let i= 0; i < temp.length; i++){
        arr[i] = temp[i]
    }

    // repalce remaining element with zero
    // start replacing arr element from temp array end - temp.length is the start point
    for(let i = temp.length; i < n; i++){
        arr[i] = 0;
    }

    return arr;
}

console.log(movingZeroToEnd(arr));


