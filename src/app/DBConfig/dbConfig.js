const mongoose  = require("mongoose")

export async function connect(){
    try {
        mongoose.connect(process.env.MONGODB_URL)
        const connection  = mongoose.connection;
        connection.on('Connect ',()=>{
            console.log("MongoDB connected successfuly");
        })
        connection.on('error',(err)=>{
            console.log("MongoDB connection error. Please make sure MongoDB is running." + err);
            process.exit()
        })
    } catch (error) {
        console.log("Somthing went wrong");
        console.log(error);
    }
}