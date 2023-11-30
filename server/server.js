const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors())

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "raiyan",
        password: "Raiyan23",
        database: "test_db1"
    }
)

db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
  });
  

app.get('/', (req, res) => 
{
    return res.json("From Backend");
})

app.get('/users', (req, res) =>
{
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data) =>
    {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(5000, () => console.log('Server started on port 5000'));