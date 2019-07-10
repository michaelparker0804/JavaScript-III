/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. when this is invoked in a global context, it refers to the window (when working in a browser)
* 2. when this is used in a method, whatever object is left of the dot when invoking that method becomes the context for this
* 3. when the operator 'new' is used, it creates a new instance of an object, and this within that object construction refers to the new instance of the object
* 4. explicit binding is when .call()/.apply()/.bind() are used on a function, and you explicitly pass in the object that you want this to refer to
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const myObj = {
    name: this.name
};
console.log(myObj);


// Principle 2

// code example for Implicit Binding
const mySecondObj = {
    first: 'Harry',
    last: 'Potter',
    intro: function() {
        return 'My name is ' + this.first + ' ' + this.last
    }
};
console.log(mySecondObj.intro());


// Principle 3

// code example for New Binding
function Shoe(obj) {
    this.brand = obj.brand;
    this.size = obj.size;
    this.inStock = function() {
        return (this.brand + " in size " + this.size + " is in stock.");
    };
}
const sneaker = new Shoe({brand: 'Adidas', size: 12});
const loafer = new Shoe({brand: 'Kenneth Cole', size: 11.5});
console.log(sneaker.inStock());
console.log(loafer.inStock());


// Principle 4

// code example for Explicit Binding
console.log(sneaker.inStock.call(loafer));