import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        const connection = await mongoose.connect('mongodb+srv://tanwar0210:MaWX3WMuY5PidZJe@nuitritionist.dbuw3gf.mongodb.net/?retryWrites=true&w=majority&appName=Nuitritionist');
        console.log(`\n MONGPDB connected!! HOST: ${connection.connection.host}`);
    } catch (error) {
        console.error("MONGODB connection error", error);
        process.exit(1)
    }
}

export default connectDB