const { response } = require("express");
const User = require("../models/user.model");
const { findByIdAndUpdate } = require("mongoose");
const bcrypt = require("bcryptjs");
const { generateJWToken } = require("../helpers/jwt");
const getUsers = async (request, response) => {
  const desde = Number(request.query.desde) || 0;

  const [users, count] = await Promise.all([
    User.find({}, "name email role google img").skip(desde).limit(5),
    User.countDocuments(),
  ]);

  response.json({
    ok: true,
    users,
    count,
    id: request.id,
  });
};

const createUser = async (request, res = response) => {
  const { email, password } = request.body;

  try {
    const existsEmail = await User.findOne({ email: email });

    if (existsEmail) {
      return res.status(400).json({
        ok: false,
        msg: "The email already exists",
      });
    }
    const user = new User(request.body);
    //Encriptar password
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);
    await user.save();
    const token = await generateJWToken(user.id);
    console.log(token);
    res.json({
      ok: true,
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado... Revisar logs",
    });
  }
};

const updateUser = async (request, res = response) => {
  //TODO : Validar el token y comprovar si es el usuario correcto
  const id = request.params.id;

  try {
    const userDB = await User.findById(id);
    if (!userDB) {
      return res.status(400).json({
        ok: false,
        msg: "User not found",
      });
    }
    //Actualizaciones
    const { password, google, email, ...campos } = request.body;
    if (userDB.email !== email) {
      const existEmail = await User.findOne({ email: email });
      if (existEmail) {
        return res.status(400).json({
          ok: false,
          msg: "The email already exists",
        });
      }
    }
    campos.email = email;
    const updateUser = await User.findByIdAndUpdate(id, campos, { new: true });

    res.json({
      ok: true,
      user: updateUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Unexpected error... Review logs",
    });
  }
};

const deleteUser = async (request, res = response) => {
  const id = request.params.id;
  try {
    const userDB = await User.findById(id);
    if (userDB) {
      await User.finDByIdAndDelete(id);
      res.json({
        ok: true,
        nsg: "User deleted",
      });
    } else {
      res.status(400).json({
        ok: false,
        msj: "User not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Unexpected error... Review logs",
    });
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
