const models = require("../models");
const createError = require("http-errors");
const mailer = require("../utils/mailer");

module.exports = {
  addDetail: async (req, res, next) => {
    const body = req.body;
    const detailType = req.query.type;

    try {
      const isEmail = await models.Detail.findOne({
        where: { email: body.email }
      });
      if (isEmail) throw createError.Conflict("User Details Already Feeded");
      const result = await models.Detail.create({
        ...body,
        detailType
      });

      res.status(201).json({
        status: "success",
        message: "Detail Added",
        result: result
      });
    } catch (error) {
      next(error);
    }
  },

  registration: async (req, res, next) => {
    const body = req.body;
    try {
      const isEmail = await models.Registration.findOne({
        where: { email: body.email }
      });

      if (isEmail) throw createError.Conflict("User Details Already Feeded");
      const result = await models.Registration.create({
        ...body
      });

      mailer.sendMail({
        emailAddress: body.email,
        subject: "Thank you for registration",
        emailBody: `Registration was successful, we'll get back to you soon ${body.name_of_student}.. `
      });

      res.status(201).json({
        status: "success",
        message: "Registration Details Added",
        result: result
      });
    } catch (error) {
      next(error);
    }
  },
  enquiry: async (req, res, next) => {
    const body = req.body;
    try {
      const result = await models.Enquiry.create({
        ...body
      });

      // send email to user

      mailer.sendMail({
        emailAddress: body.email,
        subject: "Hello " + name_of_student,
        emailBody: "We've recieved your enquiry details."
      });

      res.status(201).json({
        status: "success",
        message: "Enquiry Details Added",
        result: result
      });
    } catch (error) {
      next(error);
    }
  },

  email: async (req, res, next) => {
    const body = req.body;
    try {
      mailer.sendMail({
        emailAddress: body.email,
        subject: body.subject,
        emailBody: body.message
      });

      res.status(200).json({
        status: "success",
        message: "Email Sent"
      });
    } catch (error) {
      next(error);
    }
  }
};
