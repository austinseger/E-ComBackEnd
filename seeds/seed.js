const sequelize = require('../config/connection');
const { Category, Product, Tag } = require('../models');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Category.bulkCreate([
        { category_name: 'Electronics' },
        { category_name: 'Accessories' },
    ]);

    await Product.bulkCreate([
        { product_name: 'Laptop', price: 1000, stock: 30, category_id: 1 },
        { product_name: 'Headphones', price: 150, stock: 50, category_id: 2 },
    ]);

    await Tag.bulkCreate([
        { tag_name: 'New' },
        { tag_name: 'Sale' },
    ]);

    process.exit(0);
};

seedDatabase();
