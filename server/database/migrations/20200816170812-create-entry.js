'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('entries', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.DataTypes.INTEGER
            },
            name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.DataTypes.STRING
            },
            phone_number: {
                type: Sequelize.DataTypes.STRING
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DataTypes.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DataTypes.DATE
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('entries');
    }
};