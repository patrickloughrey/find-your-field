const mongoose = require('mongoose');
const { Schema } = mongoose;

const googleUserSchema = new Schema({
	googleID: String
});

const userSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String, 
		required: true
	},
	team: {
		type: String,
		required: false
	}
});

/* Create a Collection */
mongoose.model('googleUsers', googleUserSchema);

module.exports = User = mongoose.model('users', userSchema);
