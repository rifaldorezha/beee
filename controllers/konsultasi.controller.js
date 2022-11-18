const bcrypt = require('bcrypt');
const Konsultasi = require("../models/konsultasi")

module.exports = {
  getAllkonsultasi: async (req, res) => {
    try {
      const konsultasi = await Konsultasi.find({}, "-__v")
      res.json({
        message: "success get data Konsultasi Medis",
        data: konsultasi
      })
    } catch (error) {
      console.log(error);
    }
  },

  getkonsultasiByID: async (req, res) => {
    try {
      const konsultasi = await Konsultasi.findById(req.params.id, "-__v")
      if (!konsultasi) {
        res.status(404).json({
          message: "Could not Found"
        });
      } else {
        res.status(200).json({
          message: "You Searched for",
          data: konsultasi
        })
      }
    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }

  },

  addkonsultasi: async (req, res) => {
    const data = req.body
    const konsultasi = new Konsultasi(data)

    // console.log(konsultasi)
    konsultasi.save()

    res.json({
      message: "Konsultasi Medis has been created!!",
    })

  },

  deletekonsultasiByID: async (req, res) => {
    try {
      const konsultasi = await Konsultasi.findById(req.params.id, "-__v")

      if (!konsultasi) {
        res.status(404).json({
          message: "Could not Found"
        });
      } else {
        konsultasi.deleteOne()
        res.status(201).json(
          {
            message: "Data Konsultasi Medis Deleted"
          })
      }
    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }
  },

  updatekonsultasiByID: async (req, res) => {
    try {
      const konsultasi = await Konsultasi.findById(req.params.id, "-__v")

      Object.assign(konsultasi, req.body)
      konsultasi.save();
      res.status(201).send({
        message: "Konsultasi updated!!",
        data: konsultasi
      })

    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }
  }
}
