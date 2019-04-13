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
router.post('/user', UserController.createUser);
// Edit user
router.put('/user/:id', UserController.editUser);
// Get all users
router.get('/user/all',UserController.findAllUsers);
// Validate a user ID
router.get('/user/checkID/:id', UserController.validateUserID);
// Login and send user if ID and password is correct
router.post('/user/login/:id', UserController.loginUser);
// get a user data
router.get('/user/get/:id',UserController.getUserData);
// Delete a user
router.delete('/user/:id', UserController.deleteUser);



module.exports = router;
