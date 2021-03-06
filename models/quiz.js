
// Definition of the Quiz model:

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('quiz',
        {
            question: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Question must not be empty"}}
            },
            answer: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Answer must not be empty"}}
            },
            active: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            topicId: {
                type: DataTypes.INTEGER,
                validate: {notEmpty: {msg: "You must select a topic for the question"}}
            },
            accepted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            timesWrong: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            timesRight: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            }


        });
};
