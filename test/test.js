//FORMAT
// describe(“myTitle”, function(){ 
// 	it(“should”, function () { 
// 		expect(myFunction(params)).to.equal(expectedAnswer); }); 
// 	it (“should opposite”, function () {
// 		expect( () => myFunction(params)).to.throw(Error); }) ;
// });

//REQUIRE CHAI FOR ASSERTION LIBRARY
const expect = require("chai").expect;

//TEST DATABASE BEING USED
const config = require("../config/config.js");

describe("Test database use", function () {
	it("should use entries database for development", function () {
		expect(config.development.database).to.equal("entries_db");
	});
});

//TEST CONNECTION TO LOCALHOST
const w = require("../bin/www");

describe("Test local connection", function () {
	it("should connect to local port", function () {
		expect(w).to.equal(8080);
	});
});

//METHOD copy, directly from client.js alternative to exporting/require method

//TEST PHONE NUMBER INPUT
function phone (phoneNumber) {
	if (typeof phoneNumber === "string" && phoneNumber.toString().length === 10) {
  		from += phoneNumber;
  		return from
  	}
  	else {
  		console.log("Not a valid phone number.");
  	}
};

describe("Test phone number", function () {
	it("should accept only user input that is a usable number", function() {
		expect(()=> phone("2522584444").to.equal(from));
	}),

	it("should reject user input that is not a valid phone number", function() {
		expect(()=> phone("252258444").to.throw());
	});
});

//TEST FOR LOOP to populate hexagons

let userEntries = require("./testAPI");

function getEntries (userEntries) {
	for (let i=0; i<16 && i<userEntries.length; i++){
		console.log(userEntries[i].comBody);
	}
}

describe("Get response entry text", function(){
	it("should print entry text and only as many as are available", function () {
		expect(()=> getEntries(userEntries).to.not.throw());
	});
});



//===================================================================================

//IMPROVEMENTS => TEST THE FOLLOWING:

//TEST PUT
// describe("PUT function", function () {
// 	it("should update database successfully", function () {
// 		expect(clientJS().to.equal(console.log(""));)
// 	});
// });

//TEST POST
// describe("POST request", (done) => {
// 	it("should return a JSON object", (done) => {
// 		.get("ROUTEHERE")
// 		.end((err, res) => {
// 			expect(res.status).to.equal(200),
// 			expect(res).to.be.json, 
// 			done();
// 		});
// 	});
// });

//TEST VIRTUAL HTTP REQ
// const sampleJSON = { 
// 	"ApiVersion": "v2",
//   "Body": "put 2",
//   "From": "+19193574249",
//  "SmsSid": "SMf674eb32d5e14608d1cb4397810a16ad",
//   "SmsStatus": "received",
//   "To": "+19892560937" }

//DEFAULT TEST SCRIPTS?
    // "test": {
      // "echo \"Error: no test specified\" && exit 1" 