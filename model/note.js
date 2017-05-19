const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
	userId: String,
	name: String,
	text: String,
	createdAt: { type: Date, default: Date.now }
});

const noteModel = mongoose.model('Note', noteSchema);

module.exports = noteModel;

