'use strict';

var randoms = {
    [Symbol.iterator]: function() {
        return {
            next: function() {
                return { value: Math.random() };
            }
        };
    }
};

var randoms_pool = [];

for (var n of randoms) {
    randoms_pool.push(n);

    if (randoms_pool.length === 10) break;
}

console.log(randoms_pool);