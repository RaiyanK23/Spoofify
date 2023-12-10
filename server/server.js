const express = require('express');
const db = require('./config/db')
const cors = require('cors');

const app = express();
app.use(cors())

// Define routes
app.use('/api/register', require("./routes/register"));
app.use('/api/auth', require("./routes/auth"));
app.use('/api/artistAuth', require("./routes/artistAuth"));
app.use('/api/playlists', require('./routes/playlist'));
app.use('/api/logout', require('./routes/logout'));

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