let num2: number = 28;
let sum1 = 0;

for (let i = 1; i <= num2 / 2; i++) {
    if (num2 % i === 0)
        sum1 += i;
}

if (sum1 === num2)
    console.log(num2 + " is a Perfect Number");
else
    console.log(num2 + " is Not a Perfect Number");