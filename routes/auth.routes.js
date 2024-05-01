//Path : /api/login
const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validate-fiels");
const {
  loginUser,
  googleSingIn,
  renewToken,
} = require("../controllers/auth.controller");
const { validateJWT } = require("../middlewares/validate-jwt");

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

router.post(
  "/google",
  [check("token", "el token es obligatorio").not().isEmpty(), validateFields],
  googleSingIn
);

router.get("/renew", validateJWT, renewToken);

module.exports = router;
