/**
 * Hashing / Pre-shorting
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

function charHash(string, chr) {
    let hash = new Array(26).fill(0); 
    for (let i = 0; i < string.length; i++) {
        let charCode = string.charCodeAt(i) - 'a'.charCodeAt(0);
        hash[charCode]++;
    }

    let charCode = chr.charCodeAt(0) - 'a'.charCodeAt(0);
    return hash[charCode];
}

console.log(charHash("hello", "l"));

