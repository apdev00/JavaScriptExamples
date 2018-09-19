'strict mode';

function foo(a,b) {
    console.log("a:" + a + "b:" + b);
}

// our DMZ empty object
var empobj = Object.create(null);

foo.apply(empobj, [2, 3]);

var bar = foo.bind(empobj, 4);
bar(5);

//////////////////////////////////////////////////

function foo2() {
    console.log(this.a2);
}

var a2 = 2;
var o2 = {
    a2: 3,
    foo2: foo2
};
var p2 = {
    a2: 4
};

o2.foo2();
(p2.foo2 = o2.foo2)();