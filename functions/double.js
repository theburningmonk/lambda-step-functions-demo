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

module.exports.handler = async (n, context) => {
  if (!n) {
    throw new NotANumberError("n");
  } else if (n > 42) {
    throw new NumberIsTooBig("n", 42);
  } else if (n === 42) {
    while(true) {
      // do nothing and let it timeout
    }
  } else {
    return n * 2;
  }
};