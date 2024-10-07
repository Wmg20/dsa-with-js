/* The `this` keyword in JavaScript refers to the object that is executing the current function. However, the value of `this` can change depending on how a function is called, which is where the concept of binding comes into play .

Binding, in the context of `this`, refers to the process of determining what `this` will reference inside a function. There are several ways that `this` can be bound:

1. Default Binding: In non-strict mode, `this` defaults to the global object (e.g., `window` in browsers). In strict mode, it's `undefined`.
2. Implicit Binding: When a method is called on an object, `this` is bound to that object.
3. Explicit Binding: Using methods like `call()`, `apply()`, or `bind()` to explicitly set the value of `this`.
4. New Binding: When a function is used as a constructor with the `new` keyword, `this` is bound to the newly created object.
5. Arrow Function Binding: Arrow functions don't have their own `this`. They inherit `this` from the enclosing scope.

In this example:

1. We see implicit binding when `person.greet()` is called.
2. We lose the binding when we assign `person.greet` to a variable and call it.
3. We use explicit binding with `call()` to set `this` to the `person` object.
4. We demonstrate that arrow functions don't bind their own `this`.
5. We use the `new` keyword to create an object where `this` is bound to the new instance.


Understanding `this` and its binding is crucial for writing effective JavaScript, especially when working with object-oriented patterns or dealing with callback functions in frameworks and libraries .

*/

// Object with a method
const person = {
    name: 'Alice',
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  // Implicit binding
  person.greet(); // Output: Hello, my name is Alice
  
  // Losing implicit binding
  const greetFunction = person.greet;
  greetFunction(); // Output: Hello, my name is undefined
  
  // Explicit binding with call
  greetFunction.call(person); // Output: Hello, my name is Alice
  
  // Arrow function (lexical this)
  const arrowGreet = () => {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  arrowGreet.call(person); // Output: Hello, my name is undefined
  
  // Constructor function
  function Person(name) {
    this.name = name;
    this.greet = function() {
      console.log(`Hello, my name is ${this.name}`);
    };
  }
  
  const bob = new Person('Bob');
  bob.greet(); // Output: Hello, my name is Bob