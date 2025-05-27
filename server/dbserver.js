const express = require('express');
const { connectToDatabase } = require('./config/db.js');
const Subscriber = require('./models/subscriber.js');
const cors = require('cors');
const path = require('path');
const paymentRoutes = require('./routes/payment');

const app = express();

// CORS configuration
const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:8002',
    'https://crispshopping-mern-project-dushyant.vercel.app'
];

app.use(cors({
    origin: function(origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204
}));

// Middleware
app.use(express.json());

// Connect to database
connectToDatabase();

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

// Routes
app.use('/api', paymentRoutes); // Mount payment routes under /api

app.post('/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ 
            success: false,
            message: 'Email is required' 
        });
    }

    try {
        const subscriber = new Subscriber({ email });
        await subscriber.save();
        res.status(200).json({ 
            success: true,
            message: 'Subscribed successfully' 
        });
    } catch (error) {
        console.error('Subscription error:', error);
        if (error.code === 11000) { // Duplicate key error
            return res.status(400).json({ 
                success: false,
                message: 'This email is already subscribed' 
            });
        }
        res.status(500).json({ 
            success: false,
            message: 'Failed to subscribe. Please try again.' 
        });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// Serve React app in production
if (process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
}

// 404 handler
app.use((req, res) => {
    res.status(404).json({ 
        success: false,
        message: `Cannot ${req.method} ${req.url}` 
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        success: false,
        message: 'Internal server error' 
    });
});

// Port configuration with fallback
const findAvailablePort = async (startPort) => {
    const net = require('net');
    return new Promise((resolve, reject) => {
        const server = net.createServer();
        server.unref();
        server.on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                resolve(findAvailablePort(Number(startPort) + 1));
            } else {
                reject(err);
            }
        });
        server.listen(Number(startPort), () => {
            server.close(() => {
                resolve(Number(startPort));
            });
        });
    });
};

const startServer = async () => {
    try {
        const port = await findAvailablePort(Number(process.env.PORT) || 8000);
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
            if (process.env.NODE_ENV !== 'production') {
                console.log(`API available at http://localhost:${port}`);
            }
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();


