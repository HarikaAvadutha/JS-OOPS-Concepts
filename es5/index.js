'use strict';

var _salary = require('./salary.js');

var _current = require('./current.js');

var _bank = require('./bank.js');

var bankDetails = _bank.Bank.getBankDetails();
document.getElementById('bank-details').innerHTML = '\nName: ' + bankDetails.name + ' <br>\nAddress: ' + bankDetails.address + ' <br>\nIFSCCode: ' + bankDetails.IFSCCode + '\n';

var sal = new _salary.Salary(876533, 10000);
console.log('Salary acct interest: ' + sal.calInterest());
var savDetails = sal.getAccountDetails();
document.getElementById('saving-details').textContent += savDetails;

var cur = new _current.Current(876534, 5000);
console.log('Current acct interest: ' + cur.calInterest());
var curDetails = cur.getAccountDetails();
document.getElementById('current-details').textContent += curDetails;