const express = require('express');
const passport = require('passport');
const router = express.Router();

// Google login
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google callback
router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/dashboard'); // Redirect after successful login
    }
);

// Facebook login
router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));

// Facebook callback
router.get('/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/dashboard'); // Redirect after login
    }
);

module.exports = router;
