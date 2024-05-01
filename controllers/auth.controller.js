const { response } = require("express");
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { generateJWToken } = require("../helpers/jwt");
const { googleVerify } = require("../helpers/google-verify");

const loginUser = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    //Verifica email
    const userDB = await User.findOne({ email });
    if (!userDB) {
      return res.status(404).json({
        ok: false,
        msg: "Email not found",
      });
    }
    //Verifica password
    const validPassword = bcrypt.compareSync(password, userDB.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Password is not valid",
      });
    }
    //Generar JWT
    const token = await generateJWToken(userDB.id);

    res.json({
      ok: true,
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

const googleSingIn = async (request, response) => {
  const googleToken = request.body.token;

  try {
    const { name, email, picture } = await googleVerify(googleToken);
    const userDB = User.findOne({ email });
    let usuario;

    if (!userDB) {
      //si el usuario no existe
      usuario = new User({
        name,
        email,
        img: picture,
        google: true,
        password: "@@@",
      });
    } else {
      usuario = userDB;
      usuario.google = true;
    }

    //guardar en la base de datos
    await usuario.save();
    response.json({
      ok: true,
      msg: "Google Sing In",
      name,
      email,
      picture,
    });
  } catch (error) {
    response.status(401).json({
      ok: false,
      msg: "token invalido",
      error,
    });
  }
};

const renewToken = async (request, response) => {
  const id = request.id;
  //Generar JWT
  const token = await generateJWToken(id);
  response.json({
    ok: true,
    token,
  });
};

module.exports = {
  loginUser,
  googleSingIn,
  renewToken,
};
