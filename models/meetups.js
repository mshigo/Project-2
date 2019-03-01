module.exports = function (sequelize, DataTypes) {
    var Meeting = sequelize.define("Meeting", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        place: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        maxNumOfPeople: {
            type: DataTypes.INTEGER
        
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        Coordinator: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
            Date: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            category: {
                type: DataTypes.STRING,
                defaultValue: "Personal"
              }
           });
    return Meeting;
};

