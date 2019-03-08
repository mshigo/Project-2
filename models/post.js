module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      
      User: {
        type: DataTypes.TEXT,
        allowNull: false,
        
        
      },
      PetName: {
        type: DataTypes.TEXT,
        allowNull: false,
        
      },
      Breeds: {
        type: DataTypes.TEXT,
        allowNull: false,
        
      },
      Location: {
        type: DataTypes.TEXT,
        allowNull: false,
        
      },
      Date: {
        type: DataTypes.STRING,
        allowNull: false,
       
        
      },
      Time: {
        type: DataTypes.STRING,
        allowNull: false,
        
        
      }
     
    });
  
    return Post;
  };