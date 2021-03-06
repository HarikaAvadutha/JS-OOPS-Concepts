import { Salary } from './salary.js';
import { Current } from './current.js';
import { Bank } from './bank.js';

const bankDetails = Bank.getBankDetails();
document.getElementById('bank-details').innerHTML = `
Name: ${bankDetails.name} <br>
Address: ${bankDetails.address} <br>
IFSCCode: ${bankDetails.IFSCCode}
`;

const sal = new Salary(876533, 10000);
console.log(`Salary acct interest: ${sal.calInterest()}`);
let savDetails = sal.getAccountDetails();
document.getElementById('saving-details').textContent += savDetails;

const cur = new Current(876534, 5000);
console.log(`Current acct interest: ${cur.calInterest()}`);
let curDetails = cur.getAccountDetails();
document.getElementById('current-details').textContent += curDetails;
