//FORMAT
// describe(“myTitle”, function(){ 
// 	it(“should”, function () { 
// 		expect(myFunction(params)).to.equal(expectedAnswer); }); 
// 	it (“should opposite”, function () {
// 		expect( () => myFunction(params)).to.throw(Error); }) ;
// });

//TEST CONNECTION
const expect = require("chai").expect;

const config = require("../config/config.js");

const w = require("../bin/www");



//TEST DATABASE BEING USED
describe("Test database use", function () {
	it("should use MySQL entries database for development", function () {
		expect(config.development.database).to.equal("entries_db");
	});
});

//TEST CONNECTION
describe("Test local connection", function () {
	it("should connect to local port", function () {
		expect(w).to.equal(8080);
	});
});

// describe("Send SMS", function () {
// 	it("should send an sms from Zang", function () {
// 		expect(sms.sendSMS(2522584604, "Hello", "http://textapiary.herokuapp.com/zang/incoming").to.equal(data);
// 	});


// 	it("should not send SMS if parameters not passed through correctly", function () {
// 		expect(sms.sendSMS()).to.throw(Error);
// 	})
// });



// const sms = require('../controller/sms.js');

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


// module.exports = sms;

    // "test": {
      // "echo \"Error: no test specified\" && exit 1" 