// Practice most asked js ployfills im interview


/**
 * Write a polyfill of array reduce
*/

if (!Array.prototype.myReduce) {

    // add myReduce method in Array prototype
    Array.prototype.myReduce = function (callback, initialValue) {

        // check for callback is a valid function
        if (typeof callback !== 'function') {
            throw new TypeError('callback must be a function');
        }

        // Handling an empty array with no initialValue
        if (!this.length && initialValue == undefined) {
            throw new TypeError('Reduce of empty array with no initial value');
        }

        // Initializing the accumulator
        let accumulator = initialValue !== undefined ? initialValue : this[0];
        let startIndex = initialValue !== undefined ? 0 : 1;

        // Iterating through the array
        for (let i = startIndex; i < this.length; i++) {
            
            // In each iteration, update the accumulator using callback(accumulator, currentValue, index, array).
            accumulator = callback(accumulator, this[i], i, this);
        }

        return accumulator;
    }
}


const arr = [1, 2, 3, 4];

const sum = arr.myReduce((acc, val) => acc + val, 0);
console.log(sum); // Output: 10