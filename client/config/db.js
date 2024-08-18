require('dotenv').config();
const mongoose = require('mongoose');


const uri = process.env.MONGODB_URI;

console.log('MONGODB_URI:', uri);

if (!uri) {
    throw new Error('MONGODB_URI environment variable not defined');
}

const connectToDatabase = async () => {
    try {
        const connection = await mongoose.connect(uri, {
            // useNewUrlParser: true, // This is deprecated
            // useUnifiedTopology: true, // This is also deprecated
        });
        console.log(`Connected to MongoDB at ${connection.connection.host}`);
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
};

// Export the connectToDatabase function
module.exports = { connectToDatabase };
