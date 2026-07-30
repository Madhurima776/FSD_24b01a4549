let num1: number = 153;
let temp = num1;
let sum = 0;

while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** 3;
    temp = Math.floor(temp / 10);
}

if (sum === num1)
    console.log(num1 + " is an Armstrong Number");
else
    console.log(num1 + " is Not an Armstrong Number");