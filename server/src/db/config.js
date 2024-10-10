// add your database connection here
const path = require("path");
const { Sequelize, DataTypes, Model } = require("sequelize");

// Initialize Sequelize with SQLite
const db = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite"), // Path to your SQLite database file
});


// Export the db connection and Sequelize types
module.exports = {
    db,
    DataTypes,
    Model,
};
