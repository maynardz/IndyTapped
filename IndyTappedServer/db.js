var Sequelize = require('sequelize');
// console.log(typeof process.env.DATABASE_URL)

var seq = new Sequelize('indytapped', 'postgres', 'ZnM081417', {
	dialect: 'postgres',
	port: 5432
});


seq.authenticate().then(
	function(){
		console.log("you're connected to the pg database")
	},
	function(err){
		console.log(err)
	}
);

var User = seq.import('./models/user');
var Breweries = seq.import('./models/breweries');
var UserBreweries = seq.import('./models/userBreweries');

seq.sync()
module.exports = seq