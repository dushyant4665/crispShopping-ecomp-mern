

// const express = require('express');
// const { connectToDatabase } = require('./config/db.js');
// const bodyParser = require('body-parser');
// const Subscriber = require('./models/subscriber');
// require('dotenv').config();
// const cors = require('cors');

// // Load environment variables
// const PORT = 5000 ;
// const uri = process.env.mongo_uri; 

// uri;

// // Initialize the Express application
// const app = express();

// // Middleware 
// app.use(express.json());
// app.use(cors());
// app.use(bodyParser.json());

// connectToDatabase().then(() => {
//     app.listen(5000, () => {
//         console.log(`Server is running on port ${5000}`);
//     });
// });

// // Subscription endpoint
// app.post('/subscribe', async (req, res) => {
//     const { email } = req.body;

//     if (!email) {
//         return res.status(400).json({ message: 'Email is required' });
//     }

//     try {
//         const subscriber = new Subscriber({ email });
//         await subscriber.save();
//         res.status(200).json({ message: 'Subscription successful' });
//     } catch (error) {
//         console.error('Error subscribing:', error);
//         res.status(500).json({ message: 'An error occurred while processing your request.' });
//     }
// });


require('dotenv').config();
const express = require('express');
const { connectToDatabase } = require('./config/db');




const app = express();
const cors = require('cors');
app.use(cors()); 



app.use(express.json());

// database
connectToDatabase();
process.env.MONGODB_URI
// Define routes here
app.post('/subscribe', async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }


    try {
        // subscriber schema and model
        const subscriberSchema = new mongoose.Schema({
            email: { type: String, required: true },
        });

        const Subscriber = mongoose.model('Subscriber', subscriberSchema);

        // Save the email to the database
        const subscriber = new Subscriber({ email });
        await subscriber.save();

        res.status(200).json({ message: 'Subscribed successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT ;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});