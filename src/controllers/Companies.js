const companies = require('../../companies.json');

const Controller = {
    index: (require, response) => {
        response
        .status(200)
        .json({
            companies
        });
    }
}

module.exports = Controller;