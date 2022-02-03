var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");

const sendMail = async ({ emailAddress, subject, emailBody }) => {
  var transporter = nodemailer.createTransport(
    smtpTransport({
      host: "grow.herosite.pro",
      port: "587",
      auth: {
        user: "teamdcs@dcsinstitute.in",
        pass: "teamDCS@02"
      }
    })
  );

  const mailOptions = {
    from: "teamdcs@dcsinstitute.in", // sender address
    to: emailAddress, // list of receivers
    subject: subject, // Subject line
    text: emailBody
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
};

module.exports = { sendMail };
