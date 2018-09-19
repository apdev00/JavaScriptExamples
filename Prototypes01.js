'use strict';

var anotherObject = {
    a: 2
};

var myObject = Object.create(anotherObject);

console.log(anotherObject.a);
console.log(myObject.a);

console.log(anotherObject.hasOwnProperty("a"));
console.log(myObject.hasOwnProperty("a"));

myObject.a++;

console.log(anotherObject.a);
console.log(myObject.a);

console.log(myObject.hasOwnProperty("a"));

/////////////////////////////////////////////////////////////

function Foo() {

}

var a = new Foo();

console.log(Object.getPrototypeOf(a) === Foo.prototype);
