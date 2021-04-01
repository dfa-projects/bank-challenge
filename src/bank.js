
class Bank {
    constructor() { 
        
    }

    deposit(credit, date){ // not sure how to get around the date being greyed out
        let creditBalance = 0;
        creditBalance += credit;
        console.log(creditBalance)
        return creditBalance;
    }

    withdraw(debit, date){
        let debitBalance = 0;
        debitBalance -= debit;
        console.log(debitBalance)
        return debitBalance;
    }
    getBalance(){
        // let account = new Bank // not sure how i'm supposed to add debit and credit
        let totalBalance = 
        console.log(totalBalance)
        return totalBalance; 
    }
} // dear reviewer, please let me know how to improve this thank u

module.exports = Bank

let bank = new Bank()

bank.deposit(1000, '10/01/2012')
bank.deposit(2000, '13/01/2012')
bank.withdraw(500, '14/01/2012')
bank.getBalance()