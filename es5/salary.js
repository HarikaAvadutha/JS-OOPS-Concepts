'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Salary = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bank = require('./bank.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Salary = exports.Salary = function (_Bank) {
  _inherits(Salary, _Bank);

  function Salary(accountNum, balance) {
    _classCallCheck(this, Salary);

    return _possibleConstructorReturn(this, (Salary.__proto__ || Object.getPrototypeOf(Salary)).call(this, accountNum, balance));
  }

  _createClass(Salary, [{
    key: 'calInterest',
    value: function calInterest() {
      var rate = 3.06;
      var bal = this.balance;
      return bal * rate / 100;
    }
  }, {
    key: 'getAccountDetails',
    value: function getAccountDetails() {
      console.log('Account number is: ' + this.accountNum);
      console.log('Current Available Balance is ' + this.balance);
      console.log('Account Type is Salary');
      return 'AccountNum: ' + this.accountNum + ' & Current Bal is ' + this.balance;
    }
  }]);

  return Salary;
}(_bank.Bank);