var mongoose = require('mongoose');

// Import user schema
var Alerts = mongoose.model('alerts');

// =============================================
// USER FUNCTIONS
// =============================================

// FUNCTION TO CREATE ALERT
var createAlert = function(req,res) {
    var newAlert = new Alerts(
        {
            "id":req.body.username, // WE GETTING USERNAME BECAUSE FRONTEND SENDS USERNAME
            "password":req.body.password,
            "email":req.body.email,
            "fname":req.body.fname,
            "lname":req.body.lname,
            "photo": req.body.photo,
        }
    );

    newAlert.save(function (err, createdAlert){
        if (!err){
            res.send(createdAlert);
        }
        else {
            console.log(err)
            res.send(err);
        }
    });
}


var getAllAlerts = function(req,res) {
    Alerts.find(function(err, allMedics){
        if(!err){
            res.send(allMedics);
        } else {
            res.sendStatus(404);
        }
    });
}

module.exports.createAlert = createAlert;
module.exports.getAllAlerts = getAllAlerts;