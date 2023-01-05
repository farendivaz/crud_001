const UserModel = require("../models/Users");

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.json(user);
  } catch {
    res.status(404).json({ message: error.message });
  }
};

const saveUser = async (req, res) => {
  const user = new UserModel(req.body);
  try {
    const insertUser = await user.save();
    res.status(201).json(insertUser);
  } catch {
    res.status(400).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await UserModel.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedUser);
  } catch {
    res.status(400).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await UserModel.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedUser);
  } catch {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getUsers, getUserById, saveUser, updateUser, deleteUser };
