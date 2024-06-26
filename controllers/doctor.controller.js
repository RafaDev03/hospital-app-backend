const { request, response } = require("express");
const Doctor = require("../models/doctor.model");
const getDoctors = async (request, response) => {
  const doctors = await Doctor.find()
    .populate("user", "name img")
    .populate("hospital", "name img");
  try {
    response.json({
      ok: true,
      msg: "List of doctors",
      doctors,
    });
  } catch (erorr) {
    response.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const getDoctor = async (request, resp) => {
  const id = request.params.id;
  try {
    const doctor = await Doctor.findById(id)
      .populate("user", "name img")
      .populate("hospital", "name img");
    return resp.json({
      ok: true,
      doctor,
    });
  } catch (error) {
    return resp.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const postDoctors = async (request, response) => {
  const idUser = request.id;
  const doctor = new Doctor({ user: idUser, ...request.body });
  console.log("idUser", idUser);
  try {
    await doctor.save();
    response.json({
      ok: true,
      msg: "Doctor creado con exito",
      doctor,
    });
  } catch (error) {
    response.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const updateDoctors = async (request, response) => {
  const id = request.params.id;
  const userId = request.id;
  try {
    const doctorDB = await Doctor.findById(id);
    if (!doctorDB) {
      return response.status(404).json({
        ok: false,
        msg: "El doctor no fue encontrado",
      });
    }

    const cambiosDoctors = {
      ...request.body,
      user: userId,
    };

    const doctorUpdate = await Doctor.findByIdAndUpdate(id, cambiosDoctors, {
      new: true,
    });

    return response.json({
      ok: true,
      msg: "updateDoctros",
      doctorUpdate,
    });
  } catch (error) {
    return response.status(500).json({
      ok: false,
      error: error.message,
    });
  }
};

const deleteDoctors = async (request, response) => {
  const id = request.params.id;
  const userId = request.id;

  try {
    const doctorDB = await Doctor.findById(id);
    if (!doctorDB) {
      return response.status(404).json({
        ok: false,
        msg: "El doctor no se encontro",
      });
    }

    await Doctor.findByIdAndDelete(id);
    response.json({
      ok: true,
      msg: `El doctor : ${doctorDB.name} se elimino correctamente`,
    });
  } catch (error) {
    response.status(500).json({
      ok: false,
      error: error.message,
    });
  }
};

module.exports = {
  getDoctors,
  getDoctor,
  postDoctors,
  updateDoctors,
  deleteDoctors,
};
