/**
 * FILTE - RPROTOTYPE
 * 
 * 
 **/

if(!Array.prototype.wmgFilter){

    Array.prototype.wmgFilter = function(callback, thisArg){

        // check the array is not null
        if(this == null){
            throw new TypeError('Array.prototype.filter called on null or undefined')
        }

        // check for callback is a valid function
        if(typeof callback !== 'function'){
            throw new TypeError('callback must be a function')
        }

        var arr = this;
        var newArr = [];

        for(var i = 0; i < arr.length; i++){

            if(i in arr){
                var val = callback.call(thisArg, arr[i], i, arr);
                if(val){
                    newArr.push(arr[i]);
                }
            }

        }

        return newArr;
    }
       
}

const num = [1,2,3,4]

const filterdArr = num.wmgFilter((x, index, arr) => x > 2)

console.log(filterdArr)