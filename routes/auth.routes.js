//Path : /api/login
const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validate-fiels");
const { loginUser } = require("../controllers/auth.controller");

const router = Router();
router.post(
  "/",
  [
    check("email", "Email in not valid").isEmail(),
    check("password", "Password in required").not().isEmpty(),
    validateFields,
  ],
  loginUser
);

module.exports = router;
