const Transaction = require('../src/transaction.js')

describe("Transaction class", function() {
    
    let transaction;
    let result;

    it("can deposit money", function() {
        transaction = new Transaction();
        result = transaction.deposit(800, '2011/11/06');
        expect(result).toEqual(800);
    });

    it("can withdraw money", function() {
        transaction = new Transaction();
        transaction.deposit(800, '2011/11/06');
        result = transaction.withdraw(60, '2018/06/25');
        expect(result).toEqual(740);
    });

    it("lets you withdraw from empty account because this bank is not serious", function() {
        transaction = new Transaction();
        result = transaction.withdraw(800, '2011/11/06');
        expect(result).toEqual(-800);
    });

    it("keeps transactions in memory", function() {
        transaction = new Transaction();
        transaction.deposit(800, '2013/09/16');
        transaction.withdraw(600, '2013/09/18')
        transaction.deposit(150, '2013/09/21');
        transaction.withdraw(70, '2013/09/29');
        result = transaction.balance;
        expect(result).toEqual(280);
    });
});
