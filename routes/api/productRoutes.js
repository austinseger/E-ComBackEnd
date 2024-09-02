const router = require('express').Router();
const { Product, Category } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const products = await Product.findAll({
            include: [{ model: Category }],
        });
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id, {
            include: [{ model: Category }],
        });

        if (!product) {
            res.status(404).json({ message: 'No product found with that id!' });
            return;
        }

        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.update(req.body, {
            where: { id: req.params.id },
        });

        if (!updatedProduct) {
            res.status(404).json({ message: 'No product found with that id!' });
            return;
        }

        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const result = await Product.destroy({
            where: { id: req.params.id },
        });

        if (!result) {
            res.status(404).json({ message: 'No product found with that id!' });
            return;
        }

        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
