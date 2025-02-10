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
    console.log(value)
  }
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );