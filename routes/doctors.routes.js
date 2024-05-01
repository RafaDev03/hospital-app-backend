const { Router } = require("express");
const {
  getDoctors,
  postDoctors,
  updateDoctors,
  deleteDoctors,
} = require("../controllers/doctor.controller");
const { validateJWT } = require("../middlewares/validate-jwt");
const { validateFields } = require("../middlewares/validate-fiels");
const { check, checkExact } = require("express-validator");
const router = Router();

router.get("/", getDoctors);
router.post(
  "/",
  [
    validateJWT,
    check("name", "Name is required").not().isEmpty(),
    check("hospital", "Hospital id is required").isMongoId(),
    validateFields,
  ],
  postDoctors
);
router.put(
  "/:id",
  [validateJWT, check("name", "Name is required").not().isEmpty()],
  updateDoctors
);
router.delete("/:id", deleteDoctors);

module.exports = router;
