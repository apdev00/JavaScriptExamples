'use strict';

var p1 = Promise.resolve(42);
var p2 = Promise.resolve("Hello World");
var p3 = Promise.reject("oops");

Promise.race( [p1, p2, p3] )
.then(function(msg) {
    console.log(msg);
});

Promise.all( [p1, p2, p3] )
.catch(function(err) {
    console.log(err);
});

Promise.all([p1, p2])
.then(function(msgs) {
    console.log(msgs);
});
