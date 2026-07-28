let decimal: number = 25;
let binary: string = "";

while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
}

console.log("Binary =", binary);