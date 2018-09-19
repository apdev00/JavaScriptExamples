'use strict';

var rejectedPr = new Promise(function(resolve, reject) {
    // resolve this promise with a rejected promise
    resolve(Promise.reject('Oops!'));
});

rejectedPr.then(
    function fulfilled() {
        // never gets here
    },
    function rejected(err) {
        console.log(err); // Oops!
    }
);

