const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({
	// título: String,
	titulo: { type: String, required: true },
	descricao: String,
	// Número: Number,
});

// const HomeModel = mongoose.model("Home", HomeSchema);

class Home {}
module.exports = Home;

//Exemplos:
// module.exports = HomeModel;
