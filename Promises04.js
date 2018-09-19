'use strict';

var p = new Promise(function(resolve, reject) {
    //reject('oops!');
    resolve('yay!!');
});

var p2 = p.then(
    null,
    function rejected(err) {
        console.log('I said -- ', err);
    }
);

var p3 = p2.then(
    function fulfilled(data) {
        console.log(data);
    }
);