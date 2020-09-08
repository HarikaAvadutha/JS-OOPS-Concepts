"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bank = exports.Bank = function () {
  function Bank(accountNum, balance) {
    _classCallCheck(this, Bank);

    this.accountNum = accountNum;
    this._balance = balance;
  }

  _createClass(Bank, [{
    key: "getAccountDetails",
    value: function getAccountDetails() {
      console.log("Account number is: " + this.accountNum);
      console.log("Current Available Balance is " + this.balance);
    }
  }, {
    key: "balance",
    get: function get() {
      return this._balance;
    },
    set: function set(amount) {
      this._balance += amount;
      console.log("Amount " + amount + " is added to your balance");
    }
  }]);

  return Bank;
}();