var mongoose = require('mongoose');

// Making Schema for User
var alertSchema = mongoose.Schema(
    {
        "id": {type: String, lowercase: true, trim: true, unique: true},
        "userId": {type: String, lowercase: true, trim: true, unique: true},
        "medicId": {type: String, lowercase: true, trim: true, unique: true},
        "coordinates": Map,
    }
);

mongoose.model('alerts', alertSchema);
