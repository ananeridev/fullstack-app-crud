const MongoClient = require('mongodb').MongoClient;

let mongoDB;

const setupDB = () => {
  const uri = 'mongodb+srv://ananeri:123@clusterfullstackapp.7qxtksc.mongodb.net/?retryWrites=true&w=majority' 

  return MongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
  );
};

const getDB = () => {
  return mongoDB;
};

module.exports = { setupDB, getDB };