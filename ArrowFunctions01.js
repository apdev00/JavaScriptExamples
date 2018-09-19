'strict mode';

function foo() {
    return (a) => {
        // 'this' here is lexically inherited from 'foo()'
        console.log(this.a);
    };
}

var obj1 = {
    a: 2
};

var obj2 = {
    a: 3
};


var bar = foo.call(obj1);
bar.call(obj2);

var bar2 = foo.call(obj2);
bar2();

//////////////////////////////////////////////////////

function baz() {
    var self = this; // lexical capture of 'this'
    setTimeout(function() {
        console.log(self.a);
    }, 100);
}

var obj3 = {
    a: 2
};

baz.call(obj3);