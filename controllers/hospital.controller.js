const { request } = require("http");
const Hospital = require("../models/hospital.model");
const { response } = require("express");

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
  const id = request.params.id;
  const userId = request.id;
  try {
    const hospitalDB = await Hospital.findById(id);
    if (!hospitalDB) {
      return response.status(404).json({
        ok: false,
        msg: "Hospital no encontrado",
      });
    }

    const cambiosHospital = {
      ...request.body,
      user: userId,
    };

    const hospitalUpdate = await Hospital.findByIdAndUpdate(
      id,
      cambiosHospital,
      {
        new: true,
      }
    );

    response.json({
      ok: true,
      msg: "updateHospitals",
      hospital: hospitalUpdate,
    });
  } catch (error) {
    response.json({
      ok: false,
      error: error.message,
    });
  }
};

const deleteHospitals = async (request, response) => {
  const id = request.params.id;
  try {
    const hospitalDB = await Hospital.findById(id);
    if (!hospitalDB) {
      response.status(404).json({
        ok: false,
        msg: "No se encontro el hospital",
      });
    }

    await Hospital.findByIdAndDelete(id);

    response.json({
      ok: true,
      msg: "deleteHospitals",
    });
  } catch (error) {
    response.status(500).json({
      ok: false,
      error: error.message,
    });
  }
};
module.exports = {
  getHospitals,
  postHospitals,
  updateHospitals,
  deleteHospitals,
};
