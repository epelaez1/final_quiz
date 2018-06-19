'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'quizzes',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true
                },
                question: {
                    type: Sequelize.STRING,
                    validate: {notEmpty: {msg: "Question must not be empty."}}
                },
                authorId: {
                    type: Sequelize.INTEGER
                },
                topicId: {
                    type: Sequelize.INTEGER,
                    allowNull: false
                },
                answer: {
                    type: Sequelize.STRING,
                    validate: {notEmpty: {msg: "Answer must not be empty."}}
                },
                createdAt: {
                    type: Sequelize.DATE,
                    allowNull: false
                },
                updatedAt: {
                    type: Sequelize.DATE,
                    allowNull: false
                },
                active: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false
                },
                accepted: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false
                },
                timesWrong: {
                    type: Sequelize.INTEGER,
                    defaultValue: 0
                },
                timesRight: {
                    type: Sequelize.INTEGER,
                    defaultValue: 0
                }
            },
            {
                sync: {force: true}
            }
        );
    },
    down(queryInterface, Sequelize) {
        return queryInterface.dropTable('quizzes');
    }
};
