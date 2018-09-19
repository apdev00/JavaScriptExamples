'use strict';

var p = Promise.resolve(21);

p.then(function(v){
    console.log(v);

    // create a promise to return
    return new Promise(function(resolve, reject){
        // introduce asynchrony
        setTimeout(function(){
            resolve(v * 2);
        }, 5000);
    });
})
.then(function(v){
    // runs after the 5000ms delay in the previous step
    console.log(v);
})
