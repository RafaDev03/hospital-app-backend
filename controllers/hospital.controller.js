const { request } = require("http");
const Hospital = require("../models/hospital.model");
const { response } = require("express");
const hospitalModel = require("../models/hospital.model");

const getHospitals = async (request, response) => {
  const hospitals = await Hospital.find().populate("user", "name");
  response.json({
    ok: true,
    hospitals,
  });
};

const postHospitals = async (request, response) => {
  const idUser = request.id;
  const hospital = new Hospital({ user: idUser, ...request.body });
  console.log(idUser);
  try {
    await hospital.save();
    response.json({
      ok: true,
      msg: "Creado con exito",
      hospital,
    });
  } catch (error) {
    response.json({
      ok: false,
      msg: "Hablar con el admin",
    });
  }
};

const updateHospitals = async (request, response) => {
  response.json({
    ok: true,
    id: request.params.id,
    msg: "updateHospitals",
  });
};

const deleteHospitals = async (request, response) => {
  response.json({
    ok: true,
    id: request.params.id,
    msg: "deleteHospitals",
  });
};
module.exports = {
  getHospitals,
  postHospitals,
  updateHospitals,
  deleteHospitals,
};
