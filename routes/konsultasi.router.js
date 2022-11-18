const express = require("express");
const router = express.Router();

const {
  getAllkonsultasi,
  getkonsultasiByID,
  addkonsultasi,
  deletekonsultasiByID,
  updatekonsultasiByID,
} = require("../controllers/konsultasi.controller");

router.get("/", getAllkonsultasi);
router.get("/:id", getkonsultasiByID);
router.post("/", addkonsultasi);
router.delete("/:id", deletekonsultasiByID);
router.put("/:id", updatekonsultasiByID);

module.exports = router;
