const { db, DataTypes } = require("../db/config");

// Define the Attack model using .define
const Attack = db.define("Attack", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Set primary key 
        autoIncrement: true // Automatically increment the id
    },
    title: {
        type: DataTypes.STRING,
    },
    mojoCost: {
        type: DataTypes.INTEGER,
    },
    staminaCost: {
        type: DataTypes.INTEGER,
    },
});

// Export the Attack model
module.exports = Attack;
