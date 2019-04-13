const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://wrehmani:acdc1234@cluster0-rxcdi.mongodb.net/test?retryWrites=true', function(err){
    if(!err){
        console.log('Connected to Saint database.');
    } else {
        console.log('Failed to connect to database.');
    }
});

require('./user.js');
require('./medic.js');
require('./alert.js');