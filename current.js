import { Bank } from './bank.js';

export class Current extends Bank {
  constructor(accountNum, balance) {
    super(accountNum, balance);
  }

  calInterest() {
    const rate = 5.06;
    const bal = this.balance;
    return (bal * rate) / 100;
  }

  getAccountDetails() {
    console.log(`Account number is: ${this.accountNum}`);
    console.log(`Current Available Balance is ${this.balance}`);
    console.log('Account Type is Current');
    return `AccountNum: ${this.accountNum} & Current Bal is ${this.balance}`;
  }
}
