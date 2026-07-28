"use strict";
let binary = "11001";
let decimal = 0;
let power = 0;
for (let i = binary.length - 1; i >= 0; i--) {
    decimal += Number(binary[i]) * (2 ** power);
    power++;
}
console.log("Decimal =", decimal);
