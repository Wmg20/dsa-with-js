// Find first occurece of a number in an array

const arr = [1,4,2,5,6,4]

function linearSearch(arr, num) {
   for(i = 0; i < arr.length; i++){
       if(arr[i] === num){
           return i;
       }
   }

   return -1;
}

// console.log(linearSearch(arr, 4))

// Find the last occurence of a number in an array

function lastOccurence(arr, num) {
    for(i = arr.length - 1; i >= 0; i--){
        if(arr[i] === num){
            return i;
        }
    }

    return -1;
}

console.log(lastOccurence(arr, 4))