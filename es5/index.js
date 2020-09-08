'use strict';

var _salary = require('./salary.js');

var _current = require('./current.js');

var sal = new _salary.Salary(876533, 10000);
console.log('Salary acct interest: ' + sal.calInterest());
var savDetails = sal.getAccountDetails();
document.getElementById('saving-details').textContent += savDetails;

var cur = new _current.Current(876534, 5000);
console.log('Current acct interest: ' + cur.calInterest());
var curDetails = cur.getAccountDetails();
document.getElementById('current-details').textContent += curDetails;