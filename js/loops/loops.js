/* 
Js Variables
1. let 
2. var 
3. const
*/

/*
declarations
*/

var d;
let e;
// const f;  // Error: 'const' declarations must be initialized.
// let e; // Error: Identifier 'e' has already been declared it can not be redeclared in same scope

{
    // We can redeclared in different scope - Block scope
    let e;  
}

/*
initialization
*/

var a = 5;
let b = 6;
const c = 7;

a = 10;
b = 11;
// c = 12;  // Error: Assignment to constant variable.