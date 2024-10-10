const { db, DataTypes, Model } = require("../db/config"); 

// Define the Deck model
class Attack extends Model {}

// Initialize the User model
Attack.init({
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
 
}, {
    sequelize: db,
    modelName: "Attack"
});



// Export the User model
module.exports = Attack;
