'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable(
            'tips',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true
                },
                quizId: {
                    type: Sequelize.INTEGER
                },
                authorId: {
                    type: Sequelize.INTEGER
                },
                text: {
                    type: Sequelize.STRING,
                    validate: {notEmpty: {msg: "Tip text must not be empty."}}
                },
                createdAt: {
                    type: Sequelize.DATE,
                    allowNull: false
                },
                updatedAt: {
                    type: Sequelize.DATE,
                    allowNull: false
                },
                accepted: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false
                },
                active: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false
                }
            },
            {
                sync: {force: true}
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('tips');
    }
};
