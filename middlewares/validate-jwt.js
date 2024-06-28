const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const validateJWT = (req, res, next) => {
  //Leer el token
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "No hay token en la peticion",
    });
  }
  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.id = id;
    next();
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Token no valido",
    });
  }
};

const validateAdminRole = async (req, res, next) => {
  const id = req.id;
  try {
    const userDB = await User.findById(id);
    if (!userDB) {
      res.status(404).json({
        ok: false,
        msg: "User no existe",
      });
    }
    if (userDB.role !== "ADMIN_ROLE") {
      return res.status(401).json({
        ok: false,
        msg: "No tiene los provilegios",
      });
    }
    next();
  } catch (error) {
    resp.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const validateAdminRole_MismoUser = async (req, res, next) => {
  const id = req.id;
  const idUpdate = req.params.id;
  try {
    const userDB = await User.findById(id);
    if (!userDB) {
      res.status(404).json({
        ok: false,
        msg: "User no existe",
      });
    }
    if (userDB.role === "ADMIN_ROLE" || id === idUpdate) {
      next();
    } else {
      return res.status(401).json({
        ok: false,
        msg: "No tiene los provilegios",
      });
    }
  } catch (error) {
    resp.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
  validateJWT,
  validateAdminRole,
  validateAdminRole_MismoUser,
};
