# front-end-wiki

This wiki is a collection of front-end topics that you will encounter time and time again in all of your front end endeavors. Enjoy, and remember to keep adding to this collection for future developers.

*Note, this is a WIP [Work-in-progress] and is solely meant to be used as a reference

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
