const Category = require('../model/category');
const {validationResult} = require('express-validator');

const categoryController = {};

categoryController.findAll = (req, res) => {
    Category.findAll()
        .then(categories => {
            res.json({
                message: 'Success',
                data: categories
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({err});
        });
};

categoryController.findById = (req, res) => {
    Category.findById(req.params.id)
        .then(quote => {
            res.json({
                message: "Success",
                data: quote
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({err});
        });
};

categoryController.createCategory = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(422).json({ errors: errors.array() });
    }
    Category.createCategory(req.body.category)
        .then(_ => {
            res.json({
                message: "Success"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({err});
        });
};

module.exports = categoryController;