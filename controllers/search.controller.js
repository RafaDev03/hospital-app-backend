const { response, request } = require("express");
const User = require("../models/user.model");
const Doctor = require("../models/doctor.model");
const Hospital = require("../models/hospital.model");
const searchItems = async (request, response) => {
  try {
    const item = request.params.item;
    const regex = new RegExp(item, "i");
    const [users, doctors, hospitals] = await Promise.all([
      User.find({ name: regex }),
      Doctor.find({ name: regex }),
      Hospital.find({ name: regex }),
    ]);
    response.json({
      ok: true,
      msg: "Busqueda realizada correctamente",
      users,
      doctors,
      hospitals,
    });
  } catch (error) {
    response.status(500).json({
      ok: false,
      msg: error.message,
    });
  }
};

const searchDocumentsCollection = async (request, response) => {
  const table = request.params.table;
  const search = request.params.search;
  const regex = new RegExp(search, "i");
  let data = [];
  switch (table) {
    case "doctors":
      data = await Doctor.find({ name: regex })
        .populate("user", "name img")
        .populate("hospital", "name img");
      break;
    case "hospitals":
      data = await Hospital.find({ name: regex }).populate("user", "name img");

      break;
    case "users":
      data = await User.find({ name: regex });
      break;
    default:
      return response.status(400).json({
        ok: false,
        msg: "La table tiene que se users, doctors o hospitals",
      });
  }
  response.json({
    ok: true,
    data,
  });
};

module.exports = {
  searchItems,
  searchDocumentsCollection,
};
