const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleID: profile.id}).then(existingUser => {
              if (existingUser) {
                  /* User already exists */
                  done(null, existingUser);
              } else {
                  /* Make a new record for new User */
                  new User({ googleID: profile.id }).save()
                    .then(user => done(null, user));
              }
          })
    }
  )
);
