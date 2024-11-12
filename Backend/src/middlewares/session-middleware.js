const session = require('express-session');
const { ServerConfig } = require('../config'); // Make sure ServerConfig is correctly imported

const sessionMiddleware = session({
    secret: ServerConfig.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        // secure: process.env.NODE_ENV === 'production',  // HTTPS-only in production
        maxAge: 1000 * 60 * 60 * 24,  // 1-day expiration
    },
});

module.exports = sessionMiddleware;
