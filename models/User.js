const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String
});

/* Create a Collection */
mongoose.model('users', userSchema);
