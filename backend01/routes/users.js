const express = require("express");
const { register, emailsend, login, resetpassword } = require("../controller/users");

const router = express.Router();

router.route("/register").post(register);

router.route("/emailsend").post(emailsend);

router.route("/login").post(login);

router.route("/resetpassword").post(resetpassword);








module.exports = router;