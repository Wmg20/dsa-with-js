/**
 * Whats is hoisting?
 * -- Hoisting is phenomenon in js by which we can access a variable befone its definition
 * -- var -> undefined
 * -- let and const -> ReferenceError: Cannot access 'b' before initialization 
 *    (remains in TDZ untill assigned values)
 */ 

// var 
console.log(a) // return undefined
var a = 10;

// let - Stays in Temporal Dead Zone untill they are assigned a value 
// ReferenceError: Cannot access 'b' before initialization

console.log(b)
let b = 4;

// const - Stays in Temporal Dead Zone untill they are assigned a value 
// ReferenceError: Cannot access 'b' before initialization

console.log(c)
let c = 8;