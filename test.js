const sms = require('./controller/sms.js');


var result;
sms.listSms().then(res => { 
  result = res
  var tBody = result.sms_messages[0].body
  console.log(tBody)
  tBody = tBody.split(" ")
  console.log(tBody[0])

  switch(tBody[0]) {
    case entry:
       //entry tree
      break;
    case query:
      //some code 
      break;
    case help:
      //return help options to user

  }

})





module.exports = sms;
