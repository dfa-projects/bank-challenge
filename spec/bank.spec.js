const Statement = require('../src/statement.js');
const Bank = require('../src/bank.js')

describe('feature test', function() {
    it('satisfies acceptance criteria', function() {

        let bank = new Bank()
        bank.deposit(1000, '10/01/2012');
        bank.deposit(2000, '13/01/2012');
        bank.withdraw(500, '14/01/2012');
       
        let statement = new Statement()
        expect(statement.prtint()).toEqual('date || credit || debit || balance\n14/01/2012 || || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00');
        });

    it('can deposit', function() {
        let result = bank.deposit('10/01/2012', 1000);
        expect(result).toEqual('10/01/2012 || 1000.00 || 1000.00');
        });

    it('can withdraw', function() {
        result = bank.withdraw('14/01/2012', 500.00);
        expect(result).toEqual('14/01/2012 || 500.00 || 500.00');
        });
    });