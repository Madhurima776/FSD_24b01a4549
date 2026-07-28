"use strict";
let str = "programming";
let frequency = {};
for (let ch of str) {
    if (frequency[ch]) {
        frequency[ch]++;
    }
    else {
        frequency[ch] = 1;
    }
}
console.log(frequency);
