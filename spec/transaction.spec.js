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
});
