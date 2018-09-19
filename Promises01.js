'use strict';

var p = Promise.resolve(21);

p
.then(function(v){
    console.log(v);
    return v * 2;
})
.then(function(v){
    console.log(v);
});


var obj = {
    valA: 'TestA',
    valB: 'TestB'
};

//console.log(obj.valA);
var a = Promise.resolve(obj);

a
.then(function(v){
    console.log(v.valA);
    return v.valB;
})
.then(function(v){
    console.log(v);
});