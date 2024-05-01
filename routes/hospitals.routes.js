//Ruta : /api/hospitals
const { Router } = require("express");
const { check } = require("express-validator");
const {
  getHospitals,
  postHospitals,
  updateHospitals,
  deleteHospitals,
} = require("../controllers/hospital.controller");
const {
  vaidateFields,
  validateFields,
} = require("../middlewares/validate-fiels");
const { validateJWT } = require("../middlewares/validate-jwt");
const router = Router();

router.get("/", getHospitals);
router.post(
  "/",
  [
    validateJWT,
    check("name", "Name is required").not().isEmpty(),
    validateFields,
  ],
  postHospitals
);
router.put(
  "/:id",
  [validateJWT, check("name", "Name is required").not().isEmpty()],
  updateHospitals
);

router.delete("/:id", [validateJWT], deleteHospitals);

module.exports = router;
