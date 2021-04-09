const Bank = require('../src/bank.js')

describe("bank class", function() {

    let bank;

    it("can make deposits", function() {
        bank = new Bank();
        let result = bank.deposit(500, '2014/03/16')
        expect(result).toEqual(500)
    });

    it("can make withdrawals", function() {
        bank = new Bank();
        bank.deposit(500, '2014/03/16');
        let result = bank.withdraw(50, '2014/03/16');
        expect(result).toEqual(450);
    });
});