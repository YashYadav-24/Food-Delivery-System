import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
export const connectDB = async () => {
    try {
        const uri=process.env.MONGO_URI;
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error: ", error);
        process.exit(1);
    }
};
