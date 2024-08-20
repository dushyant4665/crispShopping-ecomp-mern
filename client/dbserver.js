

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

// require('dotenv').config({ path: './client/.env' });           // Load from client .env
// require('dotenv').config({ path: './server/.env' });   // Load from server .env

// const express = require('express');
// const { connectToDatabase } = require('./config/db.js');
// const Subscriber = require('./models/subscriber.js');
// const cors = require('cors');
// const path = require('path');

// const app = express();

// app.use(express.json());
// // app.use(cors());
// // app.use(cors({
//     // origin: '*',  // Allow all origins, or specify the domain if needed
//     // methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     // allowedHeaders: ['Content-Type', 'Authorization']
// // }));
// app.use(cors({ origin: 'https://crisp-shopping-ecom-mern-6lo5qa2v4-dushyant4665s-projects.vercel.app/' }));

// // Connect to the database
// connectToDatabase();

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, './build')));

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

// // The "catchall" handler: for any request that doesn't
// // match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, './build/index.html'));
// });

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


//     try {
//         const subscriber = new Subscriber({ email });
//         await subscriber.save();
//         res.status(200).json({ message: 'Subscribed successfully' });
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// // The "catchall" handler: for any request that doesn't
// // match one above, send back React's index.html file.
// app.get('https://crisp-shopping-ecom-mern-6lo5qa2v4-dushyant4665s-projects.vercel.app/', (req, res) => {
//     res.sendFile(path.join(__dirname, './build/index.html'));
// });

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });




require('dotenv').config({ path: './.env' });           // Load from client .env
require('dotenv').config({ path: '../server/.env' });   // Load from server .env

const express = require('express');
const { connectToDatabase } = require('./config/db.js');  
const Subscriber = require('./models/subscriber.js');     

const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());

// CORS Configuration
app.use(cors({
    origin: 'https://crisp-shopping-ecom-mern-9uk8vdqfo-dushyant4665s-projects.vercel.app/', // Update this to match your Vercel URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Connect to the database
connectToDatabase();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, './build')));

// Subscription endpoint
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
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Catchall handler: Send back React's index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'));
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
