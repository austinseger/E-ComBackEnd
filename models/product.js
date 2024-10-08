const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Category = require('./category');

class Product extends Model {}

Product.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
    },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'category',
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
});

Product.belongsTo(Category, {
    foreignKey: 'category_id',
});

module.exports = Product;
