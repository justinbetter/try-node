// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: {type: String, required:true},
  content: {type: String, required:true},
  slug: {type: String, required:true},
  category: {type: Schema.Types.ObjectId, required:true,ref:'Category'},
  author: {type: Schema.Types.ObjectId, required:true,ref:'User'},
  published: {type: Boolean, default:true},
  meta: {type: Schema.Types.Mixed},
  comment: {type: Schema.Types.Mixed},
  created: {type: Date, default: Date.now }

});


mongoose.model('Post', PostSchema);

