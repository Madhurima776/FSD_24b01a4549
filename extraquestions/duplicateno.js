"use strict";
let arr = [10, 20, 30, 20, 40, 10, 50, 30];
let duplicates = [];
let seen = new Set();
for (let num of arr) {
    if (seen.has(num)) {
        if (!duplicates.includes(num)) {
            duplicates.push(num);
        }
    }
    else {
        seen.add(num);
    }
}
console.log("Duplicate Elements:", duplicates);
