module.exports = function(sequelize, DataTypes) {
    var UserBreweries = sequelize.define('userbreweries', {
        owner: DataTypes.INTEGER,
        brewery: DataTypes.STRING,
        rating: DataTypes.INTEGER
    })
    return UserBreweries;
}

