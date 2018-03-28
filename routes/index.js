const models  = require("../models");
const express = require("express");
const router  = express.Router();
const sms = require('../controller/sms.js');

router.get("/", (req, res) => {
  models.User.findAll({}).then((users) => {
    res.render("index", {
      title: "placeholder",
      users: users
    });
  });
});

router.post("/api/incoming", (req, res) => {
	res.send("Success");
  console.log(req.body);
  let smsComObj = {}
  let msgInfo = req.body
  let inNum = msgInfo.From
  // merge request body onto smsComObj
  smsComObj.from = msgInfo.From;
  smsComObj.id = msgInfo.SmsSid;
  smsComObj.wholeBody = msgInfo.Body;
  // smsComObj.date = moment()
  let smsArr = msgInfo.Body.split(" ")
  switch(smsArr[0].toLowerCase()) {
    case "entry":
       //entry tree
       switch(smsArr[2]) {
        case true:
          //if there's a tbl name
          //make an object for the entry into that tbl
          smsComObj.tbl = smsArr[2]
          smsComObj.comBody = smsArr[1]
          if(smsArr[3]) {
            smsComObj.password = smsArr[3]
          }
          
        break;
        case false: 
          // validation check, send error
          let noTblErr = "Please give tbl arg after message to store in or create table"
          sms.sendSms(inNum, noTblErr)
        break; 

       }
      break;
    case "query":
       switch(smsArr[1]) {
        case "date": 
          //date querying logic
          smsComObj.dateSearch = smsArr[2]
          break;
        case "kywrd":
          //keyword search logic
          smsComObj.keyWordSearch = smsArr[2]
          break;
        case "tbl":
          // search for tags/tables
          smsComObj.tblSearch = smsArr[2]
          switch(smsArr[3]) {
            case true:
            //look up by tag/table and ID if an ID is present
            smsComObj.idSearch = smsArr[3]
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
});

module.exports = router;

