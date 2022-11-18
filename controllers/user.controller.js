const bcrypt = require('bcrypt');
const User = require("../models/user")

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const users = await User.find({}, "-__v -password")
      res.json({
        message: "success get data user",
        data: users
      })
    } catch (error) {
      console.log(error);
    }
  },

  getUserByID: async (req, res) => {
    try {
      const users = await User.find({}, "-__v -password")
      res.status(200).json({
        message: "Getting Data",
        data: users
      })
    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }
  },

  addUser: (req, res) => {
    const data = req.body
    const saltRounds = 10
    const hash = bcrypt.hashSync(data.password, saltRounds);
    data.password = hash
    const user = new User(data)
    // console.log(user)
    user.save()
    res.json({
      message: "data has been created!!",
    })
  },

  deleteUserByID: async (req, res) => {
    try {
      const users = await User.findById(req.params.id, "-__v -password")
      if (!users) {
        res.status(404).json({
          message: "Could not Found"
        });
      } else {
        users.deleteOne()
        res.status(201).json(
          {
            message: "Data Deleted"
          })
      }
    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }
  },

  updateUserByID: async (req, res) => {
    try {
      const users = await User.findById(req.params.id, "-__v -password")
      Object.assign(users, req.body)
      users.save();
      res.status(201).send({
        message: "User updated!",
        data: users
      })
    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }
  }
}

