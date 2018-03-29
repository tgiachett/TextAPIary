
const models  = require("../models");
const express = require("express");
const router  = express.Router();

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
  switch(smsArr[0].toLowerCase()) {
    case "entry":
      //entry tree
      //if there's a tbl name
      if(smsArr[2]) {
        
        //make an object for the entry into that tbl
        smsComObj.tbl = smsArr[2];
        smsComObj.comBody = smsArr[1];
        //if there's a password set for that table, store it
        if(smsArr[3]) {
          smsComObj.tblPass = smsArr[3];
        }
        models.Entry.create(smsComObj)
        //get the id of the entry just entered
        let thisId = models.Entry.findAll({
          attribute: id
          },
          {
          where: {
            SmsSid: smsComObj.SmsSid
          }
        });
        // send out the response text
        sms.sendSms(smsComObj.from, `Entry Successfully logged with id ${thisId}`);
        
      } else { 
          // validate: if there is no table name given, send error
          let noTblErr = "Please give tbl arg after message to store in or create table";
          sms.sendSms(smsComObj.from, noTblErr);
      }
      break;
    case "query":
      switch(smsArr[1]) {
        case "date": 
          //date querying logic NOT QUITE SURE HOW TO DO THIS YET
          // smsComObj.dateSearch = smsArr[2];
          // models.Entry.findAll({
          //   where: {

          //   }
          // })
          break;
        case "kywrd":
          //keyword search logic 
          smsComObj.keyWordSearch = smsArr[2];
          
          let kywrdSrchRes = Post.findAll({
            attribute: comBody
          },
          {
            where: {
              authorId: {
                [Op.contains]: smsComObj.keyWordSearch
              }
            }
          });
          sms.sendSms(smsComObj.from, `Entry: ${kywrdSrchRes}`)
          break;
        case "tbl":
          // search for tags/tables
          smsComObj.tblSearch = smsArr[2];
          if(smsArr[3]) {
            //look up by tag/table and ID if an ID is present
            smsComObj.idSearch = smsArr[3];
            let idSrchRes = models.Entry.findAll({
              attribute: comBody
            },
            {
              where: {
                id: smsComObj.idSearch
              }
            })
            sms.sendSms(smsComObj.from, `Entry: ${idSrchRes}`);
          }
          let tblSrchRes = models.Entry.findAll({
            attribute: comBody
          },
          {
            where: {
              tbl: smsComObj.tblSearch
            }
          })
          sms.sendSms(smsComObj.from, `Entry: ${tblSrchRes}`);

          break;       
      }
      break;
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