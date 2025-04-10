/**
 * -------- CALLBACK FUNCTION --------------
 * 
 * 1. **What is a Callback?**
 *    - A callback function is a function that is passed as an argument to another function.
 *    - The callback function is intended to be "called back" or executed at a specific point within the outer function.
 * 2. **Why Use Callbacks?**
 *    - Callbacks enable asynchronous programming. They allow you to define what happens after a time-consuming task (like fetching data or waiting for a user action) has completed.
 *    - They promote code modularity by separating the definition of an action from its execution.
 * 3. **Key Characteristics**
 *    - **Passed as Argument:** A callback is passed to another function as one of its arguments.
 *    - **Invoked Later:** The outer function decides when (and often if) to call the callback.
 *    - **Asynchronous Nature:** They are commonly used with asynchronous operations, ensuring code execution continues without blocking.
 */

// Example 1: Simple Callback
// This is a basic callback function that logs a message.
function simpleCallback() {
    console.log("simpleCallback: This is the callback function being executed.");
    return 4; //Returning the sum
}

// This function takes a callback function as an argument and executes it.
function mainFunction(callback, arg) {
    console.log("mainFunction: Starting main function execution.");
    const sum = callback(); // Executes the callback function.
    console.log("mainFunction: Callback has been executed.");
    return sum + arg; //Returning the result from callback and arg.
}

// Call the main function, passing the callback and an argument.
const call1 = mainFunction(simpleCallback, 10);
console.log("result 1:",call1);

// Example 2 : callback with add.
function addCallback(a, b){
    console.log("addCallback: the sum is:", a + b);
    return a+b;
}
const call2 = mainFunction(() => addCallback(5, 6), 2) // we can pass inline function like that.
console.log("result 2:", call2)



