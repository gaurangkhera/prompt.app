import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected){
        console.log('db alr connected');
        return;
    }
    try{
        await mongoose.connect('mongodb+srv://kheragaurang:lv7QpgTjlpbeZycx@prompty-db.vj5nlwl.mongodb.net/?retryWrites=true&w=majority', {
            dbName: 'Prompty-db',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected = true;
    } catch(e){
        console.log(e)
    }
}