const db = require('../util/database');

module.exports = class Propiedad {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_id, mi_descripcion, mi_precio, mi_estado,mi_municipio,mi_colonia,mi_calle,mi_codigo_postal) {
        this.id = mi_id;
        this.descripcion = mi_descripcion;
        this.precio = mi_precio ;
        this.estado = mi_estado ; 
        this.municipio = mi_municipio ;
        this.colonia = mi_colonia;
        this.calle = mi_calle;
        this.cp = mi_codigo_postal;

    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM propiedades');
    }

}
