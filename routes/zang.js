
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
  
  const smsArr = msgInfo.Body.split(", ");
  console.log(smsArr[2])
  switch(smsArr[0].toLowerCase()) {
    case "post":
      //entry tree
      //if there's a tbl name
      
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
            sms.sendSms(smsComObj.from, `Entry logged @ID = ${result.id}`);
          })
          // send out the response text
          // sms.sendSms(smsComObj.from, `Entry Successfully logged with id ${thisId}`);
        });
        
      // } else { 
      //   console.log("switch works tbl false")
      //     // validate: if there is no table name given, send error
      //     let noTblErr = "ERR: No tbl arg after message";
      //     sms.sendSms(smsComObj.from, noTblErr);
      
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
        case "id":
          //id search logic
          
          smsComObj.idSrch = smsArr[2];
          
          let idSrchRes = {};
          // the number of the search result is smsArr[3]
          if(!smsArr[2]) {
            sms.sendSms(smsComObj.from, `ERR: no ID specified`)
          }
          
          models.Entry.findById(smsComObj.idSrch).then((result) => {
            // let shortDate = result[tblSrchRes.resI].createdAt.split(" ")
            // shortDate = shortDate.slice(0,4)
            console.log(result)
            sms.sendSms(smsComObj.from, `${result.createdAt}: "${result.comBody}" @ID:${result.id} `)
          });
          
          break;  
      }
      break;
    case "put":
      //put logic put id text
      models.Entry.update({
        comBody: smsArr[2],
      }, {
        where: {
          id: smsArr[1],
        }
      });
      sms.sendSms(smsComObj.from, `Entry upd @ID= ${smsArr[1]} `)
      break;
    case "delete":
      //delete logic
      models.Entry.destroy({
        where: {
          id: smsArr[1]
        }
      })
      sms.sendSms(smsComObj.from, `Entry deleted @ID= ${smsArr[1]}`)
      break;
    case "help":
      //return help options to user
      const helpString = "COMMANDS: POST, TEXT, [TAG]; GET, ID, IDNUM;PUT, IDNUM, TEXT; DELETE, IDNUM; HELP ";
      sms.sendSms(smsComObj.from, helpString);
      console.log("help reply sent");
      break;
    case "auth":
      //auth logic
      break;
    
    
    
  }
});

module.exports = router;

