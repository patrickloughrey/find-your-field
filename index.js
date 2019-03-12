const express = require('express');
const passportConfig = require('./services/passport');
const authRoutes = require('./routes/authRoutes')

const app = express();

authRoutes(app);

/* Heroku environment variables */
const PORT = process.env.PORT || 5000;

app.listen(PORT);
