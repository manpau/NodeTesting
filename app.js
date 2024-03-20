require('dotenv').config();
const PORT = process.env.PORT;

const express = require('express');
const app = express();

const randomName = require('./handlers/randomNames')
const db = require('./handlers/db_handler');

app.use(express.static('./public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let Name = randomName(Math.floor(Math.random()*2));
    console.log(Name);
    res.render('index', {name: Name});
});

app.get('/data', (req, res) => {
    res.write(JSON.stringify(db.readData()));
});

const miscRouter = require('./routes/misc');
app.use('/misc', miscRouter);

const userRouter = require('./routes/users');
app.use('/users', userRouter);

app.listen(PORT);