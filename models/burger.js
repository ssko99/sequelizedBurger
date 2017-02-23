module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1]
                }
            }
        },
        devour: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Burger;
};
