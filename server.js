const express = require("express");
const chalk = require("chalk");
const nodemailer = require("nodemailer");
const app = express();
app.use(express.json());
const port = 3000;

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "puntonlinemarket1@gmail.com",
    pass: "euvlqtzqmjqmknbk",
    //euvl qtzq mjqm knbk
  },
});

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "yahyeabdinasirfarah@gmail.com",
//     pass: "euvlqtzmqjmknbk", // <- your App Password, no spaces!
//   },
// });

(async () => {
  try {
    const info = await transporter.sendMail({
      from: `"yahye abdinasir" <puntonlinemarket1@gmail.com>`,
      to: "yahyeabdinasirfarah@gmail.com",
      subject: "Hello ✔",
      html: "<b>Hello world?</b>",
    });
    console.log("message sent", info.messageId);
  } catch (error) {
    console.log("Failed to send email:", error.message);
  }
})();

app.listen(port, () => {
  console.log(`  the server is listening port ${port}`);
});
// app.get("/", (req, res) => {
//   res.status(200).json({ message: "hello there " });
// });
