const passport = require('passport');
const { PORT } = require('../config/server-config');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require('../models'); // Assuming you have a User model
const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} = require('../config/server-config');

// Google strategy
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: `http://localhost:${PORT}/auth/google/callback`,
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ where: { email: profile.emails[0].value } });

        if (!user) {
            // Create new user if not found
            user = await User.create({
                email: profile.emails[0].value,
                name: profile.displayName,
                google_id: profile.id, // Store Google ID
                socialLogin: true,
            });
        } else {
            // Update existing user
            user.google_id = profile.id; // Store Google ID for existing users
            await user.save();
        }

        return done(null, user);
    } catch (err) {
        return done(err);
    }
}));

// Facebook strategy
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: `http://localhost:${PORT}/auth/facebook/callback`,
    profileFields: ['id', 'emails', 'name'],
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ where: { email: profile.emails[0].value } });

        if (!user) {
            // Create new user if not found
            user = await User.create({
                email: profile.emails[0].value,
                name: profile.name.givenName + ' ' + profile.name.familyName,
                facebook_id: profile.id, // Store Facebook ID
                socialLogin: true,
            });
        } else {
            // Update existing user
            user.facebook_id = profile.id; // Store Facebook ID for existing users
            await user.save();
        }

        return done(null, user);
    } catch (err) {
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
