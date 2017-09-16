# front-end-wiki

This wiki is a collection of front-end topics that you will encounter time and time again in all of your front end endeavors. Enjoy, and remember to keep adding to this collection for future developers.

*Note, this is a WIP [Work-in-progress] and is solely meant to be used as a reference to help others

## General Questions

1. **What did you learn today?**
    * 5/01/17 - How to write text files with Markdown


## Javascript Questions

1. **Explain event delegation**
    * Event delegation is the method of attaching an event listener to a parent element instead of the target element itself, and utilizes event bubbling to find a match on the target child element
    * Useful for dynamically added elements that would otherwise need to have event listeners re-binded
    
2. **Explain how *this* works in Javascript**
    * ***this*** refers to the current object in the execution context is being called when a function is executed
    * In general terms, ***this*** refers to the object to the left of the '.' when a method is called

3. **Explain what an execution context is and how it differs from scope**
    * ***scope*** refers to a function's variable access when a function is executed. Can usually be determined within the code
    * ***execution context*** refers to the environment in which a function is executed in, and includes details pertaining to that environment (scope, variable declarations, arguments, etc.)

4. **Explain what a closure is and how it is used**
	* a ***closure*** is an inner function that is wrapped inside an outer function.
	* the inner function has access to all of outer function's variables and scope

```javascript
// Global Scope
var outerFunction = function() {
	// Parent Scope: does not have access to innerFunction's scope
	var foo = 'foo',
	innerFunction = function() {
		// Local Scope: has access to outerFunction's scope
		var bar = 'bar';

		console.log(foo); // 'foo'
		console.log(bar); // 'bar'
	};

	console.log(foo); // 'foo'
	console.log(bar); // error: bar is not defined
}
```

5. **What's the difference between a variable that is: null, undefined or undeclared?**
	* ***null*** means the value of the variable is nothing
	* ***undefined*** means a variable has been declared but has not been assigned a value to it. This is different than assigning a value of ***null*** to the variable
	* ***undeclared*** error is thrown when a variable is referenced in the code but has not been declared or instantiated

6. **Explain how prototypal inheritance works**
	* prototypal inheritance is a method for organizing and re-using code by building and instantiating components based on another object.
	* This is different than ***classical inheritance***, where classes act as blueprints for objects to be instantiated

7. **What's a typical use case for an anonymous function?**
	* commonly passed as an argument into another function
	* Ex. Array.map(callback), setTimeout(callback)

8. **How do you organize your code?**

9. **What is the difference between host objects and native objects?**
	* ***Host*** objects are global objects supplied by the host environment (window, document, XMLHttpRequest)
	* ***Native*** objects are specified by ECMAScript implementation and available as part of the language (Date, Math, string methods)

10. **Difference between: function Person(){}, var person = Person(), and var person = new Person()**
	* function Person(){} is the constructor class for creating new instances of a class or object
	* var person = Person() invokes the Person function (can cause bugs when using ***this*** keyword as it will bind to global scope)
	* var person = new Person(){} creates a new instance of the Person class

11. **What's the difference between .call and .apply?**
	* Both call and apply invoke a function with a different execution context or value for ***this*** keyword
	* ***Call*** invokes a function with arguments passed in explicitly as a comma separated list
	* ***Apply*** invokes a function with arguments pass in as an array
	* **[A]**pply for Array, **[C]**all for comma

12. **What does .bind do?**
	* ***.bind*** returns a function with an explicitly defined execution context (object that invokes ***this***)

```javascript
var a = {
		name: 'a',
		sayName: function() {
			console.log(this.name);
		}
	};

var b = {
	name: 'b',
	sayName: a.sayName
}

b.sayName() // 'b': this.name refers to b.name

// Assign a.sayName method to b.sayName
// Execution context will be set to 'a'

b.sayName = a.sayName.bind(a);
b.sayName() // 'a': this.name refers to a.name
```

13. **Explain how prototypal inheritance works**
	* Prototypal inheritance describes the process in which object properties and methods are inherited in Javascript
	* In Javascript, these is no concept of classes (objects do not inherit from a blueprint)
	* Instead, objects are inherited from other *objects*
	* These inherited properties are found on the *__prototype__* property, which is a reference to another object, which in turn has its own *__prototype__* property
	* All objects inherit from global ***Object*** prototype
	* When objects are created as *new* instances of other objects, they inherit methods and properties defined on the parent object's prototype
	* When a property is accessed on the object, the property is first looked up on the object instance, then its prototype. If not found, look at the prototype's prototype, etc.

```javascript
// Define Parent Constructor 
var Parent = function() {
}

// Define Prototype to share properties and methods
Parent.prototype.foo = 'prototype_foo';
Parent.prototype.bar = 'prototype_bar';

// Create new instance of Parent
var child = new Parent();

// Overwrite foo property on child instance
child.foo = 'instance_foo';

console.log(child.foo) // 'instance_foo': foo is defined on object instance
console.log(child.bar) // 'prototype_bar': bar not defined on object instance, so we look at prototype of child for bar property, which is found on Parent.prototype
``` 




