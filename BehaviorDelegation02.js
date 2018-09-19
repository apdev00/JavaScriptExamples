'use strict';

// Prototype, OO style
function Foo(who) {
    this.me = who;
}

Foo.prototype.identify = function() {
    return "I am " + this.me;
};

function Bar(who) {
    Foo.call(this, who);
};

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.speak = function() {
    console.log("Hello, " + this.identify() + ".");
};

var b1 = new Bar("b1");
var b2 = new Bar("b2");

b1.speak();
b2.speak();

//////////////////////////////////////////////////////////////////////

// Delegation, OLOO style
var Baz = {
    init: function(who) {
        this.me = who;
    },
    identify: function() {
        return "I am " + this.me;
    }
};

var Buzz = Object.create(Baz);

Buzz.speak = function() {
    console.log("Hello, " + this.identify() + ".");
};

var b3 = Object.create(Buzz);
b3.init("b3");
var b4 = Object.create(Buzz);
b4.init("b4");

b3.speak();
b4.speak();