const express = require('express');
const sessionMiddleware = require('./middlewares/session-middleware');
const cors = require('cors');
const path = require('path');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const { PassportMiddleware } = require('./middlewares');
const openAi = require('./utills/common/OpenAi');

const app = express();

// Enable CORS
app.use(cors({ origin : `http://localhost:5500`, credentials : true}));

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, '../../frontend')));

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Apply the session middleware
app.use(sessionMiddleware);

// Initialize Passport for authentication
app.use(PassportMiddleware.initialize());
app.use(PassportMiddleware.session());

// Test route to check if the server is running
// app.get('/test', (req, res) => res.send('Server is running'));

// Session test route
// app.get('/check-session', (req, res) => {
//     if (!req.session.views) {
//         req.session.views = 1; // Initialize session counter
//     } else {
//         req.session.views++; // Increment session counter
//     }
//
//     res.send(`Session views: ${req.session.views}`);
// });

// API routes
app.use('/', apiRoutes);

// Start the server
app.listen(ServerConfig.PORT,  () => {
    console.log(`Server Is Running SuccessFully On PORT ${ServerConfig.PORT}`);
});
