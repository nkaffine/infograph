const express = require('express');

const categoryRouter = express.Router();

const categoryController = require('../controller/category-controller');

categoryRouter.get('/', categoryController.findAll);

categoryRouter.get('/:id', categoryController.findById);

module.exports = categoryRouter;