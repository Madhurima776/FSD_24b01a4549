"use strict";
let arr = [1, 2, 3, 2, 4, 1, 5, 2];
let frequency = {};
for (let num of arr) {
    if (frequency[num]) {
        frequency[num]++;
    }
    else {
        frequency[num] = 1;
    }
}
console.log(frequency);
