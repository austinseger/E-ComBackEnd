const Category = require('./category');
const Product = require('./product');
const Tag = require('./tag');

Product.belongsTo(Category, { foreignKey: 'category_id' });

module.exports = { Category, Product, Tag };
