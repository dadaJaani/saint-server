var mongoose = require('mongoose');

// Import user schema
var Medics = mongoose.model('medics');

// =============================================
// MEDIC FUNCTIONS
// =============================================

// FUNCTION TO CREATE USER
var createMedic = function(req, res){
    var newMedic = new Medics(
        {
            "id":req.body.username, // WE GETTING USERNAME BECAUSE FRONTEND SENDS USERNAME
            "password":req.body.password,
            "email":req.body.email,
            "fname":req.body.fname,
            "lname":req.body.lname,
            "photo": req.body.photo,
        }
    );

    newMedic.save(function (err, createdUser){
        if (!err){
            res.send(createdUser);
        }
        else {
            console.log(err)
            res.send(err);
        }
    });
};

// FUNCTION TO EDIT USER
var editMedic = function(req, res){
    var medicID = req.params.id;

    var medicUpdate = {
        "password":req.body.password,
        "email":req.body.email,
        "fname":req.body.fname,
        "lname":req.body.lname,
        "photo": req.body.photo,
    };

    Medics.updateOne({ id: medicID }, medicUpdate, function(err, updatedMedic) {
        if (!err){
            res.send(updatedMedic);
        }
        else {
            res.send(err);
        }
    });
};

// FUNCTION TO GET ALL USER
var findAllMedics = function(req,res){

    Medics.find(function(err, allMedics){
        if(!err){
            res.send(allMedics);
        } else {
            res.sendStatus(404);
        }
    });
};

// FUNCTION TO SEARCH A USER
var getMedicData = function(req, res){
    var medicID = req.params.id;
    Medics.find({id:medicID},function(err,searchedUser){
        if(!err){
            res.send(searchedUser);
        }else{
            res.sendStatus(404);
        }
    });
};

// FUNCTION TO DELETE USER
var deleteMedic = function(req, res){
    var medicID = req.params.id;

    Medics.deleteOne({ id: medicID } ,function(err){
        if(!err){
            res.send(medicID);
        }else{
            res.sendStatus(404);
        }
    });

};

// FUNCTION TO GET CHECK IF USER ID EXISTS
var validateMedicID = function (req, res){
    var medicID = req.params.id;

    Medics.findOne({ id: medicID }, function(err, theUser){
        if (theUser)
            res.send(true)
        else
            res.send(false)
    });
};

// FUNCTION TO LOGIN WHEN USER SIGNS IN
var loginMedic = function (req, res){
    var medicID = req.params.id;

    var loginAttempt = {
        "id":       req.body.username,
        "password": req.body.password,
    };

    Medics.findOne({ id: loginAttempt.id, password: loginAttempt.password }, function(err, theMedic){
        if (theUser)
            res.send(theMedic);
        else
            res.send(false);
    });
};


module.exports.createMedic     = createMedic;
module.exports.editMedic       = editMedic;
module.exports.findAllMedics   = findAllMedics;
module.exports.getMedicData    = getMedicData;
module.exports.deleteMedic     = deleteMedic;
module.exports.validateMedicID = validateMedicID;
module.exports.loginMedic      = loginMedic;