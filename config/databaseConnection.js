const MongoClient = require('mongodb').MongoClient;

let mongoDB;

const setupDB = async() => {
  const uri = 'mongodb+srv://ananeri:123@clusterfullstackapp.7qxtksc.mongodb.net/?retryWrites=true&w=majority' 

  mongoDB = await MongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
  )

};

const getDB = () => {
   return mongoDB.db("dbTest")
};

module.exports = { setupDB, getDB };