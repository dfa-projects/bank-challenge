const Bank = require("../src/bank.js");

describe("bank class", function() {

	let bank;
	let result;

	it("can make deposits", function() {
		bank = new Bank();
		result = bank.deposit(500, "2014/03/16");
		expect(result).toEqual(500);
	});

	it("can make withdrawals", function() {
		bank = new Bank();
		bank.deposit(500, "2014/03/16");
		result = bank.withdraw(50, "2014/03/16");
		expect(result).toEqual(450);
	});

	it("can print deposit and withdrawal statements", function() {
		bank = new Bank();
		bank.deposit(400, "2015/02/22");
		bank.withdraw(100, "2015/02/23");
		result = bank.print();
		expect(result).toEqual("date || credit || debit || balance\n2015/02/23 || || 100.00 || 300.00\n2015/02/22 || 400.00 || || 400.00\n");
	});

	it("prints in order of which functions are called first, regardless of date", function() {
		bank = new Bank();
		bank.deposit(600, "2018/12/31");
		bank.deposit(50, "2019/01/03");
		bank.withdraw(100, "2018/10/02");
		result = bank.print();
		expect(result).toEqual("date || credit || debit || balance\n2018/10/02 || || 100.00 || 550.00\n2019/01/03 || 50.00 || || 650.00\n2018/12/31 || 600.00 || || 600.00\n");
	});
});