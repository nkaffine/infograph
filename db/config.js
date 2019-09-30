const options = {
    query: (e) => {
        console.log(e.query)
    }
}

const pgp = require('pg-promise')(options);

const setDataBase = () => {
    if(process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
        return pgp({
            database: 'infograph-db',
            port: 5432,
            host: 'localhost'
        })
    }
    else if (process.env.NODE_ENV === 'production') {
        return pgp(process.env.DATABSE_URL)
    }
}

const db = setDataBase();
module.exports = db;