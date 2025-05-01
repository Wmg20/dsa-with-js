
/**
 * Find the union of two arrays.
 * 
 * The union of two arrays can be defined as the common and distinct elements in the two arrays.
 * NOTE: Elements in the union should be in ascending order.
 */

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

function unionOfArray(arr1, arr2) {
  const unionSet = new Set();

  // Add all elements of arr1
  for (let num of arr1) {
    unionSet.add(num);
  }

  // Add all elements of arr2
  for (let num of arr2) {
    unionSet.add(num);
  }

  // Convert to array and sort
  return Array.from(unionSet).sort((a, b) => a - b);
}

console.log(unionOfArray(arr1, arr2));
