const { Vonage } = require('@vonage/server-sdk')

// Importing the http module
const http = require("http")
const express = require('express');
const path = require("path");
const app = express();
const bp = require("body-parser");
app.use(bp.urlencoded({extended: true}));
app.use(express.json())



app.listen(3000, function(){console.log("running...")});

app.get("/form", function(req, res)
    {
        res.sendFile(path.join(__dirname, "./reg.html"));

    }
)


app.post("/form", function(req, res)
    {
        console.log(req.body)
        var ph = req.body.phone;
        const vonage = new Vonage({
            apiKey: "5c817c9e",
            apiSecret: "U4hzyT1iJX7D0G1F"
          })
          
          const from = "Vonage APIs"
          const to = ph
          const text = 'oombu da saravana Kumar'
          
          async function sendSMS() {
              await vonage.sms.send({to, from, text})
                  .then(resp => { console.log('Message sent successfully'); console.log(resp); })
                  .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
          }
          sendSMS();
          res.send("Message sent successfully");
    }
)








