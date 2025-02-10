const cars = ["bmw", 'volvo', 'honda']
// console.log(cars[-1]) // undefined
// console.log(cars.at(-2)) // return elements from the end of array,  Ex - "honda", ES-2022

// Ployfill at()

if (!Array.prototype.wmgAt) {
    Array.prototype.wmgAt = function (index) {

        // if index is out of length of array
        if (index >= this.length) {
            return undefined
        }

        // if index is +ve
        if (index >= 0) {
            return this[index]
        } else {
            return this[this.length + index]
        }

           
          
    }
}

console.log(cars.wmgAt(-1))