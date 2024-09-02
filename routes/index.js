const router = require('express').Router();
const categoryRoutes = require('./api/categoryRoutes');
const productRoutes = require('./api/productRoutes');
const tagRoutes = require('./api/tagRoutes');

router.use('/api/categories', categoryRoutes);
router.use('/api/products', productRoutes);
router.use('/api/tags', tagRoutes);

module.exports = router;
