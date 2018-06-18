'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'gameSteps',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true
                },
                answer: {
                    type: Sequelize.STRING,
                    validate: {notEmpty: {msg: "Answer must not be empty."}}
                },
                isCorrect: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false
                },
                pending: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false
                },
                userId: {
                    type: Sequelize.INTEGER
                },
                quizId: {
                    type: Sequelize.INTEGER
                },
                gameId: {
                    type: Sequelize.INTEGER
                },
                createdAt: {
                    type: Sequelize.DATE,
                    allowNull: false
                },
                updatedAt: {
                    type: Sequelize.DATE,
                    allowNull: false
                }
            },
            {
                sync: {force: true}
            }
        );
    },
    down(queryInterface, Sequelize) {
        return queryInterface.dropTable('gameSteps');
    }
};
