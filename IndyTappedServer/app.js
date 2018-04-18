require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./db.js');

sequelize.sync();

app.use(bodyParser.json());


app.use(require('./middleware/headers'));
app.use(require('./middleware/validate-session'));

//Creating a user
app.use('/api/user', require("./routes/user"));
//Logging in a user
app.use('/api/login', require('./routes/session'));
//Saving a brewery 
app.use('/api/userbreweries', require('./routes/userBreweries'));
//Get all breweries
app.use('/api/breweries', require('./routes/breweries'));


app.listen(3000, function(){
    console.log('App is listening on 3000.');
});