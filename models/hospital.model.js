const { Schema, model } = require("mongoose");
const HospitalSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  img: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
HospitalSchema.method("toJSON", function () {
  const { __V, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model("Hospital", HospitalSchema);
