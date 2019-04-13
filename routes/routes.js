var express = require('express');
var router = express.Router();

var UserController = require('../controllers/UserController.js');
var AlertController = require('../controllers/AlertController.js');
var MedicController = require('../controllers/MedicController.js');

// Get the index page
router.get('/', function(req, res, next) {
  res.send("Saint server is running");
});

// ========================================================================
// Routes for USER FUNCTIONALITY
// ========================================================================
// Create user
router.post('/users', UserController.createUser);
// Edit user
router.put('/users/:id', UserController.editUser);
// Get all users
router.get('/users/all',UserController.findAllUsers);
// Validate a user ID
router.get('/users/checkID/:id', UserController.validateUserID);
// Login and send user if ID and password is correct
router.post('/users/login/:id', UserController.loginUser);
// get a user data
router.get('/users/get/:id',UserController.getUserData);
// Delete a user
router.delete('/users/:id', UserController.deleteUser);



// ========================================================================
// Routes for MEDIC FUNCTIONALITY
// ========================================================================
// Create medic
router.post('/medics', MedicController.createMedic);
// Edit medic
router.put('/medics/:id', MedicController.editMedic);
// Get all medic
router.get('/medics/all', MedicController.findAllMedics);
// Validate a medic ID
router.get('/medics/checkID/:id', MedicController.validateMedicID);
// Login and send medic if ID and password is correct
router.post('/medics/login/:id', MedicController.loginMedic);
// get a user medic
router.get('/medics/get/:id',MedicController.getMedicData);
// Delete a medic
router.delete('/medics/:id', MedicController.deleteMedic);

// ========================================================================
// Routes for ALERT FUNCTIONALITY
// ========================================================================
// Create alert
router.post('/alerts', AlertController.createAlert);
// Get all alerts
router.get('/alerts/all', AlertController.getAllAlerts);



module.exports = router;
