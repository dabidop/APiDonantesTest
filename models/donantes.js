const { Schema, model } = require("mongoose");

const DonantesSchema = {
  id_Donante: {
    type: Number,
    unique: true,
    required: true,
  },
  nombre_Donante: {
    type: String,
    required: [true, "El nombre es requerido"],
  },
  direccion_Donante: {
    type: String,
    required: [true, "La dirección es requerida"],
  },
  telefono_Donante: {
    type: String,
    required: [true, "El teléfono es requerido"],
  },
  email_Donante: {
    type: String,
    required: [true, "El email es requerido"],
  },
  tipo_Donante: {
    type: String,
    required: [true, "El tipo de donante es requerido"],
  },
  documento_Identidad: {
    type: String,
    required: [true, "El documento de identidad es requerido"],
  },
  fecha_Registro: {
    type: String,
    required: false,
  },
  entidad_Asociada: {
    type: String,
    required: false
  },
  test1: {
    type: String,
    required: false
  }
};

module.exports = model("donantes", DonantesSchema);
