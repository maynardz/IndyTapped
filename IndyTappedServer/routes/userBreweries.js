var router = require('express').Router();
var sequelize = require('../db.js');
var User = sequelize.import('../models/user.js');
var userBreweries = sequelize.import('../models/userBreweries.js');

router.post('/', (req, res) => {
    var user = req.user
    var brewery = req.body.userbreweries.brewery

    userBreweries.create({
        owner: user.id,
        brewery: brewery,
        rating: 0
    }).then(
        function createSuccess(userBreweries) {
            res.json({
                brewery: brewery,
                message: "You added a brewery!"
            })
        }, 
        function createError(err) {
            res.send(500, err.message)
        }
    )
})

router.get('/', (req, res) => {
    var userid = req.user.id;

    userBreweries.findAll({where: {owner: userid}}).then(
        function findAllSuccess(data) {
            res.json(data)
        },
        function findAllError(err) {
            res.send(500, err.message)
        }
    )
})

router.delete('/:id', (req, res) => {
    var dataID = req.params.id;

    userBreweries.destroy({where: {id: dataID}}).then(
        function deleteUserBreweriesSuccess(data) {
            res.send("You removed a brewery!");
        },
        function deleteUserBreweryError(err) {
            res.send(500, err.message)
        }
    )
})

router.put('/:id', (req, res) => {
    var user = req.user
    var data = req.params.id
    var brewery = req.body.userbreweries.brewery

    userBreweries.update({
        brewery: brewery
    }, {where: {id: data}}).then(
        function updateSuccess(updateData) {
            res.json(updateData)
        }, 
        function updateError(err) {
            res.send(500, err.message)
        }
    )
})

module.exports = router;

