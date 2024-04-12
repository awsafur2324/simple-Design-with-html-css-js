class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount} Successfully . Current balance: $${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn $${amount} Successfully . Current balance: $${this.balance}`);
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}

// Creating BankAccount
const account1 = new BankAccount(1001, "Joshim", 1000);
const account2 = new BankAccount(1002, "Jamal", 500);



//------------------------------------Account 1
console.log("------");
account1.displayAccountInfo();
account1.deposit(200);
account1.withdraw(300);

//-----------------------------------Account 2
console.log("------");
account2.displayAccountInfo();
account2.deposit(300);
account2.withdraw(1700); 



