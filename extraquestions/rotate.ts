let arr: number[] = [1, 2, 3, 4, 5];
let n: number = 2;

n = n % arr.length;

let rotatedArray = [...arr.slice(n), ...arr.slice(0, n)];

console.log("Original Array:", arr);
console.log("Rotated Array:", rotatedArray);