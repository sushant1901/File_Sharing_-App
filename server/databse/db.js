import mongoose from 'mongoose';


const dbConnection =async()=>{
    const DB_URL=`mongodb+srv://mishrasushant1901:sus7379hant@cluster0.f8srlpy.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(DB_URL,{useNewUrlParser:true});
        console.log('DataBase connected successfully')
    }catch(error){
        console.log("error in connection to database",error.message);
    }
}

export default dbConnection;