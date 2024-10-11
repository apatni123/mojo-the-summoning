const { db, DataTypes } = require("../db/config");

// Define the Card model using .define
const Card = db.define("Card", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Set primary key 
        autoIncrement: true // Automatically increment the id
    },
    name: {
        type: DataTypes.STRING,
    },
    mojo: {
        type: DataTypes.INTEGER,
    },
    stamina: {
        type: DataTypes.INTEGER,
    },
    imgURL: {
        type: DataTypes.STRING,
    },
});

// Export the Card model
module.exports = Card;
