const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    },
    { timestamps: true } // Adiciona campos de data automaticamente
);

module.exports = mongoose.model("User", UserSchema);
