const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("🔗 Conectado ao MongoDB!");
    } catch (err) {
        console.error("❌ Erro ao conectar ao MongoDB:", err);
        process.exit(1); 
    }
};

module.exports = connectDB