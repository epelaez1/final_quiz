'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'game',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true
                },
                active: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false
                },
                waitingUser: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false
                },
                winner: {
                    type: Sequelize.INTEGER
                },
                gameTypeId: {
                    type: Sequelize.INTEGER
                },
                topicId: {
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
        return queryInterface.dropTable('game');
    }
};
