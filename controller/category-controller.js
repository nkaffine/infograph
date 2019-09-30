const Category = require('../model/category');

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

module.exports = categoryController;