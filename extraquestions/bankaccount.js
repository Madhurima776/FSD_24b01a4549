"use strict";
class BankAccount {
    balance;
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log("Deposited:", amount);
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawn:", amount);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    displayBalance() {
        console.log("Current Balance:", this.balance);
    }
}
let account = new BankAccount(5000);
account.deposit(2000);
account.withdraw(1500);
account.displayBalance();
