"use strict";
let start = 10;
let end = 50;
for (let num = start; num <= end; num++) {
    let isPrime = true;
    if (num <= 1)
        continue;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime)
        console.log(num);
}
