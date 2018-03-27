const sms = require('./sms.js');


// module.exports = {

//   SmsPost: function() {
//     sms.listSms()

//   }.then((data) => {
//     return console.log(data.sms_messages[0].body)
//   })
// }

console.log(sms.listSms)

function readFilePromisified(filename) {
  return new Promise(
      function (resolve, reject) {
          readFile(filename, { encoding: 'utf8' },
              (error, data) => {
                  if (error) {
                      reject(error);
                  } else {
                      resolve(data);
                  }
              });
      });
}
readFilePromisified() is used like this:

readFilePromisified(process.argv[2])
.then(text => {
  console.log(text);
})
.catch(error => {
  console.log(error);
});