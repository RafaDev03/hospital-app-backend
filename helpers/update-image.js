const fs = require("fs");
const User = require("../models/user.model");
const Doctor = require("../models/doctor.model");
const Hospital = require("../models/hospital.model");

const deleteImage = (path) => {
  console.log("Deleting image at path:", path);
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
    console.log("Image deleted successfully.");
  } else {
    console.log("Image does not exist at path:", path);
  }
};
const updateImage = async (tipo, id, fileName) => {
  let pathViejo = "";
  switch (tipo) {
    case "users":
      const user = await User.findById(id);
      if (!user) {
        console.log("El usuario no existe");
        return false;
      }
      pathViejo = "./uploads/users/" + user.img;
      deleteImage(pathViejo);
      user.img = fileName;
      await user.save();
      return true;
      break;
    case "doctors":
      const doctor = await Doctor.findById(id);
      if (!doctor) {
        console.log("El doctor no existe");
        return false;
      }
      pathViejo = "./uploads/doctors/" + doctor.img;
      deleteImage(pathViejo);
      doctor.img = fileName;
      await doctor.save();
      return true;
      break;
    case "hospitals":
      const hospital = await Hospital.findById(id);
      if (!hospital) {
        console.log("El hospital no existe");
        return false;
      }
      pathViejo = "./uploads/hospitals/" + hospital.img;
      deleteImage(pathViejo);
      hospital.img = fileName;
      await hospital.save();
      return true;
      break;
  }
};

module.exports = {
  updateImage,
};
