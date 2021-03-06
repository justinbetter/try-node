// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {type: String, required:true},
  email: {type: String, required:true},
  password: {type: String, required:true},
  created: {type: Date, default: Date.now }

});


mongoose.model('User', UserSchema);
