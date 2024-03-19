const { response } = require("express");
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { generateJWToken } = require("../helpers/jwt");
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

module.exports = {
  loginUser,
};
