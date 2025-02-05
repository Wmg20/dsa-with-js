/**
 * ARRAY - POLYFILLS
 * 
 * 1. Map
 * Creates a new array from calling a function for every array element.
 * Ex - const newArr = [1,2,3,4].map(x => x*2), newArr = [2,4,6,8]
 * 
 * What Are Sparse Arrays?
 * 
 * A sparse array is an array in JavaScript that has empty or missing 
 * indices (also known as "holes"). This means that not all elements
 * have values assigned to them.
 *
 */


/**
 * --------- WHY USE VAR INSTED OF LET IN FOR LOOP ----------
 * 
To Maintain ES5 Compatibility
1. The polyfill is meant for older browsers that do not support let.
2. let was introduced in ES6 (2015), while var has existed since ES3.
3. Since polyfills are used to provide modern functionality in older JavaScript environments,
4. using var ensures it works in ES5-compliant browsers.
5. var have functional scope while let have block scope
 */


// create a map polyfill
if (!Array.prototype.wmgMap) {

    Array.prototype.wmgMap = function (callback, thisArg) {

        // check the array is not null
        if (this == null) {
            throw new TypeError('Array.prototype.map called on null or undefined')
        }

        // ensure that callback is a function
        if (typeof callback !== 'function') {
            throw new TypeError('callback must be a function')
        }

        var arr = this; // Store reference to the original array
        var newArr = []; // create a new empty array

        for (var i = 0; i < arr.length; i++) {

            // check for sparse array
            // This ensures that thisArg is properly bound inside the callback.
            if (i in arr) {
                newArr.push(callback.call(thisArg, arr[i], i, arr))
            }
        }

        // Step 5: Return the new transformed array
        return newArr;
    }
}

const numbers = [1, 2, 3, 4];

// simple map method
const squared = numbers.wmgMap(function (num, index, array) {
    return num * num;
});

// use of thisArg binding 
const obj = {
    multiplier: 2,

    multiply(num) {
        // this refers to multiplier of obj
        return num * this.multiplier;
    }
};

const result = numbers.map(obj.multiply, obj);
console.log(result); // [2, 4, 6] ✅


