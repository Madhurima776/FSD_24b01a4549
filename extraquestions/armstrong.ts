let nums: number = 153;
let temp = nums;
let sum = 0;

while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** 3;
    temp = Math.floor(temp / 10);
}

if (sum === nums)
    console.log(nums + " is an Armstrong Number");
else
    console.log(nums + " is Not an Armstrong Number");