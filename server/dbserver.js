
// require('dotenv').config();

// const express = require('express');
// const { connectToDatabase } = require('./config/db.js');  // Updated path
// const Subscriber = require('./models/subscriber.js');  // Updated path
// const cors = require('cors');
// const path = require('path');

// const app = express();

// // Middleware setup
// app.use(express.json());
// app.use(cors({
//     origin: '*',  // Allow all origins, or specify the domain if needed
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization']
// }));

// // Connect to the database
// connectToDatabase();

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, '../client/build')));

// // Route to handle email subscriptions
// app.post('/subscribe', async (req, res) => {
//     const { email } = req.body;

//     if (!email) {
//         return res.status(400).json({ error: 'Email is required' });
//     }

//     try {
//         const subscriber = new Subscriber({ email });
//         await subscriber.save();
//         res.status(200).json({ message: 'Subscribed successfully' });
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// // Catch-all route for client-side routing
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });




require('dotenv').config();

const express = require('express');
const { connectToDatabase } = require('./config/db');
const Subscriber = require('./models/subscriber');

const path = require('path');

const app = express();

// Middleware setup
app.use(express.json());
const cors = require('cors');
app.use(cors({
    origin:  'http://crispshoppingdushyant.vercel.app/', // Allow only the frontend URL
    methods: ['POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Connect to the database
connectToDatabase();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Route to handle email subscriptions
app.post('/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        const subscriber = new Subscriber({ email });
        await subscriber.save();
        res.status(200).json({ message: 'Subscribed successfully' });
    } catch (error) {
        console.error('Error during subscription:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Catch-all route for client-side routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

