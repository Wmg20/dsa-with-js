Promise.myAllSettele = function(promises) {
    return new Promise((resolve, reject) => {
        if(!Array.isArray(promises)) {
            throw new TypeError("Argument must be an array")
        }

        let results = [];
        let completed = 0;

        promises.forEach((p, index) => {
            Promise.resolve(p)
            .then((value) => {
                results[index] = {status: "Fulfilled", value};
            })
            .catch(error => {
                results = {status: "Rejected", error}
            })
            .finally(() => {
                completed++;
                if(completed === promises.length) {
                    resolve(results);
                }
            })
        })

        // edge case: empty array
        if(promises.length === 0) {
            resolve([]);
        } 
})
}

/**
 * 
    Takes an array of promises (or values).
    Resolves when all promises are fulfilled, with results in the same order.
    Rejects immediately if any promise rejects.
 */

Promise.myAll = function (promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject(new TypeError("Argument must be an array"));
      }
  
      const results = [];
      let completed = 0;
  
      promises.forEach((p, index) => {
        // Ensure non-promise values also work
        Promise.resolve(p)
          .then((value) => {
            results[index] = value;
            completed++;
  
            if (completed === promises.length) {
              resolve(results);
            }
          })
          .catch((err) => {
            reject(err); // reject immediately
          });
      });
  
      // Edge case: empty array
      if (promises.length === 0) {
        resolve([]);
      }
    });
  };

/**
    Takes an array of promises (or values).
    Resolves/rejects with the first promise that settles (fulfilled or rejected).
 */

Promise.myRace = function (promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
        return reject(new TypeError("Argument must be an array"));
        }

        for (let p of promises) {
        Promise.resolve(p).then(resolve).catch(reject);
        }
    });
};
  
  

const p1 = Promise.resolve(10);
const p2 = Promise.resolve("resolve");
const p3 = 42; // plain value also works

Promise.myAllSettele([p1, p2, p3]).then(console.log);