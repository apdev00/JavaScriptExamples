//'strict mode';

function foo(something, more) {
    console.log(this.a, something, more);
    return this.a + something + more;
}

var obj = {
    a: 2
};

var bar = foo.bind(obj);

var b = bar(3, 5);
console.log(b);


function foo2(el){
    console.log(el, this.id);
}

var obj2 = {
    id: "awesome"
};

[1, 2, 3].forEach(foo2, obj2);