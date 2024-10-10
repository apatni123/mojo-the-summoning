const { db, DataTypes, Model } = require("../db/config"); 

// Define the User model
class User extends Model {}

// Initialize the User model
User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Set primary key 
        autoIncrement: true // Automatically increment the id
    },
    username: {
        type: DataTypes.STRING,
        
    },
}, {
    sequelize: db,
    modelName: "user"
});



// Export the User model
module.exports = User;
