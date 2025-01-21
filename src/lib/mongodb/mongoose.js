import mongoose from "mongoose";
let initialized = false;
export const connect = async () => {
    mongoose.set("strictQuery", true);
    if (initialized) {
        console.log("MongoDB already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "NextJS-Movie-App",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        initialized = true;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("MongoDB error: ", error);
    }
};
