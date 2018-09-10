const companies = require('../../companies.json');

const Controller = {
    index: (request, response) => {
        response
        .status(200)
        .json({
            companies
        });
    },


    //Petición GET
    id: (request, response) => {
        const theCompany = companies.data.filter(item => {
            return item.id === parseInt(request.params.id);
        });
        if(theCompany.length){
            response
              .status(200)
              .json({
                data: theCompany[0]
              })
        } else {
        response
            .json({
                message: 'Not Company Found'
            })
        } 
    },


    //POST
    create: (request, response) => {
        response
        .json({
            type: 'POST /companies',
            data: request.body
        })
    }
}



module.exports = Controller;