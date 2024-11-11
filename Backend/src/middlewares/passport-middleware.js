const passport = require('passport');
const express = require('express');
const { PORT } = require('../config/server-config');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require('../models'); // Assuming you have a User model
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, FACEBOOK_APP_ID, FACEBOOK_APP_SECRET } = require('../config/server-config');

// Google Strategy
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
}, async (accessToken, refreshToken, profile, done) => {
    try {
        console.log('Google profile:', profile);
        console.log('Google profile ID:', profile.id);

        let user = await User.findOne({ where: { googleId: profile.id } });

        if (!user) {
            console.log('User not found, creating new user...');
            user = await User.create({
                googleId: profile.id,
                email: profile.emails[0].value,
                name: profile.displayName,
                contactNumber: '70234561', // Placeholder or fallback value
            });
        }

        done(null, user);
    } catch (err) {
        console.error('Error during Google authentication:', err);
        done(err);
    }
}));

// Facebook Strategy
passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: `http://localhost:${PORT}/auth/facebook/callback`,
    profileFields: ['id', 'emails', 'name'],
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ where: { email: profile.emails[0].value } });

        if (!user) {
            user = await User.create({
                email: profile.emails[0].value,
                name: profile.name.givenName + ' ' + profile.name.familyName,
                facebook_id: profile.id,
                socialLogin: true,
            });
        } else {
            user.facebook_id = profile.id;
            await user.save();
        }

        return done(null, user);
    } catch (err) {
        console.error('Error in Facebook OAuth: ', err);
        return done(err);
    }
}));

// Serialize and deserialize the user
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findByPk(id);
    done(null, user);
});

// Custom Passport Middleware
const PassportMiddleware = {
    initialize: () => passport.initialize(),
    session: () => passport.session(),
    authenticate: (strategy, options) => passport.authenticate(strategy, options),
};

module.exports = PassportMiddleware;
