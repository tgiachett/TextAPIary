"use strict"

// do I have to required this if this is required in server.js?
require('dotenv').config();

//reverse carrier lookup for sending zero cost text via email

// const TelCarrier = require('tel-carrier')
// var telCarrier
// var car
// let lookups = require('email-to-phone');
// telCarrier = TelCarrier.create({
//   service: 'fonefinder.net'
// });

//beginning of carrier logic

// telCarrier.lookup('9892560937', (err, res) => {
//   console.log(res)
//   car = res.carrierComment
//   console.log(car);

//   // let obj = lookups.lookup(car);        // fuzzy lookup
 
//   // let email = lookups.mms_sms(obj.name, 9193574249);   // prefer MMS but SMS is ok
 
//   // console.log(email);

// });

//end of carrier logic


var zang = require('zang-node');
var enums = zang.enums;

var connector = new zang.SmsConnector({
    accountSid: process.env.ZSID,
    authToken: process.env.ZAUTHTOKEN
});

const sms = {
    //default statusCallback is 'http://mycallback.url.com'
    // will incur $.005 per message sent 
    sendSms: function (endNum, message, statusCallback) {
        
        connector.sendSmsMessage({
            to: endNum,
            from: process.env.ZNUM,
            body: message,
            statusCallback: statusCallback,
            statusCallbackMethod: enums.HttpMethod.GET,
            allowMultiple: true
        }).then((data) => {
            
                console.log(data);
                return data;
            
        });
        
    },
    // lists messages sent to the number
    // listSms: function () {
    //     return new Promise(
    //         function(resolve, reject) {
    //             connector.listSmsMessages({
    //                 to: process.env.ZNUM,
    //                 page: 0,
    //                 pageSize: 30
    //             }).then((data) => {
                    
                        
    //                      resolve(data);
                    
    //             })
    //         }
    //     )
    // },
    //view one message located by SmsSid or sid
    viewSms: function(smsSid) {
        connector.viewSmsMessage({ 
            smsMessageSid: smsSid 
        }).then((error, data) => { 
            if (error) {
                throw error;
            }
            else {
                console.log(data);
                return data;
            }
        });
    }

};




module.exports = sms;


