var mongoose = require('mongoose');

// Import user schema
var Users = mongoose.model('users');

// =============================================
// USER FUNCTIONS
// =============================================
// Helper function to be used in other functions
// var assembleUser = function (req) {
//     var user = {
//         "id":req.body.username, // WE GETTING USERNAME BECAUSE FRONTEND SENDS USERNAME
//         "password":req.body.password,
//         "email":req.body.email,
//         "fname":req.body.fname,
//         "lname":req.body.lname,
//         "points":req.body.points,
//         "photo":req.body.photo,
//     };
//     return user;
// };

// FUNCTION TO CREATE USER
var createUser = function(req, res){
    var newUser = new Users(
        {
            "id":req.body.username, // WE GETTING USERNAME BECAUSE FRONTEND SENDS USERNAME
            "password":req.body.password,
            "email":req.body.email,
            "fname":req.body.fname,
            "lname":req.body.lname,
            "photo": '',
            "dob": '',
            "medicalHistory": [],
            "medicalId": '',
            "insuranceId": '',
        }
    );

    newUser.save(function (err, createdUser){
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
var editUser = function(req, res){
    var userId = req.params.id;

    var userUpdate = {
        "password":req.body.password,
        "email":req.body.email,
        "fname":req.body.fname,
        "lname":req.body.lname,
        "points":req.body.points,
        "photo":req.body.photo,
        "dob": req.body.dob,
        "medicalHistory": req.body.medicalHistory,
        "medicalId": req.body.medicalId,
        "insuranceId": req.body.insuranceId,
    };

    Users.updateOne({ id: userId }, userUpdate, function(err, updatedUser) {
        if (!err){
            res.send(updatedUser);
        }
        else {
            res.send(err);
        }
    });
};

// FUNCTION TO GET ALL USER
var findAllUsers = function(req,res){

    Users.find(function(err, allUsers){
        if(!err){
            res.send(allUsers);
        } else {
            res.sendStatus(404);
        }
    });
};

// FUNCTION TO SEARCH A USER
var getUserData = function(req, res){
    var userId = req.params.id;
    Users.find({id:userId},function(err,searchedUser){
        if(!err){
            res.send(searchedUser);
        }else{
            res.sendStatus(404);
        }
    });
};

// FUNCTION TO DELETE USER
var deleteUser = function(req, res){
    var userId = req.params.id;

    Users.deleteOne({ id: userId } ,function(err){
        if(!err){
            res.send(userId);
        }else{
            res.sendStatus(404);
        }
    });

};

// FUNCTION TO GET CHECK IF USER ID EXISTS
var validateUserID = function (req, res){
    var userID = req.params.id;

    User.findOne({ id: userID }, function(err, theUser){
        if (theUser)
            res.send(true)
        else
            res.send(false)
    });
};

// FUNCTION TO LOGIN WHEN USER SIGNS IN
var loginUser = function (req, res){
    var userID = req.params.id;

    var loginAttempt = {
        "id":       req.body.username,
        "password": req.body.password,
    };

    User.findOne({ id: loginAttempt.id, password: loginAttempt.password }, function(err, theUser){
        if (theUser)
            res.send(theUser)
        else
            res.send(false)
    });
};


module.exports.createUser         = createUser;
module.exports.editUser           = editUser;
module.exports.findAllUsers       = findAllUsers;
module.exports.getUserData        = getUserData;
module.exports.deleteUser         = deleteUser;
module.exports.validateUserID     = validateUserID;
module.exports.loginUser          = loginUser;