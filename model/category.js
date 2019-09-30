const db = require('../db/config');

const Category = {};

Category.findAll = () => {
    return db.query(`SELECT * FROM categories`);
};

Category.findById = (id) => {
    return db.oneOrNone(
        `SELECT * FROM categories
        WHERE id = $1`,
        [id]
    );
};

Category.createCategory = (category) => {
    return db.none(
        `INSERT into categories(category) VALUES($1)`,
        [category]
    );
};

module.exports = Category;