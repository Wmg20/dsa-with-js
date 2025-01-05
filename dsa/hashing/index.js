/**
 * Number Hashing
 * 
 */

// function hash(array, max, num) {
//     let hash = new Array(max);

//     for (let i = 0; i < max; i++) {
//         hash[i] = 0;
//         console.log("hash", hash);
//     }

//     for (let i = 0; i < array.length; i++) {
//         hash[array[i]]++;
//     }

//     return hash[num];
// }

// console.log(hash([1, 2, 2, 2, 3, 3, 4], 5, 2)); 

/**
 * Character Hashing
 * 
 */

// function charHash(string, chr) {
//     let hash = new Array(26).fill(0); 

//     for (let i = 0; i < string.length; i++) {
//         let charCode = string.charCodeAt(i) - 'a'.charCodeAt(0);
//         hash[charCode]++;
//     }

//     let charCode = chr.charCodeAt(0) - 'a'.charCodeAt(0);
//     return hash[charCode];
// }

// console.log(charHash("hello", "l"));

/**
 * Finding Highest Frequency Element
 * 
 */

function hash(array, max, type) {
    let hash = new Array(max);

    for (let i = 0; i < max; i++) {
        hash[i] = 0;
    }

    for (let i = 0; i < array.length; i++) {
        hash[array[i]]++;
    }

    const maxFreq = Math.max(...hash);
    
    const indexofMax = hash.indexOf(maxFreq);

    let minFreq = Infinity;
    let indexofMin = -1;

    for (let i = 1; i < hash.length; i++) { // Start from index 1 to neglect zero index
        if (hash[i] < minFreq && hash[i] !== 0) {
            minFreq = hash[i];
            indexofMin = i;
        }
    }

    if(type === "max"){
        return indexofMax;
    } else if(type === "min"){
        return indexofMin;
    } else return null; 
}

console.log(hash([1, 2, 2, 3, 3, 3, 4], 5, 'min')); 

