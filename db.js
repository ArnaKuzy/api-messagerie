// Connexion à mongoDB
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'digitalcampus';

let db = null;
try {
  // Use connect method to connect to the server
  client.connect();
  console.log('Connected successfully to server');
}
catch (err)
{
  console.error(err)
}

db = client.db(dbName);

module.exports = db