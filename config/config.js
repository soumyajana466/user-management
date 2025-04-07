require('dotenv').config();
module.exports = {
    "development": {
      "username": process.env.DB_USER,
      "password": process.env.DB_PASS,
      "database": process.env.DB_NAME,
      "host": process.env.DB_HOST,
      "dialect": "postgres",
      "timezone": "+00:00"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "test",
      "host": "127.0.0.1",
      "dialect": "postgres",
      "timezone": "+00:00"
    },
    "production": {
      "username": process.env.PROD_DB_USER,
      "password": process.env.PROD_DB_PASS,
      "database": process.env.PROD_DB_NAME,
      "host": process.env.PROD_DB_HOST,
      "dialect": "postgres",
      "timezone": "+00:00"
    }
}

