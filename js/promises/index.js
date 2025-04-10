/**
 * -------- WHAT IS A PROMIES -------------
 * 
 * Promise is an object which returns eventual completion of an asynchronus code
 * Promise object containe - promsiseState (Pending - result is undefined, Fulfilled, Rejected), promiseResult
 * Promise object is initially undefined and filled with the values once the code is exicuted
 * 
 * -------- CREATING A PROMIES -------------
 * Using Promise constructor - new Promise((resolve, reject)) => {})
 * 
 */


const myPromise = new Promise(function(myResolve, myReject) {
    let x = 10;

    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });

  const myDisplayer = (value) => {
    console.log(value);
  }
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );


  // <CODE_BLOCK>
  /**
   * -------- PROMISE CHAINING -------------
   *
   * Promises can be chained together using the .then() method.
   * Each .then() returns a new promise, allowing for a sequence of asynchronous operations.
   */

  const promiseChainingExample = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10); // Resolve with value 10 after 1 second
    }, 1000);
  })
  .then(result => {
    console.log("First then:", result); // Output: First then: 10
    return result * 2; // Return a modified value for the next promise in the chain
  })
  .then(result => {
    console.log("Second then:", result); // Output: Second then: 20
    return result + 5; // Return another modified value
  })
  .then(result => {
    console.log("Third then:", result); // Output: Third then: 25
  })

  /**
    * -------- ERROR HANDLING -------------
    *
    * Error handling in promises is typically done using the .catch() method.
    * If any promise in the chain is rejected, the .catch() block will be executed.
    */
  promiseChainingExample.catch(error => {
    console.error("An error occurred:", error);
  });
 
