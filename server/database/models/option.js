'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Option extends Model {
        static associate(models) {
            Option.belongsTo(models.Question, { foreignKey: 'question_id', as: 'options', onDelete: 'CASCADE' });
        }
    };

    Option.init({
        text: DataTypes.STRING,
        isCorrect: {
            field: 'is_correct',
            type: DataTypes.BOOLEAN,
        },
        questionId: {
            field: 'question_id',
            type: DataTypes.INTEGER,
        }
    }, {
        sequelize,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'options',
    });

    return Option;
};
