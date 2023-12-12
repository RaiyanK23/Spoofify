const express = require('express');
const db = require('./config/db');
const session = require('express-session');
const cors = require('cors');

const app = express();

app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  })
);

app.use(
  cors({
    origin: 'http://localhost:3000', // Replace with your frontend's URL
    credentials: true,
  })
);


// Define routes
app.use('/api/register', require('./routes/register'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/artistAuth', require('./routes/artistAuth'));
app.use('/api/playlists', require('./routes/playlist'));
app.use('/api/logout', require('./routes/logout'));
app.use('/api/userInfo', require('./routes/userInfo'));

app.get('/', (req, res) => {
  return res.json('From Backend');
});

app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Close the MySQL connection when the server terminates
process.on('exit', () => {
  db.end();
  console.log('MySQL connection closed on server exit');
});

process.on('SIGINT', () => {
  process.exit();
});

app.listen(5000, () => console.log('Server started on port 5000'));
