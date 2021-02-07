let url = 'https://mylogger.io/log'; // sends h

function log(message) {
  // send http request
  console.log(message);
}

module.exports = log; // This is what allows you to call that variable or function outside the scope of the file
module.exports.log /* this defines the object as log */ = log // this option is for if he have multiple methods in this file;
