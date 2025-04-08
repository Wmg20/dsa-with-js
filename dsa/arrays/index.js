// Suggested code may be subject to a license. Learn more: ~LicenseLog:341767011.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3748272145.
/**
 * Arrays
*/

// 1. Moving all the zero in array at the end

const arr = [1,4,0,3,2,0,9,0]

function moveZeroAtEnd (arr) {
   if (arr.length === 0) return [];
   
   let nonZeroIndex = 0;
 
   // Iterate through the array
   for (let i = 0; i < arr.length; i++) {
     // If the current element is non-zero
     if (arr[i] !== 0) {
       // Move it to the next non-zero index
       arr[nonZeroIndex] = arr[i];
       nonZeroIndex++;
     }
   }
 
   // Fill the rest of the array with zeros
   for (let i = nonZeroIndex; i < arr.length; i++) {
     arr[i] = 0;
      }
   return arr
}
console.log(moveZeroAtEnd(arr))


