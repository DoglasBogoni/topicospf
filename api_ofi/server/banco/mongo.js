const mongoose = require("mongoose");
const uri = "mongodb://admin:admin@localhost:27017/oficina?authSource=oficina";
mongoose.connect(uri, { } );