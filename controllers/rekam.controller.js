const bcrypt = require('bcrypt');
const Rekam = require("../models/rekam")

module.exports = {
  getAllrekam: async (req, res) => {
    try {
      const rekam = await Rekam.find({}, "-__v").populate("id_konsultasi", "-__v")
      res.json({
        message: "success get data Rekam Medis",
        data: rekam
      })
    } catch (error) {
      console.log(error);
    }
  },

  getrekamByID: async (req, res) => {
    try {
      const rekam = await Rekam.findById(req.params.id, "-__v")
      if (!rekam) {
        res.status(404).json({
          message: "Could not Found"
        });
      } else {
        res.status(200).json({
          message: "You Searched for",
          data: rekam
        })
      }
    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }

  },

  addrekam: (req, res) => {
    const data = req.body
    const rekam = new Rekam(data)

    // console.log(rekam)
    rekam.save()

    res.json({
      message: "Rekam Medis has been created!!",
    })

  },

  deleterekamByID: async (req, res) => {
    try {
      const rekam = await Rekam.findById(req.params.id, "-__v")

      if (!rekam) {
        res.status(404).json({
          message: "Could not Found"
        });
      } else {
        rekam.deleteOne()
        res.status(201).json(
          {
            message: "Data Rekam Medis Deleted"
          })
      }
    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }
  },

  updaterekamByID: async (req, res) => {
    try {
      const rekam = await Rekam.findById(req.params.id, "-__v")

      Object.assign(rekam, req.body)
      rekam.save();
      res.status(201).send({
        message: "Rekam updated!",
        data: rekam
      })

    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }
  }
}
