// models/Subscriber.js

const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    email: { 
        type: String, 
        required: true, 
        trim: true 
    },
});

const subscriber = mongoose.model('subscriber', subscriberSchema);

module.exports = subscriber;
