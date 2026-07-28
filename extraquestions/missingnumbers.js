"use strict";
let arr = [1, 2, 3, 5, 6];
let n = arr.length + 1;
let expectedSum = (n * (n + 1)) / 2;
let actualSum = arr.reduce((sum, value) => sum + value, 0);
let missingNumber = expectedSum - actualSum;
console.log("Missing Number:", missingNumber);
