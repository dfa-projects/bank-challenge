class Statement {
    constructor() {
        this.header = "date || credit || debit || balance";
    }  
    format(array) {
        let str = array.join('');
        str = str.replace(/,/g, "||");
        return `${this.header}\n${str}`;
        
    }
}

module.exports = Statement
