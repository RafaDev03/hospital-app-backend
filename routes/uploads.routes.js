//Path : /api/uploads
const { Router } = require("express");
const expressFileUpload = require("express-fileupload");
const { filesUpload, returnImg } = require("../controllers/uplodad.controller");

const router = Router();

router.use(expressFileUpload());

router.put("/:tipo/:id", filesUpload);
router.get("/:tipo/:img", returnImg);

module.exports = router;
