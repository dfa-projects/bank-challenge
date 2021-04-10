const Statement = require('../src/statement.js')

describe("Statement class", function() {

    it("can format array into string and join with header", function() {
        let statement = new Statement();
        let result = statement.format([['2013/04/19 ', ' ' + 400 + ' ', ' ', ' ' + 310]]);
        expect(result).toEqual("date || credit || debit || balance\n2013/04/19 || 400 || || 310");
    });
});