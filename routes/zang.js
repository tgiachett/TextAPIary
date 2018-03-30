
const models  = require("../models");
const express = require("express");
const router  = express.Router();
const sms = require('../controller/sms.js');

router.post("/incoming", (req, res) => {
  res.send("Success");
  console.log(req.body);
  let smsComObj = {};
  let msgInfo = req.body;
  
  // merge request body onto smsComObj
  smsComObj.from = msgInfo.From;
  smsComObj.SmsSid = msgInfo.SmsSid;
  smsComObj.wholeBody = msgInfo.Body;
  // smsComObj.date = moment()
  
  const smsArr = msgInfo.Body.split(" ");
  console.log(smsArr[2])
  switch(smsArr[0].toLowerCase()) {
    case "post":
      //entry tree
      //if there's a tbl name
      if(smsArr[2]) {
        console.log("switch works tag true")
        //make an object for the entry into that tbl
        smsComObj.tbl = smsArr[2];
        smsComObj.comBody = smsArr[1];
        //if there's a password set for that table, store it
        if(smsArr[3]) {
          smsComObj.tblPass = smsArr[3];
        }
        console.log(smsComObj);
        
        models.Entry.create(
          smsComObj
        ).then(() => {
          //get the id of the entry just entered
          models.Entry.findOne(
            {
            where: {
              SmsSid: smsComObj.SmsSid
            }
            
          }).then(result => {
            console.log(result)
            sms.sendSms(smsComObj.from, `Entry Successfully logged with id ${result.id}`);
          })
          // send out the response text
          // sms.sendSms(smsComObj.from, `Entry Successfully logged with id ${thisId}`);
        });
        
      } else { 
        console.log("switch works tbl false")
          // validate: if there is no table name given, send error
          let noTblErr = "Please give tbl arg after message to store in or create table";
          sms.sendSms(smsComObj.from, noTblErr);
      }
      break;
    case "get":
      switch(smsArr[1]) {
        case "date": 
          //date querying logic NOT QUITE SURE HOW TO DO THIS YET
          // smsComObj.dateSearch = smsArr[2];
          // models.Entry.findAll({
          //   where: {

          //   }
          // })
          break;
        case "tbl":
          //keyword search logic 
          smsComObj.tblSrch = smsArr[2];
          
          let tblSrchRes = {};
          // the number of the search result is smsArr[3]
          if(!smsArr[3]) {
            sms.sendSms(smsComObj.from, `Error: no entry number specified`)
          }
          tblSrchRes.resI = parseInt(smsArr[3]) - 1;
          models.Entry.findAll(
          {
            where: {
              tbl: smsComObj.tblSrch
            }
          }).then((result) => {
            // let shortDate = result[tblSrchRes.resI].createdAt.split(" ")
            // shortDate = shortDate.slice(0,4)
            console.log(result[tblSrchRes.resI].createdAt)
            sms.sendSms(smsComObj.from, `${result[tblSrchRes.resI].createdAt}: ${result[tblSrchRes.resI].comBody}`)
          });
          
          break;  
      }
      break;
    case "put":
    case "help":
      //return help options to user
      const helpString = "help commands placeholder";
      sms.sendSms(smsComObj.from, helpString);
      console.log("help reply sent");
      break;
    case "auth":
      //auth logic
      break;
    case "put":
      //update logic and text response
      break;
    case "del":
      //delete logic and text response
      break;
    
  }
});

module.exports = router;