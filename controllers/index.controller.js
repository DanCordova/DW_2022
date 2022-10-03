const path = require('path');


exports.get_index = (request, response, next) => {
    response.render(path.join('index','index.ejs')); 
};

