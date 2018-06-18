'use strict';

module.exports = {
    up(queryInterface, Sequelize) {

        return queryInterface.bulkInsert('topics', [
            {
                id: 1,
                topic: 'General',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 2,
                topic: 'Capital',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 3,
                topic: 'Technology',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down(queryInterface, Sequelize) {

        return queryInterface.bulkDelete('topics', null, {});
    }
};
