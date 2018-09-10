const companies = require('../../companies.json');

const Controller = {
    index: (require, response) => {
        response
        .status(200)
        .json({
            companies
        });
    },

    id: (require, response) => {
        const theCompany = companies.data.filter(item => {
            return item.id === parseInt(require.params.id);
        });
        response
        .status(200)
        .json( { theCompany });
    }
}



module.exports = Controller;