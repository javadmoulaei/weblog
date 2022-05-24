const { text } = require("body-parser");
const nodeMailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const transporterDetails = smtpTransport({
  host: process.env.MAIL_HOST,
  port: +process.env.MAIL_PORT,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const transport = nodeMailer.createTransport(transporterDetails);

exports.sendMail = async (to, subject, text) => {
  transport.sendMail(
    { from: process.env.MAIL_USER, to, subject, text },
    (err, info) => {
      if (err) return false;
      return true;
    }
  );
};
