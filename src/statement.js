const Bank = require('./bank.js')

class Statement {
    constructor(bank){
        this.header = "date || credit || debit || balance"
        this.bank = bank
    } 
    print(){
        console.log(this.header);
        //console.log(`${this.bank.Deposit}\n${this.bank.Withdraw}`)
        return `${this.bank.Deposit}\n${this.bank.Withdraw}` 
        }   
    }


module.exports = Statement


//let statement = new Statement(bank = new Bank)

// bank.deposit(1000, '10/01/2012')
// bank.deposit(2000, '13/01/2012')
// bank.withdraw(500, '14/01/2012')

//console.log(statement.print())




