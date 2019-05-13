const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');
const models = require('./models/User');
const passportConfig = require('./services/passport');
const authRoutes = require('./routes/authRoutes');
const users = require("./routes/api/users");

const app = express();

/* Bodyparser Middleware */
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

/* Connect to MongoDB Cluster */
mongoose.connect(keys.mongoURI);

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,    // Must be in milliseconds
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

if(process.env.NODE_ENV == 'production') {
	/* Express will handle any production requests by serving up Build files */
	app.use(express.static('client/build'));

	/* If Express does not know the route requested, it will serve up HTML and handle it from there */
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

require("./services/passport")(passport);

/* Pass Express app to Passport routes */
authRoutes(app);

app.use("/api/users", users);


/* Heroku environment variables */
const PORT = process.env.PORT || 5000;

app.listen(PORT);
