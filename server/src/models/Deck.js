const { db, DataTypes, Model } = require("../db/config"); 

// Define the Deck model
class Deck extends Model {}

// Initialize the User model
Deck.init({
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
}, {
    sequelize: db,
    modelName: "Deck"
});



// Export the User model
module.exports = Deck;
