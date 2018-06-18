
// Definition of the Quiz model:

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('topic',
        {
            topic: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Topic must not be empty"}}
            }

        });
};
