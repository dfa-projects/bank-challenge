const Transaction = require("./transaction.js");
const Statement = require("./statement.js");

class Bank {
	constructor(transaction = new Transaction(), statement = new Statement()) {
		this.transaction = transaction;
		this.statement = statement;
	}
	deposit(credit, date) {
		return this.transaction.deposit(credit, date);
	}
	withdraw(debit, date) {
		return this.transaction.withdraw(debit, date);
	}
	print() {
		return this.statement.format(this.transaction.statement);
	}
}

module.exports = Bank;

let bank = new Bank();
bank.withdraw(70, "2020/11/13");
bank.deposit(500, "2020/10/24");

let example = bank.print();
console.log(example);