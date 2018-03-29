//FORMAT
// describe(“myTitle”, function(){ 
// 	it(“should”, function () { 
// 		expect(myFunction(params)).to.equal(expectedAnswer); }); 
// 	it (“should opposite”, function () {
// 		expect( () => myFunction(params)).to.throw(Error); }) ;
// });
const chai = require("chai");
let should = chai.should();
let expect = chai.expect();

const sequelize = require("../models/index.js");

const sms = require("../controller/sms.js");

//TEST CONNECTION
describe("Test connection", function () {
	it("should authenticate", function () {
		expect(sequelize.authenticate()).to.not.be.rejected();
		// return sequelize.authenticate().then(function () {
		// 	throw new Error("Not connecting arghhhh...");
		// }, function (error) {
		// 		console.log("You aaaaare....CONNECTED!")
		// });
	});

	it ("should not authenticate", function () {
		expect(sequelize.authenticate()).to.be.rejected();
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