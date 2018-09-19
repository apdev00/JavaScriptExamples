'strict mode';

var foo = (function CoolModule() {
    var something = "cool";
    var another = [1, 2, 3];

    function doSomething() {
        console.log(something);
    }

    function doAnother() {
        console.log(another.join("!"));
    }

    return {
        doSomething : doSomething,
        doAnother : doAnother
    };
})();

foo.doSomething();
foo.doAnother();

var obj = {
    id: "awesome",
    cool: function coolFn(){
        console.log(this.id);
    }
};

var id = "not awesome";

obj.cool();

setTimeout(obj.cool, 100);