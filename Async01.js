'use strict';

var res = [];

// 'response' receives an array of results from the Ajax call
function response(data) {
    // process 1000 records at a time
    var chunk = data.splice(0, 1000);

    // add onto existing 'res' array
    res = res.concat(chunk.map(function(val){
        return val * 2;
    }));

    // anything left to process?
    if (data.length > 0){
        // async schedule next batch
        setTimeout(function() {
            response(data);
        }, 0);
    }
}

ajax('http://some.url.1', response);
ajax('http://some.url.2', response);
