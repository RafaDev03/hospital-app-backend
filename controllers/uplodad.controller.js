const { request, response } = require("express");
const path = require("path");
const fs = require("fs");
const { updateImage } = require("../helpers/update-image");
const { v4: uuidv4 } = require("uuid");
const filesUpload = async (request, response) => {
  const tipo = request.params.tipo;
  const id = request.params.id;
  //Validar el tipo
  const tiposValidos = ["hospitals", "doctors", "users"];
  if (!tiposValidos.includes(tipo)) {
    return response.status(400).json({
      ok: false,
      msg: "El tipo no es valido",
    });
  }
  //Validar que exista un archivo
  if (!request.files || Object.keys(request.files).length === 0) {
    return response.status(400).json({
      ok: false,
      msg: "No hay archivos que subir",
    });
  }

  //Procesar la imagen
  const file = request.files.image;
  const nombreCortado = file.name.split(".");
  const extensionArchivo = nombreCortado[nombreCortado.length - 1];

  //validar extencion
  const extensionesValidas = ["png", "jpg", "jpeg", "gif"];
  if (!extensionesValidas.includes(extensionArchivo)) {
    response.status(400).json({
      ok: false,
      msg: "No es una extension permitida",
    });
  }

  //Generar el nombre del archivo
  const fileName = `${uuidv4()}.${extensionArchivo}`;

  //Path para guardar la imagen
  const uploadPath = `./uploads/${tipo}/${fileName}`;
  // Use the mv() method to place the file somewhere on your server
  file.mv(uploadPath, function (err) {
    if (err) {
      console.log(err);
      return response.status(500).json({
        ok: false,
        msg: "Error al mover la imagen",
      });
    }

    //Actualizar base de datoss
    updateImage(tipo, id, fileName);

    response.json({
      ok: true,
      msg: "Archivo subido correctamente",
      fileName,
    });
  });
};

const returnImg = async (request, response) => {
  var pathImg;
  const tipo = request.params.tipo;
  const img = request.params.img;
  pathImg = path.join(__dirname, `../uploads/${tipo}/${img}`);
  if (fs.existsSync(pathImg)) {
    response.sendFile(pathImg);
  } else {
    pathImg = path.join(__dirname, `../uploads/no-img.jpg`);
    response.sendFile(pathImg);
  }
};

module.exports = {
  filesUpload,
  returnImg,
};
