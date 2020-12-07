const mongoose = require("mongoose");

const spentSchema = new mongoose.Schema({
    category: { type: String, required: true},
    spentAmount: { type: String, required: true},
    userId: { type: String, required: true},
});

module.exports = Spent = mongoose.model("spent", spentSchema);