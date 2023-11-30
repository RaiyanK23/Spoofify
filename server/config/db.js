const mysql = require('mysql2');
const config = require('config');
const dbConfig = config.get("database");

const db = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.databaseName
  });

  db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
  });
  
  module.exports = db;