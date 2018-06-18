module.exports = function (sequelize, DataTypes) {
    return sequelize.define('gameType',
        {
            gameType: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Game type must not be empty"}}
            }

        });
};
