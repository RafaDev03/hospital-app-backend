require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./database/config");
//crear el servidor de expres
const app = express();

//Configurar cors
app.use(cors());

//Data base
dbConnection();

//Rutas
app.get("/", (request, response) => {
  response.json({
    ok: true,
    msg: "Hello World",
  });
});

app.listen(process.env.PORT, () =>
  console.log("Server on port ", process.env.PORT)
);
