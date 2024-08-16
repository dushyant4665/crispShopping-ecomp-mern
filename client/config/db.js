// require('dotenv').config();

// const mongoose = require('mongoose');

// const uri = process.env.MONGO_URI;

// console.log('MONGODB_URI:', uri);

// if (!uri) {
//     throw new Error('MongoDB URI not defined in .env file');
// }

// const connectToDatabase = async () => {
//     try {
//         const connection = await mongoose.connect(uri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log(`Connected to MongoDB at ${connection.connection.host}`);
//     } catch (error) {
//         console.error('Failed to connect to MongoDB:', error);
//         process.exit(1);
//     }
// };
// module.exports = { connectToDatabase };




require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;

const cors = require('cors');
app.use(cors());  // This should already be in your dbserver.js

console.log('MONGODB_URI:', uri);

if (!uri) {
    throw new Error('MONGODB_URI environment variable not defined');
}

const connectToDatabase = async () => {
    try {
        const connection = await mongoose.connect(uri);
        console.log(`Connected to MongoDB at ${connection.connection.host}`);
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
};

// Export the connectToDatabase function
module.exports = { connectToDatabase };
