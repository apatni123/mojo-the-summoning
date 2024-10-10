const { db, DataTypes, Model } = require("../db/config"); 

// Define the Deck model
class Card extends Model {}

// Initialize the User model
Card.init({
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
}, {
    sequelize: db,
    modelName: "Card"
});



// Export the User model
module.exports = Card;
