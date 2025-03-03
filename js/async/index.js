/**
 * -------- CALLBACK FUNCTION --------------
 * 
 * 1. A callback function is a function which is passed as an argument to another function
 * 2. A callback function can run after another function has finished
 */

function callbackFn() {
    console.log("callback function");
    return 2 + 2;
}

function normalFun(
    callbackFn, arg
) {
    console.log("normal function");
    const sum = callbackFn();
    return sum + arg;
}

const call = normalFun(callbackFn, 10);
 
console.log(call);



