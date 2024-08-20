require('dotenv').config();
const mongoose = require('mongoose');


const uri = process.env.MONGODB_URI;

console.log('MONGODB_URI:', uri);

// if (!uri) {
    // throw new Error('MONGODB_URI environment variable not defined');
// }

const connectToDatabase = async () => {
    try {
        const connection = await mongoose.connect(uri, {
            useNewUrlParser: true, // This is deprecated
            useUnifiedTopology: true, // This is also deprecated
        });
        console.log(`Connected to MongoDB at ${connection.connection.host}`);
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
};

// Export the connectToDatabase function
module.exports = { connectToDatabase };


// // config/db.js
// const mongoose = require('mongoose');

// const connectToDatabase = async () => {
//     const dbURI = process.env.MONGODB_URI;

//     if (!dbURI) {
//         throw new Error('MONGODB_URI environment variable not defined');
//     }

//     try {
//         await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
//         console.log('MongoDB connected successfully');
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//         process.exit(1); // Exit the process with failure
//     }
// };

// module.exports = { connectToDatabase };
