const express = require('express');
const mongoose = require('mongoose');
const passportConfig = require('./services/passport');
const authRoutes = require('./routes/authRoutes')

const app = express();

/* Pass Express app to Passport routes */
authRoutes(app);

/* Connect to MongoDB Cluster */
mongoose.connect(keys.mongoURI);

/* Heroku environment variables */
const PORT = process.env.PORT || 5000;

app.listen(PORT);
