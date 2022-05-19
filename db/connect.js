// .env Variables MONDGODB_URI
const dotenv = require('dotenv');
dotenv.config();
//Database
const MongoClient = require('mongodb').MongoClient;
//
let _client;
let _collection;


const initDatabase = () => {
    MongoClient.connect(process.env.MONGODB_URI, (err, client) => {
        if (err) throw err;
        _client = client;
        _collection = client.db("contacts").collection("contacts");
        console.log("DB Connected Successfully")
        });
}
const getCollection = () => {
    console.log("Collection retrieved successfully")
 return _collection;
}


module.exports = {initDatabase, getCollection};