/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: 'this' would be pointing to the window//console Object on the global scope.
* 2. Implicit Binding: 'this' points to the Object preceding the dot.
* 3. New Binding: 'this' points to the occurence of the object that is created by calling the Constructor function 
    using the 'new' keyword.
* 4. Explicit Binding: 'this' points to whatever is explicitly passed in 
    before the first comma in the call() or apply() function
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function windObj () {
    console.log(this);
}

windObj();

// Principle 2

// code example for Implicit Binding
let mary = {
	name: 'Mary',
	greet: function(student) {
      console.log(`Hello ${student} , my name is ${this.name}`);
	}
}

mary.greet("Naromi");



// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding