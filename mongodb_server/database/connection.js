const mongoose = require('mongoose')
// const DB = process.env.DATABASE;
const DB = 'mongodb+srv://hy172003:hy172003@cluster0.qfsodcf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

if (DB) {
    mongoose.connect(DB, {

    }).then(() => console.log("DataBase Connected")).catch((err) => {
        console.log("Error while connecting database", err);
    })
} else {
    console.log("Database key not present")
}