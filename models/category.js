const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Product = require('./product');  // Ensure the Product model is correctly imported

class Category extends Model {}

Category.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
});

Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
});

module.exports = Category;
