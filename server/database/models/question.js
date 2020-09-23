'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Question extends Model {
        static associate(models) {
            Question.hasMany(models.Option, { foreignKey: 'question_id', as: 'options', onDelete: 'CASCADE' });
        }
    };

    Question.init({
        text: DataTypes.STRING,
    }, {
        sequelize,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'questions',
    });

    return Question;
};
