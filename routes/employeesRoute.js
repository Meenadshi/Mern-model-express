const express = require('express')
const router = express.Router()
const employeeModel = require('../models/employeesModel')

const {getAllEmployees, createNewEmployee, updateEmployee,getEmployeeById, deleteEmployee, getEmployee} = require('../controllers/employeesController');

router.route('/').get(getAllEmployees);

router.route('/:id').get(getEmployee,getEmployeeById).patch(getEmployee,updateEmployee).delete(getEmployee,deleteEmployee)

module.exports = router;