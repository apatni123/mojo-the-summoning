const { db, DataTypes } = require("../db/config");

// Define the Deck model using .define
const Deck = db.define("Deck", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Set primary key 
        autoIncrement: true // Automatically increment the id
    },
    name: {
        type: DataTypes.STRING,
    },
    xp: {
        type: DataTypes.INTEGER,
    },
});

// Export the Deck model
module.exports = Deck;
