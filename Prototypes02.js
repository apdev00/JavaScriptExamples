'use strict';

function Cat (name, color) {
    this.name = name;
    this.color = color;
}

Cat.prototype.age = 3;
var fluffy = new Cat('fluffy', 'white');
var muffin = new Cat('muffin', 'brown');
console.log("fluffy - ", fluffy.age);
console.log("muffin - ", muffin.age);

fluffy.age = 5;
console.log("fluffy - ", fluffy.age);
console.log("muffin - ", muffin.age);

Cat.prototype.age = 7;
console.log("fluffy - ", fluffy.age);
console.log("muffin - ", muffin.age);

fluffy.__proto__.age = 9;
console.log("fluffy - ", fluffy.age);
console.log("muffin - ", muffin.age);

console.log(Cat.prototype === fluffy.__proto__);

////////////////////////////////////////////////////////////////////////////////

function Foo(name) {
    this.name = name;
}

Foo.prototype.myName = function() {
    return this.name;
};

function Bar(name, label){
    Foo.call(this, name);
    this.label = label;
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.myLabel = function() {
    return this.label;
};

var a = new Bar("a", "obj a");

console.log(a.myName());
console.log(a.myLabel());
console.log(Foo.prototype.constructor);
console.log(Bar.prototype.constructor);

console.log(Foo.isPrototypeOf(a));
console.log(Object.getPrototypeOf(a));