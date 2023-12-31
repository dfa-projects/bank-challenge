# Bank Challenge
## Instructions
1. Fork this repo 
```
git clone git@github.com:hanna-98/bank-challenge.git
```
2. Run ```npm install``` in your terminal to install the dependencies for this project

## Running tests
```npx jasmine``` or ```npm test```

## Usage
To use this program, you can create a new instance of Bank and make deposits/withdrawals like this:
```javascript
let bank = new Bank()
bank.deposit(500, '2020/10/24')
bank.withdraw(70, '2020/11/13')
```
Then use the print function to print your statements:
```javascript
bank.print()
```
Then when you run node bank.js in terminal youu should see this:

![screenshot](images/bank-image1.png)

### Important
1. Make sure your inputs are of the correct data type: dates are strings and credit and debit are numbers.
2. Make your deposits/withdrawals in order of date, from oldest to newest, as this program assumes you are making transactions sequentially in real time and prints the most recent statements first. For example: 
```javascript
bank.withdraw(70, '2020/11/13')
bank.deposit(500, '2020/10/24')
```
Will give the output below as it assumes the deposit was made after the withdrawal.

![screenshot](images/bank-image2.png)

## Domain Model

| Object | Messages | Properties | Context | Output |
|--------|----------|------------|---------|--------|
| Bank | deposit(credit, date) | credit @num, date @str | adds to balance | number |
| | withdraw(debit, date) | debit @num, date @str | subtracts from balance | number |
| | print() | prints statements | statements in order | string |
| Transaction | deposit(credit, date) | credit @num, date@ str | gets deposited amount | number |
| | withdraw(debit, date) | debit @num, date@ str | gets withdrawn amount | number |
| Statement | format(array) | array @arr | formats array to string | string |

## Acceptance Criteria
Given a client makes a deposit of 1000 on 10-01-2012  
And a deposit of 2000 on 13-01-2012  
And a withdrawal of 500 on 14-01-2012  
When she prints her bank statement  
Then she would see  
```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```
