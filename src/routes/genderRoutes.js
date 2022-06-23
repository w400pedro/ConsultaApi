const { Router } = require('express');
const { GenderController } = require('../controllers/genderControllers');

const genderController = new GenderController();

const routes = Router();

routes.post('/getGender', genderController.getGender);

module.exports = routes;