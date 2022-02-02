const {
  addDetail,
  registration,
  enquiry,
  email
} = require("../controller/details");

const router = require("express").Router();

router.post("/addDetail", addDetail);
router.post("/form/registration", registration);
router.post("/form/enquiry", enquiry);
router.post("/email", email);

module.exports = router;
