import * as fs from "fs";
import * as path from "path";
import { parse } from "csv-parse";
import * as nodemailer from "nodemailer"
require('dotenv').config()

type WorldCity = {
  emails: string,
  name: string,
};

(() => {

  // this is where the cv is read
  const csvFilePath = path.resolve(__dirname, "./mails.csv"); 
  const headers = ["email", "name"];
  const fileContent = fs.readFileSync(csvFilePath, { encoding: "utf-8" });

 

  // read the letter which is the object of the mail
  fs.readFile("./letter.txt", "utf8", (err, text) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(typeof(text))

    parse(
      fileContent,
      {
        delimiter: ",",
        columns: headers,
      },
      (error, result: WorldCity[]) => {
        if (error) {
          console.error(error);
        }

        result.shift();
        console.log(result)
        send_emails(result, text);
      }
    )
  });





  function send_emails(emails, text) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      }
    });

    for (const item of emails) {
     let msg = text.replace("_________",  item.name) //replacing the placeholder in the txt file before sendig with the correct name
      const mailOptions = {
        from: 'edoardoababei2003@gmail.com',                         //to change 
        to: item.email,
        subject: 'Stage estivo ',            //to change      
        text: msg,
        attachments:[{"filename":"wines.pdf","path":"./wines.pdf"}]
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    }
  }
})(); //this call the whole function
