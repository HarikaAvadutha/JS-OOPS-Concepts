export class Bank {
  constructor(accountNum, balance) {
    this.accountNum = accountNum;
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  set balance(amount) {
    this._balance += amount;
    console.log(`Amount ${amount} is added to your balance`);
  }

  getAccountDetails() {
    console.log(`Account number is: ${this.accountNum}`);
    console.log(`Current Available Balance is ${this.balance}`);
  }
}
