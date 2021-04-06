class Bank {
    constructor() {
        this._deposit = []
        this._withdraw = []
        this.balance = 0;
    }

    get Deposit(){
        return `${this._deposit[0]} || ${this._deposit[1]} || || ${this._deposit[2]}`;
    }

    get Withdraw(){
        return `${this._withdraw[0]} || || ${this._withdraw[1]} || ${this._withdraw[2]}`;
    }

    deposit(credit, date){
        this.balance += credit;
        this._deposit.push(date, credit, this.balance);
        return this._deposit;
    }

    withdraw(debit, date){
        this.balance -= debit;
        this._withdraw.push(date, debit, this.balance)
        return this._withdraw;
    }
} 

module.exports = Bank



