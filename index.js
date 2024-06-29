// Carga las variables de entorno desde un archivo .env
require("dotenv").config();

const path = require("path");

// Importa el framework Express para crear el servidor
const express = require("express");

// Importa el middleware 'cors' para habilitar el intercambio de recursos entre diferentes dominios
const cors = require("cors");

// Importa la función 'dbConnection' del archivo './database/config' para establecer la conexión a la base de datos
const { dbConnection } = require("./database/config");

// Inicializa la aplicación Express
const app = express();

// Habilita el middleware CORS para permitir solicitudes desde diferentes dominios
app.use(cors());

//Lectura y parseo del body
app.use(express.json());

//Bser de datos
dbConnection();

//Directorio Publico
app.use(express.static("public"));

//Rutas
app.use("/api/users", require("./routes/users.routes"));
app.use("/api/login", require("./routes/auth.routes"));
app.use("/api/hospitals", require("./routes/hospitals.routes"));
app.use("/api/doctors", require("./routes/doctors.routes"));
app.use("/api/search", require("./routes/search.routes"));
app.use("/api/uploads", require("./routes/uploads.routes"));

//Lo último
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

app.listen(process.env.PORT, () =>
  console.log("Server on port ", process.env.PORT || 3000)
);
