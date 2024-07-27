import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://user12:qwerty12345@cluster0.mzjkeq8.mongodb.net/food-del', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error: ", error);
        process.exit(1);
    }
};
