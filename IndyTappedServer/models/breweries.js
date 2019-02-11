module.exports = function(sequelize, DataTypes) {
    var Breweries = sequelize.define('breweries', {
        Brewery: DataTypes.STRING,
        Address: DataTypes.STRING,
        City: DataTypes.STRING,
        State: DataTypes.STRING,
        ZipCode: DataTypes.INTEGER,
        Phone: DataTypes.STRING
    })
    return Breweries;
}