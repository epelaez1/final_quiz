module.exports = function (sequelize, DataTypes) {
    return sequelize.define('game',
        {
            active: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            },
            waitingUser: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            winner: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            }


        });
};