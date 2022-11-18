const express = require("express");
const router = express.Router();

const {
  getAllrekam,
  getrekamByID,
  addrekam,
  deleterekamByID,
  updaterekamByID,
} = require("../controllers/rekam.controller");

router.get("/", getAllrekam);
router.get("/:id", getrekamByID);
router.post("/", addrekam);
router.delete("/:id", deleterekamByID);
router.put("/:id", updaterekamByID);

module.exports = router;
