const sms = require('../controller/sms.js');

let smsReq;

function makeReq () {
	smsReq = sms.listSms();
	delayAsynch();
};

function delayAsynch (error, smsReq) {
	if (error) {
		throw error;
	}
	else{
		console.log(smsReq);
	}

}

makeReq();


module.exports = sms;
