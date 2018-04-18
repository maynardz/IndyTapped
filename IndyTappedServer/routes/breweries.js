var router = require('express').Router();
var sequelize = require('../db.js');
var User = sequelize.import('../models/user.js');
var Breweries = sequelize.import('../models/breweries.js');

router.get('/', (req, res) => {
    Breweries.findAll().then(
        function findAllSuccess(data) {
            res.json(data);
        },
        function findAllError(err) {
            res.send(500, err.message)
        }
    ) 
})

module.exports = router;