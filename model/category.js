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

module.exports = Category;