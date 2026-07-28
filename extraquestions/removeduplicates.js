"use strict";
let str = "programming";
let result = "";
for (let ch of str) {
    if (!result.includes(ch)) {
        result += ch;
    }
}
console.log("Original String:", str);
console.log("After Removing Duplicates:", result);
