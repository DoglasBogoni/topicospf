const mongoose = require("mongoose");
const VeiculoSchema = new mongoose.Schema({
    modelo: { type: String, required: true },
    cliente: { type: String, required: true, unique: true },
    ano: String,
});
module.exports = mongoose.model("Veiculo", VeiculoSchema);