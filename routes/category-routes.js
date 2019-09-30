const express = require('express');
const categoryRouter = express.Router();
const {body} = require('express-validator');

const categoryController = require('../controller/category-controller');

categoryRouter.get('/', categoryController.findAll);

categoryRouter.get('/:id', categoryController.findById);

categoryRouter.post('/create', [body('category', 'invalid category').exists().isAlphanumeric()],
    categoryController.createCategory);

module.exports = categoryRouter;