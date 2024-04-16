const jwt = require("jsonwebtoken");
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
    req.mensaje = "Hola";
    next();
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Token no valido",
    });
  }
};

module.exports = {
  validateJWT,
};
