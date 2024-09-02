const router = require('express').Router();
const { Category, Product } = require('../../models');

// GET all categories
router.get('/', async (req, res) => {
    try {
        const categories = await Category.findAll({
            include: [{ model: Product }],  // Include Product model
        });
        res.status(200).json(categories);
    } catch (err) {
        console.error('Error fetching categories:', err);
        res.status(500).json({ error: 'An error occurred while fetching categories' });
    }
});

// GET a single category by ID
router.get('/:id', async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id, {
            include: [{ model: Product }],
        });

        if (!category) {
            res.status(404).json({ message: 'No category found with that id!' });
            return;
        }

        res.status(200).json(category);
    } catch (err) {
        console.error('Error fetching category:', err);
        res.status(500).json({ error: 'An error occurred while fetching category' });
    }
});

module.exports = router;
