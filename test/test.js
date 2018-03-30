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

const sampleJSON = { 
	"ApiVersion": "v2",
  "Body": "put 2",
  "From": "+19193574249",
 "SmsSid": "SMf674eb32d5e14608d1cb4397810a16ad",
  "SmsStatus": "received",
  "To": "+19892560937" }

//TEST DATABASE BEING USED
describe("Test database use", function () {
	it("should use entries database for development", function () {
		expect(config.development.database).to.equal("entries_db");
	});
});

//TEST CONNECTION
describe("Test local connection", function () {
	it("should connect to local port", function () {
		expect(w).to.equal(8080);
	});
});

//TEST PUT
// describe("PUT function", function () {
// 	it("should update database successfully", function () {
// 		expect(clientJS().to.equal(console.log(""));)
// 	});
// });

//TEST POST
describe("POST request", (done) => {
	it("should return a JSON object", (done) => {
		.get("ROUTEHERE")
		.end((err, res) => {
			expect(res.status).to.equal(200),
			expect(res).to.be.json, 
			done();
		});
	})
})


describe('GET /v1/users', (done) => {
    it('should get a list of users', (done) => {
      chai.request(app)
      .get('/v1/users')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        expect(res).to.be.json
        expect(res.body).to.be.a('array')
        done()
      })
    })
  })


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

//DEFAULT TEST SCRIPTS?
    // "test": {
      // "echo \"Error: no test specified\" && exit 1" 