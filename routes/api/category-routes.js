const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
//Find all categories
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

});

//Find by select id

router.get('/:id', async (req, res) => {
  try {
    const categoryId = await Category.findByPk(req.params.id);
    res.status(200).json(categoryId);
  }  catch (err) {
    res.status(500).json(err);
  }
 });

//Create a new category

router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }

});

// router.put('/:id', (req, res) => {
//   // update a category by its `id` value
// });

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No categories found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }});

module.exports = router;
