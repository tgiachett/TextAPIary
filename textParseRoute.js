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
       switch(tBody[1]) {
        case date: 
          //date querying logic
          break;
        case keyword:
          //keyword search logic
          break;
        case tag:
          // search for tags/tables
          switch(tBody[3]) {
            case id:
            //look up by tag/table and ID
            break;
          }
          break;
        
        
       }
      break;
    case help:
      //return help options to user

  }

})





module.exports = sms;