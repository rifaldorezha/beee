const express = require('express');
const router = express.Router()

const userRouter = require('./user.router');
const rekamRouter = require('./rekam.router');
const konsultasiRouter = require('./konsultasi.router');

router.use("/user", userRouter);
router.use("/rekam", rekamRouter);
router.use("/konsultasi", konsultasiRouter);

module.exports = router;