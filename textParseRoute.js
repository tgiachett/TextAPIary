const sms = require('./controller/sms.js');


var result;


//placeholder for receiving messages because we need a live heroku route to acutally receive messages
// setTimeout(function() {
  
// })

sms.listSms().then(res => { 
  result = res
  
  var tBody = result.sms_messages[0].body
  var inNum = result.sms_messages[0].from
  console.log(tBody)
  tBody = tBody.split(" ")
  console.log(tBody[0])
  
  switch(tBody[0].toLowerCase()) {
    case "entry":
       //entry tree
      break;
    case "query":
       switch(tBody[1]) {
        case "date": 
          //date querying logic
          break;
        case "keyword":
          //keyword search logic
          break;
        case "tag":
          // search for tags/tables
          switch(tBody[3]) {
            case "id":
            //look up by tag/table and ID
            break;
          }
          break;
        
        
       }
      break;
    case "help":
      //return help options to user

      var helpString = "help commands placeholder"
       sms.sendSms(inNum, helpString)
       console.log("help reply sent")
  }

})





module.exports = sms;