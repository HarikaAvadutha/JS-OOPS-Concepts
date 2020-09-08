import { Bank } from './bank.js';

export class Salary extends Bank {
  constructor(accountNum, balance) {
    super(accountNum, balance);
  }

  calInterest() {
    const rate = 3.06;
    const bal = this.balance;
    return (bal * rate) / 100;
  }

  getAccountDetails() {
    console.log(`Account number is: ${this.accountNum}`);
    console.log(`Current Available Balance is ${this.balance}`);
    console.log(`Account Type is Salary`);
    return `AccountNum: ${this.accountNum} & Current Bal is ${this.balance}`;
  }
}
