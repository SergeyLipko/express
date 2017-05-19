const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

	createdAt: { type: Date, default: Date.now }
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;

