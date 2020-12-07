const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
    category: { type: String, required: true},
    plannedAmount: { type: String, required: true},
    userId: { type: String, required: true},
});

module.exports = Plan = mongoose.model("plan", planSchema);