import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected){
        console.log('db alr connected');
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'Prompty-db',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected = true;
    } catch(e){
        console.log(e)
    }
}