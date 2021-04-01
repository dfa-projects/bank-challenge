# Bank

| Object | Messages | Properties | Context | Output |
|--------|----------|------------|---------|--------|
| Bank | deposit(amount, date) | amount @num, date@ str | adds amount to balance | credit @num|
| | withdraw(amount, date) | amount @num, date @str | subtracts amount from balance | debit @num|
|  | print() |  |  | prints statement | statement |




date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00