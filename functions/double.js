'use strict';

function NotANumberError(varName) {
  this.name = 'NotANumberError';
  this.message = `${varName} is not a number!`;
}
NotANumberError.prototype = new Error();

function NumberIsTooBig(varName, max) {
  this.name = 'NumberIsTooBig';
  this.message = `${varName} is bigger than ${max}!`;
}
NumberIsTooBig.prototype = new Error();

module.exports.handler = (n, context, callback) => {
  if (!n) {
    callback(new NotANumberError("n"));
  } else if (n > 42) {
    callback(new NumberIsTooBig("n", 42));
  } else if (n === 42) {
    while(true) {
      // do nothing and let it timeout
    }
  } else {
    callback(null, n * 2);
  }
};