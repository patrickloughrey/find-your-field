const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');
const models = require('./models/User');
const passportConfig = require('./services/passport');
const authRoutes = require('./routes/authRoutes');

/* Connect to MongoDB Cluster */
mongoose.connect(keys.mongoURI);

const app = express();

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,    // Must be in milliseconds
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

/* Pass Express app to Passport routes */
authRoutes(app);

/* Heroku environment variables */
const PORT = process.env.PORT || 5000;

app.listen(PORT);
