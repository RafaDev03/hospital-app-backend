const jwt = require("jsonwebtoken");
const generateJWToken = (id) => {
  return new Promise((resolve, reject) => {
    const payload = {
      id,
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "12h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("No se pudo generar el token");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  generateJWToken,
};
