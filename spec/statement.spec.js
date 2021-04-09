const Statement = require('../src/statement.js')

describe("Statement class", function() {

    let statement;

    it("can format array into string and join with header", function() {
        statement = new Statement();
        let result = statement.format([['2013/04/19 ', ` ${300} `, ' ', ` ${250}\n`]]);
        expect(result).toEqual("date || credit || debit || balance\n2013/04/19 || 300 || || 250\n");
    });
});