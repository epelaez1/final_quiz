module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'topics',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true
                },
                topic: {
                    type: Sequelize.STRING,
                    validate: {notEmpty: {msg: "Topic must not be empty."}}
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
        return queryInterface.dropTable('topics');
    }
};
