require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./database/config");
//crear el servidor de expres
const app = express();

//Configurar cors
app.use(cors());

//Lectura y parseo del body
app.use(express.json());

//Bser de datos
dbConnection();

//Rutas
app.use("/api/users", require("./routes/users.routes"));
app.use("/api/login", require("./routes/auth.routes"));
app.listen(process.env.PORT, () =>
  console.log("Server on port ", process.env.PORT)
);
