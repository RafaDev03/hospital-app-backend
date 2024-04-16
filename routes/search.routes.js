//path : /api/search
const {
  searchItems,
  searchDocumentsCollection,
} = require("../controllers/search.controller");

const { Router } = require("express");
const { validateJWT } = require("../middlewares/validate-jwt");

const router = Router();

router.get("/:item", validateJWT, searchItems);
router.get("/coleccion/:table/:search", validateJWT, searchDocumentsCollection);

module.exports = router;
