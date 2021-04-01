const Bank = require('./bank.js')

class Statement { 
    constructor() {
    }
    print(){
        let bank = new Bank();
        return `${this.date} || ${bank.deposit()} || ${bank.withdraw()} || ${bank.getBalance()}`
    }
}
module.exports = Statement

let statement = new Statement(bank = new Bank)
bank.deposit(1000, '10/01/2012')
statement.print()

