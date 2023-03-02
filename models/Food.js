const {Model, DataTypes} = require('sequelize');

const sequelize = require('../config/connection');

class Food extends Model {}

Food.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        foodName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 0
        },
        caloriesPerServing: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        saturatedFat: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        transFat: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        polysaturatedFat: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        monosaturatedFat: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        cholesterol: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        sodium: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        totalCarbohydrates: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        dietaryFiber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        totalSugars: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        protein: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        vitaminD: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        iron: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        calcium: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        potassium: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'foods'
    }
);

module.exports = Food;