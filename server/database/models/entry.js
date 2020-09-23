'use strict';
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Entry', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phoneNumber: {
            field: 'phone_number',
            type: DataTypes.STRING,
        }
    }, {
        tableName: 'entries',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
};
