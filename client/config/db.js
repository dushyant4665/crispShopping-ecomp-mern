// config/Db.js

const mongoose = require('mongoose');
require('dotenv').config();

// Get MongoDB URI from environment variables
const uri = process.env.MONGODB_URI;

// Log the MongoDB URI for debugging (ensure this doesn't expose sensitive information in production)
console.log('MONGODB_URI:', uri);

// Check if the URI is defined
if (!uri) {
    throw new Error('MONGODB_URI environment variable not defined');
}

// Function to connect to the MongoDB database
const connectToDatabase = async () => {
    try {
        // Connect to MongoDB using Mongoose
        const connection = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Connected to MongoDB at ${connection.connection.host}`);
    } catch (error) {
        // Log any connection errors and exit the process
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
};

// Export the connectToDatabase function
module.exports = { connectToDatabase };
