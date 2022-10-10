const path = require('path');
const Propiedad = require('../models/propiedad.model');


exports.get_propiedades = (request, response, next) => {

    Propiedad.fetchAll()
        .then( ([rows, fieldData]) => {

            response.render(path.join('propiedad', 'propiedad.vista.global.ejs'), {
                propiedad: rows,
            }); 

        }).catch( (error) => {
            console.log(error);
        });

};

exports.get_one = (request, response, next) => {
    
    Propiedad.fetchOne(request.params.id)
        .then( ([rows, fieldData]) => {
            console.log(rows);
            response.render(path.join('propiedad', 'propiedad.vista.individual.ejs'), {
                propiedad: rows,
            }); 

        }).catch( (error) => {
            console.log(error);
        });

};