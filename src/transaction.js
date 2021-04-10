class Transaction {
    constructor(balance = 0){
        this.balance = balance;
        this.statement = []
    }
    deposit(credit, date){
            this.balance += credit;
            this.statement.unshift([`${date} `, ` ${credit.toFixed(2)} `, ' ' , ` ${this.balance.toFixed(2)}\n`]);
            return this.balance;
    }
    withdraw(debit, date){
        this.balance -= debit;
        this.statement.unshift([`${date} `, ' ' , ` ${debit.toFixed(2)} `, ` ${this.balance.toFixed(2)}\n`]);
        return this.balance;
    }
}

module.exports = Transaction
