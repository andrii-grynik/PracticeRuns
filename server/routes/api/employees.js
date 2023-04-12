const express = require("express");
const router = express.Router();
const path = require("path");
const employeesController = require('../../controllers/employeesController');


router
  .route("/")
  .get(employeesController.getAllEmployees)
  .post(employeesController.createNewEmployee)
  .put(employeesController.updateEmployee)
  .delete(employeesController.deleteEmployee);

router
  .route('/:id')
  .get(employeesController.getEmployee);  

module.exports = router;


//you can protect individial route by adding verifyJWT to a route
//.get(verifyJWT, employeesController.getAllEmployees)
//will need to import this for specific route check
//const verifyJWT = require('../../middleware/verifyJWT');