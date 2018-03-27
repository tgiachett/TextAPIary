const sms = require('./controller/sms.js');

// let smsReq;

// function makeReq () {
// 	smsReq = sms.listSms();
// 	delayAsynch();
// };

// function delayAsynch (error, smsReq) {
// 	if (error) {
// 		throw error;
// 	}
// 	else{
// 		console.log(smsReq);
// 	}

// }

// makeReq();


var result;
sms.listSms().then(res => { 
  result = res
  console.log(result.sms_messages[0].body)
})

// setTimeout(function() {
//   console.log(result.sms_messages[0].body)
// }, 2000)



module.exports = sms;
