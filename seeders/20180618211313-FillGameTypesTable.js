'use strict';

module.exports = {
    up(queryInterface, Sequelize) {

        return queryInterface.bulkInsert('gameTypes', [
            {
                id: 1,
                type: '5 Questions',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 2,
                type: '10 Questions',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 3,
                type: '10 Question VS Random User',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down(queryInterface, Sequelize) {

        return queryInterface.bulkDelete('gameTypes', null, {});
    }
};
