const { db, DataTypes } = require("../db/config");

// Define the User model using .define
const User = db.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Set primary key 
        autoIncrement: true // Automatically increment the id
    },
    username: {
        type: DataTypes.STRING,
    },
});

// Export the User model
module.exports = User;
