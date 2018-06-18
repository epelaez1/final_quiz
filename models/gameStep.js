module.exports = function (sequelize, DataTypes) {
    return sequelize.define('gameStep',
        {
            answer: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Answer must not be empty"}}
            },
            isCorrect: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            pending: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }

        });
};
