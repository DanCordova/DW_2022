const express = require('express');
const propiedadController = require('../controllers/propiedad.controller');

const router = express.Router();

router.get('/', propiedadController.get_propiedades);

router.get('/:id', propiedadController.get_one);


module.exports = router;