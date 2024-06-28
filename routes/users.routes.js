//Ruta : /api/users

const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validate-fiels");

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");
const {
  validateJWT,
  validateAdminRole,
  validateAdminRole_MismoUser,
} = require("../middlewares/validate-jwt");

const router = Router();

router.get("/", validateJWT, getUsers);
router.post(
  "/",
  [
    //validaciones

    check("name", "Name is required").not().isEmpty(),
    check("password", "Password is required").not().isEmpty(),
    check("email", "Email is not valid").isEmail(),
    validateFields,
  ],
  createUser
);
router.put(
  "/:id",
  [
    validateJWT,
    validateAdminRole_MismoUser,
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is not valid").isEmail(),
    check("role", "Role is required").not().isEmpty(),
    validateFields,
  ],
  updateUser
);

router.delete("/:id", validateJWT, validateAdminRole, deleteUser);

module.exports = router;
