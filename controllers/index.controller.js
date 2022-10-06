const path = require('path');
const Propiedad = require('../models/index.model');



exports.get_index = (request, response, next) => {

    Propiedad.fetchAll()
        .then( ([rows, fieldData]) => {
            console.log(rows);
            response.render(path.join('index', 'index.ejs'), {
                propiedad: rows,
            }); 
            

        }).catch( (error) => {
            console.log(error);
        });

};

