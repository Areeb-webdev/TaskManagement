import { connect} from "mongoose";
import dotenv from "dotenv"; 
dotenv.config(); 
const DB_URL = process.env.DB_URL || "your-default-mongodb-url"; // Fallback URL

const connectDB = async () => { 
    try {
        await connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ MongoDB Connected Successfully!");
    } catch (err) {
        console.error("❌ MongoDB Connection Failed:", err.message);
        process.exit(1); // Exit process on failure
    }
};

export default connectDB; // ✅ Correct export syntax

