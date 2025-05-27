// models/Subscriber.js

const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    email: { 
        type: String, 
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    }
}, {
    timestamps: true
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

module.exports = Subscriber;
