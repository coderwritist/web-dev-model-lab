const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({      
    service: 'gmail',
    auth: {
        user: 'siddarthan23102@gmail.com',
        pass: 'voldyvoldy1'
    }
});

// handle form submission
function handleFormSubmit() {
  // get form data

  // setup email data
  let mailOptions = {
      from: 'siddarthan23102@gmail.com',
      to: 'siddarthan23102@gmail.com',
      subject: 'New form submission',
      text: `hey hey hi`
  };

  // send email
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.log(error);
      } else {
          console.log('Email sent: ' + info.response);
      }
  });
}

handleFormSubmit();
